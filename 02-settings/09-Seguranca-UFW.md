#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 25/09/2024<br>
#Data de atualização: 26/09/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa implementação:<br>
#01_ Instalando o Firewall UFW (Uncomplicated Firewall) no Ubuntu Server<br>
#02_ Instalando o Rsyslog (Syslog/Logs) no Ubuntu Server<br>
#03_ Verificando a Versão e Status do Firewall UFW no Ubuntu Server<br>
#04_ Habilitando (ENABLE) o Firewall UFW no Ubuntu Server<br>
#05_ Verificando o Serviço do UFW no Ubuntu Server<br>
#06_ Configurando as Regras (RULES) de Bloqueio (DENY) padrão (DEFAULT) de Entrada (INCOMING) e Saída (OUTGOING) do UFW no Ubuntu Server<br>
#07_ Configurando o Nível de Log (LOGGING) do UFW no Ubuntu Server<br>
#08_ Liberando (ALLOW) a Entrada (INCOMING) e Saída (OUTGOING) da Interface de Loopback do UFW no Ubuntu Server<br>
#09_ Liberando (ALLOW) as Saídas (OUTGOING) dos Protocolos Básicos no UFW do Ubuntu Server<br>
#10_ Liberando (ALLOW) a Saída (OUTGOING) do Protocolo ICMP do UFW no Ubuntu Server<br>
#11_ Limitando (LIMIT) e Logando Tudo (LOG-ALL) a Conexão de Entrada (INCOMING) do Protocolo SSH do UFW no Ubuntu Server<br>
#12_ Melhorando a Segurança e Logs Detalhados do TCPWrappers no Ubuntu Server<br>
#13_ Testando novamente a conexão com o OpenSSH no Ubuntu Server<br>
#14_ Utilizando o comando LNAV (Logfile Navigator) no Ubuntu Server<br>

Site Oficial Wiki do Ubuntu UFW: https://help.ubuntu.com/community/UFWbr<br>
Site Oficial do Descomplicando o Ubuntu UFW: https://wiki.ubuntu.com/UncomplicatedFirewall<br>
Site Oficial do Debian UFW: https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29<br>
Site Oficial do IPTables: http://git.netfilter.org/iptables/

Uncomplicated Firewall é uma firewall desenhado para ser de fácil utilização. Utiliza uma interface de linha de comandos simple e de fácil entendimento, e usa o iptables como base para a sua configuração. 

O iptables é um programa escrito em C, utilizado como ferramenta para configurar as regras do protocolo de internet IPv4 na tabela de filtragem de pacotes, utilizando vários módulos e o framework do kernel Linux (versão 2.3.15 ou posteiro).

O netfilter é um módulo que fornece ao sistema operacional Linux as funções de firewall, NAT e log dos dados que trafegam na rede de computadores. iptables é o nome da ferramenta do espaço do usuário que permite a criação de regras de firewall e NATs.

O nftables é um subsistema do kernel Linux que fornece filtragem e classificação de pacotes de rede /datagramas/quadros. Ele está disponível desde o kernel Linux 3.13 lançado em 19 de janeiro de 2014. nftables substitui as partes legadas do iptables do Netfilter.

O rsyslog é uma ferramenta de software de código aberto amplamente utilizada em sistemas Unix e similares para o gerenciamento e a transferência de mensagens de log. Ele é uma implementação avançada do protocolo syslog original, oferecendo funcionalidades aprimoradas que atendem às necessidades modernas de monitoramento e análise de logs em ambientes de TI complexos.

TCP Wrapper é um sistema de rede ACL baseado em host, usado para filtrar acesso à rede a servidores de protocolo de Internet em sistemas operacionais do tipo Unix, como Linux ou BSD.

**OBSERVAÇÃO IMPORTANTE: O VÍDEO DE SEGURANÇA DE FIREWALL DO UBUNTU SERVER ESTÁ NA VERSÃO 22.04.x LTS, O PROCEDIMENTO DE SEGURANÇA É O MESMO NA VERSÃO 24.04.x LTS, LEVANDO EM CONSIDERAÇÃO APENAS AS DEPENDÊNCIAS DE APLICATIVOS QUE TEM NESSA DOCUMENTAÇÃO, ESSE CURSO ESTÁ USANDO A INSTALAÇÃO MINIMIZADA (MINIMIZED) DO UBUNTU SERVER.**

[![Firewall UFW](http://img.youtube.com/vi/PuahiojOEGA/0.jpg)](https://www.youtube.com/watch?v=PuahiojOEGA "Firewall UFW")

Link da vídeo aula: https://www.youtube.com/watch?v=PuahiojOEGA

[![Segurança UFW](http://img.youtube.com/vi/130Xdztvm0I/0.jpg)](https://www.youtube.com/watch?v=130Xdztvm0I "Segurança UFW")

Link da vídeo aula: https://www.youtube.com/watch?v=130Xdztvm0I

#01_ Instalando o Firewall UFW (Uncomplicated Firewall) no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: COMO ESTAMOS UTILIZANDO A VERSÃO DO UBUNTU SERVER 24.04.X LTS NO
#MODO MINIMIZADO (MINIMAL) O UFW (E O IPTABLES) NÃO VEM INSTALADO POR PADRÃO.

#atualizando as lista do Apt
sudo apt update

#instalando o UFW no Ubuntu Server
sudo apt install ufw
```

#02_ Instalando o Rsyslog (Syslog/Logs) no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: COMO ESTAMOS UTILIZANDO A VERSÃO DO UBUNTU SERVER 24.04.X LTS NO
#MODO MINIMIZADO (MINIMAL) O RSYSLOG (SYSLOG/LOGS) NÃO VEM INSTALADO POR PADRÃO, NESSE
#CENÁRIO A COMUNIDADE RECOMENDA UTILIZADO O COMANDO: journalctl MAIS PARA ESSE CURSO EU
#RECOMENDO A SUA INSTALAÇÃO.

#atualizando as lista do Apt
sudo apt update

#instalando o Rsyslog no Ubuntu Server
sudo apt install rsyslog lnav

#habilitando o serviço do Rsyslog no Ubuntu Server
sudo systemctl daemon-reload
sudo systemctl enable rsyslog
sudo systemctl start rsyslog

#verificando o serviço do Rsyslog no Ubuntu Server
sudo systemctl status rsyslog
sudo systemctl restart rsyslog
sudo systemctl stop rsyslog
sudo systemctl start rsyslog

#analisando os Log's e mensagens de erro do Rsyslog no Ubuntu Server
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu rsyslog
```

#03_ Verificando a Versão e Status do Firewall UFW no Ubuntu Server<br>
```bash
#Verificando a versão do UFW
sudo ufw version

#Verificando o status do UFW (Status padrão: inactive - inativo/desativado)
sudo ufw status
```

#04_ Habilitando (ENABLE) o Firewall UFW no Ubuntu Server<br>
```bash
#Habilitando e iniciando o Firewall UFW
sudo ufw enable
  Command may disrupt existing ssh connections. Proceed with operation (y|n)? y <Enter>
  Firewall is active and enabled on system startup

#Verificando o status do UFW (Status padrão após habilitar o UFW: active - ativo/ativado)
sudo ufw status verbose

#Reiniciando o Serviço do UFW
sudo systemctl restart ufw
```

#05_ Verificando o Serviço do UFW no Ubuntu Server<br>
```bash
#Verificando o serviço do UFW
sudo systemctl status ufw
sudo systemctl restart ufw
sudo systemctl stop ufw
sudo systemctl start ufw

#Analisando os Log's e mensagens de erro do UFW
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu ufw
```

#06_ Configurando as Regras (RULES) de Bloqueio (DENY) padrão (DEFAULT) de Entrada (INCOMING) e Saída (OUTGOING) do UFW no Ubuntu Server<br>
```bash
#Configurando a Regra Padrão de Bloqueio de Entrada
sudo ufw default deny incoming
  Default incoming policy changed to 'deny'
  (be sure to update your rules accordingly)

#Configurando a Regra Padrão de Bloqueio de Saída
sudo ufw default deny outgoing
  Default outgoing policy changed to 'deny'
  (be sure to update your rules accordingly)

#Verificando as Regras Detalhadas padrão do UFW
sudo ufw status verbose
```

#07_ Configurando o Nível de Log (LOGGING) do UFW no Ubuntu Server<br>
```bash
#Configurando o Nível de Log de Baixo (LOW) para Médio (MEDIUM)
sudo ufw logging medium
  Logging enabled

#Verificando as Regras Detalhadas padrão do UFW
sudo ufw status verbose
```

#08_ Liberando (ALLOW) a Entrada (INCOMING) e Saída (OUTGOING) da Interface de Loopback do UFW no Ubuntu Server<br>
```bash
#Liberando (ALLOW) a Entrada (IN) da Interface (ON) Loopback (LO)
sudo ufw allow in on lo

#Liberando (ALLOW) a Saída (OUT) da Interface (ON) Loopback (LO)
sudo ufw allow out on lo

#Verificando as Regras Detalhadas padrão do UFW
sudo ufw status verbose
```

#09_ Liberando (ALLOW) as Saídas (OUTGOING) dos Protocolos Básicos no UFW do Ubuntu Server<br>
```bash
#Regra de liberação (ALLOW) de Saída (OUT) da Consulta do Protocolo DNS (53/udp)
sudo ufw allow out 53/udp comment 'Liberando a saida para consulta do DNS'

#Regra de liberação (ALLOW) de Saída (OUT) da Navegação do Protocolo HTTP (80/tcp)
sudo ufw allow out 80/tcp comment 'Liberando a saida para navegação do HTTP'

#Regra de liberação (ALLOW) de Saída (OUT) da Navegação do Protocolo HTTPS (443/tcp)
sudo ufw allow out 443/tcp comment 'Liberando a saida para navegação do HTTPS'

#Regra de liberação (ALLOW) de Saída (OUT) do Protocolo NTP (123/udp)
sudo ufw allow out 123/udp comment 'Liberando a saida para sincronismo do NTP'

#Verificando as Regras Detalhadas padrão do UFW
sudo ufw status verbose
```

#10_ Liberando (ALLOW) a Saída (OUTGOING) do Protocolo ICMP do UFW no Ubuntu Server<br>
```bash
#Editando o arquivo de configuração before.rules (ANTES DAS REGRAS) do UFW
sudo vim /etc/ufw/before.rules
ESC SHIFT :set number <Enter>
INSERT
```
```bash
#inserir as informações na linha: 39
#liberando a saída do protocolo ICMP (Permitindo o Ping - Echo Request)
#opções do comando iptables usados pelo UFW: -A (append), -p (protocol), -j (jump target)
# ok icmp codes for OUTPUT
-A ufw-before-output -p icmp --icmp-type destination-unreachable -j ACCEPT
-A ufw-before-output -p icmp --icmp-type time-exceeded -j ACCEPT
-A ufw-before-output -p icmp --icmp-type parameter-problem -j ACCEPT
-A ufw-before-output -p icmp --icmp-type echo-request -j ACCEPT
```
```bash
#Salvar e sair do arquivo
ESC SHIFT :x <Enter>

#Reiniciar as regras de firewall do UFW
sudo ufw reload
  Firewall reloaded

#testando as conexões externas no Ubuntu Server
ping 8.8.8.8
ping google.com
sudo apt update
```

#11_ Limitando (LIMIT) e Logando Tudo (LOG-ALL) a Conexão de Entrada (INCOMING) do Protocolo SSH do UFW no Ubuntu Server<br>
```bash
#Limitando (LIMIT) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o servidor (TO) do OpenSSH Server na porta (PORT) 22 via protocolo TCP (PROTO TCP)
sudo ufw limit log-all from 172.16.1.0/24 to 172.16.1.30 port 22 proto tcp comment 'Limitando a sub-rede para acessar o OpenSSH Server'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose
```

#12_ Melhorando a Segurança e Logs Detalhados do TCPWrappers no Ubuntu Server<br>
```bash
#editando o arquivo de configuração do TCPWrappers Hosts.Deny
sudo vim /etc/hosts.deny
INSERT

# alterar as informações na linha 17
# mais informações veja o arquivo Hosts.Deny no Github:
ALL: ALL: spawn /bin/echo "$(date) | Serviço Remoto %d | Host Remoto %c | Porta Remota %r | Processo Local %p" >> /var/log/hosts-deny.log

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#editando o arquivo de configuração do TCPWrappers Hosts.Allow
sudo vim /etc/hosts.allow
INSERT

# alterar as informações na linha 10
# OBSERVAÇÃO: ALTERAR A REDE CONFORME A SUA NECESSIDADE
# mais informações veja o arquivo Hosts.Allow no Github:
sshd: 172.16.1.0/24: spawn /bin/echo "$(date) | Serviço Remoto %d | Host Remoto %c | Porta Remota %r | Processo Local %p" >> /var/log/hosts-allow.log

#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

#13_ Testando novamente a conexão com o OpenSSH no Ubuntu Server<br>
```bash
Linux
  Terminal: Ctrl + Alt + T
    ping 172.16.1.30
    ssh vaamonde@172.16.1.30 (alterar o usuário e endereço IPv4 do seu servidor)

#verificando os Log's de acesso remoto do servidor Ubuntu
#opção do comando cat: -n (number line)
#opção do comando grep: -i (ignore-case)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo cat -n /var/log/auth.log | grep ssh
sudo cat -n /var/log/syslog | grep ssh
sudo cat -n /var/log/hosts-deny.log
sudo cat -n /var/log/hosts-allow.log
sudo cat -n /var/log/ufw.log | grep -i dpt=22
```

#14_ Utilizando o comando LNAV (Logfile Navigator) no Ubuntu Server<br>
```bash
Documentação Oficial do Logfile Navigator: https://docs.lnav.org/en/latest/index.html

#Principais teclas de atalho do comando lnav
A) Ctrl-u ou Ctrl-d: Role para cima e para baixo uma página de cada vez.
B) g (minúsculo): Vá para o início do arquivo de log.
C) G (maiúsculo): Vá para o final do arquivo de log.
D) q (minúsculo): Sair do Logfile Navigator (Quit).
E) e (minúsculo) ou E (maiúsculo): Encontrando erros nos arquivos.

#verificando os Log's de acesso remoto do servidor Ubuntu com o comando lnav
sudo lnav /var/log/auth.log
sudo lnav /var/log/syslog
sudo lnav /var/log/hosts-deny.log
sudo lnav /var/log/hosts-allow.log
sudo lnav /var/log/ufw.log
```