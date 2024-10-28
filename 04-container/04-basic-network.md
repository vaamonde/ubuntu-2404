#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/10/2024<br>
#Data de atualização: 27/10/2024<br>
#Versão: 0.05<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Network dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/06-network-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafionetwork

Conteúdo estudado nesse desafio:<br>
#01_ Verificando as Interfaces e Endereçamento IPv4 padrão do Docker-CE<br>
#02_ Verificando as Redes criadas por padrão no Docker-CE<br>
#03_ Criando (Create) Volumes (Volume) no Docker-CE<br>
#04_ Criando (Create) Contêiner (Container) com o Volumes (Volume) e Publicando (Publish) a Porta (Port) do Apache2 no Docker-CE<br>
#05_ Inspecionando (Inspect) o Contêiner (Container) da Imagem (Image) do Apache2 no Docker-CE<br>
#06_ Verificando as Interfaces de Rede criadas pelo Docker-CE no Ubuntu Server<br>
#07_ Analisando as Configurações de Pontes de Rede (Bridges) e Regras de Firewall (IPTables) do Docker-CE<br>
#08_ Criando (Create) Redes (Network) do Tipo Ponte (Bridge) no Docker-CE<br>
#09_ Criando (Create) Contêiner (Container) com o Volumes (Volume), Rede (Network) e Publicando (Publish) a Porta (Port) do NGINX no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O NETWORK DO DOCKER: O Network no Docker refere-se ao sistema de rede virtual usado para conectar containers entre si e com o mundo externo. Ele permite que containers se comuniquem de maneira controlada e segura, tanto entre si quanto com redes externas, como a rede do host ou a internet.

