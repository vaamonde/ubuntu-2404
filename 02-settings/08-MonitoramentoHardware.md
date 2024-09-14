#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 13/09/2024<br>
#Data de atualização: 14/09/2024<br>
#Versão: 0.02<br>
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
#Entendendo os valores de métricas do comando top
#
#analisando as tarefas do servidor na opção: 168 total: O número total de processos no sistema
#1 running: Número de processos que estão atualmente em execução (rodando), 167 sleeping: Número
#de processos que estão no estado de espera ("dormindo"), 0 stopped: Número de processos que 
#foram interrompidos (suspensos), 0 zombie: Número de processos zumbis.
#Tasks: 168 total,   1 running, 167 sleeping,   0 stopped,   0 zombie
#
#analisando a porcentagem carga da CPU: 8,9 us (user space): Percentual de tempo que a CPU está
#gastando executando processos de usuários, 4,3 sy (system): Percentual de tempo gasto com 
#processos do sistema, 1,2 ni (nice): Percentual de tempo gasto em processos de usuários que 
#foram "reniceados", 74,7 id (idle): Percentual de tempo que a CPU está ociosa, 0,3 wa (iowait): 
#Percentual de tempo que a CPU está aguardando por operações de entrada/saída (I/O), 0,0 hi 
#(hardware interrupts): Percentual de tempo gasto com interrupções de hardware, 0,5 si (software 
#interrupts): Percentual de tempo gasto com interrupções de software, 0,0 st (steal): Percentual 
#de tempo que a CPU virtual (em ambientes virtualizados) estava aguardando porque a CPU física 
#estava sendo usada por outra máquina virtual
#%Cpu(s): 18,9 us,  4,3 sy,  1,2 ni, 74,7 id,  0,3 wa,  0,0 hi,  0,5 si,  0,0 st
sudo top

#analisando o desempenho do processador com o comando htop
#Entendendo os valores de métricas do comando htop
#
#analisando as tarefas do servidor: Tasks: 72: O número de processos ativos no sistema, 500 thr: 
#O número total de threads que estão em execução, 1 running: O número de processos ou threads que 
#estão atualmente sendo executados pela CPU
#Tasks: 72, 500 thr; 1 running
#
#analisando a média de carga da CPU: 0.22: A carga média nos últimos 1 minuto, 0.41: A carga média 
#nos últimos 5 minutos, 0.65: A carga média nos últimos 15 minutos.
#Load average: 0.22 0.41 0.65
#
#analisando a entrada e saída de disco: Disk IO: 5.2%: A porcentagem de utilização do disco no momento, 
#indicando quanta capacidade de leitura/gravação o disco está utilizando em relação ao seu potencial 
#máximo, read: OK: Indica que a leitura do disco está funcionando dentro de parâmetros normais, write: 
#140K: A quantidade de dados sendo gravados no disco por segundo.
#Disk IO: 5.2% read: OK write: 140K
#
#analisando o consumo de banda da rede: rx: 1KiB/s: A taxa de recebimento de dados pela interface de rede, 
#no caso 1 kilobyte por segundo, tx: 4KiB/s: A taxa de envio de dados pela interface de rede, no caso 4 
#kilobytes por segundo, (41/40 packets): O número de pacotes recebidos/enviados pela rede. Aqui você recebeu
#41 pacotes e enviou 40 pacotes.
#Network rx: 1KiB/s tx: 4KiB/s (41/40 packets)
#
#analisando as métricas PSI (Pressure Stall Information) de CPU: Os valores 10.6%, 9.29%, 9.25% indicam a 
#pressão sobre a CPU nos últimos 1, 5, e 15 minutos
#PSI some CPU: 10.6% 9.29% 9.25%
#
#analisando as métricas PSI (Pressure Stall Information) de bloqueio de I/O: Os valores 1.25%, 1.24%, 1.32%
#representam a pressão sobre o sistema de I/O nos últimos 1, 5, e 15 minutos
#PSI full IO: 1.25% 1.24% 1.32%
#
#analisando as métricas PSI (Pressure Stall Information) de memória: Os valores 0.00% indicam que não houve
#pressão de memória nos últimos 1, 5, e 15 minutos
#PSI full memory 0.00% 0.00% 0.00%

