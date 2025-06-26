#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/08/2024<br>
#Data de atualização: 26/06/2025<br>
#Versão: 0.06<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

**OBSERVAÇÃO IMPORTANTE:** O VÍDEO DAS CONFIGURAÇÕES DO OPENSSH SERVER DO UBUNTU SERVER ESTÁ NA *VERSÃO 22.04.x LTS*, O PROCEDIMENTO DE ATUALIZAR É O MESMO NA VERSÃO 24.04.x LTS, LEVANDO EM CONSIDERAÇÃO APENAS AS DEPENDÊNCIAS DE APLICATIVOS QUE TEM NESSA DOCUMENTAÇÃO, ESSE CURSO ESTÁ USANDO A INSTALAÇÃO **MINIMIZADA (MINIMIZED)** DO UBUNTU SERVER.

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa configuração:<br>
#01_ Instalado o OpenSSH no Ubuntu Server;<br>
#02_ Verificando os Status do Serviço do OpenSSH;<br>
#03_ Verificando a Versão do OpenSSH Server e Client;<br>
#04_ Verificando a Porta de Conexão do OpenSSH Server;<br>
#05_ Diretórios e Arquivos de Configuração do OpenSSH;<br>
#06_ Segurança do Arquivo Hosts.Deny do TCPWrappers;<br>
#07_ Segurança do Arquivo Hosts.Allow do TCPWrappers;<br>
#08_ Configuração do Arquivo sshd_config do OpenSSH;<br>
#09_ Configuração do Arquivo issue.net (Banner Login);<br>
#10_ Acessando Remoto via Powershell, PuTTY e Terminal.

Site Oficial do OpenSSH: https://www.openssh.com/<br>
Site Oficial do OpenSSL: https://www.openssl.org/<br>
Site Oficial do PuTTY: https://www.putty.org/

**O QUE É E PARA QUE SERVER O OPENSSH:** O *OpenSSH (Open Secure Shell)* é um conjunto de ferramentas que fornece soluções para comunicação segura em redes. Ele implementa o *Protocolo SSH (Secure Shell)*, permitindo conexões criptografadas e seguras entre computadores em redes públicas ou privadas. É amplamente utilizado em sistemas Linux e Unix, mas também está disponível para outros sistemas operacionais, como o Windows.

**O QUE É E PARA QUE SERVER O OPENSSL:** O *OpenSSL* é uma biblioteca de código aberto amplamente utilizada para segurança e criptografia, fornecendo ferramentas para comunicação segura através do *Protocolo TLS/SSL (Transport Layer Security/Secure Sockets Layer)*. Ele é essencial para a criação, gerenciamento e uso de certificados digitais, chaves criptográficas e conexões seguras em servidores, aplicações e redes.

**O QUE É E PARA QUE SERVER O TCP WRAPPERS:** O *TCP Wrappers* é uma ferramenta de segurança usada em sistemas Unix/Linux para controlar o acesso a serviços de rede. Ele permite *Restringir ou Permitir* conexões com base no endereço IPv4/IPv6 do cliente, hostname ou outras regras definidas pelo administrador.

**O QUE É E PARA QUE SERVER O BLUE TEAM:** Blue Team é o time de *Defesa em Cibersegurança*. É o grupo responsável por: *proteger, monitorar e responder a ataques cibernéticos* dentro de uma organização. Eles trabalham de forma **Proativa e Reativa**, com foco total na segurança defensiva.

**O QUE É E PARA QUE SERVER O RED TEAM:** Red Team é o time de *Ataque em Cibersegurança*. A missão deles é *simular ataques reais contra a infraestrutura da empresa* para encontrar **Falhas** e testar a eficácia das *defesas (Blue Team)*. Eles são os __`"hackers éticos ofensivos"`__ dentro da organização — tudo é feito com autorização e objetivo de melhorar a segurança.

[![OpenSSH Server](http://img.youtube.com/vi/-cforvm_oV0/0.jpg)](https://www.youtube.com/watch?v=-cforvm_oV0 "OpenSSH Server")

Link da vídeo aula: https://www.youtube.com/watch?v=-cforvm_oV0

**OBSERVAÇÃO IMPORTANTE:** CASO VOCÊ QUEIRA APLICAR A SEGURANÇA AVANÇADA NO SERVIÇO DO OPENSSH SERVER, VEJA O VÍDEO DE CONFIGURAÇÃO FEITA NO CURSO DO CA-CERTIFICATE, NESSE VÍDEO É HABILITADO OS RECURSOS DE CHAVE PRIVADA/PÚBLICA E CONFIGURADO OS LOGS DETALHADO DE CONEXÃO REMOTA.

[![OpenSSH Avançado](http://img.youtube.com/vi/Ri-_KMM361o/0.jpg)](https://www.youtube.com/watch?v=Ri-_KMM361o "OpenSSH Avançado")

Link da vídeo aula: https://www.youtube.com/watch?v=Ri-_KMM361o

Link da documentação: https://github.com/vaamonde/ca-certificates/blob/main/01-ca/01-openssh.md

## 01_ Instalando o OpenSSH Server e Client no Ubuntu Server

**OBSERVAÇÃO IMPORTANTE:** executar a instalação somente se você no processo de instalar o Ubuntu Server não marcou a opção: *Install OpenSSH*, caso contrário o mesmo já está instalado e pré-configurado.

```bash
#atualizando as listas do Apt
sudo apt update

#instalando o OpenSSH Server e Client
sudo apt install openssh-server openssh-client openssl 
```

## 02_ Verificando o Serviço e Versão do OpenSSH Server e Client no Ubuntu Server
```bash
#verificando o serviço do OpenSSH Server
#opções do comando systemctl: status (runtime status information), restart (Stop and then start one or more units),
#stop (Stop (deactivate) one or more units), start (Start (activate) one or more units)
sudo systemctl status ssh
sudo systemctl restart ssh
sudo systemctl stop ssh
sudo systemctl start ssh

#analisando os Log's e mensagens de erro do Servidor do OpenSSH (NÃO COMENTADO NO VÍDEO)
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu ssh
```

**OBSERVAÇÃO IMPORTANTE:** Por que sempre é necessário verificar a versão do serviço de rede que você está implementando ou configurando no Servidor Ubuntu Server, devido as famosas falhas de segurança chamadas de: *CVE (Common Vulnerabilities and Exposures)*, com base na versão utilizada podemos pesquisar no site do **Ubuntu Security CVE Reports:** https://ubuntu.com/security/cves as falhas de segurança encontradas e corrigidas da versão do nosso aplicativo, o que ela afeta, se foi corrigida e como aplicar a correção.

```bash
#verificando as versões do OpenSSH Server e Client
#opção do comando sshd e ssh: -V (version)
sudo sshd -V
sudo ssh -V
```

## 03_ Verificando a Porta de Conexão do OpenSSH Server

**OBSERVAÇÃO IMPORTANTE:** no Ubuntu Server as Regras de Firewall utilizando o comando: __` iptables `__ ou: __` ufw `__ está desabilitado por padrão **(INACTIVE)**, caso você tenha habilitado algum recurso de Firewall é necessário fazer a liberação do *Fluxo de Entrada (INPUT), Porta (PORT) e Protocolo (PROTOCOL) TCP* do Serviço corresponde nas tabelas do firewall e testar a conexão.

```bash
#verificando a porta padrão TCP-22 do OpenSSH Server
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'22' -sTCP:LISTEN
```

## 04_ Localização dos Arquivos de Configuração do OpenSSH Server
```bash
/etc/ssh/             <-- Diretório de configuração do OpenSSH Server e Client
/etc/ssh/sshd_config  <-- Arquivo de configuração do OpenSSH Server
/etc/ssh/ssh_config   <-- Arquivo de configuração do OpenSSH Client
/etc/hosts.deny       <-- Arquivo de configuração do Firewall de Aplicação TCPWrappers Deny
/etc/hosts.allow      <-- Arquivo de configuração do Firewall de Aplicação TCPWrappers Allow
/etc/issue.net        <-- Arquivo de configuração do Banner do Ubuntu Server para acesso remoto
/var/log/             <-- Diretório de Logs do Sistema Operacional Ubuntu Server
/var/log/syslog       <-- Log principal do Sistema Operacional Ubuntu Server
/var/log/auth.log     <-- Log principal das autenticações do Sistema Operacional Ubuntu Server
```

## 05_ Habilitando a segurança de acesso ao OpenSSH Server
```bash
#editando o arquivo de configuração de Negação de Serviço e Host
sudo vim /etc/hosts.deny

#mostrando o número de linha do arquivo hosts.deny
ESC SHIFT :set number <Enter>

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#inserir as informações na linha: 17
#lista de serviço: lista de hosts: comando
#OBSERVAÇÃO: A OPÇÃO ALL: ALL BLOQUEIA TODOS OS SERVIÇOS (DAEMONS) E REDE/HOSTS.
#mais informações veja a documentação oficial em: https://linux.die.net/man/5/hosts.deny
ALL: ALL
```
```bash
#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#editando o arquivo de configuração de Liberação de Serviço e Host
sudo vim /etc/hosts.allow

#mostrando o número de linha do arquivo hosts.allow
ESC SHIFT :set number <Enter>

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#inserir as informações na linha: 10
#lista de serviço: lista de hosts: comando
#OBSERVAÇÃO: ALTERAR A REDE OU ENDEREÇO IPv4 CONFORME A SUA NECESSIDADE
#mais informações veja a documentação oficial em: https://linux.die.net/man/5/hosts.allow
sshd: ENDEREÇO_DA_SUA_SUB-REDE/SEU_CIDR
```
```bash
#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

## 06_ Atualizando e editando os arquivos de configuração do OpenSSH Server e do Banner
```bash
#fazendo o backup do arquivo de configuração do OpenSSH Server
#opção do comando cp: -v (verbose)
sudo cp -v /etc/ssh/sshd_config /etc/ssh/sshd_config.old

#atualizando o arquivo de configuração do OpenSSH Server do Github
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssh/sshd_config https://raw.githubusercontent.com/vaamonde/ubuntu-2204/main/conf/sshd_config

#atualizando arquivo de configuração do Banner do Ubuntu Server do Github
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/issue.net https://raw.githubusercontent.com/vaamonde/ubuntu-2204/main/conf/issue.net

#editando o arquivo de configuração do OpenSSH Server
sudo vim /etc/ssh/sshd_config

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#alterar a variável ListenAddress na linha: 27 
#ListenAddress 172.16.1.xxx para: SEU_ENDEREÇO_IPV4_DO_UBUNTU
#OBSERVAÇÃO: ALTERAR O ENDEREÇO IPv4 CONFORME A SUA NECESSIDADE
ListenAddress SEU_ENDEREÇO_IPV4_DO_UBUNTU

#alterar a variável AllowUsers na linha: 77
#OBSERVAÇÃO: ALTERAR O USUÁRIO DE ACESSO CONFORME A SUA NECESSIDADE
AllowUsers SEU_USUÁRIO

#alterar a variável AllowGroups na linha: 83
#OBSERVAÇÃO: ALTERAR O GRUPO DE ACESSO CONFORME A SUA NECESSIDADE
AllowGroups SEU_GRUPO_DO_USUÁRIO
```
```bash
#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#testando o arquivo de configuração do OpenSSH SERVER (NÃO COMENTADO NO VÍDEO)
#opção do comando sshd: -t (text mode check configuration)
sudo sshd -t

#editando o arquivo de configuração do Banner do Ubuntu Server
sudo vim /etc/issue.net

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#alterar a linha 5: Servidor e Admin
#OBSERVAÇÃO: ALTERAR O BANNER CONFORME A SUA NECESSIDADE
Servidor: ctnseunome - Admin: SEU NOME E SOBRENOME
```
```bash
#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#reiniciar e verificar o status do serviço do OpenSSH Server
sudo systemctl restart ssh
sudo systemctl status ssh

#analisando os Log's e mensagens de erro do Servidor do OpenSSH (NÃO COMENTADO NO VÍDEO)
#opção do comando journalctl: -t (identifier), x (catalog), e (pager-end), u (unit)
sudo journalctl -t sshd
sudo journalctl -xeu ssh
```

## 07_ Acessando remotamente o OpenSSH Server via Powershell e pelo software PuTTY
```bash
#acessando o OpenSSH via Powershell
```bash
#acessando o OpenSSH via Powershell
Windows
  Pesquisa do Windows
    Powershell
      ssh seu_usuário@ENDEREÇO_IPV4_SERVIDOR (alterar para o endereço IPv4 do seu servidor)

#acessando o OpenSSH via PuTTY
Windows
  Pesquisa do Windows
    PuTTY

Category
  Session
    Host Name (or IP address): seu_usuário@ENDEREÇO_IPV4_SERVIDOR (alterar para o endereço IPv4 do seu servidor)
    Port: 22
    SSH: On
<Open>

#acessando o OpenSSH via Git Bash no Windows
Windows
  Git Bash
    ssh seu_usuário@ENDEREÇO_IPV4_SERVIDOR (alterar o usuário e endereço IPv4 do seu servidor)

#acessando o OpenSSH via Terminal no Linux Mint
Linux
  Terminal: Ctrl + Alt + T
    ssh seu_usuário@ENDEREÇO_IPV4_SERVIDOR (alterar o usuário e endereço IPv4 do seu servidor)
```

```bash
#verificando informações detalhadas dos usuários logados no Ubuntu Server
sudo w
```

**OBSERVAÇÃO IMPORTANTE 01:** no comando: __`w`__ ele mostra na primeira linha as informações de:<br>
14:28:13   up 16 min,   1 user,   load average: 0,00, 0,00, 0,00<br>

| Valores | Descrição |
|---------|-----------|
| 14:28:13 | Data e Hora Atual do Sistema; |
| up 16 min | Período de Tempo Ativo; |
| 1 user | Número de Usuários Logados; |
| load average: 0,00, 0,00, 0,00 | Médias de Cargas do Sistema (1, 5 e 15 minutos). |

**OBSERVAÇÃO IMPORTANTE 02:** no comando: __`w`__ ele mostra as informações separadas por colunas:<br>
USER   TTY   FROM   LOGIN@   IDLE   JCPU   PCPU   WHAT<br>

| Colunas | Descrição | 
|---------|-----------|
| USER | usuário logado; |
| TTY | terminal do usuário |
| FROM | origem da conexão; |
| LOGIN@ | hora do login do usuário; |
| IDLE | tempo ocioso do usuário; |
| JCPU | tempo de CPU dos processos do TTY; |
| PCPU | tempo de CPU do processo do último comando o usuário; |
| WHAT | processo atual do usuário. |

```bash
#verificando os usuários logados remotamente no Ubuntu Server
#opção do comando who: -H (heading), -a (all)
sudo who -Ha
```

**OBSERVAÇÃO IMPORTANTE:** no comando: __`who`__ ele mostra as informações separadas por colunas:<br>
NAME   LINE   TIME   IDLE   PID COMMENT   EXIT<br>

| Colunas | Descrição | 
|---------|-----------|
| NAME | usuário logado; |
| LINE | terminal do usuário; |
| TIME | data e hora do login do usuário; |
| IDLE | tempo ocioso do usuário; |
| PID | identificação do processo; |
| COMMENT | origem da conexão do usuário; |
| EXIT | saída do processo. |

```bash
#verificando os usuários logados no Ubuntu Server
users
```