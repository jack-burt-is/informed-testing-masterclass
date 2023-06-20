CHDIR /D %~dp0
CD assets
SET "APPDATA=%~dp0\npm"
START npm start
TIMEOUT 15
START explorer "http://localhost:3000"