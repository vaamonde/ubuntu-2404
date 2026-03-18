# 🚀 DevOps MOTD Banner (Ubuntu)

Dynamic login banner for Linux servers with real-time system insights.

## 📌 Features

* CPU usage
* Memory usage
* Disk usage (SSD)
* Docker containers count
* Hostname, IP and uptime

## 🖥️ Compatibility

* Ubuntu 20.04+
* Ubuntu 22.04
* Ubuntu 24.04

## 📦 Installation

```bash
git clone https://github.com/SEU-USUARIO/devops-motd-banner.git
cd devops-motd-banner
chmod +x install.sh
./install.sh
```

## 🧪 Test

```bash
run-parts /etc/update-motd.d/
```

## ❌ Uninstall

```bash
chmod +x uninstall.sh
./uninstall.sh
```

## 📷 Preview

```
ENTERPRISE DEVOPS NODE

Hostname ..........: devops-node01
Primary IP ........: 192.168.0.10
CPU Usage .........: 3 %
Memory Usage ......: 1.2G / 8G
Disk Usage ........: 20G / 120G (18%)
Docker Containers .: 3 running
```

## 🧠 How it works

This project uses `/etc/update-motd.d/` to dynamically generate login messages on Ubuntu systems.

## 🔐 Security Notice

This system is restricted to authorized users only.

## 📄 License

MIT License
