@echo off
ECHO Starting Megapayer website with proper environment configuration...

REM Set environment variables to avoid SWC errors
SET NODE_OPTIONS=--no-experimental-fetch

REM Try to install the proper SWC version
call npm install --no-save @next/swc-win32-x64-msvc

REM Alternative: Use Babel instead of SWC
echo "Using Babel compiler instead of SWC for transpilation"

REM Run the development server
call npm run dev

pause