[![Network Docker](http://img.youtube.com/vi//0.jpg)]( "Network Docker")

Link da vídeo aula: 

#01_ Verificando as Interfaces e Endereçamento IPv4 padrão do Docker-CE<br>
```bash
#verificando as informações de Placa de Rede (Network) do Ubuntu Server
#opção do comando lshw: -class (Only show the given class of hardware)
sudo lshw -class network

#verificando a interface e endereço IPv4 do Ubuntu Server
sudo ifconfig enp0s3
  enp0s3: 172.16.1.30/24 

#verificando a interface e endereço IPv4 do Docker-CE
sudo ifconfig docker0
  docker0: 172.17.0.1/16 (255.255.0.0)
```

#02_ Verificando as Redes criadas por padrão no Docker-CE<br>
```bash
#informações que são mostradas na saída do comando: docker network ls
#NETWORK ID.: É o identificador único da rede Docker. Cada rede tem um ID associado que
#             pode ser usado para identificá-la de forma única dentro do Docker.
#NAME.......: É o nome atribuído à rede. Pode ser um nome padrão (como bridge, host, none)
#             ou um nome personalizado que foi definido durante a criação da rede.
#DRIVER.....: Define o tipo de driver de rede utilizado. Os drivers de rede determinam 
#             como os containers se conectam entre si.

#informações dois tipos de Drivers de Redes utilizados no Docker-CE
#bridge.....: Rede padrão para containers no modo bridge, onde os containers em execução
#             na mesma rede podem se comunicar.
#host.......: A rede do container é a mesma do host, ou seja, ele não cria uma interface
#             de rede isolada.
#overlay....: Usado para criar redes que se estendem por vários hosts Docker, útil para 
#             serviços em modo swarm.
#macvlan....: Permite que os containers tenham seus próprios endereços MAC e façam parte
#             da rede física.

#informações dos tipos de Escopo de Redes utilizados no Docker-CE
#local......: A rede está restrita ao host local.
#global.....: A rede pode ser usada em vários hosts Docker no caso de um cluster swarm.

#listando todas as redes padrão do Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
#opção do comando docker: network (Manage networks), ls (List networks)
docker network ls
```

#03_ Criando (Create) Volumes (Volume) no Docker-CE<br>
```bash
#criando volume local no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), create (Create a volume), website
#(Volume name)
docker volume create website

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls
```

#04_ Criando (Create) Contêiner (Container) com o Volume (Volume) e Publicando (Publish) a Porta (Port) do Apache2 no Docker-CE<br>
```bash
#criando o container do Ubuntu Apache2 Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-HUB: https://hub.docker.com/r/ubuntu/apache2
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#website01 (Assign a name to the container), --volume (Bind mount a volume), -p --publish (Publish
#a container's port(s) to the host), ubuntu/apache2 (repository and imagem docker hub), /bin/bash
#(command bash/shell terminal)
#opção da contra barra (\): criar uma quebra de linha no terminal
docker container run -d -it --name website01 --volume website:/var/www/html --publish 80:80 \
ubuntu/apache2 /bin/bash

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#listando o container do Ubuntu Apache2 em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images), --filter (Filter output based on conditions provided)
docker container ls -a --filter name=website01

#conectando no container do Ubuntu Apache2 Server em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), website01 (Container Names or Container ID)
docker container attach website01

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#iniciando o serviço do Apache2 Server na Imagem do Ubuntu
service apache2 start

#verificando o status do serviço do Apache2 Server na Imagem do Ubuntu
service apache2 status

#verificando os processos do serviço do Apache2 Server na Imagem do Ubuntu
#opção do comando ps: -a (all processes except both session leaders), -u (userlist)
ps -aux

#verificando as informações do tráfego das interfaces de rede na Imagem do Ubuntu
cat /proc/net/dev

#verificando as informações de endereço de rede na Imagem do Ubuntu
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
cat /etc/hosts | grep 172

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)
```

#05_ Inspecionando (Inspect) o Contêiner (Container) da Imagem (Image) do Apache2 no Docker-CE<br>
```bash
#inspecionando as informações de montagem no container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), website01 (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "volume"): 
#Filtra para exibir apenas as montagens do tipo volume.
docker container inspect website01 | jq '.[] | .Mounts[] | select(.Type == "volume")'

#inspecionando as informações de rede no container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), website01 (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[0]: Acessa o primeiro elemento da lista retornada por docker container
#inspect, .NetworkSettings.Networks.bridge: Acessa diretamente as configurações da rede bridge, 
#que é onde as informações específicas sobre essa rede estão armazenadas.
docker container inspect website01 | jq '.[0].NetworkSettings.Networks.bridge'

#inspecionando as informações de portas no container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), website01 (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[0]: Acessa o primeiro elemento da lista retornada por docker container
#inspect, .NetworkSettings.Ports: Filtra diretamente as informações relacionadas às portas 
#expostas e mapeadas no container.
docker container inspect website01 | jq '.[0].NetworkSettings.Ports'
```

#06_ Verificando as Interfaces de Rede criadas pelo Docker-CE no Ubuntu Server<br>
```bash
#verificando todas as interfaces e endereço IPv4 no Ubuntu Server
sudo ifconfig

#verificando todas as interfaces e endereços IPv4 no Ubuntu Server
sudo ip address show

#verificando o redirecionamento da Porta padrão do Apache2
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'80' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do Apache2 Server na porta (PORT) 80 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o Apache2'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#utilizar os navegadores para testar o acesso ao Apache2 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver
```

#07_ Analisando as Configurações de Pontes de Rede (Bridges) e Regras de Firewall (IPTables) do Docker-CE<br>
```bash
#informações que são mostradas na saída do comando: brctl show
#bridge name..: É o nome da bridge (ponte de rede) que foi criada no sistema. A bridge é 
#               uma interface virtual que conecta várias interfaces de rede, permitindo 
#               que pacotes sejam trocados entre elas, como se estivessem em um switch.
#bridge id....: Identificador único da bridge no formato hexadecimal, que é composto pelo
#               endereço MAC da interface da bridge e uma prioridade (usada STP).
#STP enabled..: Indica se o Spanning Tree Protocol (STP) está habilitado ou não. O STP
#               é um protocolo que previne loops de rede em bridges.
#Interfaces...: Lista todas as interfaces de rede conectadas à bridge. Essas interfaces 
#               podem ser físicas ou virtuais e participam da troca de pacotes na bridge.

#verificando as informações de Bridge do Docker-CE
sudo brctl show

#OBSERVAÇÃO MUITO IMPORTANTE: NESSE CURSO ESTOU TRABALHANDO COM A SEGURANÇA DE REGRAS DE
#FIREWALL UTILIZANDO O UFW (Uncomplicated Firewall) QUE É UM FRAMEWORKS DO NETFILTER QUE
#USO O IPTABLES PARA A CRIAÇÃO DAS REGRAS DE FIREWALL, O DOCKER-CE TAMBÉM UTILIZA ESSE
#RECURSOS PARA SE COMUNICAR COM OS CONTAINERS.

#Tabelas Filter utilizadas pelo Docker-CE (NESSE CENÁRIO):
#Chain FORWARD (policy DROP)
#Chain DOCKER (1 references)
#Chain DOCKER-ISOLATION-STAGE-1 (1 references)
#Chain DOCKER-ISOLATION-STAGE-2 (1 references)
#Chain DOCKER-USER (1 references)

#listando todas as regras de Firewall das Tabelas do IPTables no Ubuntu Server
#opção do comando iptables: -L (list all chain), -n (numeric output)
sudo iptables -L -n

#Tabelas NAT (Network Address Translation) utilizadas pelo Docker-CE (NESSE CENÁRIO)
#Chain PREROUTING (policy ACCEPT)
#Chain OUTPUT (policy ACCEPT)
#Chain POSTROUTING (policy ACCEPT)
#Chain DOCKER (2 references)

#listando todas as regras de Firewall das Tabelas de NAT do IPTables no Ubuntu Server
#opção do comando iptables: -L (list all chain), -n (numeric output), -t (table)
iptables -L -n -t nat
```

#08_ Criando (Create) Redes (Network) do Tipo Ponte (Bridge) no Docker-CE<br>
```bash
#criando redes em modo Bridge no Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
docker network create vaamonde --driver bridge

#listando as redes padrão do Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
#opção do comando docker: network (Manage networks), ls (List networks), --filter (Provide
#filter values)
docker network ls --filter name=vaamonde
```

#09_ Criando (Create) Contêiner (Container) com o Volume (Volume), Rede (Network) e Publicando (Publish) a Porta (Port) do NGINX no Docker-CE<br>
```bash
#criando o container do Ubuntu NGINX Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-HUB: https://hub.docker.com/r/ubuntu/nginx
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#website01 (Assign a name to the container), --network (Connect a container to a network) --volume 
#(Bind mount a volume), -p --publish (Publish a container's port(s) to the host), ubuntu/nginx 
#(repository and imagem docker hub), /bin/bash (command bash/shell terminal)
#opção da contra barra (\): criar uma quebra de linha no terminal
docker container run -d -it --name website02 --volume website:/var/www/html --network vaamonde \
--publish 81:80 ubuntu/nginx /bin/bash

#listando o container do Ubuntu NGINX em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images), --filter (Filter output based on conditions provided)
docker container ls -a --filter name=website02

#conectando no container do Ubuntu NGINX Server em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), website02 (Container Names or Container ID)
docker container attach website02

#iniciando o serviço do NGINX Server na Imagem do Ubuntu
service nginx start

#verificando o status do serviço do NGINX Server na Imagem do Ubuntu
service nginx status

#verificando os processos do serviço do NGINX Server na Imagem do Ubuntu
#opção do comando ps: -a (all processes except both session leaders), -u (userlist)
ps -aux

#verificando as informações de endereço de rede na Imagem do Ubuntu
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
cat /etc/hosts | grep 172

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)

#verificando o redirecionamento da Porta padrão do NGINX
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'81' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do NGINX Server na porta (PORT) 80 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 81 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#utilizar os navegadores para testar o acesso ao NGINX 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:81
```

#09_ Removendo (RM) Volumes (Volume), Contêiners (Container), Imagens (Image) e Redes (Network) no Docker-CE<br><br>
```bash
#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show 
#all images (default hides intermediate images)
docker container ls -a

#removendo o container do Ubuntu e do CentOS no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#-f --force (Force the removal of a running container), website01 website02 (Container Names
# or ID)
docker container rm -f website01 website02

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#limpando o volume do Website no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/rm/
#opção do comando docker: volume (Manage volumes), rm (Remove one or more volumes), -f 
#--force (Force the removal of one or more volumes)
docker volume rm -f website

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#removendo as imagens do Ubuntu Apache2 e NGINX localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#-f --force (Force removal of the image), ubuntu/apache2 ubuntu/nginx (imagem docker)
docker image rm -f ubuntu/apache2 ubuntu/nginx

#listando todas as redes do Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
#opção do comando docker: network (Manage networks), ls (List networks)
docker network ls

#removendo a rede vaamonde do Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/rm/
#Documentação do Docker-CE: https://docs.docker.com/engine/network/
#opção do comando docker: network (Manage networks), rm Remove one or more networks), -f
#--force (Do not error if the network does not exist), vaamonde (Network Name or ID)
docker network rm -f vaamonde

#limpando todas as redes no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/prune/
#opção do comando docker: network (Manage network), prune (Remove all unused networks)
#OBSERVAÇÃO IMPORTANTE: MUITO CUIDADO NA HORA DE USAR ESSA OPÇÃO EM SERVIDORES DE PRODUÇÃO
#QUE ESTÁ RODANDO PRINCIPALMENTE O PORTAINER.
docker network prune
  WARNING! This will remove all custom networks not used by at least one container.
  Are you sure you want to continue? [y/N] y

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao Apache2 (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o Apache2'
Proceed with operation (y|n)? y <Enter>

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao NGINX (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 81 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'
Proceed with operation (y|n)? y <Enter>
```

========================================DESAFIOS=========================================

**#11_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`httpd`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`site01`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO): LEIA A DOCUMENTAÇÃO OFICIAL PARA MONTAR O VOLUME DE FORMA CORRETA.

**#12_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`nginx`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 10 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`site02`__ (SEU SOBRENOME TUDO EM MINÚSCULO SEM ACENTO): LEIA A DOCUMENTAÇÃO OFICIAL PARA MONTAR O VOLUME DE FORMA CORRETA.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Network dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/06-network-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafionetwork