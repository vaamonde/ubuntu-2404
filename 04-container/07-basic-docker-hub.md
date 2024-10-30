#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 30/10/2024<br>
#Data de atualização: 30/10/2024<br>
#Versão: 0.01<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/08-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub

Conteúdo estudado nesse desafio:<br>
#01_ 

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O IMAGE DOCKER: O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

O QUE É E PARA QUE SERVER O DOCKERFILE: O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

[![Docker Hub](http://img.youtube.com/vi//0.jpg)]( "Docker Hub")

Link da vídeo aula: 

#01_ Criando um Conta (Sing up) no site Oficial do Docker Hub<br>
```bash
Link oficial do projeto: https://hub.docker.com/

01) Clicar no link: Sing up
02) Na tela de: Create your account crie sua conta
    OBSERVAÇÃO IMPORTANTE: VOCÊ PODE USAR UMA CONTA DO GOOGLE OU DO GITHUB PARA SE AUTENTICAR
    NO DOCKER HUB, EM ALGUNS CASOS CONTAS DO GITHUB FACILITA O PROCESSO DE CRIAR DE IMAGENS
    PERSONALIZADAS E INTEGRAÇÃO COM OUTRAS SOLUÇÕES.
    A) Email: DIGITE_SEU_EMAIL
    B) Username: DIGITE_SEU_USUÁRIO
    C) Password: DIGITE_SUA_SENHA
    D) (OFF) Send me occasional product updates and announcements.
    <Sign up>
03) Valide o seu Caption <VERIFICAR>
04) Você irá receber no seu email o link para ativação da conta, clique no Link corresponde
    A) [Docker] Please confirm your email address: <Verify Email Address>
    B) Email verification successful: <Sign in>
05) Sign in
    A) Username or email address: DIGITE_SEU_USUÁRIO ou DIGITE_SEU_EMAIL: <Continue>
    B) Password: DIGITE_SUA_SENHA: <Continue>

#OBSERVAÇÃO IMPORTANTE: APÓS SE AUTENTICAR NO DOCKER HUB RECOMENDO PERSONALIZAR A SUA CONTA
#FACILITANDO A IDENTIFICAÇÃO DAS IMAGENS DE CONTAINERS NA SUA CONTA.

01) Após logado, no conto superior clique no Ícone da sua conta;
02) Selecione: Account Settings
03) Account information (This information will be visible to all users of Docker Hub.)
    A) Full Name: DIGITE_SEU_NOME_COMPLETO (Exemplo: Robson Vaamonde)
    B) Company: DIGITE_O_NOME_DA_SUA_EMPRESA (Exemplo: Bora para Prática)
    C) Location: DIGITE_A_LOCALIZAÇÃO_DA_SUA_EMPRESA (Exemplo: São Paulo / Brasil)
    D) Website: DIGITE_SEU_WEBSITE (Exemplo: https://github.com/vaamonde/)
    E) Gravatar email: DEFAULT
    <Save>
```
#02_ Pesquisando (Search) a Imagem (Image) do Node.JS no Docker-HUB do Docker-CE<br>
```bash
#pesquisando a imagem do container do Node.JS oficial no Docker-HUB
#Link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), is-official (parameters and value used in the filter)
docker search node --filter is-official=true
```

#03_ Baixando (Pull) a Imagem (Image) do Node.JS para o Repositório Local do Docker-CE<br>
```bash
#baixando a imagem do Node.JS do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#Link de consulta do Docker Hub: https://hub.docker.com/_/node
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull node

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

#04_ Criando o Projeto do Node.JS e Construindo (Build) o nosso Contêiner (Container) no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: É INDICADO SEMPRE TRABALHAR COM DIRETÓRIOS DE PROJETO QUANDO
#VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE OU COM O DOCKER COMPOSE. CADA PROJETO
#DEVE FICAR EM UM DIRETÓRIOS SEPARADO PARA FACILITAR A CONSTRUÇÃO DOS CONTAINERS.

#criando o diretório do projeto do Node.JS do Dockerfile
#opção do comando mkdir: -v (verbose)
mkdir -v app/

#baixando o script do Node.JS de teste do Github
#opção do comando wget: -O (output-document file)
wget -O app/index.js https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/index.js

#baixando os arquivo de dependências do Node.Js do Github
#opção do comando wget: -O (output-document file):
wget -O app/package.json https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/package.json
wget -O app/package-lock.json https://raw.githubusercontent.com/vaamonde/ubuntu-2404/refs/heads/main/conf/package-lock.json

#criando o arquivo do Dockerfile no diretório app
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#Documentação do Docker-CE: https://docs.docker.com/build/concepts/dockerfile/
vim app/Dockerfile

#entrando no modo de edição do VIM
INSERT
```
```bash
#COPIAR E COLAR: as configurações básicas do Dockerfile

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
#Documentação do NGINX: http://nginx.org/en/docs/beginners_guide.html
#COPY: (Copy files and directories)
COPY package*.json ./

#copiando o arquivo de index.js para o diretório de trabalho
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/#copy
#Documentação do NGINX: http://nginx.org/en/docs/beginners_guide.html
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

#05_ Construindo (Build) a nossa Imagem (Image) de Contêiner (Container) utilizando o Node.JS no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: QUANDO VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE NÃO É
#NECESSÁRIO INDICAR O NOME DO ARQUIVO, APENAS O DIRETÓRIO DO PROJETO, SE VOCÊ JÁ
#ESTÁ NO DIRETÓRIO DO PROJETO, EXEMPLO: /home/vaamonde/app UTILIZAR NO COMANDO 
#DO DOCKER A OPÇÃO DE: . (ponto) QUE INDICA QUE VOCÊ ESTÁ NO DIRETÓRIO CORRENTE DO
#PROJETO.

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

#06_ Executando (Run) o Contêiner (Container) da Imagem (Image) do Node.JS no Docker-CE<br>
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

#07_ Verificando a Porta de Conexão, Protocolo e Liberando o acesso da aplicação do Node.JS no Docker-CE<br>
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

#08_ Verificando o Histórico (History) e Inspecionando (Inspect) a Imagem (Image) do Node.JS no Docker-CE<br>
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

#09_ Se autenticando (Login) no Docker Hub via Docker-CE<br>
```bash
#se autenticando no Docker Hub utilizando o Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/login/
#opção do comando docker: login (Authenticate to a registry), -u --username (Username Docker Hub)
#-p --password (Password Docker Hub)
docker login --username SEU_USUÁRIO_DOCKER-HUB --password SUA_SENHA_DOCKER-HUB
```

#10_ Removendo (RM) Volumes (Volume), Contêiners (Container), Imagens (Image) no Docker-CE<br>
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
```

========================================DESAFIOS=========================================

**#10_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 09 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

**#11_ DESAFIO-02:** UTILIZAR A IMAGEM DE CONTAINER DO: __`CentOS`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 09 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver02`__, UTILIZANDO O VOLUME DE: __`webserver02`__ E A REDE: __`webserver02`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/08-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub