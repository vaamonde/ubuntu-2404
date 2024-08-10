#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
Data de criação: 10/08/2024<br>
Data de atualização: 10/08/2024<br>
Versão: 0.01<br>
Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O DESAFIO COM A SEGUINTE FRASE: Desafio do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio

Conteúdo estudado nesse desafio:<br>
#01_ Instalando as Dependência do Docker-CE no Ubuntu Server<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Portainer.io: https://www.portainer.io/

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O PORTAINER.IO: Portainer Community Edition (CE) é a nossa base. Com mais de meio milhão de usuários regulares, o CE é um poderoso conjunto de ferramentas de código aberto que permite criar e gerenciar facilmente contêineres no Docker, Docker Swarm, Kubernetes e Azure ACI.

[![Portainer](http://img.youtube.com/vi//0.jpg)]( "Portainer")

Link da vídeo aula: 

#01_ Criando o Volume do Portainer.io no Docker-CE<br>
```bash
#criação do volume do Portainer.io
#opção do comando docker: volume create (Creates a new volume that containers can 
#consume and store data in)
docker volume create portainer_data

#listando o volume criado
#opção do comando docker: volume ls (List all the volumes known to Docker)
docker volume ls
```

#02_ Criando o Container do Portainer.io no Docker-CE<br>
```bash
#criação do container do Portainer.io utilizando o volume criado
#opção do comando docker: run (Run a command in a new container), --name (container name)
#-d (Run container in background and print container ID), -p (Publish a container’s port(s) 
#to the host), -v (Bind mount a volume), portainer/portainer (container imagem)
#opção da contra barra (\): criar uma quebra de linha no terminal
docker run --name portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data portainer/portainer
```

#03_ Verificando o Status do Container do Portainer.io no Docker-CE<br>
```bash
#listando as imagens de containers no Docker-CE
#opção do comando docker: images (List images container on system)
docker images

#listando os container em execução no Docker-CE
#opção do comando docker: ps (List containers)
docker ps
```

#04_ Verificando a Porta de Conexão do Portainer.io no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#verificando a porta padrão do Portainer.io
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'9000' -sTCP:LISTEN
```

#05_ Criando o arquivo de Serviço do Portainer.io no Docker-CE<br>
```bash
#baixado o arquivo de serviço do Portainer.io do Github
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/systemd/system/portainer.service 
```
========================================DESAFIOS=========================================

**#09_ DESAFIO-01:** CRIAR UM NOVO DIRETÓRIO NA RAIZ DO APACHE2 EM: __`/var/www/html`__ COM: __`seunome`__ (TUDO EM MINÚSCULO - SOMENTE O PRIMEIRO NOME, EXEMPLO: robson) PARA UM NOVO SITE, DENTRO DO SEU DIRETÓRIO CRIAR UMA NOVA PÁGINA EM HTML CHAMADA: __`index.html`__ (TUDO EM MINÚSCULA), ADICIONAR MAIS OPÇÕES DO HTML (VEJA O SITE W3SCHOOLS) E COLOCAR __`02 (DUAS) IMAGENS`__ NA PÁGINA.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO DOCKER-CE SE VOCÊ CONSEGUIU FAZER O DESAFIO COM A SEGUINTE FRASE: Desafio do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce