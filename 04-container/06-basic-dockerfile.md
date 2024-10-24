#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 22/10/2024<br>
#Data de atualização: 22/10/2024<br>
#Versão: 0.02<br>
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

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando (Search) a Imagem (Image) do Debian no Docker-HUB do Docker-CE<br>
#02_ Baixando (Pull) as Imagens (Image) do Debian para o Repositório Local do Docker-CE<br>
#03_ Criando o Primeiro arquivo do Dockerfile para Construir (Build) o nosso Contêiner (Container) no Docker-CE<br>
#04_ Construindo (Build) o nosso Contêiner (Container) utilizando a Imagem (Image) do Debian no Docker-CE<br>

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

#02_ Baixando (Pull) as Imagens (Image) do Debian para o Repositório Local do Docker-CE<br>
```bash
#baixando a imagem do Debian (Noble - 24.04) do Docker-HUB
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
#VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE OU COM O DOCKER COMPOSE. PARA PROJETO
#DEVE FICAR EM UM DIRETÓRIOS SEPARADO PARA FACILITAR A CONSTRUÇÃO DOS CONTAINERS.

#criando o diretório de teste do Dockerfile
#opção do comando mkdir: -v (verbose)
mkdir -v teste

#criando o arquivo do Dockerfile no diretório teste
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#Documentação do Docker-CE: https://docs.docker.com/build/concepts/dockerfile/
vim teste/Dockerfile

#entrando no modo de edição do VIM
INSERT
```
```bash
#COPIAR E COLAR: as configurações básicas do Dockerfile

#utilizar a Imagem do Debian para criar o container 
#FROM (Create a new build stage from a base image)
FROM debian

#utilizar o comando echo para imprimir na saída padrão a mensagem 
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
#ESTÁ NO DIRETÓRIO DO PROJETO, EXEMPLO: /home/vaamonde/teste UTILIZAR NO COMANDO DO
#DOCKER A OPÇÃO DE: . (ponto) QUE INDICA QUE VOCÊ ESTÁ NO DIRETÓRIO CORRENTE DO
#PROJETO.

#criando o container do Debian utilizando o Dockerfile
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/build-legacy/
#Documentação do Docker-CE: https://docs.docker.com/reference/dockerfile/
#opção do comando docker: build (Build an image from a Dockerfile), -t --tag (Name and 
#optionally a tag in the name:tag format), teste (Directory path Dockerfile)
docker build --tag vava:0.1 teste/

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a
```


========================================DESAFIOS=========================================

**#11_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu 22.04 Jammy`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`storage01`__, UTILIZANDO O VOLUME DE: __`estoque`__ E A REDE: __`estoque`__.

**#12_ DESAFIO-02:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu 20.04 Focal`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`storage02`__, UTILIZANDO O VOLUME DE: __`producao`__ E A REDE: __`producao`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/07-image-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker