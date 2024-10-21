#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 21/10/2024<br>
#Data de atualização: 21/10/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/07-image-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando (Search) a Imagem (Image) do Ubuntu no Docker-HUB do Docker-CE<br>
#02_ Baixando (Pull) Imagens (Image) do Ubuntu para o Repositório Local do Docker-CE<br>
#03_ Criando (Create) o Volume (Volume) de Dados no Docker-CE<br>
#04_ Criando (Create) a Rede (Network) de Dados do Tipo Ponte (Bridge) no Docker-CE<br>
#05_ Criando (Create) o Contêiner (Container) de Dados com RAM, CPU, Volume e Rede Customizada no Docker-CE<br>
#06_ Iniciando (Start) o Contêiner (Container) do Ubuntu (Image) e Conectando (Attach) no Docker-CE<br>
#07_ Instalando o Serviço do SAMBA-4 Server na Imagem (Image) do Ubuntu no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O IMAGE DOCKER: O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

[![Network Docker](http://img.youtube.com/vi//0.jpg)]( "Network Docker")

Link da vídeo aula: 

#01_ Pesquisando (Search) a Imagem (Image) do Ubuntu no Docker-HUB do Docker-CE<br>
```bash
#pesquisando a imagem de containers do Ubuntu oficial no Docker-HUB
#Link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), is-official (parameters and value used in the filter)
docker search ubuntu --filter is-official=true
```

#02_ Baixando (Pull) a Imagem (Image) do Ubuntu para o Repositório Local do Docker-CE<br>
```bash
#baixando a imagem do Ubuntu do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull ubuntu

#baixando a imagem do Ubuntu com as Tags Jammy e Focal do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#Link de consulta do Docker Hub: https://hub.docker.com/_/ubuntu
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull ubuntu:jammy
docker image pull ubuntu:focal

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls
```

#03_ Criando (Create) o Volume (Volume) de Dados no Docker-CE<br>
```bash
#criando o volume de dados local no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), create (Create a volume), vaamonde
#(Volume name)
docker volume create dados

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes), --filter (Provide
#filter values)
docker volume ls --filter name=dados
```

#04_ Criando (Create) a Rede (Network) de Dados do Tipo Ponte (Bridge) no Docker-CE<br>
```bash
#criando a rede de dados em modo Bridge no Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
docker network create dados --driver bridge

#listando as redes padrão do Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
#opção do comando docker: network (Manage networks), ls (List networks), --filter (Provide
#filter values)
docker network ls --filter name=dados
```

#05_ Criando (Create) o Contêiner (Container) de Dados com RAM, CPU, Volume e Rede Customizada no Docker-CE<br>
```bash
#criando um novo container do Ubuntu mais sem iniciar
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), create (Create a new container), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#samba4 (Assign a name to the container), -m --memory (Memory limit), --memory-reservation 
#(Allows you to specify a soft limit smaller than), --memory-swap 1g (The amount of memory this
#container is allowed to swap to disk), --cpus (Number of CPUs), --cpu-shares (Set this flag to
#a value greater or less than the default of 1024 to increase or reduce the container's weight),
#-v --volume (Bind mount a volume), --network (Connect a container to a network), -p --publish 
#(Publish a container's port(s) to the host), ubuntu (imagem docker hub).
#opção da contra barra (\): criar uma quebra de linha no terminal
docker container create -it --name samba4 --memory 1g --memory-reservation 512m --memory-swap 1g \
--cpus 1 --cpu-shares 1024 --volume dados:/dados --network dados --publish 137:137 --publish 138:138 \
--publish 139:139 --publish 445:445 ubuntu

#verificando o status do container SAMBA4 no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images), --filter (Provide filter values)
docker container ls -a --filter name=samba4
```

#06_ Iniciando (Start) o Contêiner (Container) do Ubuntu (Image) e Conectando (Attach) no Docker-CE<br>
```bash
#iniciando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/start/
#opção do comando docker: container (Manage containers), start (Start one or more stopped containers),
#samba4 (Container Names or Container ID)
docker container start samba4

#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), samba4 (Container Names or Container ID)
docker container attach samba4
```

#07_ Instalando o Serviço do SAMBA-4 Server na Imagem (Image) do Ubuntu no Docker-CE<br>
```bash
#atualizando as lista do apt do Ubuntu
apt update

#instalando o SAMBA-4 Server no Ubuntu
apt install samba samba-common samba-testsuite


#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)
```

```bash
#EM DESENVOLVIMENTO
docker container commit
docker container cp
docker image tag
```

========================================DESAFIOS=========================================

**#11_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`httpd`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`site01`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO): LEIA A DOCUMENTAÇÃO OFICIAL PARA MONTAR O VOLUME DE FORMA CORRETA.

**#12_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`nginx`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`site02`__ (SEU SOBRENOME TUDO EM MINÚSCULO SEM ACENTO): LEIA A DOCUMENTAÇÃO OFICIAL PARA MONTAR O VOLUME DE FORMA CORRETA.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/07-image-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker