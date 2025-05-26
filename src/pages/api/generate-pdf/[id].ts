import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import chromium from "chrome-aws-lambda";
import puppeteerCore from "puppeteer-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  const { title } = req.body;

  try {
    // Read the markdown content
    const markdownPath = path.join(
      process.cwd(),
      "public",
      "whitepapers",
      `${id}-whitepaper-excerpt.md`
    );

    if (!fs.existsSync(markdownPath)) {
      return res.status(404).json({ message: "Whitepaper not found" });
    }

    const markdownContent = fs.readFileSync(markdownPath, "utf-8");
    const htmlContent = marked(markdownContent);

    // Create styled HTML document
    const styledHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: white;
            }
            h1 {
              color: #2c3e50;
              border-bottom: 3px solid #4f46e5;
              padding-bottom: 10px;
              font-size: 2.5em;
              margin-bottom: 0.5em;
            }
            h2 {
              color: #34495e;
              font-size: 1.8em;
              margin-top: 2em;
              margin-bottom: 0.8em;
              border-left: 4px solid #4f46e5;
              padding-left: 15px;
            }
            h3 {
              color: #34495e;
              font-size: 1.4em;
              margin-top: 1.5em;
              margin-bottom: 0.6em;
            }
            p {
              margin-bottom: 1em;
              text-align: justify;
            }
            code {
              background-color: #f8f9fa;
              border: 1px solid #e9ecef;
              border-radius: 4px;
              padding: 2px 4px;
              font-family: 'Courier New', monospace;
              color: #e83e8c;
            }
            pre {
              background-color: #f8f9fa;
              border: 1px solid #e9ecef;
              border-radius: 6px;
              padding: 15px;
              overflow-x: auto;
              margin: 1em 0;
            }
            pre code {
              background: none;
              border: none;
              padding: 0;
              color: #212529;
            }
            ul, ol {
              margin: 1em 0;
              padding-left: 2em;
            }
            li {
              margin-bottom: 0.5em;
            }
            blockquote {
              border-left: 4px solid #4f46e5;
              margin: 1em 0;
              padding: 0.5em 0 0.5em 1em;
              background-color: #f8f9fa;
              font-style: italic;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 1em 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #4f46e5;
              color: white;
            }
            .header {
              text-align: center;
              margin-bottom: 2em;
              padding-bottom: 1em;
              border-bottom: 2px solid #eee;
            }
            .footer {
              text-align: center;
              margin-top: 2em;
              padding-top: 1em;
              border-top: 2px solid #eee;
              font-size: 0.9em;
              color: #666;
            }
            @media print {
              body { margin: 0; padding: 15px; }
              .header, .footer { break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI1MCIgeT0iMjUiIGZvcnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0ZjQ2ZTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lZ2FwYXllcjwvdGV4dD4KPHN2Zz4=" alt="Megapayer Logo" style="height: 40px; margin-bottom: 10px;">
            <div style="font-size: 0.9em; color: #666;">Technical Documentation</div>
          </div>
          ${htmlContent}
          <div class="footer">
            <p>© 2025 Megapayer. All rights reserved.</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `;

    // Launch browser with compatible configuration
    const options = process.env.AWS_LAMBDA_FUNCTION_VERSION
      ? {
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath,
          headless: chromium.headless,
        }
      : {
          args: [],
          executablePath:
            process.platform === "win32"
              ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
              : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        };

    const browser = await puppeteerCore.launch(options);

    const page = await browser.newPage();
    await page.setContent(styledHtml, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
      `,
    });

    await browser.close();

    // Set response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${id}-whitepaper.pdf"`
    );
    res.setHeader("Content-Length", pdf.length);

    // Send PDF
    res.status(200).send(pdf);
  } catch (error) {
    console.error("PDF generation error:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : String(error);
    res
      .status(500)
      .json({ message: "Failed to generate PDF", error: errorMessage });
  }
}
