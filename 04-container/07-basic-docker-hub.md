#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 30/10/2024<br>
#Data de atualização: 06/04/2025<br>
#Versão: 0.04<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

**OBSERVAÇÃO IMPORTANTE:** COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: *Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática*

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/09-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub

Conteúdo estudado nesse desafio:<br>
#01_ Criando um Conta (Sing up) no site Oficial do Docker Hub<br>
#02_ Pesquisando (Search) a Imagem (Image) do Node.JS no Docker-HUB do Docker-CE<br>
#03_ Baixando (Pull) a Imagem (Image) do Node.JS para o Repositório Local do Docker-CE<br>
#04_ Criando o Projeto do Node.JS e Construindo (Build) o nosso Contêiner (Container) no Docker-CE<br>
#05_ Construindo (Build) a nossa Imagem (Image) de Contêiner (Container) utilizando o Node.JS no Docker-CE<br>
#06_ Executando (Run) o Contêiner (Container) da Imagem (Image) do Node.JS no Docker-CE<br>
#07_ Verificando a Porta de Conexão, Protocolo e Liberando o acesso da aplicação do Node.JS no Docker-CE<br>
#08_ Verificando o Histórico (History) e Inspecionando (Inspect) a Imagem (Image) do Node.JS no Docker-CE<br>
#09_ Executando (Exec) comandos na Imagem (Image) do Contêiner (Container) no Docker-CE<br>
#10_ Se autenticando (Login) e Registrando (Registry) no Docker Hub via Docker-CE<br>
#11_ Enviando (Push) a Imagem (Image) para o Docker Hub via Docker-CE<br>
#12_ Consultando no Docker Hub a Imagem (Image) Enviada (Push/Upload) e no Docker-CE<br>
#13_ Removendo (RM) Volumes (Volume), Contêiners (Container), Imagens (Image) no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

**O QUE É E PARA QUE SERVER O DOCKER CE:** Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

**O QUE É E PARA QUE SERVER O DOCKER HUB:** Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

**O QUE É E PARA QUE SERVER O IMAGE DOCKER:** O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

**O QUE É E PARA QUE SERVER O DOCKERFILE:** O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

[![Docker Hub](http://img.youtube.com/vi/BjxBWOFZqxw/0.jpg)](https://www.youtube.com/watch?v=BjxBWOFZqxw "Docker Hub")

Link da vídeo aula: https://www.youtube.com/watch?v=BjxBWOFZqxw

## 01_ Criando um Conta (Sing up) no site Oficial do Docker Hub

Link oficial do projeto do Docker Hub: https://hub.docker.com/

01) Clicar no link: Sing up
02) Na tela de: Create your account crie sua conta<br>
    **OBSERVAÇÃO IMPORTANTE:** VOCÊ PODE USAR UMA CONTA DO GOOGLE OU DO GITHUB PARA SE AUTENTICAR<br>
    NO DOCKER HUB, EM ALGUNS CASOS CONTAS DO GITHUB FACILITA O PROCESSO DE CRIAÇÃO DAS IMAGENS<br>
    PERSONALIZADAS E INTEGRAÇÃO COM OUTRAS SOLUÇÕES.<br>
      A) Email: DIGITE_SEU_EMAIL<br>
      B) Username: DIGITE_SEU_USUÁRIO<br>
      C) Password: DIGITE_SUA_SENHA<br>
      D) (OFF) Send me occasional product updates and announcements.<br>
    <Sign up><br>
03) Valide o seu Caption <VERIFICAR>
04) Você irá receber no seu email o link para ativação da conta, clique no Link corresponde<br>
    A) [Docker] Please confirm your email address: <Verify Email Address><br>
    B) Email verification successful: <Sign in><br>
05) Sign in<br>
    A) Username or email address: DIGITE_SEU_USUÁRIO ou DIGITE_SEU_EMAIL: <Continue><br>
    B) Password: DIGITE_SUA_SENHA: <Continue><br>

**OBSERVAÇÃO IMPORTANTE:** APÓS SE AUTENTICAR NO DOCKER HUB RECOMENDO PERSONALIZAR A SUA CONTA FACILITANDO A IDENTIFICAÇÃO DAS IMAGENS DE CONTAINERS NA SUA CONTA.

01) Após logado, no conto superior clique no Ícone da sua conta;
02) Selecione: Account Settings
03) Account information (This information will be visible to all users of Docker Hub.)<br>
      A) Full Name: DIGITE_SEU_NOME_COMPLETO (Exemplo: Robson Vaamonde)<br>
      B) Company: DIGITE_O_NOME_DA_SUA_EMPRESA (Exemplo: Bora para Prática)<br>
      C) Location: DIGITE_A_LOCALIZAÇÃO_DA_SUA_EMPRESA (Exemplo: São Paulo / Brasil)<br>
      D) Website: DIGITE_SEU_WEBSITE (Exemplo: https://github.com/vaamonde/)<br>
      E) Gravatar email: DEFAULT<br>
    <Save><br>

## 02_ Pesquisando (Search) a Imagem (Image) do Node.JS no Docker-HUB do Docker-CE
```bash
#pesquisando a imagem do container do Node.JS oficial no Docker-HUB
#Link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), is-official (parameters and value used in the filter)
docker search node --filter is-official=true
```

## 03_ Baixando (Pull) a Imagem (Image) do Node.JS para o Repositório Local do Docker-CE
```bash
#baixando a imagem do Node.JS do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#Link de consulta do Docker Hub: https://hub.docker.com/_/node
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull node:latest

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

## 04_ Criando o Projeto do Node.JS e Construindo (Build) o nosso Contêiner (Container) no Docker-CE

**OBSERVAÇÃO IMPORTANTE:** É INDICADO SEMPRE TRABALHAR COM DIRETÓRIOS DE PROJETO QUANDO VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS *DOCKERFILE* OU COM O *DOCKER COMPOSE*. CADA PROJETO DEVE FICAR EM UM DIRETÓRIOS SEPARADO PARA FACILITAR A CONSTRUÇÃO DOS CONTAINERS.

```bash
#criando o diretório do projeto do Node.JS do Dockerfile
#opção do comando mkdir: -v (verbose)
mkdir -v app/

#baixando o script do Node.JS de teste do Github
#opção do comando wget: -O (output-document file)
wget -O app/index.js https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/index.js

#baixando os arquivo de dependências do Node.Js do Github

#baixando o arquivo package.json do projeto do Node.JS do Github
#opção do comando wget: -O (output-document file)
wget -O app/package.json https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/package.json

#baixando o arquivo package-lock.json do projeto do Node.JS do Github
#opção do comando wget: -O (output-document file
wget -O app/package-lock.json https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/package-lock.json

#criando o arquivo do Dockerfile no diretório app
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#Documentação do Docker-CE: https://docs.docker.com/build/concepts/dockerfile/
vim app/Dockerfile

#entrando no modo de edição do VIM
INSERT
```

**COPIAR E COLAR:** as configurações básicas do Dockerfile

```bash
#utilizar a Imagem do Node.JS para criar o nosso container 
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#from
#FROM (Create a new build stage from a base image)
FROM node

#utilizando os Rótulos (labels) para identificar a imagem
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#label
#LABEL (Add metadata to an image)
LABEL maintainer="Robson Vaamonde"
LABEL version="0.1"
LABEL description="Projeto de App utilizando o Node.JS e Dockerfile"

#criando o diretório padrão de trabalho do projeto em Node.JS
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#workdir
#WORKDIR (Change working directory)
WORKDIR /app/

#criando o volume da imagem padrão do projeto em Node.JS
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#volume
#VOLUME (Create volume mounts)
VOLUME /app/

#copiando os arquivos package.json e o package-lock.json para o diretório de trabalho
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#copy
#Documentação do NPM: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
#Documentação do NPM: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
#COPY: (Copy files and directories)
COPY package*.json ./

#copiando o arquivo de index.js para o diretório de trabalho
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#copy
#Documentação do Node.JS: https://nodejs.org/docs/latest/api/synopsis.html
#COPY: (Copy files and directories)
COPY index.js ./

#instalando as dependências do projeto do Node.JS no diretório de trabalho
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#run
#Documentação do NPM: https://docs.npmjs.com/cli/v10/commands/npm-install
#RUM (Execute build commands)
#opção do comando npm: install (Install a package)
RUN npm install

#expondo a porta de acesso do projeto do Node.JS no Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#expose
#EXPOSE (Describe which ports your application is listening on)
EXPOSE 3000

#iniciando do projeto do Node.JS na imagem do Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#cmd
#Documentação do Node.JS: https://nodejs.org/docs/latest/api/synopsis.html
#CMD (Specify default commands)
CMD ["node", "index.js"]
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>

#listando o conteúdo do diretório de projeto do Dockerfile
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh app/
```

## 05_ Construindo (Build) a nossa Imagem (Image) de Contêiner (Container) utilizando o Node.JS no Docker-CE

**OBSERVAÇÃO IMPORTANTE:** QUANDO VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS *DOCKERFILE* NÃO É NECESSÁRIO INDICAR O NOME DO ARQUIVO, APENAS O DIRETÓRIO DO PROJETO, SE VOCÊ JÁ ESTÁ NO DIRETÓRIO DO PROJETO, EXEMPLO: */home/vaamonde/app* UTILIZAR NO COMANDO DO DOCKER A OPÇÃO DE: **. (ponto)** QUE INDICA QUE VOCÊ ESTÁ NO DIRETÓRIO CORRENTE DO PROJETO.

```bash
#criando o container do Node.JS utilizando o Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/build-legacy/
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#opção do comando docker: build (Build an image from a Dockerfile), --no-cache (Do not 
#use cache when building the image)-t --tag (Name and optionally a tag in the name:tag 
#format), app/ (Directory path Dockerfile)
docker build --no-cache --tag USERNAME_DOCKER-HUB/app:0.1 app/

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

## 06_ Executando (Run) o Contêiner (Container) da Imagem (Image) do Node.JS no Docker-CE
```bash
#criando volume local no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), create (Create a volume), app (Volume name)
docker volume create app

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#executando o container do Node.JS em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID), --name
#(Assign a name to the container), -v --volume (Bind mount a volume), -p --publish (Publish 
#a container's port(s) to the host) USERNAME_DOCKER-HUB/app:0.1 (imagem docker hub)
docker container run -d --name app --volume app:/app --publish 3000:3000 USERNAME_DOCKER-HUB/app:0.1

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a
```

## 07_ Verificando a Porta de Conexão, Protocolo e Liberando o acesso da aplicação do Node.JS no Docker-CE
```bash
#verificando o redirecionamento da Porta padrão do Node.JS
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'3000' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar
#o servidor (TO) do Node.JS na porta (PORT) 3000 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 3000 proto tcp comment 'Liberando a sub-rede para acessar o Node.JS'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#Testando o acesso ao site do Node.JS via terminal
#opções do comando curl: -s (silent), -S (show-error), -f (fail)
curl -sSf http://172.16.1.30:3000

#utilizar os navegadores para testar o acesso ao Node.JS 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:3000
```

## 08_ Verificando o Histórico (History) e Inspecionando (Inspect) a Imagem (Image) do Node.JS no Docker-CE
```bash
#verificando os históricos da imagem do Node.JS localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/history/
#opção do comando docker: images (List all imagens docker), history (Show the history of an image)
#USERNAME_DOCKER-HUB/app:0.1 (imagem docker)
docker image history USERNAME_DOCKER-HUB/app:0.1

#inspecionando a imagem do Node.Js localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/inspect/
#opção do comando docker: images (List all imagens docker), inspect (Display detailed information 
#on one or more images), USERNAME_DOCKER-HUB/app:0.1 (imagem docker)
docker image inspect USERNAME_DOCKER-HUB/app:0.1
```

## 09_ Executando (Exec) comandos na Imagem (Image) do Contêiner (Container) no Docker-CE
```bash
#executando e acessando o Bash remoto do container do Node.JS
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/exec/
#opção do comando docker: container (Manage containers), exec (Execute a command in a running 
#container), -i --interactive (Keep STDIN open even if not attached), -t --tty (Allocate  a 
#pseudo-TTY), app (imagem docker hub)
docker container exec -it app /bin/bash

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#verificando a versão do Node.JS
node --version

#verificando o diretório padrão do projeto do Node.JS
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh /app

#verificando os processo em execução no container o Node.JS
#opção do comando ps: -a (all processes except both session leaders), -u (userlist)
ps -aux

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)
```

## 10_ Se autenticando (Login) e Registrando (Registry) no Docker Hub via Docker-CE

**OBSERVAÇÃO IMPORTANTE:** CUIDADO AO USAR O COMANDO: *docker login* PASSANDO O USUÁRIO E SENHA DIRETAMENTE NO TERMINAL EM TEXTO PLANO, A SEGUINTE MENSAGEM É MOSTRADA QUANDO VOCÊ EXECUTA ESSE COMANDO:

**WARNING!** Using --password via the CLI is insecure. Use *--password-stdin*.<br>
**WARNING!** Your password will be stored unencrypted in */home/SEU_USUÁRIO/.docker/config.json*.<br>
Configure a credential helper to remove this warning. See https://docs.docker.com/engine/reference/commandline/login/#credential-stores<br>

**OBSERVAÇÃO IMPORTANTE:** SERÁ CRIADO O ARQUIVO: *config.json* NO DIRETÓRIO DE CONFIGURAÇÃO PADRÃO DO DOCKER NO PERFIL DO SEU USUÁRIO EM: */home/SEU_USUÁRIO/.docker/config.json* ONDE IRÁ FICAR ARMAZENADO A SENHA DE AUTENTICAÇÃO NO DOCKER HUB.

```bash
#se autenticando no Docker Hub utilizando o Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/login/
#opção do comando docker: login (Authenticate to a registry), -u --username (Username Docker Hub)
#-p --password (Password Docker Hub)
docker login --username SEU_USUÁRIO_DOCKER-HUB --password SUA_SENHA_DOCKER-HUB
```

## 11_ Enviando (Push) a Imagem (Image) para o Docker Hub via Docker-CE
```bash
#fazendo o upload da imagem do Node.Js para o Docker Hub
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/push/
#opção do comando docker: login (Authenticate to a registry), -u --username (Username Docker Hub)
#-p --password (Password Docker Hub)
docker push USERNAME_DOCKER-HUB/app:0.1
```

## 12_ Consultando no Docker Hub a Imagem (Image) Enviada (Push/Upload) e no Docker-CE

Link direto do Docker Hub do Repositório: https://hub.docker.com/repositories/SEU_USUÁRIO_DOCKER-HUB

```bash
#pesquisando a imagem do container no repositório do seu usuário no Docker Hub
#Link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images)
docker search USERNAME_DOCKER-HUB
```

## 13_ Removendo (RM) o Volume (Volume), Contêiner (Container) e Imagem (Image) no Docker-CE
```bash
#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a

#removendo o container do Node.JS no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#-f --force (Force the removal of a running container), app (Container Names or ID)
docker container rm -f app

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#limpando o volume do App no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/rm/
#opção do comando docker: volume (Manage volumes), rm (Remove one or more volumes), -f 
#--force (Force the removal of one or more volumes)
docker volume rm -f app

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#removendo as imagens do Node.JS e do App localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#-f --force (Force removal of the image), USERNAME_DOCKER-HUB/app:0.1 node (imagem docker)
docker image rm -f USERNAME_DOCKER-HUB/app:0.1 node

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao Node.JS (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o Node.JS'
Proceed with operation (y|n)? y <Enter>

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#deslogando do Registro Docker Hub no Docker CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/logout/
#opção do comando docker: logout (Log out from a registry)
docker logout

#verificar se a senha guardada no arquivo: /home/SEU_USUÁRIO/.docker/config.json foi removida
cat /home/SEU_USUÁRIO/.docker/config.json

#listando o diretório de App do Dockerfile
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#removendo o diretório de App do Dockerfile
#opção do comando rm: -R (recursive), f (force), -v (verbose), * (all)
rm -Rfv app/
```

========================================DESAFIOS=========================================

**#14_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Node`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 13 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`newapp`__, UTILIZANDO O VOLUME DE: __`newapp`__ E A REDE: __`newapp`__, ALTERAR E ADICIONAR MAIS OPÇÃO NO ARQUIVO: __`index.js`__ E CRIAR E PUBLICAR UMA NOVA IMAGEM DE CONTAINER COM ESSAS MUDANÇAS, ALTERANDO A TAG PARA: __`newapp:0.2 `__.

=========================================================================================

**OBSERVAÇÃO IMPORTANTE:** COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: *Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática*

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/09-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub