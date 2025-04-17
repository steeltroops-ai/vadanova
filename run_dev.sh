#!/bin/bash

# Shell script to run both frontend and backend in development mode

echo -e "\033[0;32mStarting VEDANOVA development servers...\033[0m"

# Start the frontend in a new terminal window
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/frontend && npm run dev"'
else
  # Linux
  gnome-terminal -- bash -c "cd $(pwd)/frontend && npm run dev; exec bash" || \
  xterm -e "cd $(pwd)/frontend && npm run dev" || \
  konsole --noclose -e "cd $(pwd)/frontend && npm run dev" || \
  echo "Could not open a new terminal window. Please run the frontend manually."
fi

# Start the backend in a new terminal window
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/backend && python mock_server.py"'
else
  # Linux
  gnome-terminal -- bash -c "cd $(pwd)/backend && python mock_server.py; exec bash" || \
  xterm -e "cd $(pwd)/backend && python mock_server.py" || \
  konsole --noclose -e "cd $(pwd)/backend && python mock_server.py" || \
  echo "Could not open a new terminal window. Please run the backend manually."
fi

echo -e "\033[0;32mDevelopment servers started!\033[0m"
echo -e "\033[0;36mFrontend: http://localhost:3000\033[0m"
echo -e "\033[0;36mBackend: http://localhost:8000\033[0m"
echo -e "\033[0;33mPress Ctrl+C to stop the servers\033[0m"
