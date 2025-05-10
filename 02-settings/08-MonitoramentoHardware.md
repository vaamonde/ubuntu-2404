#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 13/09/2024<br>
#Data de atualização: 10/05/2025<br>
#Versão: 0.10<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
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
#08_ Verificando a Temperatura do Servidor Ubuntu Server (NÃO COMENTADO O VÍDEO)<br>
#09_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico (NÃO COMENTADO NO VÍDEO)<br>

**O QUE É E PARA QUE SERVER O UBUNTU SERVER:** O Ubuntu Server é uma versão do sistema operacional Ubuntu, especificamente desenvolvida para servidores. Enquanto o Ubuntu Desktop é voltado para usuários finais com uma interface gráfica amigável, o Ubuntu Server é otimizado para desempenho e eficiência em ambientes de servidores, geralmente sem uma interface gráfica (GUI) por padrão. Isso permite que ele seja mais leve e utilize menos recursos, o que é ideal para servidores que precisam ser rápidos, estáveis e capazes de gerenciar grandes volumes de trabalho.

**O QUE É E PARA QUE SERVER O KERNEL:** O Kernel é o núcleo central de um sistema operacional. Ele atua como uma ponte entre o hardware do computador e o software, gerenciando os recursos do sistema e permitindo que os programas de software interajam com o hardware de forma eficiente e segura.

**O QUE É E PARA QUE SERVER O CPU:** A CPU (Central Processing Unit), também conhecida como processador, é o componente principal de um computador responsável por executar instruções e processar dados. É frequentemente descrita como o "cérebro" do computador, pois é onde a maioria das operações de cálculo e lógica são realizadas.

**O QUE É E PARA QUE SERVER O RAM:** A RAM (Random Access Memory), ou Memória de Acesso Aleatório, é um tipo de memória volátil usada em computadores e outros dispositivos eletrônicos para armazenar dados temporariamente enquanto estão sendo processados. Diferente do armazenamento permanente, como discos rígidos ou SSDs, a RAM é muito mais rápida, mas só mantém os dados enquanto o dispositivo está ligado.

**O QUE É E PARA QUE SERVER O HD:** HD, sigla para "Hard Disk" ou "Hard Disk Drive" (Disco Rígido em português), é um dispositivo de armazenamento de dados usado em computadores e outros dispositivos eletrônicos. Ele armazena permanentemente os dados, mesmo quando o computador está desligado. O HD é um dos métodos mais tradicionais de armazenamento, sendo usado para guardar sistemas operacionais, aplicativos, documentos, fotos, vídeos, e qualquer outro tipo de dado digital.

**O QUE É E PARA QUE SERVER O NETWORK:** Uma Interface de Rede é um componente de hardware ou software que conecta um dispositivo, como um computador, servidor, ou roteador, a uma rede, permitindo que ele se comunique e troque dados com outros dispositivos na mesma rede ou em redes externas. A interface de rede é essencial para o funcionamento de redes de computadores, permitindo a transferência de dados entre dispositivos conectados.

**O QUE É E PARA QUE SERVER O SENSOR:** Os sensores de temperatura em um servidor GNU/Linux Ubuntu Server são usados para monitorar a temperatura da CPU, GPU, discos e outros componentes críticos. Isso ajuda a evitar superaquecimento, melhorar a eficiência do resfriamento e garantir um desempenho estável.

[![Monitoramento](http://img.youtube.com/vi/fstVt6vOrYc/0.jpg)](https://www.youtube.com/watch?v=fstVt6vOrYc "Monitoramento")

Link da vídeo aula: https://www.youtube.com/watch?v=fstVt6vOrYc 

## 01_ Instalando os aplicativos de monitoramento no Ubuntu Server
```bash
#instalação dos aplicativos básicos de monitoramento de hardware
#opção da contra barra (\): criar uma quebra de linha no terminal
sudo apt install sysstat nmon btop htop iotop dstat atop nload iftop bmon ethtool stress-ng \
s-tui lm-sensors acpi i7z glances smartmontools nvme-cli
```

## 02_ Verificando a versão do Ubuntu Server
```bash
#verificando a versão e codinome do Ubuntu Server 
sudo cat /etc/os-release

#verificando a versão do LSB (Linux Standard Base) do Ubuntu Server
sudo cat /etc/lsb-release
```

## 03_ Verificando a versão do Kernel e Uptime no Ubuntu Server
```bash
#verificando a versão do Kernel com o comando uname
#opção do comando uname: -a (all)
sudo uname -a
```

Entendendo os valores de saída das informações do Kernel com o comando: __`*uname*`__

**SAÍDA DO COMANDO UNAME:** Linux ctnvaamonde.pti.intra 6.8.0-57-generic #59-Ubuntu SMP PREEMPT_DYNAMIC Sat Mar 15 17:40:59 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Linux | Este é o nome do sistema operacional, que é o Linux |
| 02 | ctnvaamonde.pti.intra | Este é o hostname e FQDN da máquina |
| 03 | 6.8.0-57-generic | Este é o número da versão do kernel Linux que está rodando no sistema (5: Versão principal do kernel, 15: Versão secundária do kernel, 0: Número de patch, 119: Número da build específica para essa versão do kernel, generic: Indica que este é o kernel genérico do Ubuntu) |
| 04 | #59-Ubuntu | Esse número indica o número da compilação do kernel |
| 05 | PREEMPT_DYNAMIC | Permite alternar em tempo real entre os modos VOLUNTARY e PREEMPT usando interfaces do sistema |
| 06 | SMP | Isso significa Symmetric Multiprocessing, o que indica que o kernel foi compilado para suportar múltiplos processadores |
| 07 | Sat Mar 15 17:40:59 UTC 2025 | Esta é a data e hora em que o kernel foi compilado |
| 08 | x86_64 x86_64 x86_64 | Isso representa a arquitetura da CPU e do sistema (O primeiro x86_64 indica a arquitetura do processador, O segundo x86_64 mostra que o sistema operacional, O terceiro x86_64 também se refere à arquitetura de hardware que o kernel está usando) |
| 09 | GNU/Linux | Indica que você está usando o sistema operacional GNU/Linux

```bash
#verificando a versão do Kernel com o comando hostnamectl
sudo hostnamectl

#verificando a versão do Kernel do arquivo version
sudo cat /proc/version
```
```bash
#verificando o tempo de atividade do servidor com o comando uptime
sudo uptime
```

Entendendo os valores de saída das métricas do comando: __`*uptime*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO UPTIME:** 13:22:55 up 3 days, 23:53,  1 user,  load average: 1,92, 2,05, 2,06
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | 13:22:55 | Hora atual do sistema |
| 02 | up 3 days, 23:53 | O sistema está em funcionamento há 3 dias e 23 horas e 53 minutos, ou seja, o tempo de atividade desde o último boot |
| 03 | 1 user | Indica que há um usuário logado no sistema no momento |
| 04 | load average: 1,92, 2,05, 2,06 | Refere-se à "carga média" do sistema nos últimos 1, 5 e 15 minutos, respectivamente. |

## 04_ Verificando o Desempenho do Processador CPU (Central Processing Unit) no Ubuntu Server
```bash
#verificando as informações do processador do arquivo cpuinfo
sudo cat /proc/cpuinfo
```
```bash
#analisando o desempenho do processador com o comando top (PARA SAIR PRESSIONE: q (quit))
sudo top
```

Entendendo os valores de saída das métricas do comando: __`*top*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO TOP:** top - 16:43:02   up   4:11,   1 user,   load average: 1,18, 1,55, 1,25
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | top | Comando top em execução
| 02 | 16:43:02 | Hora do sistema operacional |
| 03 | up 4:11 | Tempo de execução do sistema operacional desde que foi ligado |
| 04 | 1 user | Quantidade de usuários logados e usando o sistema |
| 05 | load average: 1,18, 1,55, 1,25 | A carga média nos últimos 1 minuto, 5 minutos e 15 minutos |

**SAÍDA DA SEGUNDA LINHA COMANDO TOP:** Tasks: 168 total,   1 running,   167 sleeping,   0 stopped,   0 zombie
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Tasks: 168 total | O número total de processos no sistema |
| 02 | 1 running | Número de processos que estão atualmente em execução (rodando) |
| 03 | 167 sleeping | Número de processos que estão no estado de espera ("dormindo") |
| 04 | 0 stopped | Número de processos que foram interrompidos (suspensos) |
| 05 | 0 zombie | Número de processos zumbis. |

**SAÍDA DA TERCEIRA LINHA COMANDO TOP:** %Cpu(s): 18,9 us,   4,3 sy,   1,2 ni,  74,7 id,   0,3 wa,   0,0 hi,   0,5 si,   0,0 st
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | %CPU(s): 18,9 us (user space) | Percentual de tempo que a CPU está gastando executando processos de usuários, |
| 02 | 4,3 sy (system) | Percentual de tempo gasto com processos do sistema, |
| 03 | 1,2 ni (nice) | Percentual de tempo gasto em processos de usuários que foram "reniceados", |
| 04 | 74,7 id (idle) | Percentual de tempo que a CPU está ociosa, |
| 05 | 0,3 wa (iowait) | Percentual de tempo que a CPU está aguardando por operações de entrada/saída (I/O), |
| 06 | 0,0 hi (hardware interrupts) | Percentual de tempo gasto com interrupções de hardware, |
| 07 | 0,5 si (software interrupts) | Percentual de tempo gasto com interrupções de software, |
| 08| 0,0 st (steal) | Percentual de tempo que a CPU virtual (em ambientes virtualizados) estava aguardando porque a CPU física estava sendo usada por outra máquina virtual. |

**SAÍDA DA QUARTA LINHA COMANDO TOP:** MiB Mem :   3916,1 total,   1895,6 free,   1050,7 used,   1208,7 buff/cache <br>
**SAÍDA DA QUINTA LINHA COMANDO TOP:** MiB Swap:   3916,0 total,   3916,0 free,      0,0 used.   2865,5 avail Mem
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | MiB Mem 3916,1 total/MiB Swap 3916,0 total | Total de memória RAM e Swap disponível no sistema |
| 02 | MiB Mem 1895,6 free / MiB Swap 3916,0 free | Total de memória RAM e Swap livre no sistema |
| 02 | MiB Mem 1050,7 used / MiB Swap 0,0 used | Total de memória RAM e Swap utilizada no sistema |
| 02 | MiB Mem 1208,7 buff/cache / MiB Swap 2865,5 avail Mem | Total de memória RAM e Swap em Buffer/Cache e disponível |

**SAÍDA DAS COLUNAS DO COMANDO TOP:** PID   USER   PR   NI   VIRT   RES   SHR S   %CPU   %MEM   TIME+ COMMAND
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | PID | Identificador do processo (Process ID), |
| 02 | user | Nome do usuário que iniciou o processo. Indica a quem pertence o processo, |
| 03 | PR | Prioridade do processo. Processos com prioridade mais baixa (valores mais altos) são executados com menor frequência em relação a processos com prioridade mais alta, |
| 04 | NI | Valor de "nice" do processo. O valor "nice" determina a prioridade de execução do processo, |
| 05 | VIRT | Memória virtual total utilizada pelo processo, incluindo toda a memória que o processo pode acessar (inclui a memória que pode não estar fisicamente presente), |
| 06 | RES | Memória residente. É a quantidade de memória física (RAM) que o processo está usando no momento. Esta é a parte da memória que está realmente alocada e em uso, |
| 07 | SHR | Memória compartilhada. Indica a quantidade de memória que é compartilhada entre processos, |
| 08 | S | Estado do processo. Os estados comuns incluem: R: Executando (running), S: Dormindo (sleeping), Z: Zumbi (zombie) e T: Parado (stopped), | 
| 09 | %CPU | Porcentagem da CPU que o processo está utilizando no momento. Isso mostra quão ativo o processo está em termos de uso da CPU, |
| 10 | %MEM | Porcentagem da memória física total que o processo está utilizando, |
| 11 | TIME+ | Tempo total de CPU utilizado pelo processo desde que foi iniciado, |
| 12 | COMMAND | Nome do comando ou do processo que está sendo executado. |

```bash
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
```

Entendendo os valores de métricas do comando: __`*htop*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO HTOP:** Tasks: 72, 500 thr; 1 running
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | 72 | O número de processos ativos no sistema, |
| 02 | 500 thr | O número total de threads que estão em execução, |
| 03 | 1 running | O número de processos ou threads que estão atualmente sendo executados pela CPU. |

**SAÍDA DA TERCEIRA LINHA COMANDO HTOP:** Load average: 0.22 0.41 0.65
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Load average: 0.22 | A carga média nos últimos 1 minuto, |
| 02 | 0.41 | A carga média nos últimos 5 minutos, |
| 03 | 0.65 | A carga média nos últimos 15 minutos. |

**SAÍDA DA QUARTA LINHA COMANDO HTOP:** Disk IO: 5.2% read: OK write: 140K
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Disk IO: 5.2% | A porcentagem de utilização do disco no momento, indicando quanta capacidade de leitura/gravação o disco está utilizando em relação ao seu potencial máximo, |
| 02 | read: OK | Indica que a leitura do disco está funcionando dentro de parâmetros normais, |
| 03 | write: 140K | A quantidade de dados sendo gravados no disco por segundo. |

**SAÍDA DA QUINTA LINHA COMANDO HTOP:** Network rx: 1KiB/s tx: 4KiB/s (41/40 packets)
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Network rx: 1KiB/s | A taxa de recebimento de dados pela interface de rede, no caso 1 kilobyte por segundo, |
| 02 | tx: 4KiB/s | A taxa de envio de dados pela interface de rede, no caso 4 kilobytes por segundo, |
| 03 | (41/40 packets) | O número de pacotes recebidos/enviados pela rede. Aqui você recebeu 41 pacotes e enviou 40 pacotes. |

**SAÍDA DA SEXTA LINHA COMANDO HTOP:** PSI some CPU: 10.6% 9.29% 9.25%
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | PSI (Pressure Stall Information) some CPU | Os valores 10.6%, 9.29%, 9.25% indicam a pressão sobre a CPU nos últimos 1, 5, e 15 minutos |

**SAÍDA DA SÉTIMA LINHA DO COMANDO HTOP:** PSI full IO: 1.25% 1.24% 1.32%
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | PSI (Pressure Stall Information) full I/O | Os valores 1.25%, 1.24%, 1.32% representam a pressão sobre o sistema de I/O nos últimos 1, 5, e 15 minutos |

**SAÍDA DA OITAVA LINHA DO COMANDO HTOP:** PSI full memory 0.00% 0.00% 0.00%
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | PSI (Pressure Stall Information) full memory | Os valores 0.00% indicam que não houve pressão de memória nos últimos 1, 5, e 15 minutos |

**SAÍDA DA PRIMEIRA COLUNA DO COMANDO HTOP:** Main  PID  USER  PRI  NI  RES  SHR  S  CPU%  MEM%  TIME+  Command
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Main | Mostra a hierarquia do processo (pai/filho), útil quando está com modo de exibição em árvore (F5). |
| 02 | PID | ID do processo. |
| 03 | USER | Usuário que está executando o processo. |
| 04 | PRI | Prioridade do processo (quanto menor, mais prioridade). |
| 05 | NI | Valor do "nice" (ajusta a prioridade, varia de -20 a +19). |
| 06 | RES | Memória residente — RAM usada de fato pelo processo (sem swap). |
| 07 | SHR | Memória compartilhada com outros processos. |
| 08 | S | Estado do processo: R: Executando (Running), S: Dormindo (Sleeping), D: Espera não-interrompível (Disk Sleep), Z: Zumbi (Zombie), T: Parado (Stopped) |
| 09 | CPU% | Porcentagem de uso da CPU por esse processo. |
| 10 | MEM% | Porcentagem de uso da RAM por esse processo. |
| 11 | TIME+ | Tempo total de CPU usado pelo processo desde que iniciou. |
| 12 | Command | O comando ou programa que iniciou o processo (com parâmetros, se houver). |

**SAÍDA DA SEGUNDA COLUNA DO COMANDO HTOP:** I/O   PID  USER  IO  DISK R/W  DISK READ  DISK WRITE  SWPD% IOD%  Command
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | I/O | Indica que você está no modo de visualização de entrada/saída (Input/Output). |
| 02 | PID | ID do processo. |
| 03 | USER | Usuário que está executando o processo. |
| 04 | IO | Taxa total de I/O (input/output) combinando leitura e escrita em disco (em KB/s ou MB/s). |
| 05 | DISK R/W | Leitura + escrita de disco somadas (geralmente em tempo real). |
| 06 | DISK READ | Leitura de disco por esse processo. |
| 07 | DISK WRITE | Escrita em disco feita por esse processo. |
| 08 | SWPD% | Porcentagem de acesso à memória trocada (swap) pelo processo. |
| 09 | IOD% Porcentagem do tempo que o processo está esperando por I/O (input/output). |
| 10 | Command | O comando ou aplicativo que iniciou o processo. |

```bash
#analisando o desempenho do processador com o comando vmstat
#opções do comando vmstat: -a (active), -t (timestamp), -w (wide)
sudo vmstat -a -t -w
```

Entendendo os valores de métricas do comando __`*vmstat*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO VMSTAT:** procs ---memory--- ---swap--- ---io--- ---system--- ---cpu--- ---timestamp---
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | procs | Agrupamento das colunas de Processos: r b |
| 02 | memory | Agrupamento das colunas de Memória RAM: swpd free inact active |
| 03 | swap | Agrupamento das colunas de Memória Swap: si so |
| 04 | io | Agrupamento das colunas de Hard Disk: bi bo |
| 05 | system | Agrupamento das colunas de Sistema: in cs |
| 06 | cpu | Agrupamento das colunas de Processador CPU: us sy id wa st |
| 07 | timestamp | Agrupamento de fusionário, data e hora do sistema |

**SAÍDA DA SEGUNDA LINHA COMANDO VMSTAT:** r   b   swpd   free   inact   active   si   so   bi   bo   in   cs   us   sy   id   wa   st
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | r (run queue) | Número de processos prontos para execução, |
| 02 | b (blocked processes) | Número de processos bloqueados, ou seja, aguardando a finalização de operações de I/O, |
| 03 | swpd (swap used) | Quantidade de memória swap utilizada, |
| 04 | free (free memory) | Quantidade de memória RAM livre, |
| 05 | inact (inactive memory) | Quantidade de memória classificada como inativa, |
| 06 | active (active memory) | Quantidade de memória ativa em uso, |
| 07 | si (swap in) | Quantidade de dados (em KB) que estão sendo movidos da área de swap para a memória RAM por segundo, |
| 08 | so (swap out) | Quantidade de dados (em KB) que estão sendo movidos da memória RAM para a área de swap por segundo, |
| 09 | bi (blocks in) | Quantidade de dados (em blocos) lidos do disco (ou dispositivos de I/O) por segundo, |
| 10 | bo (blocks out) | Quantidade de dados (em blocos) gravados no disco (ou dispositivos de I/O) por segundo, |
| 11 | in (interrupts) | Número de interrupções por segundo que o sistema está lidando, |
| 12 | cs (context switches) | Número de trocas de contexto por segundo, |
| 13 | us (user) | Percentual de tempo gasto pela CPU executando processos em modo usuário, |
| 14 | sy (system) | Percentual de tempo gasto pela CPU em modo kernel, |
| 15 | id (idle) | Percentual de tempo em que a CPU está ociosa, |
| 16 | wa (wait) | Percentual de tempo que a CPU está ociosa, mas aguardando a finalização de operações de I/O (input/output), |
| 17 | st (steal time) | Percentual de tempo "roubado" pela CPU em um ambiente virtualizado. |
| 18 | gu (guest used) | Percentual de memória ocupada por páginas de dados de usuário que ainda estão mapeadas no espaço de endereçamento do processo |

```bash
#analisando o desempenho do processador com o comando mpstat
#opção do comando mpstat: -P (cpu list), ALL (all information CPU list)
sudo mpstat -P ALL
```

Entendendo os valores de métricas do comando __`*mpstat*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO MPSTAT:** Linux 6.8.0-57-generic (ctnvaamonde.pti.intra) 	10/05/2025 	_x86_64_	(2 CPU)
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Linux 6.8.0-57-generic (ctnvaamonde.pti.intra) | Versão do Kernel rodando no servidor |
| 02 | 10/05/2025 | Data atual do servidor |
| 03 | _x86_64_ | Arquitetura do Processador do servidor | 
| 04 | (2 CPU) | Quantidade de Núcleos de Processador ativo no servidor |

**SAÍDA DA SEGUNDA LINHA COMANDO MPSTAT:** 11:23:50   CPU   %usr   %nice   %sys   %iowait   %irq   %soft   %steal   %guest   %gnice   %idle
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | 11:23:50 | Hora da análise do desempenho dos processadores, |
| 02 | CPU | Lista de todos os processadores disponíveis no servidor, |
| 03 | %usr | Percentual de tempo gasto pela CPU em modo usuário, |
| 04 | %nice | Percentual de tempo que a CPU passa executando processos que foram "envelhecidos" ou "reniceados" com uma prioridade mais baixa, |
| 05 | %sys | Percentual de tempo que a CPU gasta executando tarefas no modo kernel, |
| 06 | %iowait | Percentual de tempo que a CPU passa ociosa esperando operações de I/O, |
| 07 | %irq | Percentual de tempo que a CPU gasta lidando com interrupções de hardware, |
| 08 | %soft | Percentual de tempo que a CPU passa lidando com interrupções de software, |
| 09 | %steal | Percentual de tempo que a CPU foi "roubada" para executar outras tarefas em um ambiente virtualizado, |
| 10 | %guest | Percentual de tempo que a CPU passa rodando uma máquina virtual, |
| 11 | %gnice | Percentual de tempo gasto em processos de máquina virtual com  prioridade ajustada, |
| 12 | %idle | Percentual de tempo que a CPU passa ociosa, sem executar nenhum processo ou esperando por operações de I/O. |

```bash
#analisando o desempenho do processador com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h
```

Entendendo os valores de métricas do comando __`*iostat*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO IOSTAT:** Linux 6.8.0-57-generic (ctnvaamonde.pti.intra) 	10/05/2025 	_x86_64_	(2 CPU)
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Linux 6.8.0-57-generic (ctnvaamonde.pti.intra) | Versão do Kernel rodando no servidor |
| 02 | 10/05/2025 | Data atual do servidor |
| 03 | _x86_64_ | Arquitetura do Processador do servidor | 
| 04 | (2 CPU) | Quantidade de Núcleos de Processador ativo no servidor |

**SAÍDA DA SEGUNDA LINHA COMANDO IOSTAT:** avg-cpu:   %user   %nice %system   %iowait   %steal   %idle
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | avg-cpu | visão geral da utilização da CPU; |
| 02 | %user | Percentual de tempo que a CPU passou executando processos de usuários, |
| 03 | %nice | Percentual de tempo que a CPU passou executando processos de usuários que foram atribuídos a uma prioridade mais baixa, |
| 04 | %system | Percentual de tempo que a CPU passou executando processos do sistema ou do kernel, |
| 05 | %iowait | Percentual de tempo que a CPU passou ociosa, mas aguardando a conclusão de operações de I/O, |
| 06 | %steal | Percentual de tempo que foi "roubado" da CPU por outras máquinas virtuais em um ambiente virtualizado, |
| 07 | %idle | Percentual de tempo que a CPU passou completamente ociosa

**SAÍDA DA TERCEIRA LINHA COMANDO IOSTAT:** Device tps   kB_read/s   kB_wrtn/s   kB_dscd/s   kB_read   kB_wrtn   kB_dscd
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | tps (transactions per second) | Número de operações de I/O por segundo para o dispositivo, |
| 02 | kB_read/s | Taxa de leitura em KB por segundo, |
| 03 | kB_wrtn/s | Taxa de gravação em KB por segundo, |
| 04 | kB_dscd/s | Taxa de descarte de dados em KB por segundo, |
| 05 | kB_read | Quantidade total de dados lidos do dispositivo de armazenamento desde o início da medição, |
| 06 | kB_wrtn | Quantidade total de dados gravados no dispositivo de armazenamento desde o início da medição, | 
| 07 | kB_dscd | Quantidade total de dados descartados desde o início da medição, |
| 08 | Device | Nome do dispositivo de armazenamento | 

```bash
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
```

**OBSERVAÇÃO IMPORTANTE NÃO FOI MOSTRADO NO VÍDEO O COMANDO:** __`*atop*`__ SEGUE AS SUAS MÉTRICAS.

```bash
#analisando o desempenho do processador com o comando atop (PARA SAIR PRESSIONE: q (quit))
sudo atop
```

Entendendo os valores de métricas do comando __`*atop*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO ATOP:** PRC  | sys   8h51m | user   14h41m | #proc   317 | #trun   2 | #tslpi   1089 | #tslpu   1 | #zombie   0 | clones 917e3 | #exit   1
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | sys 8h51m | Tempo total gasto pelo sistema em modo kernel (modo de sistema ou "system mode") nas últimas 8 horas e 51 minutos, |
| 02 | user 14h41m | Tempo total gasto pela CPU executando processos de modo usuário (user mode) nas últimas 14 horas e 41 minutos, |
| 03 | proc 317 | Número total de processos criados e ativos durante o intervalo de monitoramento, |
| 04 | trun 2 | Número de processos em execução ativa (running) no momento da amostra, |
| 05 | tslpi 1089 | Número de processos que estão dormindo (sleeping) de forma ininterrupta, |
| 06 | tslpu 1 | Número de processos que estão dormindo de forma interrompível, |
| 07 | zombie 0 | Número de processos em estado zumbi, |
| 08 | clones 917e3 | Número de processos clonados (geralmente subprocessos ou threads) no sistema, desde que o monitoramento foi iniciado. O valor 917e3 representa 917.000 clones. |
| 09 | exit 1 | Número de processos que saíram ou terminaram durante o período de monitoramento. |

**SAÍDA DA SEGUNDA LINHA COMANDO ATOP:** PID   SYSCPU   USRCPU   VGROW   RGROW   RUID   EUID   ST   EXC   THR   S   CPUNR   CPU   CMD   1/6
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | PID | Identificador do processo (Process ID), |
| 02 | SYSCPU | Quantidade de tempo de CPU usada pelo processo no modo kernel (system CPU time), |
| 03 | USRCPU | Quantidade de tempo de CPU usada pelo processo no modo usuário (user CPU time), |
| 04 | VGROW | Crescimento no uso de memória virtual (virtual memory growth), |
| 05 | RGROW | Crescimento no uso de memória residente (resident memory growth), |
| 06 | RUID | ID do usuário real (Real User ID), |
| 07 | EUID | ID do usuário efetivo (Effective User ID), |
| 08 | ST | Estado do processo (State). Representa o estado atual do processo, por exemplo: R: Em execução (Running), S: Dormindo (Sleeping), D: Em espera ininterrupta (Waiting for I/O), Z: Zumbi (Zombie) e T: Parado (Stopped), |
| 09 | EXC | Número de trocas de contexto (Context Switches), |
| 10 | THR | Número de threads que o processo possui, |
| 11 | S | Estado geral de uso da CPU do processo, R: Em execução (Running), S: Dormindo (Sleeping) e Outros estados indicam diferentes condições do processo, |
| 12 | CPUNR | O número da CPU em que o processo está sendo executado, |
| 13 | CPU | Percentual de uso da CPU pelo processo, |
| 14 | CMD | O nome do comando ou programa associado ao processo, |
| 15 | 1/6 | O índice da página exibida (como 1/6).X |

```bash
#analisando o desempenho do processador com o comando glances (PARA SAIR PRESSIONE: q (quit))
sudo glances
```

## 05_ Verificando o Desempenho da Memória RAM (Random-Access Memory) no Ubuntu Server
```bash
#verificando as informações de memória do arquivo meminfo
sudo cat /proc/meminfo
```
```bash
#analisando o desempenho da memória com o comando free
#opções do comando free: -h (human), -m (megabyte), -t (total)
sudo free -h -m -t
```

Entendendo os valores de métricas do comando __`*free*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO FREE:** total   used   free   shared   buff/cache   available
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | total | Esta coluna mostra a quantidade total de memória disponível no sistema, |
| 02 | used | Exibe a quantidade de memória que está sendo efetivamente usada no momento, |
| 03 | free | Mostra a quantidade de memória que está completamente livre, |
| 04 | shared | Quantidade de memória que está sendo compartilhada entre vários processos, |
| 05 | buff/cache | Exibe a quantidade de memória que está sendo usada pelo sistema para buffers e cache, |
| 06 | available | Quantidade de memória que está disponível para ser usada por novos processos, levando em consideração a memória que pode ser liberada de buffers e cache. |

```bash
#analisando o desempenho da memória com o comando vmstat
sudo vmstat 

#analisando o desempenho da memória com o comando top
sudo top

#analisando o desempenho da memória com o comando htop
sudo htop
```
```bash
#analisando o desempenho da memória com o comando sar
#opções do comando sar: -h (human), -r (Report memory utilization statistics), 1 (one second), 5 (five lines)
sudo sar -h -r 1 5
```

Entendendo os valores de métricas do comando __`*sar*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO SAR:** Linux 5.15.0-119-generic   (ctnvaamonde)   25/09/2024   _x86_64_   (8 CPU)
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Linux 5.15.0-119-generic | Esta é a versão do kernel Linux que o sistema está rodando. |
| 02 | ctnvaamonde | Este é o nome do host ou o nome da máquina. |
| 03 | 25/09/2024 | Data em que o comando foi executado, indicando quando as estatísticas foram coletadas. |
| 04 | x86_64 | Isso indica a arquitetura da CPU, que é de 64 bits (x86_64), comum em CPUs modernas. |
| 05 | (8 CPU) | Indica que o sistema tem 8 núcleos de CPU disponíveis (sejam físicos ou lógicos, como no caso de processadores com Hyper-Threading). |

**SAÍDA DA SEGUNDA LINHA COMANDO SAR:** 09:55:21   kbmemfree   kbavail   kbmemused   %memused   kbbuffers   kbcached   kbcommit   %commit   kbactive   kbinact   kbdirty
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | 09:55:21 | O horário em que a amostra foi coletada. |
| 02 | kbmemfree | Quantidade de memória livre disponível (em kilobytes). |
| 03 | kbavail | Quantidade de memória disponível para novos processos, levando em consideração a memória usada pelo cache e buffers, que pode ser rapidamente liberada. |
| 04 | kbmemused | Quantidade de memória atualmente em uso (em kilobytes), calculada como a diferença entre a memória total e a memória livre. |
| 05 | %memused | Percentual da memória RAM total que está em uso. |
| 06 | kbbuffers | Quantidade de memória usada por buffers de sistema (em kilobytes), que geralmente é usada para armazenar dados que estão sendo transferidos entre dispositivos. |
| 07 | kbcached | Quantidade de memória usada para armazenar dados em cache (em kilobytes), que são dados frequentemente acessados para melhorar o desempenho. |
| 08 | kbcommit | Quantidade de memória comprometida para ser usada no futuro, incluindo a memória virtual que pode estar alocada mas ainda não usada. |
| 09 | %commit | Percentual da memória RAM total que está comprometida para ser usada no futuro (pode  incluir a memória swap). |
| 10 | kbactive | Quantidade de memória ativa que está sendo usada recentemente por processos (em kilobytes). |
| 11 | kbinact | Quantidade de memória inativa que foi usada recentemente e está pronta para ser movida  para o swap ou liberada, se necessário (em kilobytes). |
| 12 | kbdirty | Quantidade de memória que contém dados que foram modificados mas ainda não foram gravados em disco (em kilobytes). |

```bash
#analisando o desempenho da memória com o comando btop
sudo btop

#analisando o desempenho da memória com o comando glances (PARA SAIR: q (quit))
sudo glances
```

## 06_ Verificando o Desempenho do Disco HD (Hard-Disk) no Ubuntu Server
```bash
#verificando as informações de estatísticas de disco do arquivo diskstats
#opção do comando grep: -i (ignore case sensitive)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo cat /proc/diskstats | grep -i sda
```

Entendendo os valores de métricas do arquivo __`*diskstats*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO DISKSTATS:** 8 0 sda 366584 41475 22505582 693820 1594861 1615195 35142920 3921960 0 4599484 7453602 0 0 0 0 519283 2837821
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | 8 | (major number) Número major que identifica o driver do dispositivo de bloco, |
| 02 | 0 | (minor number) Número minor que identifica o dispositivo específico, |
| 03 | sda | (device name) Nome do dispositivo, |
| 04 | 366584 | (reads completed) Número total de operações de leitura completadas com sucesso, |
| 05 | 41475 | (reads merged) Número de operações de leitura que foram mescladas em uma única operação, |
| 06 | 22505582 | (sectors read) Número total de setores lidos. Um setor geralmente tem 512 bytes, mas isso pode variar, |
| 07 | 693820 | (time reading) Tempo total (em milissegundos) que o disco gastou lendo dados, |
| 08 | 1594861 | (writes completed) Número total de operações de escrita completadas com sucesso, |
| 09 | 1615195 | (writes merged) Número de operações de escrita que foram mescladas, |
| 10 | 35142920 | (sectors written) Número total de setores escritos no disco, |
| 11 | 3921960 | (time writing) Tempo total (em milissegundos) que o disco gastou escrevendo dados, |
| 12 | 0 | (in flight) Número de operações de I/O em andamento no momento, |
| 13 | 4599484 | (time spent doing I/Os) Tempo total (em milissegundos) que o sistema passou realizando operações de I/O, |
| 14 | 7453602 | (weighted time spent doing I/Os) Tempo ponderado (em milissegundos) que as operações de I/O levaram para serem processadas, |
| 15 | 0 | (discards completed) Número total de operações de descarte de blocosM, |
| 16 | 0 | (discards merged) Número de operações de descarte mescladas, |
| 17 | 0 | (sectors discarded) Número total de setores descartados, |
| 18 | 0 | (time discarding) Tempo total (em milissegundos) gasto em operações de descarte de blocos, |
| 19 | 519283 | (flush requests) Número total de solicitações de flush, |
| 20 | 2837821 | (flush time) Tempo total (em milissegundos) gasto com solicitações de flush. |

```bash
#verificando as informações de ponto de montagem do arquivo mounts
#opção do comando grep: -i (ignore case sensitive)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo cat /proc/mounts | grep -i /dev/mapper/
```

Entendendo os valores de métricas do arquivo __`*mounts*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO MOUNTS:** /dev/mapper/ubuntu--vg-ubuntu--lv   /   ext4   rw,relatime   0   0
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | /dev/mapper/ubuntu--vg-ubuntu--lv | Este é o dispositivo de bloco onde o sistema de arquivos está armazenado, |
| 02 | / | Este campo indica o ponto de montagem do volume lógico, que, no caso, é a raiz (/) do sistema de arquivos, |
| 03 | ext4 | Este é o tipo de sistema de arquivos utilizado no volume lógico, |
| 04 | rw | Esta opção indica que o sistema de arquivos está montado como read-write, |
| 05 | relatime | Relatime (Relative Access Time) é uma opção de montagem que otimiza a atualização do tempo de acesso aos arquivos, |
| 06 | 0 | O primeiro 0 refere-se ao campo de dump. Um valor de 0 significa que o comando dump (utilizado para fazer backups) não vai considerar esse sistema de arquivos para backup, |
| 07 | 0 | O segundo 0 refere-se ao campo de fsck order. Um valor de 0 indica que o utilitário fsck (que verifica e repara sistemas de arquivos) não será executado automaticamente durante a inicialização para este sistema de arquivos. |

```bash
#verificando as informações do disco SDA (Serial-ATA-Disk-A) com o comando fdisk
#opção do comando fdisk: -l (list), /dev/sda (hard disk SATA)
sudo fdisk -l /dev/sda
```

Entendendo os valores de métricas do comando __`*fdisk*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO FDISK:** Device   Start   End   Sectors   Size   Type
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Device | Este campo mostra o nome do dispositivo de bloco ou partição, |
| 02 | Start | Indica o setor de início da partição. No disco, o armazenamento é dividido em setores, |
| 03 | End | Indica o setor final da partição, ou seja, o número do último setor em que a partição termina, |
| 04 | Sectors | Indica a quantidade total de setores que a partição ocupa. Esse valor é obtido subtraindo o setor de início (Start) do setor de fim (End), |
| 05 | Size | Este campo exibe o tamanho total da partição em uma unidade de medida legível, |
| 06 | Type | Este campo indica o tipo de partição ou o sistema de arquivos associado à partição. |

```bash
#verificando o uso do disco com o comando df
#opção do comando df: -h (human)
sudo df -h
```

Entendendo os valores de métricas do comando __`*df*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO DF:** Filesystem   Size   Used   Avail   Use%   Mounted on
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Filesystem | Refere-se ao nome ou caminho do sistema de arquivos ou dispositivo de armazenamento, |
| 02 | Size | Exibe o tamanho total da partição ou do sistema de arquivos, ou seja, a capacidade total disponível para armazenar dados, |
| 03 | Used | Indica a quantidade de espaço em disco que já está ocupada por dados, |
| 04 | Available | Mostra o espaço livre disponível na partição ou sistema de arquivos, ou seja, quanto ainda pode ser utilizado para armazenar novos dados. |
| 05 | Use% | Representa a porcentagem do espaço total que está atualmente em uso. É uma boa métrica para verificar o quanto de um sistema de arquivos está ocupado. |
| 06 | Mounted on | Indica o ponto de montagem, ou seja, o diretório onde a partição ou o sistema de arquivos está acessível no sistema. Exemplo: /, /home, /mnt. |

```bash
#analisando o desempenho do disco com o comando iostat
#opção do comando iostat: -h (human)
sudo iostat -h
```

Entendendo os valores de métricas do comando __`*iostat*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO IOSTAT:** tps   kB_read/s   kB_wrtn/s   kB_dscd/s   kB_read   kB_wrtn   kB_dscd   Device
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | tps | (transactions per second) Número de operações de I/O por segundo para o dispositivo, 
| 02 | kB_read/s | Taxa de leitura em KB por segundo, 
| 03 | kB_wrtn/s | Taxa de gravação em KB por segundo,
| 04 | kB_dscd/s | Taxa de descarte de dados em KB por segundo, 
| 05 | kB_read | Quantidade total de dados lidos do dispositivo de armazenamento desde o início da medição, 
| 06 | kB_wrtn | Quantidade total de dados gravados no dispositivo de armazenamento desde o início da medição, 
| 07 | kB_dscd | Quantidade total de dados descartados desde o início da medição, 
| 08 | Device | Nome do dispositivo de armazenamento.

```bash
#analisando o desempenho do disco com o comando iotop
#opção do comando iotop: -o (only)
sudo iotop -o
   a: (accumulate) totalizar por processo
   q: quit
```

Entendendo os valores de métricas do comando __`*iotop*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO IOTOP:** Total DISK READ: 0.00 B/s | Total DISK WRITE: 0.00 B/s | Current DISK READ:  0.00 B/s | Current DISK WRITE: 0.00B/s
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Total DISK READ | Leitura total de disco desde que o iotop começou a ser executado. |
| 02 | Total DISK WRITE | Escrita total de disco desde que o iotop começou a ser executado. |
| 03 | Current DISK READ | Leitura de disco atual, medida no instante em que o iotop foi atualizado pela última vez. |
| 04 | Current DISK WRITE | Escrita de disco atual, medida no instante em que o iotop foi atualizado pela última vez. |

**SAÍDA DA SEGUNDA LINHA COMANDO IOTOP:** TID   PRIO   USER   DISK READ   DISK WRITE   SWAPIN   IO>   COMMAND
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | TID | Thread ID (ou Task ID): Identifica cada processo ou thread com um ID único, |
| 02 | PRIO | Prioridade do processo: Define a prioridade do processo em relação aos outros. |
| 03 | USER | O nome de usuário que iniciou o processo — Mostra qual usuário (ou grupo de usuários) está executando o processo ou a thread, |
| 04 | DISK READ | Quantidade de leitura de disco realizada pelo processo, medida em KB/s ou MB/s, |
| 05 | DISK WRITE | Quantidade de escrita de disco realizada pelo processo, medida em KB/s ou MB/s, |
| 06 | SWAPIN | Percentual de tempo que o processo passa trocando (swap) dados entre a memória RAM e o espaço de swap do disco, |
| 07 | IO> | IO wait time — Percentual do tempo que o processo está gastando esperando por operações de entrada/saída (I/O) de disco para serem concluídas, |
| 08 | COMMAND | O nome do comando/processo que está sendo monitorado. |

```bash
#analisando o desempenho do disco com o comando dstat (PARA SAIR PRESSIONE: Ctrl+C (quit))
#opções do comando dstat: -d (disk), --disk-util (percentage of CPU time during which I/O 
#requests were issued to the device), --disk-tps (number of transfers per second that were
#issued to the device)
sudo dstat -d --disk-util --disk-tps
```

Entendendo os valores de métricas do comando __`*dstat*`__

**SAÍDA DA PRIMEIRA LINHA COMANDO DSTAT:** -dsk/total- -loop-nvme-sda- -dsk/total-<br>
**SAÍDA DA SEGUNDA LINHA COMANDO DSTAT:** read  writ | util | #read #writ
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | -dsk/total- | Esta linha mostra as métricas de leitura e escrita de disco agregadas, | 
| 02 | loop, nvme, sda, etc. | Esses são os dispositivos de disco individuais monitorados pelo dstat. Dependendo do sistema, pode haver dispositivos como: loop: Dispositivos de loopback (normalmente usados para montar arquivos de imagem). nvme: Discos NVMe (de alta performance). sda: Um dos discos de bloco padrão (SATA ou SCSI). |
| 03 | util | Utilização de disco por dispositivo, em termos percentuais. |
| 04 | read writ | Número de transações por segundo (TPS), ou seja, o número de operações de leitura (#read) e escrita (#writ) feitas no dispositivo de disco por segundo. Esse valor reflete a  quantidade de I/O (entrada/saída) em termos de transações de leitura e escrita, medido para cada dispositivo de disco. |

```bash
#analisando o desempenho do disco com o comando glances (PARA SAIR PRESSIONE: q (quit))
sudo glances
```

## 07_ Verificando o Desempenho da Rede (Network) no Ubuntu Server
```bash
#verificando as informações de estatísticas de rede do arquivo net/dev
sudo cat /proc/net/dev
```

Entendendo os valores de métricas do do arquivo __`*/proc/net/dev*`__

**SAÍDA DA PRIMEIRA LINHA DO ARQUIVO DEV:** Interface | bytes   packets   errs   drop   fifo   frame   compressed   multicast
| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Interfaces | Interfaces e Rede Física ou lógica do servidor, |
| 02 | Receive and Transmit | Informação de Recebimento e Transmissão da dados na rede, |
| 03 | bytes | O número total de bytes recebidos pela interface. |
| 04 | packets | O número total de pacotes recebidos pela interface. |
| 05 | errs | O número de erros ocorridos ao receber pacotes, |
| 06 | drop | O número de pacotes descartados (drop) durante a recepção, |
| 07 | fifo | O número de erros FIFO (First In, First Out) ao receber pacotes, geralmente relacionados a congestionamento de buffer, |
| 08 | frame | O número de erros de enquadramento (frame errors), que ocorrem quando o quadro de dados de um pacote está corrompido, |
| 09 | compressed | O número de pacotes recebidos que estavam comprimidos, |
| 10 | multicast | O número de pacotes multicast recebidos. |

```bash
#analisando o desempenho de rede com o comando mii-tool
sudo mii-tool enp0s3

#analisando o desempenho de rede com o comando ethtool
sudo ethtool enp0s3
```
```bash
#analisando o desempenho de rede com o comando nload
#personalizando o comando nload:
sudo nload
  F2
     Show multiple devices: [X] (Utilizar o TAB para marcar)
  q (quit)
```

Entendendo os valores de métricas do do arquivo __`*nload*`__

| ID | VALORES | INFORMAÇÃO|
|----|---------|-----------|
| 01 | Incoming and Outgoing | Entrada e Saída de dados da Placa de Rede, |
| 02 | Curr (Current) | A taxa de transferência atual de dados em kilobits por segundo (kbit/s) ou megabits por segundo (Mbit/s). |
| 03 | Avg (Average) | A taxa de transferência média de dados, |
| 04 | Min (Minimum) | A taxa de transferência mínima registrada desde o início do monitoramento, |
| 05 | Max (Maximum) | A taxa de transferência máxima registrada desde o início do monitoramento, |
| 06 | Ttl (Total) | O total de dados transferidos (enviados e recebidos) desde o monitoramento. |

```bash
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

#analisando o desempenho de rede com o comando glances (PARA SAIR: q (quit))
sudo glances
```

## 08_ Verificando a Temperatura do Servidor Ubuntu Server (NÃO COMENTADO NO VÍDEO)
```bash
#detectando os sensores de temperatura disponível no servidor
sudo sensors-detect
```

**OBSERVAÇÃO IMPORTANTE:** Antes de iniciar a utilizar o sensors é necessário fazer a configuração das opções de monitoramento de temperatura do sistema:

01. Do you want to scan for them? This is totally safe. (YES/no): yes
02. Do you want to scan for Super I/O sensors? (YES/no): yes
03. ISA slots! Do you want to scan the ISA I/O ports? (YES/no): yes
04. Do you want to probe the I2C/SMBus adapters now? (YES/no): yes
05. Do you want to scan it? (YES/no/selectively): yes
06. Do you want to scan it? (yes/NO/selectively): yes
07. Do you want to scan it? (yes/NO/selectively): yes
08. Do you want to scan it? (yes/NO/selectively): yes
09. Do you want to scan it? (yes/NO/selectively): yes
10. Do you want to scan it? (yes/NO/selectively): yes
11. Do you want to scan it? (yes/NO/selectively): yes
12. Do you want to scan it? (yes/NO/selectively): yes
13. Just press ENTER to continue:
14. Do you want to add these lines automatically to /etc/modules? (yes/NO) yes

```bash
#exibindo a temperatura da CPU e outros sensores no servidor
sudo sensors

#analisando a temperatura do hard disk com o comando smartctl
#opção do comando smartctl: -A (attributes), /dev/sda (hard disk device)
#opção do comando grep: -i (ignore-case)
sudo smartctl -A /dev/sda  | grep -i temperature

#analisando a temperatura do hard disk NVMe com o comando nvme
#opção do comando nvme: smart-log (Retrieve Smart Log)
#opção do comando grep: -i (ignore-case)
sudo nvme smart-log /dev/nvme0 | grep -i temperature

#analisando a temperatura da placa de vídeo off-board NVIDIA
sudo nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader

#analisando a temperatura do servidor com o comando glances (PARA SAIR: q (quit))
#opção do comando glances: --enable-plugin
sudo glances --enable-plugin sensors
```

## 09_ Estressando o Servidor Ubuntu Server para verificar as mudanças no Gráfico (NÃO COMENTADO NO VÍDEO)

Mais informações do software stress-ng Ubuntu: https://manpages.ubuntu.com/manpages/xenial/man1/stress-ng.1.html<br>
Mais informações do software stress-ng Debian: https://manpages.debian.org/jessie/stress-ng/stress-ng.1<br>

```bash
#utilizando o software btop para o monitoramento
sudo btop

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

#fazendo uma busca no disk utilizando o comando find e grep (NÃO COMENTADO NO VÍDEO)
#opções do comando find: / (root device), -type f (files), -exec (exec command), grep -H 
#'root'(with-filename), {} (path find file), \; (end command execution)
sudo find / -type f -exec grep -H 'root' {} \;
```