@echo off
REM Force-replace the GitHub repository contents with the current React portfolio.
REM Run this file from the project root: c:\Users\smmet\Downloads\methun-portfolio\methun-portfolio

where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Git is not installed or not in PATH.
  echo Install Git from https://git-scm.com/download/win and reopen PowerShell.
  pause
  exit /b 1
)

set REPO=https://github.com/METHUNSM001/methun-profile.git

git init
git config user.name "Methun SM"
git config user.email "smmethun2006@gmail.com"
git add .
git commit -m "Replace old repo contents with new React portfolio" --allow-empty
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO%
git push -u origin main --force

if %ERRORLEVEL% EQU 0 (
  echo.
  echo SUCCESS: Your React portfolio is now pushed to %REPO%.
) else (
  echo.
  echo ERROR: The push failed. Check the above output.
)
pause