#personalizando o comando htop: F2 (Setup)
sudo htop
  F2 (Setup)
    Available meters
      Date and Time <Enter>
      Disk IO <Enter>
      Network IO <Enter>
      PSI some CPU <Enter>
      PSI full IO <Enter>
      PSI full memory <Enter>

#analisando o desempenho do processador com o comando vmstat
#Entendendo os valores de métricas do comando vmstat
#
#r (run queue): Número de processos prontos para execução, b (blocked processes): Número de 
#processos bloqueados, ou seja, aguardando a finalização de operações de I/O, swpd (swap used): 
#Quantidade de memória swap utilizada, free (free memory): Quantidade de memória RAM livre, 
#inact (inactive memory): Quantidade de memória classificada como inativa, active (active memory): 
#Quantidade de memória ativa em uso, si (swap in): Quantidade de dados (em KB) que estão sendo 
#movidos da área de swap para a memória RAM por segundo, so (swap out): Quantidade de dados (em KB) 
#que estão sendo movidos da memória RAM para a área de swap por segundo, bi (blocks in): Quantidade 
#de dados (em blocos) lidos do disco (ou dispositivos de I/O) por segundo, bo (blocks out): 
#Quantidade de dados (em blocos) gravados no disco (ou dispositivos de I/O) por segundo, in (interrupts): 
#Número de interrupções por segundo que o sistema está lidando, cs (context switches): Número de trocas
#de contexto por segundo, us (user): Percentual de tempo gasto pela CPU executando processos em modo 
#usuário , sy (system): Percentual de tempo gasto pela CPU em modo kernel, id (idle): Percentual de 
#tempo em que a CPU está ociosa, wa (wait): Percentual de tempo que a CPU está ociosa, mas aguardando 
#a finalização de operações de I/O (input/output), st (steal time): Percentual de tempo "roubado" pela 
#CPU em um ambiente virtualizado
#r   b   swpd   free   inact   active   si   so   bi   bo   in   cs   us   sy   id   wa   st
#
#opções do comando vmstat: -a (active), -t (timestamp), -w (wide)
sudo vmstat -a -t -w

#analisando o desempenho do processador com o comando mpstat
#Entendendo os valores de métricas do comando mpstat
#
#%usr: Percentual de tempo gasto pela CPU em modo usuário, %nice: Percentual de tempo que a CPU 
#passa executando processos que foram "envelhecidos" ou "reniceados" com uma prioridade mais baixa
#%sys: Percentual de tempo que a CPU gasta executando tarefas no modo kernel, %iowait: Percentual
#de tempo que a CPU passa ociosa esperando operações de I/O, %irq: Percentual de tempo que a CPU 
#gasta lidando com interrupções de hardware, %soft: Percentual de tempo que a CPU passa lidando 
#com interrupções de software, %steal: Percentual de tempo que a CPU foi "roubada" para executar 
#outras tarefas em um ambiente virtualizado, %guest: Percentual de tempo que a CPU passa rodando 
#uma máquina virtual, %gnice: Percentual de tempo gasto em processos de máquina virtual com 
#prioridade ajustada, %idle: Percentual de tempo que a CPU passa ociosa, sem executar nenhum processo 
#ou esperando por operações de I/O.
#11:23:50     CPU   %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
#
#opção do comando mpstat: -P (cpu list), ALL (all information CPU list)
sudo mpstat -P ALL

#analisando o desempenho do processador com o comando iostat
#Entendendo os valores de métricas do comando iostat
#
#%user: Percentual de tempo que a CPU passou executando processos de usuários, %nice: Percentual
#de tempo que a CPU passou executando processos de usuários que foram atribuídos a uma prioridade 
#mais baixa , %system: Percentual de tempo que a CPU passou executando processos do sistema ou do 
#kernel , %iowait: Percentual de tempo que a CPU passou ociosa, mas aguardando a conclusão de 
#operações de I/O, %steal: Percentual de tempo que foi "roubado" da CPU por outras máquinas virtuais 
#em um ambiente virtualizado, %idle: Percentual de tempo que a CPU passou completamente ociosa
#avg-cpu:   %user   %nice %system   %iowait   %steal   %idle
#
#tps (transactions per second): Número de operações de I/O por segundo para o dispositivo, kB_read/s: 
#Taxa de leitura em KB por segundo, kB_wrtn/s: Taxa de gravação em KB por segundo, kB_dscd/s: Taxa de
#descarte de dados em KB por segundo, kB_read: Quantidade total de dados lidos do dispositivo de 
#armazenamento desde o início da medição, kB_wrtn: Quantidade total de dados gravados no dispositivo 
#de armazenamento desde o início da medição, kB_dscd: Quantidade total de dados descartados desde o 
#início da medição, Device: Nome do dispositivo de armazenamento.
#tps   kB_read/s   kB_wrtn/s   kB_dscd/s   kB_read   kB_wrtn   kB_dscd   Device
#
#opção do comando iostat: -h (human)
sudo iostat -h

#analisando o desempenho do processador com o comando nmon
#personalizando o comando nmon:
sudo nmon
   Tecla: c (CPU) utilização da CPU em 
   Tecla: C (CPU) utilização da CPU em visão ampla
   Tecla: M (Memory) utilização da Memória RAM e SWAP
   Tecla: d (Disk) utilização do Hard Disk
   Tecla: n (Network) utilização da Rede
   Tecla: t (TOP) Processos que estão TOP

#analisando o desempenho do processador com o comando btop
#personalizando o comando btop:
sudo btop
   Tecla: n (network) mudança de Placa de Rede
   Tecla: - (menos) diminuir o tempo de atualização em ms
```

#05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) Ubuntu Server<br>
```bash
#verificando as informações de memória do arquivo meminfo
sudo cat /proc/meminfo

#analisando o desempenho da memória com o comando free
#Entendendo os valores de métricas do comando free
#
#total: Esta coluna mostra a quantidade total de memória disponível no sistema, used: Exibe a 
#quantidade de memória que está sendo efetivamente usada no momento, free: Mostra a quantidade 
#de memória que está completamente livre, shared: Quantidade de memória que está sendo compartilhada 
#entre vários processos, buff/cache: Exibe a quantidade de memória que está sendo usada pelo sistema 
#para buffers e cache, available: Quantidade de memória que está disponível para ser usada por novos 
#processos, levando em consideração a memória que pode ser liberada de buffers e cache.
#total   used   free   shared   buff/cache   available
#
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
#Entendendo os valores de métricas do arquivo diskstats
#
#8: (major number) Número major que identifica o driver do dispositivo de bloco, 0: (minor number)
#Número minor que identifica o dispositivo específico, sda: (device name) Nome do dispositivo, 
#366584: (reads completed) Número total de operações de leitura completadas com sucesso, 41475: 
#(reads merged) Número de operações de leitura que foram mescladas em uma única operação, 22505582: 
#(sectors read) Número total de setores lidos. Um setor geralmente tem 512 bytes, mas isso pode variar
#693820: (time reading) Tempo total (em milissegundos) que o disco gastou lendo dados, 1594861: 
#(writes completed) Número total de operações de escrita completadas com sucesso, 1615195: (writes 
#merged) Número de operações de escrita que foram mescladas, 35142920: (sectors written) Número total 
#de setores escritos no disco, 3921960: (time writing) Tempo total (em milissegundos) que o disco gastou
#escrevendo dados, 0: (in flight) Número de operações de I/O em andamento no momento, 4599484: (time 
#spent doing I/Os) Tempo total (em milissegundos) que o sistema passou realizando operações de I/O,
#7453602: (weighted time spent doing I/Os) Tempo ponderado (em milissegundos) que as operações de I/O 
#levaram para serem processadas, 0: (discards completed) Número total de operações de descarte de blocos 
#0: (discards merged) Número de operações de descarte mescladas, 0: (sectors discarded) Número total de 
#setores descartados, 0: (time discarding) Tempo total (em milissegundos) gasto em operações de descarte 
#de blocos, 519283: (flush requests) Número total de solicitações de flush, 2837821: (flush time) Tempo 
#total (em milissegundos) gasto com solicitações de flush.
#
#major minor device_name reads_completed reads_merged sectors_read time_reading writes_completed
#writes_merged sectors_written time_writing in_flight time_io time_weighted_io discards_completed
#discards_merged sectors_discarded time_discarding flush_requests flush_time
#
#8 0 sda 366584 41475 22505582 693820 1594861 1615195 35142920 3921960 0 4599484 7453602 0 0 0 0 
#519283 2837821
#
#opção do comando grep: -i (ignore case sensitive)
sudo cat /proc/diskstats | grep -i sda

#verificando as informações de ponto de montagem do arquivo mounts
#Entendendo os valores de métricas do arquivo mounts
#
#/dev/mapper/ubuntu--vg-ubuntu--lv: Este é o dispositivo de bloco onde o sistema de arquivos está 
#armazenado, /: Este campo indica o ponto de montagem do volume lógico, que, no caso, é a raiz (/) 
#do sistema de arquivos, ext4: Este é o tipo de sistema de arquivos utilizado no volume lógico, rw:
#Esta opção indica que o sistema de arquivos está montado como read-write, relatime: Relatime (Relative 
#Access Time) é uma opção de montagem que otimiza a atualização do tempo de acesso aos arquivos, 0: 
#O primeiro 0 refere-se ao campo de dump. Um valor de 0 significa que o comando dump (utilizado para 
#fazer backups) não vai considerar esse sistema de arquivos para backup, 0: O segundo 0 refere-se ao 
#campo de fsck order. Um valor de 0 indica que o utilitário fsck (que verifica e repara sistemas de 
#arquivos) não será executado automaticamente durante a inicialização para este sistema de arquivos.
#/dev/mapper/ubuntu--vg-ubuntu--lv   /   ext4   rw,relatime   0   0
#
#opção do comando grep: -i (ignore case sensitive)
sudo cat /proc/mounts | grep -i /dev/mapper/

#verificando as informações do disco SDA (Serial-ATA-Disk-A) com o comando fdisk
#Entendendo os valores de métricas do comando fdisk
#
#Device: Este campo mostra o nome do dispositivo de bloco ou partição, Start: Indica o setor 
#de início da partição. No disco, o armazenamento é dividido em setores, End: Indica o setor 
#final da partição, ou seja, o número do último setor em que a partição termina, Sectors: 
#Indica a quantidade total de setores que a partição ocupa. Esse valor é obtido subtraindo o 
#setor de início (Start) do setor de fim (End), Size: Este campo exibe o tamanho total da 
#partição em uma unidade de medida legível, Type: Este campo indica o tipo de partição ou o 
#sistema de arquivos associado à partição. 
#Device   Start   End   Sectors   Size   Type
#
#opção do comando fdisk: -l (list), /dev/sda (hard disk SATA)
sudo fdisk -l /dev/sda

#verificando o uso do disco com o comando df
#Entendendo os valores de métricas do comando df
#
#Filesystem: Esta coluna mostra o nome do sistema de arquivos ou a partição, Size: Mostra o 
#tamanho total da partição ou do sistema de arquivos, Used: Quantidade de espaço que já está 
#em uso no sistema de arquivos, Avail: Quantidade de espaço disponível para ser usada, Use%:
#Percentual de uso do sistema de arquivos, Mounted on: Indica o ponto de montagem onde o 
#sistema de arquivos está acessível no sistema.
#Filesystem    Size   Used   Avail   Use%   Mounted on
#
#opção do comando df: -h (human)
sudo df -h

#analisando o desempenho do disco com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h

#analisando o desempenho do disco com o comando iotop
#opção do comando iotop: -o (only)
sudo iotop -o
   a: (accumulate) totalizar por processo

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
#personalizando o comando nload:
sudo nload
   F2
     Show multiple devices: [X] (Utilizar o TAB para marcar)

#analisando o desempenho de rede com o comando iftop
#personalizando o comando iftop:
sudo iftop
   n: desabilitar a resolução de nomes
   N: desabilitar a resolução de portas
   S: habilitar a porta de origem
   D: habilitar a porta de destino
   T: habilitar o totalizador

#analisando o desempenho de rede com o comando bmon
#personalizando o comando bmon
sudo bmon
   d: habilitar detalhes de estáticas da placa de rede
   i: habilitar informações adicionais da placa de rede
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

#fazendo uma busca no disk utilizando o comando find
#opção do comando find: / (root device), -name (Base of file name), * (Qualquer coisa)
sudo find / -name vaamonde*
```