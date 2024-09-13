#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/08/2024<br>
#Data de atualização: 13/09/2024<br>
#Versão: 0.04<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

**OBSERVAÇÃO IMPORTANTE: O VÍDEO DAS CONFIGURAÇÕES DO OPENSSH SERVER DO UBUNTU SERVER ESTÁ NA VERSÃO 22.04.x LTS, AS CONFIGURAÇÕES É A MESMA NA VERSÃO 24.04.x LTS, LEVANDO EM CONSIDERAÇÃO APENAS AS DEPENDÊNCIAS DE APLICATIVOS QUE TEM NESSA DOCUMENTAÇÃO, ESSE CURSO ESTÁ USANDO A INSTALAÇÃO MINIMIZADA (MINIMIZED) DO UBUNTU SERVER.**

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

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

OpenSSH é um conjunto de utilitários de rede relacionado à segurança que provém a criptografia em sessões de comunicações em uma rede de computadores usando o protocolo SSH.

[![OpenSSH Server](http://img.youtube.com/vi/-cforvm_oV0/0.jpg)](https://www.youtube.com/watch?v=-cforvm_oV0 "OpenSSH Server")

Link da vídeo aula: https://www.youtube.com/watch?v=-cforvm_oV0

**OBSERVAÇÃO IMPORTANTE: CASO VOCÊ QUEIRA APLICAR A SEGURANÇA AVANÇADA NO SERVIÇO DO OPENSSH SERVER, VEJA O VÍDEO DE CONFIGURAÇÃO FEITA NO CURSO DO CA-CERTIFICATE, NESSE VÍDEO É HABILITADO OS RECURSOS DE CHAVE PRIVADA/PÚBLICA E CONFIGURADO OS LOGS DETALHADO DE CONEXÃO REMOTA.**

[![OpenSSH Avançado](http://img.youtube.com/vi/Ri-_KMM361o/0.jpg)](https://www.youtube.com/watch?v=Ri-_KMM361o "OpenSSH Avançado")

Link da vídeo aula: https://www.youtube.com/watch?v=Ri-_KMM361o

Link da documentação: https://github.com/vaamonde/ca-certificates/blob/main/01-ca/01-openssh.md

#01_ Instalando o OpenSSH Server e Client no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: executar a instalação somente se você no processo de instalar
#o Ubuntu Server não marcou a opção: Install OpenSSH, caso contrário o mesmo já está
#instalado e pré-configurado.

#atualizando as listas do Apt
sudo apt update

#instalando o OpenSSH Server e Client
sudo apt install openssh-server openssh-client openssl 
```

#02_ Verificando o Serviço e Versão do OpenSSH Server e Client no Ubuntu Server<br>
```bash
#verificando o serviço do OpenSSH Server
sudo systemctl status ssh
sudo systemctl restart ssh
sudo systemctl stop ssh
sudo systemctl start ssh

#verificando as versões do OpenSSH Server e Client
#opção do comando sshd e ssh: -V (version)
sudo sshd -V
sudo ssh -V
```

#03_ Verificando a Porta de Conexão do OpenSSH Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#verificando a porta padrão do OpenSSH Server
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'22' -sTCP:LISTEN
```

#04_ Localização dos Arquivos de Configuração do OpenSSH Server<br>
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

#05_ Habilitando a segurança de acesso ao OpenSSH Server<br>
```bash
#editando o arquivo de configuração de Negação de Serviço e Host
sudo vim /etc/hosts.deny

#mostrando o número de linha do arquivo hosts.deny
ESC SHIFT :set number <Enter>
INSERT

	#inserir as informações na linha: 17
	#lista de serviço: lista de hosts: comando
	#OBSERVAÇÃO: A OPÇÃO ALL: ALL BLOQUEIA TODOS OS SERVIÇOS (DAEMONS) E REDE/HOSTS.
	ALL: ALL

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#editando o arquivo de configuração de Liberação de Serviço e Host
sudo vim /etc/hosts.allow

#mostrando o número de linha do arquivo hosts.allow
ESC SHIFT :set number <Enter>
INSERT

	#inserir as informações na linha: 10
	#lista de serviço: lista de hosts: comando
	#OBSERVAÇÃO: ALTERAR A REDE OU ENDEREÇO IPv4 CONFORME A SUA NECESSIDADE
	sshd: 172.16.1.0/24

#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

#06_ Atualizando e editando os arquivos de configuração do OpenSSH Server e do Banner<br>
```bash
#fazendo o backup do arquivo de configuração do OpenSSH Server
#opção do comando cp: -v (verbose)
sudo cp -v /etc/ssh/sshd_config /etc/ssh/sshd_config.old

#atualizando o arquivo de configuração do OpenSSH Server do Github
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssh/sshd_config https://raw.githubusercontent.com/vaamonde/ubuntu-2404/main/conf/sshd_config

#atualizando arquivo de configuração do Banner do Ubuntu Server do Github
sudo wget -v -O /etc/issue.net https://raw.githubusercontent.com/vaamonde/ubuntu-2404/main/conf/issue.net

#editando o arquivo de configuração do OpenSSH Server
sudo vim /etc/ssh/sshd_config
INSERT

	#alterar a variável ListenAddress na linha: 27 
	#ListenAddress 172.16.1.xxx para: SEU_ENDEREÇO_IPV4_DO_UBUNTU
	#OBSERVAÇÃO: ALTERAR O ENDEREÇO IPv4 CONFORME A SUA NECESSIDADE
	ListenAddress 172.16.1.30

	#alterar a variável AllowUsers na linha: 77
	#OBSERVAÇÃO: ALTERAR O USUÁRIO DE ACESSO CONFORME A SUA NECESSIDADE
	AllowUsers vaamonde

	#alterar a variável AllowGroups na linha: 83
	#OBSERVAÇÃO: ALTERAR O GRUPO DE ACESSO CONFORME A SUA NECESSIDADE
	AllowGroups vaamonde

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#testando o arquivo de configuração do OpenSSH SERVER (NÃO COMENTADO NO VÍDEO)
#opção do comando sshd: -t (text mode check configuration)
sudo sshd -t

#editando o arquivo de configuração do Banner do Ubuntu Server
sudo vim /etc/issue.net
INSERT

	#alterar a linha 5: Servidor e Admin
	#OBSERVAÇÃO: ALTERAR O BANNER CONFORME A SUA NECESSIDADE
	Servidor: ctnvaamonde - Admin: Robson Vaamonde

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#reiniciar o serviço do OpenSSH Server
sudo systemctl restart ssh
sudo systemctl status ssh

#analisando os Log's e mensagens de erro do Servidor do OpenSSH (NÃO COMENTADO NO VÍDEO)
#opção do comando journalctl: -t (identifier), x (catalog), e (pager-end), u (unit)
sudo journalctl -t sshd
sudo journalctl -xeu ssh
```

#07_ Acessando remotamente o OpenSSH Server via Powershell e pelo software PuTTY<br>
```bash
#acessando o OpenSSH via Powershell
Windows
  Pesquisa do Windows
    Powershell
      ssh vaamonde@172.16.1.30 (alterar para o endereço IPv4 do seu servidor)

#acessando o OpenSSH via PuTTY
Windows
  Pesquisa do Windows
    PuTTY

Category
  Session
    Host Name (or IP address): vaamonde@172.16.1.30 (alterar para o endereço IPv4 do seu servidor)
    Port: 22
    SSH: On
<Open>

#acessando o OpenSSH via Terminal no Linux Mint
Linux
  Terminal: Ctrl + Alt + T
    ssh vaamonde@172.16.1.30 (alterar o usuário e endereço IPv4 do seu servidor)

#verificando informações detalhadas dos usuários logados no Ubuntu Server
#OBSERVAÇÃO IMPORTANTE 01: no comando: w ele mostra na primeira linhas as
#informações de: Data e Hora Atual do Sistema, Período de Tempo Ativo, Número
#de Usuários Logados e as Médias de Cargas do Sistema (1, 5 e 15 minutos).
#OBSERVAÇÃO IMPORTANTE 02: no comando: w ele mostra as informações separadas
#por colunas: USER (usuário logado), TTY (terminal do usuário), FROM (origem
#da conexão), LOGIN@ (hora do login do usuário), IDLE (tempo ocioso do usuário), 
#JCPU (tempo de CPU dos processo do TTY), PCPU (tempo de CPU do processo do
#último comando o usuário), WHAT (processo atual do usuário).
sudo w

#verificando os usuários logados remotamente no Ubuntu Server
#OBSERVAÇÃO IMPORTANTE: no comando: who ele mostra as informações separadas
#por colunas: NAME (usuário logado), LINE (terminal do usuário), TIME (data e 
#hora do login do usuário), IDLE (tempo ocioso do usuário), PID (identificação 
#do processo), COMMENT (origem da conexão do usuário), EXIT ().
#opção do comando who: -H (heading), -a (all)
sudo who -Ha

#verificando os usuários logados no Ubuntu Server
users
```