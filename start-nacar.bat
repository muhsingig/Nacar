@echo off
title Nacar local server
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
