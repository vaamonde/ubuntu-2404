#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/08/2024<br>
#Data de atualização: 30/09/2024<br>
#Versão: 0.06<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/01-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce

Conteúdo estudado nesse desafio:<br>
#01_ Instalando as Dependência do Docker-CE no Ubuntu Server<br>
#02_ Adicionando a Chave GPG do Docker-CE no Ubuntu Server<br>
#03_ Adicionando o Repositório do Docker-CE no Ubuntu Server<br>
#04_ Atualizando as Lista do Apt com o novo Repositório do Docker-CE no Ubuntu Server<br>
#05_ Instalando o Docker-CE e suas Dependências no Ubuntu Server<br>
#06_ Instalação do Docker Compose no Ubuntu Server<br>
#07_ Verificando o Serviço e Versão do Docker-CE e Compose<br>
#08_ Localização dos Arquivos de Configuração do Docker-CE<br>
#09_ Interface e Endereçamento IPv4 padrão do Docker-CE<br>
#10_ Adicionando o Usuário Local no Grupo Padrão do Docker-CE<br>
#11_ Verificando Informações Detalhadas do Serviço do Docker-CE<br>
#12_ Iniciando um Container de Teste do Docker-CE<br>
#13_ Iniciando um Container de Teste do Ubuntu Bash no Docker-CE<br>
#14_ Verificando as Imagens dos Containers no Docker-CE<br>
#15_ Limpando todas as Imagens, Containers, Volumes e Redes no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER COMPOSE: Docker Compose é uma ferramenta para executar aplicativos de vários contêineres no Docker definidos usando o formato de arquivo Compose. Um arquivo Compose é usado para definir como um ou mais contêineres que compõem seu aplicativo são configurados. Depois de ter um arquivo Compose, você pode criar e iniciar seu aplicativo com um único comando: docker compose up.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

[![Instalação do Docker-CE](http://img.youtube.com/vi/M_Dazb75OTc/0.jpg)](https://www.youtube.com/watch?v=M_Dazb75OTc "Instalação do Docker-CE")

Link da vídeo aula: https://www.youtube.com/watch?v=M_Dazb75OTc

#01_ Instalando as Dependência do Docker-CE no Ubuntu Server<br>
```bash
#instalação das dependências básicas do Docker CE
#opção da contra barra (\): criar uma quebra de linha no terminal
sudo apt install vim git python3 python3-pip apt-transport-https ca-certificates curl \
software-properties-common linux-image-generic linux-image-extra-virtual lsof
```

#02_ Adicionando a Chave GPG do Docker-CE no Ubuntu Server<br>
```bash
#download da Chave GPG do Docker-CE
#opções do comando wget: -q (quiet)
wget -q https://download.docker.com/linux/ubuntu/gpg

#convertendo a Chave GPG do Docker-CE
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
#opção do redirecionador > (maior): Redireciona a saída padrão (STDOUT)
cat gpg | gpg --dearmor | sudo tee /usr/share/keyrings/docker-ce.gpg > /dev/null
```

#03_ Adicionando o Repositório do Docker-CE no Ubuntu Server<br>
```bash
#adicionando o repositório do Docker-CE
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção da contra barra (\): criar uma quebra de linha no terminal
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-ce.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

#04_ Atualizando as Lista do Apt com o novo Repositório do Docker-CE no Ubuntu Server<br>
```bash
#atualizando as lista do apt com o novo repositório do Docker
sudo apt update
```

#05_ Instalando o Docker-CE e suas Dependências no Ubuntu Server<br>
```bash
#instalando o Docker CE e Compose
#opção do comando apt: --install-recommends (Consider suggested packages as a dependency for installing)
#opção da contra barra (\): criar uma quebra de linha no terminal
sudo apt install --install-recommends docker-ce docker-ce-cli containerd.io docker-buildx-plugin \
docker-compose-plugin cgroup-lite
```

#06_ Instalação do Docker Compose no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: a versão do Docker-Compose utilizando o Sources List do Docker-CE está
#desatualizada em relação ao projeto do Github: https://github.com/docker/compose, é recomendado
#baixar o Binário do projeto e atualizar a versão no Ubuntu Server com o procedimento abaixo.

#baixando o Docker Compose do Projeto do Github
#opção do comando curl: -S (show-error), -L (location), -o (output) (Build 2.29.x 27/09/2024)
#opção da contra barra (\): criar uma quebra de linha no terminal
sudo curl -SL https://github.com/docker/compose/releases/download/v2.29.7/docker-compose-linux-x86_64 \
-o /usr/bin/docker-compose

#alterando as permissões do Binário do Docker Compose	
#opção do comando chmod: -v (verbose), 755 (User=RWX,Group-R-X,Other-R-X)
sudo chmod -v 755 /usr/bin/docker-compose
```

#07_ Verificando o Serviço e Versão do Docker-CE e Compose<br>
```bash
#verificando o serviço do Docker-CE
sudo systemctl status docker
sudo systemctl restart docker
sudo systemctl reload docker
sudo systemctl stop docker
sudo systemctl start docker

#analisando os Log's e mensagens de erro do Docker
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu docker

#verificando as versões do Docker-CE e Compose
sudo docker version
sudo docker-compose version
```

#08_ Localização dos Arquivos de Configuração do Docker-CE<br>
```bash
/etc/docker/       <-- Diretório de configuração do Docker
/var/lib/docker/   <-- Diretório raiz de dados do Docker
```

#09_ Interface e Endereçamento IPv4 padrão do Docker-CE<br>
```bash
#verificando a interface e endereço IPv4 do Docker-CE
sudo ifconfig docker0
  docker0: 172.17.0.1/16 (255.255.0.0)
```

#10_ Adicionando o Usuário Local no Grupo Padrão do Docker-CE<br>
```bash
#adicionando o seu usuário no grupo do Docker
#opções do comando usermod: -a (append), -G (groups), $USER (environment variable)
#OBSERVAÇÃO IMPORTANTE: você pode substituir a variável de ambiente $USER pelo
#nome do usuário existente no sistema para adicionar no Grupo desejado.
sudo usermod -a -G docker $USER

#fazendo login em um novo grupo do Docker
newgrp docker

#verificando os identificadores de usuário e grupos
id

#verificando informações do grupo DOCKER
sudo getent group docker

#recomendo fazer logout do usuário para testar as permissões de grupos
#OBSERVAÇÃO: você pode utilizar o comando: exit ou tecla de atalho: Ctrl+D
exit
```

#11_ Verificando Informações Detalhadas do Serviço do Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: DEPOIS QUE VOCÊ ADICIONA O SEU USUÁRIO NO GRUPO DO DOCKER, NÃO É
#MAIS NECESSÁRIO ADICIONAR O COMANDO: SUDO ANTES DO COMANDO: DOCKER.

#verificando informações detalhadas do Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/info/
docker info

#verificando informações detalhadas do Sistema do Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/info/
docker system info
```

#12_ Iniciando um Container de Teste do Docker-CE<br>
```bash
#pesquisando o container de Hello World do Docker-CE
#link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images)
docker search hello-world

#iniciando o container de Hello World do Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: run (Run a command in a new container)
docker run hello-world
```

#13_ Iniciando um Container de Teste do Ubuntu Bash no Docker-CE<br>
```bash
#pesquisando o container do Ubuntu do Docker-CE
#link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images)
docker search ubuntu

#iniciando o container do Ubuntu Bash do Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -i --interactive (Keep STDIN open even if not attached), -t --tty (Allocate 
#a pseudo-TTY), ubuntu (imagem docker hub), bash (command bash/shell terminal)
docker container run -it ubuntu bash

#executar os comandos básicos de Linux dentro do container Ubuntu Bash
cat /etc/os-release
apt update
apt install net-tools iputils-ping traceroute
ifconfig
ping 172.17.0.1
ping 8.8.8.8
traceroute 8.8.8.8

#OBSERVAÇÃO IMPORTANTE: quando você utiliza o comando: exit o Container em Docker e desligado
#(stopping), caso você queira sair do Container sem desligar pressione: Ctrl + P ou Ctrl + Q
#ou a tecla de atalho: Ctrl + D que faz a função do comando: exit.
exit
```

#14_ Verificando as Imagens dos Containers no Docker-CE<br>
```bash
#listando as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List images container on system)
docker images

#listando os container em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a
```

#15_ Limpando todas as Imagens, Containers, Volumes e Redes no Docker-CE<br>
```bash
#limpando todos os objetos do Docker-CE (Containers, Imagens, Volumes, Redes)
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/prune/
#opção do comando docker: system (manager docker), prune (Remove unused data)
docker system prune
  Are you sure you want to continue? [y/N]y

#listando os container em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#removendo as imagens do Docker-CE localmente
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#ubuntu (imagem docker)
docker image rm hello-world:latest
docker image rm ubuntu:latest

#listando as imagens do Docker-CE localmente
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List images container on system)
docker images
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/tree/main/selos/01-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce