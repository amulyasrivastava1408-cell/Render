@echo off
set "PATH=%PATH%;C:\Windows\System32;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Program Files\nodejs;C:\Users\ASUS\AppData\Roaming\npm;C:\Users\ASUS\AppData\Local\pnpm;C:\Program Files\Git\cmd"
if exist "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" (
    "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -ExecutionPolicy Bypass %*
) else (
    echo PowerShell not found in default location 1>&2
    exit /b 1
)
