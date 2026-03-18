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

MIT License

Copyright (c) 2026 Guilherme Franco Antunes Pinto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

