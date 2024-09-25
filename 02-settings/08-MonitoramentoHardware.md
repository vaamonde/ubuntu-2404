#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 13/09/2024<br>
#Data de atualização: 25/09/2024<br>
#Versão: 0.05<br>
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
#04_ Verificando o Desempenho do Processador CPU (Central Processing Unit) no Ubuntu Server<br>
#05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) no Ubuntu Server<br>
#06_ Verificando o Desempenho do Disco HD (Hard-Disk) no Ubuntu Server<br>
#07_ Verificando o Desempenho de Rede (Network) no Ubuntu Server<br>
#08_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico<br>

O Ubuntu Server é uma versão do sistema operacional Ubuntu, especificamente desenvolvida para servidores. Enquanto o Ubuntu Desktop é voltado para usuários finais com uma interface gráfica amigável, o Ubuntu Server é otimizado para desempenho e eficiência em ambientes de servidores, geralmente sem uma interface gráfica (GUI) por padrão. Isso permite que ele seja mais leve e utilize menos recursos, o que é ideal para servidores que precisam ser rápidos, estáveis e capazes de gerenciar grandes volumes de trabalho.

O Kernel é o núcleo central de um sistema operacional. Ele atua como uma ponte entre o hardware do computador e o software, gerenciando os recursos do sistema e permitindo que os programas de software interajam com o hardware de forma eficiente e segura.

A CPU (Central Processing Unit), também conhecida como processador, é o componente principal de um computador responsável por executar instruções e processar dados. É frequentemente descrita como o "cérebro" do computador, pois é onde a maioria das operações de cálculo e lógica são realizadas.

A RAM (Random Access Memory), ou Memória de Acesso Aleatório, é um tipo de memória volátil usada em computadores e outros dispositivos eletrônicos para armazenar dados temporariamente enquanto estão sendo processados. Diferente do armazenamento permanente, como discos rígidos ou SSDs, a RAM é muito mais rápida, mas só mantém os dados enquanto o dispositivo está ligado.

HD, sigla para "Hard Disk" ou "Hard Disk Drive" (Disco Rígido em português), é um dispositivo de armazenamento de dados usado em computadores e outros dispositivos eletrônicos. Ele armazena permanentemente os dados, mesmo quando o computador está desligado. O HD é um dos métodos mais tradicionais de armazenamento, sendo usado para guardar sistemas operacionais, aplicativos, documentos, fotos, vídeos, e qualquer outro tipo de dado digital.

Uma Interface de Rede é um componente de hardware ou software que conecta um dispositivo, como um computador, servidor, ou roteador, a uma rede, permitindo que ele se comunique e troque dados com outros dispositivos na mesma rede ou em redes externas. A interface de rede é essencial para o funcionamento de redes de computadores, permitindo a transferência de dados entre dispositivos conectados.

[![Monitoramento](http://img.youtube.com/vi/fstVt6vOrYc/0.jpg)](https://www.youtube.com/watch?v=fstVt6vOrYc "Monitoramento")

Link da vídeo aula: https://www.youtube.com/watch?v=fstVt6vOrYc 

#01_ Instalando os aplicativos de monitoramento no Ubuntu Server<br>
```bash
#instalação dos aplicativos básicos de monitoramento de hardware
sudo apt install sysstat nmon btop htop iotop dstat atop nload iftop bmon ethtool stress-ng s-tui
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

#Entendendo os valores do Kernel com o comando uname
#
A) Linux: Este é o nome do sistema operacional, que é o Linux, 
B) ctnvaamonde.pti.intra: Este é o hostname da máquina, 
C) 5.15.0-119-generic Este é o número da versão do kernel Linux que está rodando no sistema 
   (5: Versão principal do kernel, 15: Versão secundária do kernel, 0: Número de patch, 119: 
   Número da build específica para essa versão do kernel, generic: Indica que este é o kernel 
   genérico do Ubuntu), 
D) 129-Ubuntu: Esse número indica o número da compilação do kernel, 
E) SMP: Isso significa Symmetric Multiprocessing, o que indica que o kernel foi compilado para 
   suportar múltiplos processadores, 
F) Fri Aug 2 19:25:20 UTC 2024: Esta é a data e hora em que o kernel foi compilado, 
G) x86_64 x86_64 x86_64: Isso representa a arquitetura da CPU e do sistema (O primeiro x86_64 
   indica a arquitetura do processador, O segundo x86_64 mostra que o sistema operacional, O 
   terceiro x86_64 também se refere à arquitetura de hardware que o kernel está usando), 
H) GNU/Linux: Indica que você está usando o sistema operacional GNU/Linux
#
#Linux ctnvaamonde.pti.intra 5.15.0-119-generic #129-Ubuntu SMP Fri Aug 2 19:25:20 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux

#verificando a versão do Kernel com o comando uname
#opção do comando uname: -a (all)
sudo uname -a

#verificando a versão do Kernel com o comando hostnamectl
sudo hostnamectl

#verificando a versão do Kernel do arquivo version
sudo cat /proc/version

#Entendendo os valores de métricas do comando uptime
#
A) 13:22:55: Hora atual do sistema,
B) up 3 days, 23:53: O sistema está em funcionamento há 3 dias e 23 horas e 53 minutos, 
   ou seja, o tempo de atividade desde o último boot,
C) 1 user: Indica que há um usuário logado no sistema no momento,
D) load average: 1,92, 2,05, 2,06: Refere-se à "carga média" do sistema nos últimos 1, 5 
   e 15 minutos, respectivamente.

#verificando o tempo de atividade do servidor com o comando uptime
#opção do coma ndo uptime: -s (system up since)
sudo uptime -s
sudo uptime
```

#04_ Verificando o Desempenho do Processador CPU (Central Processing Unit) no Ubuntu Server<br>
```bash
#verificando as informações do processador do arquivo cpuinfo
sudo cat /proc/cpuinfo

#Entendendo os valores de métricas do comando top
#
A) Tasks: 168 total: O número total de processos no sistema,
B) 1 running: Número de processos que estão atualmente em execução (rodando), 
C) 167 sleeping: Número de processos que estão no estado de espera ("dormindo"), 
D) 0 stopped: Número de processos que foram interrompidos (suspensos), 
E) 0 zombie: Número de processos zumbis.
#
#Tasks: 168 total,   1 running,   167 sleeping,   0 stopped,   0 zombie
#
A) %CPU(s): 18,9 us (user space): Percentual de tempo que a CPU está gastando executando 
    processos de usuários, 
B) 4,3 sy (system): Percentual de tempo gasto com processos do sistema, 
C) 1,2 ni (nice): Percentual de tempo gasto em processos de usuários que foram "reniceados", 
D) 74,7 id (idle): Percentual de tempo que a CPU está ociosa, 
E) 0,3 wa (iowait): Percentual de tempo que a CPU está aguardando por operações de entrada/saída (I/O), 
F) 0,0 hi (hardware interrupts): Percentual de tempo gasto com interrupções de hardware, 
G) 0,5 si (software interrupts): Percentual de tempo gasto com interrupções de software, 
H) 0,0 st (steal): Percentual de tempo que a CPU virtual (em ambientes virtualizados) estava
   aguardando porque a CPU física estava sendo usada por outra máquina virtual.
#
#%Cpu(s): 18,9 us,   4,3 sy,   1,2 ni,  74,7 id,   0,3 wa,   0,0 hi,   0,5 si,   0,0 st

A) PID: Identificador do processo (Process ID),
B: user: Nome do usuário que iniciou o processo. Indica a quem pertence o processo,
C) PR: Prioridade do processo. Processos com prioridade mais baixa (valores mais altos) são 
   executados com menor frequência em relação a processos com prioridade mais alta.
D) NI: Valor de "nice" do processo. O valor "nice" determina a prioridade de execução do processo,
E) VIRT: Memória virtual total utilizada pelo processo, incluindo toda a memória que o processo 
   pode acessar (inclui a memória que pode não estar fisicamente presente),
F) RES: Memória residente. É a quantidade de memória física (RAM) que o processo está usando no 
   momento. Esta é a parte da memória que está realmente alocada e em uso,
G) SHR: Memória compartilhada. Indica a quantidade de memória que é compartilhada entre processos.
H) S: Estado do processo. Os estados comuns incluem: R: Executando (running), S: Dormindo (sleeping)
   Z: Zumbi (zombie) e T: Parado (stopped),
I) %CPU: Porcentagem da CPU que o processo está utilizando no momento. Isso mostra quão ativo o 
    processo está em termos de uso da CPU.
J) %MEM: Porcentagem da memória física total que o processo está utilizando,
K) TIME+: Tempo total de CPU utilizado pelo processo desde que foi iniciado,
L) COMAND: Nome do comando ou do processo que está sendo executado.

#analisando o desempenho do processador com o comando top (PARA SAIR: q (quit))
sudo top

#Entendendo os valores de métricas do comando htop
#
A) 72: O número de processos ativos no sistema, 
B) 500 thr: O número total de threads que estão em execução, 
C) 1 running: O número de processos ou threads que estão atualmente sendo executados pela CPU
#
#Tasks: 72, 500 thr; 1 running
#
A) Load average: 0.22: A carga média nos últimos 1 minuto, 
B) 0.41: A carga média nos últimos 5 minutos, 
C) 0.65: A carga média nos últimos 15 minutos.
#
#Load average: 0.22 0.41 0.65
#
A) Disk IO: 5.2%: A porcentagem de utilização do disco no momento, indicando quanta capacidade
   de leitura/gravação o disco está utilizando em relação ao seu potencial máximo, 
B) read: OK: Indica que a leitura do disco está funcionando dentro de parâmetros normais, 
C) write: 140K: A quantidade de dados sendo gravados no disco por segundo.
#
#Disk IO: 5.2% read: OK write: 140K
#
A) Network rx: 1KiB/s: A taxa de recebimento de dados pela interface de rede, no caso 1 kilobyte
   por segundo, 
B) tx: 4KiB/s: A taxa de envio de dados pela interface de rede, no caso 4 kilobytes por segundo, 
C) (41/40 packets): O número de pacotes recebidos/enviados pela rede. Aqui você recebeu 41 pacotes 
   e enviou 40 pacotes.
#
#Network rx: 1KiB/s tx: 4KiB/s (41/40 packets)
#
A) PSI (Pressure Stall Information) some CPU: Os valores 10.6%, 9.29%, 9.25% indicam a pressão sobre
   a CPU nos últimos 1, 5, e 15 minutos
#
#PSI some CPU: 10.6% 9.29% 9.25%
#
A) PSI (Pressure Stall Information) full I/O: Os valores 1.25%, 1.24%, 1.32% representam a pressão 
   sobre o sistema de I/O nos últimos 1, 5, e 15 minutos
#
#PSI full IO: 1.25% 1.24% 1.32%
#
A) PSI (Pressure Stall Information) full memory: Os valores 0.00% indicam que não houve pressão de 
   memória nos últimos 1, 5, e 15 minutos
#
#PSI full memory 0.00% 0.00% 0.00%

#analisando o desempenho do processador com o comando htop
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
  F10 (Quit)

#Entendendo os valores de métricas do comando vmstat
#
A) r (run queue): Número de processos prontos para execução, 
B) b (blocked processes): Número de processos bloqueados, ou seja, aguardando a finalização
   de operações de I/O, 
C) swpd (swap used): Quantidade de memória swap utilizada, 
D) free (free memory): Quantidade de memória RAM livre,
E) inact (inactive memory): Quantidade de memória classificada como inativa, 
F) active (active memory): Quantidade de memória ativa em uso, 
G) si (swap in): Quantidade de dados (em KB) que estão sendo movidos da área de swap para a 
   memória RAM por segundo, 
H) so (swap out): Quantidade de dados (em KB) que estão sendo movidos da memória RAM para a 
   área de swap por segundo, 
I) bi (blocks in): Quantidade de dados (em blocos) lidos do disco (ou dispositivos de I/O) 
   por segundo, 
J) bo (blocks out): Quantidade de dados (em blocos) gravados no disco (ou dispositivos de I/O) 
   por segundo, 
K) in (interrupts): Número de interrupções por segundo que o sistema está lidando, 
L) cs (context switches): Número de trocas de contexto por segundo, 
M) us (user): Percentual de tempo gasto pela CPU executando processos em modo usuário , 
N) sy (system): Percentual de tempo gasto pela CPU em modo kernel, 
O) id (idle): Percentual de tempo em que a CPU está ociosa, 
P) wa (wait): Percentual de tempo que a CPU está ociosa, mas aguardando a finalização de 
   operações de I/O (input/output), 
Q) st (steal time): Percentual de tempo "roubado" pela CPU em um ambiente virtualizado
#
#r   b   swpd   free   inact   active   si   so   bi   bo   in   cs   us   sy   id   wa   st

#analisando o desempenho do processador com o comando vmstat
#opções do comando vmstat: -a (active), -t (timestamp), -w (wide)
sudo vmstat -a -t -w

#Entendendo os valores de métricas do comando mpstat
#
A) 11:23:50: Hora da análise do desempenho dos processadores,
B) CPU: Lista de todos os processadores disponíveis no servidor,
C) %usr: Percentual de tempo gasto pela CPU em modo usuário, 
D) %nice: Percentual de tempo que a CPU passa executando processos que foram "envelhecidos"
   ou "reniceados" com uma prioridade mais baixa 
E) %sys: Percentual de tempo que a CPU gasta executando tarefas no modo kernel, 
F) %iowait: Percentual de tempo que a CPU passa ociosa esperando operações de I/O, 
G) %irq: Percentual de tempo que a CPU gasta lidando com interrupções de hardware, 
H) %soft: Percentual de tempo que a CPU passa lidando com interrupções de software, 
I) %steal: Percentual de tempo que a CPU foi "roubada" para executar outras tarefas em um 
   ambiente virtualizado, 
J) %guest: Percentual de tempo que a CPU passa rodando uma máquina virtual, 
K) %gnice: Percentual de tempo gasto em processos de máquina virtual com  prioridade ajustada, 
L) %idle: Percentual de tempo que a CPU passa ociosa, sem executar nenhum processo ou esperando
   por operações de I/O.
#
#11:23:50   CPU   %usr   %nice   %sys   %iowait   %irq   %soft   %steal   %guest   %gnice   %idle

#analisando o desempenho do processador com o comando mpstat
#opção do comando mpstat: -P (cpu list), ALL (all information CPU list)
sudo mpstat -P ALL

#Entendendo os valores de métricas do comando iostat
#
A) avg-cpu: visão geral da utilização da CPU;
B) %user: Percentual de tempo que a CPU passou executando processos de usuários, 
C) %nice: Percentual de tempo que a CPU passou executando processos de usuários que foram 
   atribuídos a uma prioridade mais baixa, 
D) %system: Percentual de tempo que a CPU passou executando processos do sistema ou do kernel, 
E) %iowait: Percentual de tempo que a CPU passou ociosa, mas aguardando a conclusão de operações
   de I/O, 
F) %steal: Percentual de tempo que foi "roubado" da CPU por outras máquinas virtuais em um 
   ambiente virtualizado, 
G) %idle: Percentual de tempo que a CPU passou completamente ociosa
#
#avg-cpu:   %user   %nice %system   %iowait   %steal   %idle
#
A) tps (transactions per second): Número de operações de I/O por segundo para o dispositivo, 
B) kB_read/s: Taxa de leitura em KB por segundo, 
C) kB_wrtn/s: Taxa de gravação em KB por segundo,
D)  kB_dscd/s: Taxa de descarte de dados em KB por segundo, 
E) kB_read: Quantidade total de dados lidos do dispositivo de armazenamento desde o início
   da medição, 
F) kB_wrtn: Quantidade total de dados gravados no dispositivo de armazenamento desde o início
   da medição, 
G) kB_dscd: Quantidade total de dados descartados desde o início da medição, 
H) Device: Nome do dispositivo de armazenamento.
#
#tps   kB_read/s   kB_wrtn/s   kB_dscd/s   kB_read   kB_wrtn   kB_dscd   Device

#analisando o desempenho do processador com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h

#analisando o desempenho do processador com o comando nmon
#personalizando o comando nmon:
sudo nmon
   Tecla: c (CPU) utilização da CPU em 
   Tecla: C (CPU) utilização da CPU em visão ampla
   Tecla: m (Memory) utilização da Memória RAM 
   Tecla: v (Virtual memory) utilização da Memória SWAP
   Tecla: d (Disk) utilização do Hard Disk
   Tecla: n (Network) utilização da Rede
   Tecla: t (TOP) Processos que estão TOP
   Tecla: q (quit) Para sair do Nmon

#analisando o desempenho do processador com o comando btop
#personalizando o comando btop:
sudo btop
   Tecla: n (network) mudança de Placa de Rede
   Tecla: - (menos) diminuir o tempo de atualização em ms (100ms)
   Tecla: q (quit) para sair

#OBSERVAÇÃO IMPORTANTE NÃO FOI MOSTRADO NO VÍDEO O COMANDO: atop SEGUE AS SUAS MÉTRICAS

#Entendendo os valores de métricas do comando atop
#
A) sys 8h51m: Tempo total gasto pelo sistema em modo kernel (modo de sistema ou "system mode")
   nas últimas 8 horas e 51 minutos,
B) user 14h41m: Tempo total gasto pela CPU executando processos de modo usuário (user mode) nas 
   últimas 14 horas e 41 minutos,
C) proc 317: Número total de processos criados e ativos durante o intervalo de monitoramento,
D) trun 2: Número de processos em execução ativa (running) no momento da amostra,
E) tslpi 1089: Número de processos que estão dormindo (sleeping) de forma ininterrupta,
F) tslpu 1: Número de processos que estão dormindo de forma interrompível,
G) zombie 0: Número de processos em estado zumbi,
H) clones 917e3: Número de processos clonados (geralmente subprocessos ou threads) no sistema, 
   desde que o monitoramento foi iniciado. O valor 917e3 representa 917.000 clones.
I) exit 1: Número de processos que saíram ou terminaram durante o período de monitoramento.
#
#PRC  | sys   8h51m | user   14h41m | #proc   317 | #trun   2 | #tslpi   1089 | #tslpu   1 | #zombie   0 | clones 917e3 | #exit   1

A) PID: Identificador do processo (Process ID),
B) SYSCPU: Quantidade de tempo de CPU usada pelo processo no modo kernel (system CPU time),
C) USRCPU: Quantidade de tempo de CPU usada pelo processo no modo usuário (user CPU time),
D) VGROW: Crescimento no uso de memória virtual (virtual memory growth),
E) RGROW: Crescimento no uso de memória residente (resident memory growth),
F) RUID: ID do usuário real (Real User ID),
G) EUID: ID do usuário efetivo (Effective User ID),
H) ST: Estado do processo (State). Representa o estado atual do processo, por exemplo:
   R: Em execução (Running), S: Dormindo (Sleeping), D: Em espera ininterrupta (Waiting 
   for I/O), Z: Zumbi (Zombie) e T: Parado (Stopped),
I) EXC: Número de trocas de contexto (Context Switches),
J) THR: Número de threads que o processo possui,
K) S: Estado geral de uso da CPU do processo,
   R: Em execução (Running), S: Dormindo (Sleeping) e Outros estados indicam diferentes 
   condições do processo.
L) CPUNR: O número da CPU em que o processo está sendo executado,
M) CPU: Percentual de uso da CPU pelo processo,
N) CMD: O nome do comando ou programa associado ao processo,
O) 1/6: O índice da página exibida (como 1/6).X
#
#PID   SYSCPU   USRCPU   VGROW   RGROW   RUID   EUID   ST   EXC   THR   S   CPUNR   CPU   CMD   1/6

#analisando o desempenho do processador com o comando atop (PARA SAIR: q (quit))
sudo atop
```

#05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) no Ubuntu Server<br>
```bash
#verificando as informações de memória do arquivo meminfo
sudo cat /proc/meminfo

#Entendendo os valores de métricas do comando free
#
A) total: Esta coluna mostra a quantidade total de memória disponível no sistema, 
B) used: Exibe a quantidade de memória que está sendo efetivamente usada no momento, 
C) free: Mostra a quantidade de memória que está completamente livre, 
D) shared: Quantidade de memória que está sendo compartilhada entre vários processos, 
E) buff/cache: Exibe a quantidade de memória que está sendo usada pelo sistema para 
   buffers e cache, 
F) available: Quantidade de memória que está disponível para ser usada por novos processos, 
   levando em consideração a memória que pode ser liberada de buffers e cache.
#
#total   used   free   shared   buff/cache   available

#analisando o desempenho da memória com o comando free
#opções do comando free: -h (human), -m (megabyte), -t (total)
sudo free -h -m -t

#analisando o desempenho da memória com o comando vmstat
sudo vmstat 

#analisando o desempenho da memória com o comando top
sudo top

#analisando o desempenho da memória com o comando htop
sudo htop

#Entendendo os valores de métricas do comando sar
#
A) Linux 5.15.0-119-generic: Esta é a versão do kernel Linux que o sistema está rodando.
B) ctnvaamonde: Este é o nome do host ou o nome da máquina.
C) 25/09/2024: Data em que o comando foi executado, indicando quando as estatísticas foram coletadas.
D) x86_64: Isso indica a arquitetura da CPU, que é de 64 bits (x86_64), comum em CPUs modernas.
E) (8 CPU): Indica que o sistema tem 8 núcleos de CPU disponíveis (sejam físicos ou lógicos,
   como no caso de processadores com Hyper-Threading).
#
#Linux 5.15.0-119-generic   (ctnvaamonde)   25/09/2024   _x86_64_   (8 CPU)

#Entendendo os valores de métricas do comando sar
#
A) 09:55:21: O horário em que a amostra foi coletada.
B) kbmemfree: Quantidade de memória livre disponível (em kilobytes).
C) kbavail: Quantidade de memória disponível para novos processos, levando em consideração
   a memória usada pelo cache e buffers, que pode ser rapidamente liberada.
D) kbmemused: Quantidade de memória atualmente em uso (em kilobytes), calculada como a diferença
   entre a memória total e a memória livre.
E) %memused: Percentual da memória RAM total que está em uso.
F) kbbuffers: Quantidade de memória usada por buffers de sistema (em kilobytes), que geralmente
   é usada para armazenar dados que estão sendo transferidos entre dispositivos.
G) kbcached: Quantidade de memória usada para armazenar dados em cache (em kilobytes), que são dados
   frequentemente acessados para melhorar o desempenho.
H) kbcommit: Quantidade de memória comprometida para ser usada no futuro, incluindo a memória virtual
que pode estar alocada mas ainda não usada.
I) %commit: Percentual da memória RAM total que está comprometida para ser usada no futuro (pode 
   incluir a memória swap).
I) kbactive: Quantidade de memória ativa que está sendo usada recentemente por processos (em kilobytes).
J) kbinact: Quantidade de memória inativa que foi usada recentemente e está pronta para ser movida 
   para o swap ou liberada, se necessário (em kilobytes).
K) kbdirty: Quantidade de memória que contém dados que foram modificados mas ainda não foram gravados
   em disco (em kilobytes).
#
# 09:55:21   kbmemfree   kbavail   kbmemused   %memused   kbbuffers   kbcached   kbcommit   %commit   kbactive   kbinact   kbdirty

#analisando o desempenho da memória com o comando sar
#opções do comando sar: -h (human), -r (Report memory utilization statistics), 1 (one second), 5 (five lines)
sudo sar -h -r 1 5

#analisando o desempenho da memória com o comando btop
sudo btop
```

#06_ Verificando o Desempenho do Disco HD (Hard-Disk) no Ubuntu Server<br>
```bash
#Entendendo os valores de métricas do arquivo diskstats
#
A) 8: (major number) Número major que identifica o driver do dispositivo de bloco, 
B) 0: (minor number) Número minor que identifica o dispositivo específico, 
C) sda: (device name) Nome do dispositivo, 
D) 366584: (reads completed) Número total de operações de leitura completadas com sucesso, 
E) 41475: (reads merged) Número de operações de leitura que foram mescladas em uma única operação, 
F) 22505582: (sectors read) Número total de setores lidos. Um setor geralmente tem 512 bytes, 
   mas isso pode variar,
G) 693820: (time reading) Tempo total (em milissegundos) que o disco gastou lendo dados, 
H) 1594861: (writes completed) Número total de operações de escrita completadas com sucesso, 
I) 1615195: (writes merged) Número de operações de escrita que foram mescladas, 
J) 35142920: (sectors written) Número total de setores escritos no disco, 
K) 3921960: (time writing) Tempo total (em milissegundos) que o disco gastou escrevendo dados, 
L) 0: (in flight) Número de operações de I/O em andamento no momento, 
M) 4599484: (time spent doing I/Os) Tempo total (em milissegundos) que o sistema passou realizando
   operações de I/O,
N) 7453602: (weighted time spent doing I/Os) Tempo ponderado (em milissegundos) que as operações
   de I/O levaram para serem processadas, 
O) 0: (discards completed) Número total de operações de descarte de blocosM
P) 0: (discards merged) Número de operações de descarte mescladas, 
Q) 0: (sectors discarded) Número total de setores descartados, 
R) 0: (time discarding) Tempo total (em milissegundos) gasto em operações de descarte de blocos, 
S) 519283: (flush requests) Número total de solicitações de flush, 
T) 2837821: (flush time) Tempo total (em milissegundos) gasto com solicitações de flush.
#
#8 0 sda 366584 41475 22505582 693820 1594861 1615195 35142920 3921960 0 4599484 7453602 0 0 0 0 519283 2837821

#verificando as informações de estáticas de disco do arquivo diskstats
#opção do comando grep: -i (ignore case sensitive)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo cat /proc/diskstats | grep -i sda

#Entendendo os valores de métricas do arquivo mounts
#
A) /dev/mapper/ubuntu--vg-ubuntu--lv: Este é o dispositivo de bloco onde o sistema de arquivos
   está armazenado, 
B) /: Este campo indica o ponto de montagem do volume lógico, que, no caso, é a raiz (/) do 
   sistema de arquivos, 
C) ext4: Este é o tipo de sistema de arquivos utilizado no volume lógico, 
D) rw: Esta opção indica que o sistema de arquivos está montado como read-write, 
E) relatime: Relatime (Relative Access Time) é uma opção de montagem que otimiza a atualização
   do tempo de acesso aos arquivos, 
F) 0: O primeiro 0 refere-se ao campo de dump. Um valor de 0 significa que o comando dump 
   (utilizado para fazer backups) não vai considerar esse sistema de arquivos para backup, 
G) 0: O segundo 0 refere-se ao campo de fsck order. Um valor de 0 indica que o utilitário fsck 
   (que verifica e repara sistemas de arquivos) não será executado automaticamente durante a 
   inicialização para este sistema de arquivos.
#
#/dev/mapper/ubuntu--vg-ubuntu--lv   /   ext4   rw,relatime   0   0

#verificando as informações de ponto de montagem do arquivo mounts
#opção do comando grep: -i (ignore case sensitive)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo cat /proc/mounts | grep -i /dev/mapper/

#Entendendo os valores de métricas do comando fdisk
#
A) Device: Este campo mostra o nome do dispositivo de bloco ou partição, 
B) Start: Indica o setor de início da partição. No disco, o armazenamento é dividido em setores, 
C) End: Indica o setor final da partição, ou seja, o número do último setor em que a partição termina, 
D) Sectors: Indica a quantidade total de setores que a partição ocupa. Esse valor é obtido subtraindo
   o setor de início (Start) do setor de fim (End), 
E) Size: Este campo exibe o tamanho total da partição em uma unidade de medida legível, 
F) Type: Este campo indica o tipo de partição ou o sistema de arquivos associado à partição. 
#
#Device   Start   End   Sectors   Size   Type

#verificando as informações do disco SDA (Serial-ATA-Disk-A) com o comando fdisk
#opção do comando fdisk: -l (list), /dev/sda (hard disk SATA)
sudo fdisk -l /dev/sda

#Entendendo os valores de métricas do comando df
#
A) Filesystem: Refere-se ao nome ou caminho do sistema de arquivos ou dispositivo de armazenamento,
B) Size: Exibe o tamanho total da partição ou do sistema de arquivos, ou seja, a capacidade total 
   disponível para armazenar dados,
C) Used: Indica a quantidade de espaço em disco que já está ocupada por dados,
D) Available: Mostra o espaço livre disponível na partição ou sistema de arquivos, ou seja, quanto
   ainda pode ser utilizado para armazenar novos dados.
E) Use%: Representa a porcentagem do espaço total que está atualmente em uso. É uma boa métrica para
   verificar o quanto de um sistema de arquivos está ocupado.
F) Mounted on: Indica o ponto de montagem, ou seja, o diretório onde a partição ou o sistema de arquivos 
   está acessível no sistema. Exemplo: /, /home, /mnt.
#
#Filesystem   Size   Used   Avail   Use%   Mounted on

#verificando o uso do disco com o comando df
#opção do comando df: -h (human)
sudo df -h

#Entendendo os valores de métricas do comando iostat
#
A) tps (transactions per second): Número de operações de I/O por segundo para o dispositivo, 
B) kB_read/s: Taxa de leitura em KB por segundo, 
C) kB_wrtn/s: Taxa de gravação em KB por segundo,
D)  kB_dscd/s: Taxa de descarte de dados em KB por segundo, 
E) kB_read: Quantidade total de dados lidos do dispositivo de armazenamento desde o início
   da medição, 
F) kB_wrtn: Quantidade total de dados gravados no dispositivo de armazenamento desde o início
   da medição, 
G) kB_dscd: Quantidade total de dados descartados desde o início da medição, 
H) Device: Nome do dispositivo de armazenamento.
#
#tps   kB_read/s   kB_wrtn/s   kB_dscd/s   kB_read   kB_wrtn   kB_dscd   Device

#analisando o desempenho do disco com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h

#Entendendo os valores de métricas do comando iotop
#
A) Total DISK READ: Leitura total de disco desde que o iotop começou a ser executado.
B) Total DISK WRITE: Escrita total de disco desde que o iotop começou a ser executado.
C) Current DISK READ: Leitura de disco atual, medida no instante em que o iotop foi atualizado 
   pela última vez.
D) Current DISK WRITE: Escrita de disco atual, medida no instante em que o iotop foi atualizado
   pela última vez.
#
#Total DISK READ: 0.00 B/s | Total DISK WRITE: 0.00 B/s | Current DISK READ:  0.00 B/s | Current DISK WRITE: 0.00B/s
#
A) TID: Thread ID (ou Task ID): Identifica cada processo ou thread com um ID único,
B) PRIO: Prioridade do processo: Define a prioridade do processo em relação aos outros. 
C) USER: O nome de usuário que iniciou o processo — Mostra qual usuário (ou grupo de usuários)
   está executando o processo ou a thread,
D) DISK READ: Quantidade de leitura de disco realizada pelo processo, medida em KB/s ou MB/s,
E) DISK WRITE: Quantidade de escrita de disco realizada pelo processo, medida em KB/s ou MB/s,
F) SWAPIN: Percentual de tempo que o processo passa trocando (swap) dados entre a memória RAM
   e o espaço de swap do disco,
G) IO>: IO wait time — Percentual do tempo que o processo está gastando esperando por operações
   de entrada/saída (I/O) de disco para serem concluídas,
H) COMMAND: O nome do comando/processo que está sendo monitorado.
#
#TID   PRIO   USER   DISK READ   DISK WRITE   SWAPIN   IO>   COMMAND

#analisando o desempenho do disco com o comando iotop
#opção do comando iotop: -o (only)
sudo iotop -o
   a: (accumulate) totalizar por processo
   q: quit

#Entendendo os valores de métricas do comando dstat
#
A) -dsk/total-: Esta linha mostra as métricas de leitura e escrita de disco agregadas para
B) loop, nvme, sda, etc.: Esses são os dispositivos de disco individuais monitorados pelo 
   dstat. Dependendo do sistema, pode haver dispositivos como:
     loop: Dispositivos de loopback (normalmente usados para montar arquivos de imagem).
     nvme: Discos NVMe (de alta performance).
     sda: Um dos discos de bloco padrão (SATA ou SCSI).
C) util: Utilização de disco por dispositivo, em termos percentuais.
D) read writ: Número de transações por segundo (TPS), ou seja, o número de operações de leitura 
   (#read) e escrita (#writ) feitas no dispositivo de disco por segundo. Esse valor reflete a 
   quantidade de I/O (entrada/saída) em termos de transações de leitura e escrita, medido para 
   cada dispositivo de disco.
#
#-dsk/total- -loop-nvme-sda- -dsk/total-
#read  writ | util | #read #writ

#analisando o desempenho do disco com o comando dstat (PARA SAIR: Ctrl+C (quit))
#opções do comando dstat: -d (disk), --disk-util (percentage of CPU time during which I/O 
#requests were issued to the device), --disk-tps (number of transfers per second that were
#issued to the device)
sudo dstat -d --disk-util --disk-tps
```

#07_ Verificando o Desempenho da Rede (Network) no Ubuntu Server<br>
```bash
#Entendendo os valores de métricas do do arquivo dev
#
A) Interfaces: Interfaces e Rede Física ou lógica do servidor,
B) Receive and TransmitL Informação de Recebimento e Transmissão da dados na rede,
C) bytes: O número total de bytes recebidos pela interface.
D) packets: O número total de pacotes recebidos pela interface.
E) errs: O número de erros ocorridos ao receber pacotes,
F) drop: O número de pacotes descartados (drop) durante a recepção,
G) fifo: O número de erros FIFO (First In, First Out) ao receber pacotes, geralmente relacionados
   a congestionamento de buffer,
H) frame: O número de erros de enquadramento (frame errors), que ocorrem quando o quadro de dados
   de um pacote está corrompido,
I) compressed: O número de pacotes recebidos que estavam comprimidos,
J) multicast: O número de pacotes multicast recebidos. 
#
#Interface | bytes   packets   errs   drop   fifo   frame   compressed   multicast

#verificando as informações de estáticas de rede do arquivo net/dev
sudo cat /proc/net/dev

#analisando o desempenho de rede com o comando mii-tool
sudo mii-tool enp0s3

#analisando o desempenho de rede com o comando ethtool
sudo ethtool enp0s3

#Entendendo os valores de métricas do do arquivo nload
#
A) Incoming and Outgoing: Entrada e Saída de dados da Placa de Rede,
B) Curr (Current): A taxa de transferência atual de dados em kilobits por segundo (kbit/s)
   ou megabits por segundo (Mbit/s).
C) Avg (Average): A taxa de transferência média de dados,
D) Min (Minimum): A taxa de transferência mínima registrada desde o início do monitoramento,
E) Max (Maximum): A taxa de transferência máxima registrada desde o início do monitoramento,
F) Ttl (Total): O total de dados transferidos (enviados e recebidos) desde o monitoramento.

#analisando o desempenho de rede com o comando nload
#personalizando o comando nload:
sudo nload
  F2
     Show multiple devices: [X] (Utilizar o TAB para marcar)
  q (quit)

#analisando o desempenho de rede com o comando iftop
#personalizando o comando iftop:
sudo iftop
   n: desabilitar a resolução de nomes
   N: desabilitar a resolução de portas
   S: habilitar a porta de origem
   D: habilitar a porta de destino
   T: habilitar o totalizador
   q: sair (quit)

#analisando o desempenho de rede com o comando bmon
#personalizando o comando bmon
sudo bmon
   d: habilitar detalhes de estáticas da placa de rede
   i: habilitar informações adicionais da placa de rede
   q: sair (quit)
```

#08_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico<br>
```bash
#utilizando o software btop para o monitoramento
sudo btop

Mais informações do software stress-ng Ubuntu: https://manpages.ubuntu.com/manpages/xenial/man1/stress-ng.1.html
Mais informações do software stress-ng Debian: https://manpages.debian.org/jessie/stress-ng/stress-ng.1

#estressando a CPU, RAM e DISK utilizando o stress-ng (pressione Ctrl+C para abortar)
#opção do comando stress-ng: --hdd (start N workers continually writing, reading and 
#removing temporary files.), --io (start N workers continuously calling sync(2) to 
#commit buffer cache to disk.), --vm (start N workers continuously calling mmap(2)/
#munmap(2) and writing to the allocated memory.), --cpu (tart N processes computing 
#sqrt((double)rand())), --timeout (run each stress test for at least T seconds)
sudo stress-ng --hdd 8 --io 8 --vm 18 --cpu 8 --timeout 900s

#fazendo uma busca no disk utilizando o comando find
#opção do comando find: / (root device), -name (Base of file name), * (Qualquer coisa)
sudo find / -name vaamonde*
```