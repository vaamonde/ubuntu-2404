#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 22/10/2024<br>
#Data de atualização: 31/10/2024<br>
#Versão: 0.08<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Dockerfile dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/08-dockerfile-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerfile

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando (Search) a Imagem (Image) do Debian no Docker-HUB do Docker-CE<br>
#02_ Baixando (Pull) as Imagens (Image) do Debian para o Repositório Local do Docker-CE<br>
#03_ Criando o Primeiro arquivo do Dockerfile para Construir (Build) o nosso Contêiner (Container) no Docker-CE<br>
#04_ Construindo (Build) o nosso Contêiner (Container) utilizando a Imagem (Image) do Debian no Docker-CE<br>
#05_ Criando o Segundo arquivo do Dockerfile para Construir (Build) o nosso Contêiner (Container) no Docker-CE<br>
#06_ Construindo (Build) o nosso Contêiner (Container) utilizando a Imagem (Image) do Debian no Docker-CE<br>
#07_ Executando (Run) o Contêiner (Container) da Imagem (Image) do NGINX no Docker-CE<br>
#08_ Verificando a Porta de Conexão, Protocolo e Liberando o acesso ao site do NGINX no Docker-CE<br>
#09_ Verificando o Histórico (History) da Imagem (Image) do NGINX no Docker-CE<br>
#10_ Executando (Exec) comandos na Imagem (Image) do Contêiner (Container) no Docker-CE<br>
#11_ Removendo (RM) Volumes (Volume), Contêiners (Container), Imagens (Image) no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O IMAGE DOCKER: O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

O QUE É E PARA QUE SERVER O DOCKERFILE: O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

[![Dockerfile Docker](http://img.youtube.com/vi//0.jpg)]( "Dockerfile Docker")

Link da vídeo aula: 

#01_ Pesquisando (Search) a Imagem (Image) do Debian no Docker-HUB do Docker-CE<br>
```bash
#pesquisando a imagem do container do Debian oficial no Docker-HUB
#Link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), is-official (parameters and value used in the filter)
docker search debian --filter is-official=true
```

#02_ Baixando (Pull) a Imagem (Image) do Debian para o Repositório Local do Docker-CE<br>
```bash
#baixando a imagem do Debian do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#Link de consulta do Docker Hub: https://hub.docker.com/_/debian
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull debian

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

#03_ Criando o Primeiro arquivo do Dockerfile para Construir (Build) o nosso Contêiner (Container) no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: É INDICADO SEMPRE TRABALHAR COM DIRETÓRIOS DE PROJETO QUANDO
#VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE OU COM O DOCKER COMPOSE. CADA PROJETO
#DEVE FICAR EM UM DIRETÓRIOS SEPARADO PARA FACILITAR A CONSTRUÇÃO DOS CONTAINERS.

#criando o diretório de teste01 do Dockerfile
#opção do comando mkdir: -v (verbose)
mkdir -v teste01/

#criando o arquivo do Dockerfile no diretório teste01
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#Documentação do Docker-CE: https://docs.docker.com/build/concepts/dockerfile/
vim teste01/Dockerfile

#entrando no modo de edição do VIM
INSERT
```
```bash
#COPIAR E COLAR: as configurações básicas do Dockerfile

#utilizar a Imagem do Debian para criar o container 
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#from
#FROM (Create a new build stage from a base image)
FROM debian

#utilizar o comando echo para imprimir na saída padrão a mensagem 
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#run
#RUM (Execute build commands)
RUN /bin/echo "Testando o Dockerfile no Debian"
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>
```

#04_ Construindo (Build) o nosso Contêiner (Container) utilizando a Imagem (Image) do Debian no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: QUANDO VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE NÃO É
#NECESSÁRIO INDICAR O NOME DO ARQUIVO, APENAS O DIRETÓRIO DO PROJETO, SE VOCÊ JÁ
#ESTÁ NO DIRETÓRIO DO PROJETO, EXEMPLO: /home/vaamonde/teste01 UTILIZAR NO COMANDO 
#DO DOCKER A OPÇÃO DE: . (ponto) QUE INDICA QUE VOCÊ ESTÁ NO DIRETÓRIO CORRENTE DO
#PROJETO.

#criando o container do Debian utilizando o Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/build-legacy/
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#opção do comando docker: build (Build an image from a Dockerfile), -t --tag (Name and 
#optionally a tag in the name:tag format), teste01 (Directory path Dockerfile)
docker build --tag vava:0.1 teste01/

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

#05_ Criando o Segundo arquivo do Dockerfile para Construir (Build) a nossa Imagem (Image) de Contêiner (Container) no Docker-CE<br>
```bash
#criando o diretório de teste02 do Dockerfile
#opção do comando mkdir: -v (verbose)
mkdir -v teste02/

#baixando uma página de teste Index em HTML do Github
#opção do comando wget: -O (output-document file)
wget -O teste02/index.html https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/index.html

#baixando o arquivo de configuração básica do site padrão do NGINX do Github
#opção do comando wget: -O (output-document file)
wget -O teste02/default https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/default

#criando o arquivo do Dockerfile no diretório teste02
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#Documentação do Docker-CE: https://docs.docker.com/build/concepts/dockerfile/
vim teste02/Dockerfile

#entrando no modo de edição do VIM
INSERT
```
```bash
#COPIAR E COLAR: as configurações básicas do Dockerfile

#utilizar a Imagem do Debian para criar o container 
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#from
#FROM (Create a new build stage from a base image)
FROM debian

#utilizando os Rótulos (labels) para identificar a imagem
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#label
#LABEL (Add metadata to an image)
LABEL maintainer="Robson Vaamonde"
LABEL version="0.2"
LABEL description="Segundo projeto do Dockerfile"

#criando argumentos da imagem padrão do NGINX quando utilizar o comando apt
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#arg
#Documentação do Debconf: https://manpages.debian.org/jessie/debconf-doc/debconf.7.en.html
#opção da variável DEBIAN_FRONTEND: noninteractive (This is the anti-frontend. It never 
#interacts with you at all, and makes the default answers be used for all questions.)
ARG DEBIAN_FRONTEND=noninteractive

#utilizar o comando apt para atualizar a imagem
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#run
#RUM (Execute build commands)
#opção do comando apt-get: update (Resynchronize the package index files from their sources), 
#upgrade (Install the newest versions of all packages currently installed on the system), 
#-y (yes confirmation)
#opção do operador lógico &&: E lógico (AND)
RUN apt-get update && apt-get upgrade -y

#instalando o NGINX para testar o Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#run
#RUM (Execute build commands)
#opção do comando apt-get: install (install is followed by one or more package names), -y 
#(yes confirmation)
RUN apt-get install nginx procps -y

#copiar o arquivo de configuração do site padrão do NGINX do diretório de projeto
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#copy
#Documentação do NGINX: http://nginx.org/en/docs/beginners_guide.html
#COPY: (Copy files and directories)
COPY default /etc/nginx/sites-available/default

#criando o diretório padrão de trabalho do NGINX
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#workdir
#WORKDIR (Change working directory)
WORKDIR /var/www/html/

#criando o volume da imagem padrão do NGINX
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#volume
#VOLUME (Create volume mounts)
VOLUME /var/www/html/

#copiar o arquivo de html padrão para o Document Root do NGINX
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#copy
#Documentação do NGINX: http://nginx.org/en/docs/beginners_guide.html
#COPY: (Copy files and directories)
COPY index.html /var/www/html/index.html

#expondo a porta de acesso ao NGINX no Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#expose
#EXPOSE (Describe which ports your application is listening on)
EXPOSE 80

#iniciando o NGINX na imagem do Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#cmd
#Documentação do NGINX: http://nginx.org/en/docs/switches.html
#CMD (Specify default commands)
#opções do comando nginx: -g (directives), daemon off (Determines whether nginx should 
#become a daemon)
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>

#listando o conteúdo do diretório de projeto do Dockerfile
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh teste02/
```

#06_ Construindo (Build) a nossa Imagem (Image) de Contêiner (Container) utilizando o Debian no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: QUANDO VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE NÃO É
#NECESSÁRIO INDICAR O NOME DO ARQUIVO, APENAS O DIRETÓRIO DO PROJETO, SE VOCÊ JÁ
#ESTÁ NO DIRETÓRIO DO PROJETO, EXEMPLO: /home/vaamonde/teste02 UTILIZAR NO COMANDO 
#DO DOCKER A OPÇÃO DE: . (ponto) QUE INDICA QUE VOCÊ ESTÁ NO DIRETÓRIO CORRENTE DO
#PROJETO.

#criando o container do NGINX utilizando o Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/build-legacy/
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#opção do comando docker: build (Build an image from a Dockerfile), --no-cache (Do not 
#use cache when building the image)-t --tag (Name and optionally a tag in the name:tag 
#format), teste02 (Directory path Dockerfile)
docker build --no-cache --tag nginx:0.1 teste02/

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

#07_ Executando (Run) o Contêiner (Container) da Imagem (Image) do NGINX no Docker-CE<br>
```bash
#criando volume local no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), create (Create a volume), webserver
#(Volume name)
docker volume create webserver

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#executando o container do NGINX em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID), --name
#(Assign a name to the container), -v --volume (Bind mount a volume), -p --publish (Publish 
#a container's port(s) to the host) nginx:0.1 (imagem docker hub)
docker container run -d --name webserver --volume webserver:/var/www/html --publish 80:80 nginx:0.1

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a
```

#08_ Verificando a Porta de Conexão, Protocolo e Liberando o acesso ao site do NGINX no Docker-CE<br>
```bash
#verificando o redirecionamento da Porta padrão do NGINX
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'80' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do NGINX Server na porta (PORT) 80 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#Testando o acesso ao site do NGINX via terminal
#opções do comando curl: -s (silent), -S (show-error), -f (fail)
curl -sSf http://172.16.1.30

#utilizar os navegadores para testar o acesso ao NGINX 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver
```

#09_ Verificando o Histórico (History) e Inspecionando (Inspect) a Imagem (Image) do NGINX no Docker-CE<br>
```bash
#verificando os históricos da imagem do NGINX localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/history/
#opção do comando docker: images (List all imagens docker), history (Show the history of an image)
#nginx:0.1 (imagem docker)
docker image history nginx:0.1

#inspecionando a imagem do NGINX localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/inspect/
#opção do comando docker: images (List all imagens docker), inspect (Display detailed information 
#on one or more images), nginx:0.1 (imagem docker)
docker image inspect nginx:0.1
```

#10_ Executando (Exec) comandos na Imagem (Image) do Contêiner (Container) no Docker-CE<br>
```bash
#executando e acessando o Bash remoto do container do NGINX
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/exec/
#opção do comando docker: container (Manage containers), exec (Execute a command in a running 
#container), -i --interactive (Keep STDIN open even if not attached), -t --tty (Allocate  a 
#pseudo-TTY), webserver (imagem docker hub)
docker container exec -it webserver /bin/bash

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)
```

#11_ Removendo (RM) Volumes (Volume), Contêiners (Container), Imagens (Image) no Docker-CE<br>
```bash
#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a

#removendo o container do NGINX no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#-f --force (Force the removal of a running container), webserver (Container Names or ID)
docker container rm -f webserver

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#limpando o volume do Webserver no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/rm/
#opção do comando docker: volume (Manage volumes), rm (Remove one or more volumes), -f 
#--force (Force the removal of one or more volumes)
docker volume rm -f webserver

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#removendo as imagens do Ubuntu Apache2 e NGINX localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#-f --force (Force removal of the image), vava:0.1 debian (imagem docker)
docker image rm -f vava:0.1 nginx:0.1 debian

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao NGINX (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'
Proceed with operation (y|n)? y <Enter>

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#listando os diretórios de testes do Dockerfile
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#removendo os diretórios de testes do Dockerfile
#opção do comando rm: -R (recursive), f (force), -v (verbose)
rm -Rfv teste01/ teste02/
```

========================================DESAFIOS=========================================

**#12_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 11 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

**#13_ DESAFIO-02:** UTILIZAR A IMAGEM DE CONTAINER DO: __`CentOS`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 11 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver02`__, UTILIZANDO O VOLUME DE: __`webserver02`__ E A REDE: __`webserver02`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Dockerfile dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/08-dockerfile-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerfile