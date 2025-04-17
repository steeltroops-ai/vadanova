# PowerShell script to start the frontend

Write-Host "Starting VEDANOVA frontend..." -ForegroundColor Green
Write-Host "Navigate to http://localhost:3000 to view the application" -ForegroundColor Cyan

# Change to the frontend directory
Set-Location -Path frontend

# Start the Next.js development server
npm run dev
