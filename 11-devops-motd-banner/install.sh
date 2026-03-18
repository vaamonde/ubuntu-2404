#!/bin/bash

echo "[INFO] Installing DevOps MOTD Banner..."

if [ ! -d "/etc/update-motd.d" ]; then
    echo "[ERROR] MOTD directory not found!"
    exit 1
fi

sudo cp scripts/99-devops-banner /etc/update-motd.d/
sudo chmod +x /etc/update-motd.d/99-devops-banner

echo "[INFO] Installation complete!"
echo "[INFO] Test with: run-parts /etc/update-motd.d/"
