#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/08/2024<br>
#Data de atualização: 01/10/2024<br>
#Versão: 0.07<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/02-portainer.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando o Container do Portainer.io CE no Docker Hub<br>
#02_ Criando o Volume do Portainer.io CE no Docker-CE<br>
#03_ Criando o Container do Portainer.io CE e utilizando o Volume criado no Docker-CE<br>
#04_ Verificando o Status do Container do Portainer.io CE no Docker-CE<br>
#05_ Verificando a Porta de Conexão do Portainer.io no Docker-CE<br>
#06_ Criando o arquivo de Serviço do Portainer.io CE no Ubuntu Server<br>
#07_ Habilitando o Serviço do Portainer.io no Ubuntu Server<br>
#08_ Verificando o Serviço e Versão do Portainer.io no Ubuntu Server<br>
#09_ Liberando a Conexão de Entrada da Porta do Portainer no UFW do Ubuntu Server<br>
#10_ Acessando e configurando o Portainer.io via navegador<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>
Site Oficial do Portainer.io: https://www.portainer.io/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER COMPOSE: Docker Compose é uma ferramenta para executar aplicativos de vários contêineres no Docker definidos usando o formato de arquivo Compose. Um arquivo Compose é usado para definir como um ou mais contêineres que compõem seu aplicativo são configurados. Depois de ter um arquivo Compose, você pode criar e iniciar seu aplicativo com um único comando: docker compose up.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O PORTAINER.IO: Portainer Community Edition (CE) é a nossa base. Com mais de meio milhão de usuários regulares, o CE é um poderoso conjunto de ferramentas de código aberto que permite criar e gerenciar facilmente contêineres no Docker, Docker Swarm, Kubernetes e Azure ACI.

