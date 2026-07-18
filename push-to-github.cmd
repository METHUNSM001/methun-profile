@echo off
REM Replace the remote GitHub repo contents with the current portfolio.
REM Run this file from the project root: c:\Users\smmet\Downloads\methun-portfolio\methun-portfolio

git init
git remote remove origin 2>nul
git remote add origin https://github.com/METHUNSM001/methun-profile.git
git add .
git commit -m "Replace old repo contents with new React portfolio"
git branch -M main
git push -u origin main --force
pause
