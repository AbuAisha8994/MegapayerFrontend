@echo off
echo Starting Megapayer website development server...
echo.

REM Fix npm vulnerabilities first
call npm audit fix

REM Try to install missing SWC package
call npm install @next/swc-win32-x64-msvc --no-save --ignore-scripts

REM Start the development server
call npm run dev

pause