[![Portainer Install](http://img.youtube.com/vi/xe_ZZ_hrudw/0.jpg)](https://www.youtube.com/watch?v=xe_ZZ_hrudw "Portainer Isntall")

Link da vídeo aula: https://www.youtube.com/watch?v=xe_ZZ_hrudw

#01_ Pesquisando o Container do Portainer.io CE no Docker Hub<br>
```bash
#pesquisando o container do Portainer-io CE no Docker Hub
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#link de consulta do Docker Hub: https://hub.docker.com/
#opção do comando docker: search (Search the Docker Hub for images), portainer/portainer-ce:latest
#(Refers to the Community Edition (CE) version of Portainer, :latest: Indicates that the latest 
#available version of the image will be used)
docker search portainer/portainer-ce:latest
```

#02_ Criando o Volume do Portainer.io CE no Docker-CE<br>
```bash
#criação do volume do Portainer.io CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#opção do comando docker: volume (Manage volumes), create (Creates a new volume that 
#containers can consume and store data in), portainer_data (Volume Name)
docker volume create portainer_data

#informações que são mostradas na saída do comando: docker volume
#DRIVER......: local de armazenamento do volume;
#VOLUME NAME.: nome do volume criado;

#listando o volume criado do Portainer.io CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#opção do comando docker: volume (Manage volumes), ls (List all the volumes known to Docker)
docker volume ls

#inspecionando o volume criado do Portainer.io CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/inspect/
#opção do comando docker: volume (Manage volumes), inspect (Display detailed information on 
#one or more volumes), portainer_data (Volume Name)
docker volume inspect portainer_data
```

#03_ Criando o Container do Portainer.io CE e utilizando o Volume criado no Docker-CE<br>
```bash
#criação do container do Portainer.io CE utilizando o volume criado
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: run (Run a command in a new container), --name (container name)
#-d (Run container in background and print container ID), -p (Publish a container’s port(s) 
#to the host), -v (socket Docker do host), -v (Bind mount a volume), portainer/portainer-ce:latest
#(container imagem)
#opção da contra barra (\): criar uma quebra de linha no terminal
docker run --name portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data portainer/portainer-ce:latest
```

#04_ Verificando o Status do Container do Portainer.io CE no Docker-CE<br>
```bash
#informações que são mostradas na saída do comando: docker images
#REPOSITORY.: nome da imagem do docker;
#TAG........: versão da imagem do docker;
#IMAGE ID...: identificação da imagem do docker;
#CREATED....: quando a imagem foi criada;
#SIZE.......: tamanho da imagem do docker.

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List images container on system)
docker images

#informações que são mostradas na saída do comando: docker container ls
#CONTAINER ID..: dentificação única do container no docker;
#IMAGE.........: imagem utilizada na execução do container no docker;
#COMMAND.......: comando em execução da imagem do docker;
#CREATED.......: quando a imagem foi criada no docker;
#STATUS........: status atual da imagem no docker;
#PORTS.........: porta do container e do host utilizada para se comunicar no docker;
#NAMES.........: nome do container no docker.

#listando todos os containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all 
#(Show all images (default hides intermediate images))
docker container ls -a

#filtrando o container do Portainer.io CE no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls//
#opção do comando docker: container (Manage containers), ls (List containers), -q (quiet), 
#-f (filter), name= (filter container name)
docker container ls -q -f name=portainer
```

#05_ Verificando a Porta de Conexão do Portainer.io no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#verificando a porta padrão do Portainer.io
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'9000' -sTCP:LISTEN
```

#06_ Criando o arquivo de Serviço do Portainer.io CE no Ubuntu Server<br>
```bash
#baixado o arquivo de serviço do Portainer.io do Github
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/systemd/system/portainer.service https://raw.githubusercontent.com/vaamonde/ubuntu-2404/main/conf/portainer.service
```

#07_ Habilitando o Serviço do Portainer.io no Ubuntu Server<br>
```bash
#habilitando o serviço do Portainer.io
sudo systemctl daemon-reload
sudo systemctl enable portainer
sudo systemctl stop portainer
sudo systemctl start portainer
```

#08_ Verificando o Serviço e Versão do Portainer.io no Ubuntu Server<br>
```bash
#verificando o serviço do Apache Tomcat Server
sudo systemctl status portainer
sudo systemctl restart portainer
sudo systemctl stop portainer
sudo systemctl start portainer

#analisando os Log's e mensagens de erro do Servidor do Portainer.io
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu portainer
```

#09_ Liberando a Conexão de Entrada da Porta do Portainer no UFW do Ubuntu Server<br>
```bash
#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do Portainer na porta (PORT) 9000 via protocolo TCP (PROTO TCP)
sudo ufw limit log-all from 172.16.1.0/24 to 172.16.1.30 port 9000 proto tcp comment 'Liberando a sub-rede para acessar o Portainer'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose
```

#10_ Acessando e configurando o Portainer.io via navegador<br>
```bash
#OBSERVAÇÃO IMPORTANTE (NÃO COMENTADO NO VÍDEO): SE VOCÊ DEMORAR MUITO PARA ACESSAR PELA
#PRIMEIRA VEZ O PORTAINER O ERRO DE: Failure: Unable to resolve server settings and status, 
#PARA RESOLVER ESSA ALHA VOCÊ PRECISAR REINICIAR O CONTAINER DO PORTAINER UTILIZANDO, POR 
#EXEMPLO O COMANDO: sudo systemctl stop portainer E DEPOIS O COMANDO: sudo systemctl start 
#portainer.

#utilizar os navegadores para testar o acesso ao Portainer.io 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:9000

#Informações que serão solicitadas na configuração via Web do Portainer.io
Please create the initial administrator user.
  Username: vaamonde
  Password: Vaamonde@2024
  Confirm password: Vaamonde@2024
  (ON) Allow collection of anonymous statistics. You can find more information about this in our privacy policy.
<Create User>

#configurações iniciais do Portainer.io
Quick Setup
  Environment Wizard
    <Get Started>

#acessando as configurações do Docker-CE do Portainer
Home
  Enviroments
    Docker-CE (local)
      Dashboard
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/02-portainer.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio