#!/bin/bash

echo "[INFO] Removing DevOps MOTD Banner..."

sudo rm -f /etc/update-motd.d/99-devops-banner

echo "[INFO] Removed successfully!"
