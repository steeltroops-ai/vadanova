# PowerShell script to run both frontend and backend in development mode

Write-Host "Starting VEDANOVA development servers..." -ForegroundColor Green

# Start the frontend in a new PowerShell window
Start-Process powershell -ArgumentList "-Command", "cd frontend; npm run dev"

# Start the backend in a new PowerShell window
Start-Process powershell -ArgumentList "-Command", "cd backend; python run.py"

Write-Host "Development servers started!" -ForegroundColor Green
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the servers" -ForegroundColor Yellow
