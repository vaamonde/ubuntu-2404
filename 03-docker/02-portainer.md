#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/08/2024<br>
#Data de atualização: 09/09/2024<br>
#Versão: 0.04<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS
#Testado e homologado no Docker-CE (Community Edition) 24.x
#Testado e homologado no Portainer-CE (Community Edition) 2.x

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando o Container do Portainer.io CE no Docker Hub<br>
#02_ Criando o Volume do Portainer.io CE no Docker-CE<br
#03_ Criando o Container do Portainer.io CE e utilizando o Volume criado no Docker-CE<br>
#04_ Verificando o Status do Container do Portainer.io CE no Docker-CE<br>
#05_ Verificando a Porta de Conexão do Portainer.io no Docker-CE<br>
#06_ Criando o arquivo de Serviço do Portainer.io CE no Ubuntu Server<br>
#07_ Habilitando o Serviço do Portainer.io no Ubuntu Server<br>
#08_ Verificando o Serviço e Versão do Portainer.io no Ubuntu Server<br>
#09_ Acessando e configurando o Portainer.io via navegador<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>
Site Oficial do Portainer.io: https://www.portainer.io/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER COMPOSE: Docker Compose é uma ferramenta para executar aplicativos de vários contêineres no Docker definidos usando o formato de arquivo Compose. Um arquivo Compose é usado para definir como um ou mais contêineres que compõem seu aplicativo são configurados. Depois de ter um arquivo Compose, você pode criar e iniciar seu aplicativo com um único comando: docker compose up.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O PORTAINER.IO: Portainer Community Edition (CE) é a nossa base. Com mais de meio milhão de usuários regulares, o CE é um poderoso conjunto de ferramentas de código aberto que permite criar e gerenciar facilmente contêineres no Docker, Docker Swarm, Kubernetes e Azure ACI.

[![Portainer](http://img.youtube.com/vi//0.jpg)]( "Portainer")

Link da vídeo aula: 

#01_ Pesquisando o Container do Portainer.io CE no Docker Hub<br>
```bash
#pesquisando o container do Portainer-io CE no Docker Hub
#opção do comando docker: search (Search the Docker Hub for images)
#link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
docker search portainer/portainer-ce:latest
```

#02_ Criando o Volume do Portainer.io CE no Docker-CE<br>
```bash
#criação do volume do Portainer.io CE
#opção do comando docker: volume create (Creates a new volume that containers can 
#consume and store data in)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
docker volume create portainer_data

#listando o volume criado do Portainer.io CE
#opção do comando docker: volume ls (List all the volumes known to Docker)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
docker volume ls

#inspecionando o volume criado do Portainer.io CE
#opção do comando docker: volume inspect (Display detailed information on one or more volumes)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/inspect/
docker volume inspect portainer_data
```

#03_ Criando o Container do Portainer.io CE e utilizando o Volume criado no Docker-CE<br>
```bash
#criação do container do Portainer.io CE utilizando o volume criado
#opção do comando docker: run (Run a command in a new container), --name (container name)
#-d (Run container in background and print container ID), -p (Publish a container’s port(s) 
#to the host), -v (Bind mount a volume), portainer/portainer-ce:latest (container imagem)
#opção da contra barra (\): criar uma quebra de linha no terminal
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
docker run --name portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data portainer/portainer-ce:latest
```

#04_ Verificando o Status do Container do Portainer.io CE no Docker-CE<br>
```bash
#listando as imagens de containers no Docker-CE
#opção do comando docker: images (List images container on system)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
docker images

#listando os container em execução no Docker-CE
#opção do comando docker: ps (List containers)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
docker ps

#listando o container do Portainer.io CE no Docker-CE
#opção do comando docker: ps (List containers), -q (quiet), -f (filter), name= (filter container name)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
docker ps -q -f name=portainer
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

#09_ Acessando e configurando o Portainer.io via navegador<br>
```bash
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
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio