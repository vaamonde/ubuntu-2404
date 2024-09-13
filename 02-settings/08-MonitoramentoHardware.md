#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 13/09/2024<br>
#Data de atualização: 13/09/2024<br>
#Versão: 0.01<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa configuração:<br>
#01_ Instalando os aplicativos de monitoramento no Ubuntu Server<br>
#02_ Verificando a versão do Ubuntu Server<br>
#03_ Verificando a versão do Kernel e Uptime no Ubuntu Server<br>
#04_ Verificando o Desempenho do Processador CPU (Central Processing Unit) Ubuntu Server<br>
#05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) Ubuntu Server<br>
#06_ Verificando o Desempenho Disco HD (Hard-Disk) Ubuntu Server<br>
#07_ Verificando o Desempenho Rede (Network) Ubuntu Server<br>
#08_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico<br>

O Ubuntu Server é uma versão do sistema operacional Ubuntu, especificamente desenvolvida para servidores. Enquanto o Ubuntu Desktop é voltado para usuários finais com uma interface gráfica amigável, o Ubuntu Server é otimizado para desempenho e eficiência em ambientes de servidores, geralmente sem uma interface gráfica (GUI) por padrão. Isso permite que ele seja mais leve e utilize menos recursos, o que é ideal para servidores que precisam ser rápidos, estáveis e capazes de gerenciar grandes volumes de trabalho.

O Kernel é o núcleo central de um sistema operacional. Ele atua como uma ponte entre o hardware do computador e o software, gerenciando os recursos do sistema e permitindo que os programas de software interajam com o hardware de forma eficiente e segura.

A CPU (Central Processing Unit), também conhecida como processador, é o componente principal de um computador responsável por executar instruções e processar dados. É frequentemente descrita como o "cérebro" do computador, pois é onde a maioria das operações de cálculo e lógica são realizadas.

A RAM (Random Access Memory), ou Memória de Acesso Aleatório, é um tipo de memória volátil usada em computadores e outros dispositivos eletrônicos para armazenar dados temporariamente enquanto estão sendo processados. Diferente do armazenamento permanente, como discos rígidos ou SSDs, a RAM é muito mais rápida, mas só mantém os dados enquanto o dispositivo está ligado.

HD, sigla para "Hard Disk" ou "Hard Disk Drive" (Disco Rígido em português), é um dispositivo de armazenamento de dados usado em computadores e outros dispositivos eletrônicos. Ele armazena permanentemente os dados, mesmo quando o computador está desligado. O HD é um dos métodos mais tradicionais de armazenamento, sendo usado para guardar sistemas operacionais, aplicativos, documentos, fotos, vídeos, e qualquer outro tipo de dado digital.

Uma Interface de Rede é um componente de hardware ou software que conecta um dispositivo, como um computador, servidor, ou roteador, a uma rede, permitindo que ele se comunique e troque dados com outros dispositivos na mesma rede ou em redes externas. A interface de rede é essencial para o funcionamento de redes de computadores, permitindo a transferência de dados entre dispositivos conectados.

[![Monitoramento](http://img.youtube.com/vi//0.jpg)]( "Monitoramento")

Link da vídeo aula: 

#01_ Instalando os aplicativos de monitoramento no Ubuntu Server<br>
```bash
#instalação dos aplicativos básicos de monitoramento de hardware
sudo apt install sysstat nmon btop iotop dstat atop nload iftop bmon stress-ng s-tui
```

#02_ Verificando a versão do Ubuntu Server<br>
```bash
#verificando a versão do Ubuntu Server 
sudo cat /etc/os-release

#verificando a versão do LSB (Linux Standard Base)
sudo cat /etc/lsb-release
```

#03_ Verificando a versão do Kernel e Uptime no Ubuntu Server<br>
```bash
#verificando a versão do Kernel com o comando uname
#opção do comando uname: -a (all)
sudo uname -a

#verificando a versão do Kernel com o comando hostnamectl
sudo hostnamectl

#verificando a versão do Kernel do arquivo version
sudo cat /proc/version

#verificando o tempo de atividade do servidor com o comando uptime
#opção do coma ndo uptime: -s (system up since)
sudo uptime -s
```

#04_ Verificando o Desempenho do Processador CPU (Central Processing Unit) Ubuntu Server<br>
```bash
#verificando as informações do processador do arquivo cpuinfo
sudo cat /proc/cpuinfo

#analisando o desempenho do processador com o comando top
sudo top

#analisando o desempenho do processador com o comando htop
sudo htop

#analisando o desempenho do processador com o comando vmstat
sudo vmstat

#analisando o desempenho do processador com o comando mpstat
sudo mpstat

#analisando o desempenho do processador com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h

#analisando o desempenho do processador com o comando nmon
sudo nmon

#analisando o desempenho do processador com o comando btop
sudo btop
```

#05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) Ubuntu Server<br>
```bash
#verificando as informações de memória do arquivo meminfo
sudo cat /proc/meminfo

#analisando o desempenho da memória com o comando free
#opções do comando free: -h (human), -m (megabyte), -t (total)
sudo free -h -m -t

#analisando o desempenho da memória com o comando vmstat
sudo vmstat 

#analisando o desempenho da memória com o comando top
sudo top

#analisando o desempenho da memória com o comando htop
sudo htop

#analisando o desempenho da memória com o comando sar
#opções do comando sar: -h (human), -r (Report memory utilization statistics), 1 (one second), 5 (five lines)
sudo sar -h -r 1 5

#analisando o desempenho da memória com o comando btop
sudo btop
```

#06_ Verificando o Desempenho Disco HD (Hard-Disk) Ubuntu Server<br>
```bash
#verificando as informações de estáticas de disco do arquivo diskstats
sudo cat /proc/diskstats

#verificando as informações de ponto de montagem dos disco do arquivo mounts
sudo cat /proc/mounts

#verificando as informações do disco SDA (Serial-ATA-Disk-A) com o comando fdisk
#opção do comando fdisk: -l (list)
sudo fdisk -l /dev/sda

#verificando o uso do disco com o comando df
#opção do comando df: -h (human)
sudo df -h

#analisando o desempenho do disco com o comando iostat
sudo iostat 

#analisando o desempenho do disco com o comando iotop
#opção do comando iotop: -o (only)
sudo iotop -o

#analisando o desempenho do disco com o comando dstat
#opções do comando dstat: -d (disk), --disk-util (percentage of CPU time during which I/O 
#requests were issued to the device), --disk-tps (number of transfers per second that were
#issued to the device)
sudo dstat -d --disk-util --disk-tps
```

#07_ Verificando o Desempenho Rede (Network) Ubuntu Server<br>
```bash
#verificando as informações de estáticas de rede do arquivo net/dev
sudo cat /proc/net/dev

#analisando o desempenho de rede com o comando mii-tool
sudo mii-tool enp0s3

#analisando o desempenho de rede com o comando ethtool
sudo ethtool enp0s3

#analisando o desempenho de rede com o comando nload
sudo nload

#analisando o desempenho de rede com o comando iftop
sudo iftop

#analisando o desempenho de rede com o comando bmon
sudo bmon
```

#08_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico<br>
```bash
#utilizando o software btop para o monitoramento
sudo btop

#estressando a CPU, RAM e DISK utilizando o stress-ng (pressione Ctrl+C para abortar)
#opção do comando stress-ng: --hdd (start N workers continually writing, reading and 
#removing temporary files.), --io (start N workers continuously calling sync(2) to 
#commit buffer cache to disk.), --vm (start N workers continuously calling mmap(2)/
#munmap(2) and writing  to  the  allocated  memory.), --timeout (run each stress test 
#for at least T seconds)
sudo stress-ng --hdd 8 --io 8 --vm 18 --cpu 8 --timeout 900s

#fazendo uma busca no disk utilizando o comando find (NÃO COMENTADO NO VÍDEO)
#opção do comando find: -name (Base of file name), * (Qualquer coisa)
sudo find / -name vaamonde*
```