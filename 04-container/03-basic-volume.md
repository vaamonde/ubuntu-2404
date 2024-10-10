#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/10/2024<br>
#Data de atualização: 10/10/2024<br>
#Versão: 0.01<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Volumes dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/05-volume-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker

Conteúdo estudado nesse desafio:<br>
#01_ Criando o Diretório de Dados do TomCAT no Ubuntu Server<br>
#02_ Criando (Create) e Montando (Bind Mounts) o Diretório (Directory) do Computador Local (Host) no Contêiner (Container) do TomCAT no Docker-CE<br>
#03_ Conectando (Attach) e Verificando o Ponto de Montagem (Bind Mounts) no Contêiner (Container) do TomCAT no Docker-CE<br>
#04_ Criando (Create) e Montando (Bind Mounts) o Diretório (Directory) Somente Leitura (Read-Only) do Computador Local (Host) no Contêiner (Container) do Zabbix no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O VOLUME DO DOCKER: Volumes no Docker são uma das principais formas de persistir dados gerados e utilizados por contêineres. Eles permitem que os dados sejam armazenados fora do ciclo de vida dos contêineres, garantindo que informações importantes não sejam perdidas quando um contêiner é removido ou recriado.

[![Volumes Docker](http://img.youtube.com/vi//0.jpg)]( "Volumes Docker")

Link da vídeo aula: 

#01_ Criando o Diretório de Dados do TomCAT no Ubuntu Server<br>
```bash
#criando o diretório de dados do TomCAT no Ubuntu Server
#opção do comando mkdir: -v verbose
mkdir -v tomcat

#listando o diretório de dados do TomCAT no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#verificando a localização física do diretório de dados do TomCAT no Ubuntu Server
pwd tomcat/
```

#02_ Criando (Create) e Montando (Bind Mounts) o Diretório (Directory) do Computador Local (Host) no Contêiner (Container) do TomCAT no Docker-CE<br>
```bash
#executando o container do Ubuntu em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/#mount
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/bind-mounts/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID)-i --interactive 
#(Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name (Assign a name 
#to the container), --mount (Attach a filesystem mount to the container), type=bind (bind mount 
#in Docker is a way to mount a directory or file from the host filesystem directly to the container 
#filesystem.), src=/home/vaamonde/tomcat (The source of the mount. For bind mounts, this is the 
#path to the file or directory on the Docker daemon host. May be specified as source or src), dst 
#(The destination takes as its value the path where the file or directory is mounted in the container. 
#May be specified as destination, dst, or target), ubuntu (imagem docker hub)
docker container run -d -it --name tomcat --mount type=bind,src=/home/vaamonde/tomcat,dst=/tomcat ubuntu

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#informações que são mostradas na saída do comando: docker inspect
#"Type": "bind" Especifica o tipo de montagem. No caso, o valor "bind" indica que essa é 
#               uma montagem vinculada (bind mount)
#"Source": "/home/vaamonde/tomcat" O caminho no host onde o diretório ou arquivo que está
#                                   sendo montado reside. Neste exemplo, o diretório /home/
#                                   vaamonde/tomcat no host está sendo montado no container.
#"Destination": "/tomcat" O caminho dentro do container onde o diretório ou arquivo do host 
#                         (Source) será montado.
#"Mode": "" O modo de montagem define permissões e outras configurações, como leitura/escrita
#           ou somente leitura.
#"RW": "true" Indica se o ponto de montagem está configurado como leitura e escrita (read/write). 
#"Propagation": "rprivate" O modo de propagação controla como as mudanças no filesystem (como 
#                          novas montagens) são visíveis entre o host e o container, e vice-versa.

#inspecionando as informações de montagem container do TomCAT no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), tomcat (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case), -E (extended-regexp), | (Pipe) (OU de bit (OR))
docker container inspect tomcat | grep -i -E "source|destination"

#inspecionando as informações de montagem container do TomCAT no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), tomcat (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "bind"): 
#Filtra para exibir apenas as montagens do tipo bind.
docker container inspect tomcat | jq '.[] | .Mounts[] | select(.Type == "bind")'
```

#03_ Conectando (Attach) e Verificando o Ponto de Montagem (Bind Mounts) no Contêiner (Container) do TomCAT no Docker-CE<br>
```bash
#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), tomcat (Container Names or Container ID)
docker container attach tomcat

#verificando os pontos de montagens na imagem do Ubuntu do container do TomCAT
#opção do comando df: -h (human-readable)
df -h

#listando o diretório de dados do TomCAT no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#acessando o ponto de montagem do diretório do TomCAT e criando um arquivo de teste
cd tomcat
touch teste.txt
ls

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)
```

#04_ Criando (Create) e Montando (Bind Mounts) o Diretório (Directory) Somente Leitura (Read-Only) do Computador Local (Host) no Contêiner (Container) do Zabbix no Docker-CE<br>
```bash
#criando o diretório de dados do Zabbix no Ubuntu Server
#opção do comando mkdir: -v verbose
mkdir -v zabbix

#listando o diretório de dados do Zabbix no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#verificando a localização física do diretório de dados do Zabbix no Ubuntu Server
pwd zabbix/

#executando o container do Ubuntu em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/#mount
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/bind-mounts/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID)-i --interactive 
#(Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name (Assign a name 
#to the container), --mount (Attach a filesystem mount to the container), type=bind (bind mount 
#in Docker is a way to mount a directory or file from the host filesystem directly to the container 
#filesystem.), src=/home/vaamonde/zabbix (The source of the mount. For bind mounts, this is the 
#path to the file or directory on the Docker daemon host. May be specified as source or src), dst 
#(The destination takes as its value the path where the file or directory is mounted in the container. 
#May be specified as destination, dst, or target), readonly (This option makes the mounted directory
#(/home/vaamonde/zabbix on the host) read-only in the container) ubuntu (imagem docker hub)
docker container run -d -it --name zabbix --mount type=bind,src=/home/vaamonde/zabbix,dst=/zabbix,readonly ubuntu

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#inspecionando as informações de montagem container do Zabbix no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), zabbix (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case), -E (extended-regexp), | (Pipe) (OU de bit (OR))
docker container inspect zabbix | grep -i -E "source|destination"

#inspecionando as informações de montagem container do Zabbix no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), zabbix (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "bind"): 
#Filtra para exibir apenas as montagens do tipo bind.
docker container inspect zabbix | jq '.[] | .Mounts[] | select(.Type == "bind")'

#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), zabbix (Container Names or Container ID)
docker container attach zabbix

#verificando os pontos de montagens na imagem do Ubuntu do container do Zabbix
#opção do comando df: -h (human-readable)
df -h

#listando o diretório de dados do Zabbix no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#acessando o ponto de montagem do diretório do Zabbix e criando um arquivo de teste
cd zabbix
touch teste.txt

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)
```

#05_ Criando (Create) Volumes (Volume) no Docker-CE<br>
```bash

```
========================================DESAFIOS=========================================

**#09_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Alpine`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 07 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`apache2`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO).

**#10_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`CentOS`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 07 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`mariadb`__ (SEU SOBRENOME TUDO EM MINÚSCULO SEM ACENTO).

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de CPU e RAM dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/04-cpu-ram-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker