#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 31/10/2024<br>
#Data de atualização: 03/11/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Daemon do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/12-docker-daemon.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerdaemon

Conteúdo estudado nesse desafio:<br>
#01_ Verificando o Status de Serviço do Docker-CE e do Docker Socket no Ubuntu Server<br>
#02_ Habilitando o Suporte Remoto do Docker-CE no SystemD<br>
#03_ Liberando o acesso Remoto da API (Application Programming Interface) do Docker-CE no Ubuntu Server<br>
#04_ Verificando as Informações (Info) do Sistema (System) do Docker-CE<br>
#05_ Testando a API (Application Programming Interface) do Docker Daemon via Navegador<br>
#06_ Instalando o Docker Cli no Linux Mint<br>
#07_ Integrando o Docker Cli com o Docker Daemon Remoto no Linux Mint<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER DAEMON: O Docker Daemon (ou dockerd) é o processo principal do Docker, que funciona como o “motor” responsável por gerenciar e controlar todos os recursos do Docker. Ele fica em execução em segundo plano e gerencia as tarefas do Docker, como criação, execução, pausa e exclusão de containers. O daemon é uma peça central no funcionamento do Docker, sendo responsável por orquestrar os containers, redes, volumes e imagens, além de se comunicar com a API do Docker.

O QUE É E PARA QUE SERVER O DOCKER SOCKET: O Docker Socket (normalmente localizado em /var/run/docker.sock em sistemas Linux) é um arquivo de socket do tipo UNIX domain socket que permite a comunicação entre o Docker Daemon e a CLI do Docker (docker). Ele funciona como um ponto de entrada local para a API do Docker, permitindo que processos locais possam interagir diretamente com o Docker Daemon para controlar containers, redes, imagens, volumes, e outras funções sem a necessidade de uma interface de rede (como TCP/IP).

[![Docker Daemon](http://img.youtube.com/vi//0.jpg)]( "Docker Daemon")

Link da vídeo aula: 

#01_ Verificando o Status de Serviço do Docker-CE e do Docker Socket no Ubuntu Server<br>
```bash
#docker.service...: É o serviço principal do Docker. Ele executa o daemon do Docker (dockerd), 
#                   que gerencia os containers, imagens, volumes, redes e outras funcionalidades
#                   do Docker.
#docker.socket....: Representa o socket de comunicação entre o cliente Docker (docker CLI) e o 
#                   daemon Docker.

#verificando o status de serviço do Docker-CE
sudo systemctl status docker.service

#verificando o status de serviço do Docker Socket
sudo systemctl status docker.socket

#visualizando os logs de serviço do Docker-CE
#opção do comando journalctl: -x (catalog), -u (unit)
sudo journalctl -xu docker.service

#visualizando os logs de serviço do Docker Socket
#opção do comando journalctl: -x (catalog), -u (unit)
sudo journalctl -xu docker.service

#visualizando os logs de sistema do Docker-CE
#opção do comando cat: -n (number)
#opção do comando grep: -i (ignore-case)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
sudo cat -n /var/log/syslog | grep -i docker
```

#02_ Habilitando o Suporte Remoto do Docker-CE no SystemD<br>
```bash
#editando o arquivo de inicialização do serviço do Docker-CE
sudo systemctl edit docker.service

#OBSERVAÇÃO IMPORTANTE: A porta remota padrão é a: 2376 se você estiver usando transporte 
#criptografado TLS/SSL ou: 2375 caso contrário.

#Documentação do Docker-CE: https://docs.docker.com/engine/daemon/remote-access/
#Documentação do Docker-CE: https://docs.docker.com/engine/daemon/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/dockerd/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/dockerd/#daemon-configuration-file

#ExecStart=/usr/bin/dockerd......: define o caminho do binário dockerd, que é o daemon do Docker.
#-H fd://........................: configura o Docker para ouvir no file descriptor fd://, que é 
#                                  a configuração padrão em alguns sistemas e permite a comunicação
#                                  com o Docker sem necessidade de definir uma porta específica.
#-H tcp://0.0.0.0:2375...........: expõe o daemon Docker na interface TCP em todas as interfaces de 
#                                  rede (0.0.0.0) e na porta 2375.
#-H unix:///var/run/docker.sock..: configura o Docker para ouvir no socket UNIX localizado em 
#                                  /var/run/docker.sock, permitindo o controle local do Docker sem 
#                                  uso de uma interface de rede.

#COPIAR E COLOCAR O CÓDIGO ABAIXO NO ARQUIVO DE SERVIÇO DO DOCKER-CE

#entrando no modo de edição do VIM
INSERT
```
```bash
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>

#reiniciando os serviços do SystemD
sudo systemctl daemon-reload

#reiniciando as configurações do Docker-CE
sudo systemctl restart docker.service

#verificando o status de serviço do Docker-CE
sudo systemctl status docker.service
```

#03_ Liberando o acesso Remoto da API (Application Programming Interface) do Docker-CE no Ubuntu Server<br>
```bash
#verificando a porta padrão do Docker-CE
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'2375' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do Docker-CE na porta (PORT) 2375 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 2375 proto tcp comment 'Liberando a sub-rede para acessar o Docker-CE'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#testando o acesso a Instância do Docker Daemon Remoto
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: -H --host (Daemon socket to connect to), container (Manage containers),
#ls (List containers), -a --all (Show all images (default hides intermediate images)
docker -H tcp://172.16.1.30:2375 container ls -a

#utilizar os navegadores para testar o acesso da API do Docker Daemon 
#Documentação do Docker-CE: https://docs.docker.com/engine/security/#docker-daemon-attack-surface
#Documentação do Docker-CE: https://docs.docker.com/engine/security/protect-access/
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:2375
```

#04_ Verificando as Informações (Info) do Sistema (System) do Docker-CE<br>
```bash
#verificando informações detalhadas do Sistema do Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/info/
docker system info

#verificando as informações da API Remoto da Docker na última linha
#OBSERVAÇÃO IMPORTANTE: CONFORME DESCRITO NAS LINHAS ABAIXO, ESSE PROCEDIMENTO DE ACESSO
#REMOTO NO DOCKER-CE É CONSIDERADO INSEGURO HOJE EM DIA, NOS VÍDEOS DE SEGURANÇA VOU FAZER
#O ACESSO REMOTO VIA TÚNEL SSH QUE É INDICADO PELA COMUNIDADE E PELO DOCKER.

[DEPRECATION NOTICE]: API is accessible on http://0.0.0.0:2375 without encryption.
Access to the remote API is equivalent to root access on the host. Refer to the 
'Docker daemon attack surface' section in the documentation for more information: 
https://docs.docker.com/go/attack-surface/
In future versions this will be a hard failure preventing the daemon from starting! 
Learn more at: https://docs.docker.com/go/api-security/
```

#05_ Testando a API (Application Programming Interface) do Docker Daemon via Navegador<br>
```bash
#utilizar os navegadores para testar a API de Informações do Docker
#Documentação do Docker: https://docs.docker.com/reference/api/engine/version/v1.43/
firefox ou google chrome: http://172.16.1.30:2375/v1.43/info

#utilizar os navegadores para testar a API de Imagens do Docker
#Documentação do Docker: https://docs.docker.com/reference/api/engine/version/v1.43/
firefox ou google chrome: http://172.16.1.30:2375/v1.43/images/json

#utilizar os navegadores para testar a API de Containers do Docker
#Documentação do Docker: https://docs.docker.com/reference/api/engine/version/v1.43/
firefox ou google chrome: http://172.16.1.30:2375/v1.43/containers/json

#utilizar os navegadores para testar a API de Redes do Docker
#Documentação do Docker: https://docs.docker.com/reference/api/engine/version/v1.43/
firefox ou google chrome: http://172.16.1.30:2375/v1.43/networks

#utilizar os navegadores para testar a API de Volumes do Docker
#Documentação do Docker: https://docs.docker.com/reference/api/engine/version/v1.43/
firefox ou google chrome: http://172.16.1.30:2375/v1.43/volumes
```

#06_ Instalando o Docker Cli no Linux Mint<br>
```bash
#instalação das dependências básicas do Docker-CE e do Docker Cli
#opção da contra barra (\): criar uma quebra de linha no terminal
sudo apt install vim git python3 python3-pip apt-transport-https ca-certificates curl \
software-properties-common linux-image-generic linux-image-extra-virtual lsof jq

#download da Chave GPG do Docker-CE e do Docker Cli
#opções do comando wget: -q (quiet)
wget -q https://download.docker.com/linux/ubuntu/gpg

#convertendo a Chave GPG do Docker-CE e do Docker Cli
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
#opção do redirecionador > (maior): Redireciona a saída padrão (STDOUT)
cat gpg | gpg --dearmor | sudo tee /usr/share/keyrings/docker-ce.gpg > /dev/null

#adicionando o repositório do Docker-CE e do Docker Cli
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-ce.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker.list

#atualizando as lista do apt com o novo repositório do Docker
sudo apt update

#instalando o Docker Cli
#opção do comando apt: --install-recommends (Consider suggested packages as a dependency for installing)
sudo apt install --install-recommends docker-ce-cli

#verificando a versão do Docker Cli
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/
#opção do comando docker: version (Show the Docker version information)
docker version

#verificando as informações do sistema do Docker Cli
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/info/
#opção do comando docker: system (Manage Docker), info (Display system-wide information)
docker system info
```

#07_ Integrando o Docker Cli com o Docker Daemon Remoto no Linux Mint<br>
```bash
#testando o acesso a Instância do Docker Daemon Remoto
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: -H --host (	Daemon socket to connect to)container (Manage containers),
#ls (List containers), -a --all (Show all images (default hides intermediate images)
docker -H tcp://172.16.1.30:2375 container ls -a

#exportando a variável do DOCKER_HOST com o endereço do Docker Damon
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/
#opção da variável DOCKER_HOST: Daemon socket to connect to.
export DOCKER_HOST=tcp://172.16.1.30:2375

#verificando a variável do DOCKER_HOST
echo $DOCKER_HOST

#atualizando o arquivo bashrc do perfil do usuário com a variável do DOCKER_HOST
#opção do redirecionador de saída padrão >> (Maior Maior): Redireciona a saída padrão, anexando
#opção do símbolo ~ (til): representa o diretório home do usuário atual.
#opção do símbolo . (ponto): representa que o arquivo está dentro do diretório especificado
echo 'export DOCKER_HOST=tcp://172.16.1.30:2375' >> ~/.bashrc

#verificando a variável do DOCKER_HOST no arquivo bashrc
#opção do símbolo ~ (til): representa o diretório home do usuário atual.
#opção do símbolo . (ponto): representa que o arquivo está dentro do diretório especificado
tail ~/.bashrc

#recarregando as informações das variáveis do arquivo bashrc
#opção do símbolo ~ (til): representa o diretório home do usuário atual.
#opção do símbolo . (ponto): representa que o arquivo está dentro do diretório especificado
source ~/.bashrc

#testando novamente o acesso a Instância do Docker Daemon Remoto sem indicar o Host
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all 
#(Show all images (default hides intermediate images)
docker container ls -a
```

========================================DESAFIOS=========================================

**#14_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 13 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/09-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub