@echo off
setlocal
REM Build the Polish-localized XOD IDE from source on Windows.
REM Requires the legacy toolchain documented in POLISH_LOCALIZATION.md.
cd /d "%~dp0"
echo [1/3] Installing workspace dependencies...
call yarn install
if errorlevel 1 goto :error
echo [2/3] Bootstrapping workspace packages...
call yarn bootstrap
if errorlevel 1 goto :error
echo [3/3] Building the Electron application...
call yarn build:electron
if errorlevel 1 goto :error
echo.
echo Build command completed. Package the Windows installer using the
echo electron-builder configuration in packages\xod-client-electron\package.json.
exit /b 0
:error
echo.
echo Build failed. Check the error above and verify Node/Yarn versions.
exit /b 1
