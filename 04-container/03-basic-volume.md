#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/10/2024<br>
#Data de atualização: 24/10/2024<br>
#Versão: 0.07<br>
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
#05_ Criando (Create) Volumes (Volume) e Inspecionando (Inspect) o seu Conteúdo no Docker-CE<br>
#06_ Montando (Mount) Volumes (Volume) no Contêiner (Container) da Imagem (Image) do Ubuntu no Docker-CE<br>
#07_ Criando (Create) Contêiner (Container) de Volume (Volume) para Apenas Dados (Data-Only) no Docker-CE<br>
#08_ Removendo (RM) Volume (Volume), Contêiner (Container) e Imagens (Image) no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O VOLUME DO DOCKER: Volumes no Docker são uma das principais formas de persistir dados gerados e utilizados por contêineres. Eles permitem que os dados sejam armazenados fora do ciclo de vida dos contêineres, garantindo que informações importantes não sejam perdidas quando um contêiner é removido ou recriado.

[![Volumes Docker](http://img.youtube.com/vi/dbOmIfI3n1s/0.jpg)](https://www.youtube.com/watch?v=dbOmIfI3n1s "Volumes Docker")

Link da vídeo aula: https://www.youtube.com/watch?v=dbOmIfI3n1s

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
#filesystem.), source=/home/vaamonde/tomcat (The source of the mount. For bind mounts, this is the 
#path to the file or directory on the Docker daemon host. May be specified as source or src), destination 
#(The destination takes as its value the path where the file or directory is mounted in the container. 
#May be specified as destination, dst, or target), ubuntu (imagem docker hub)
docker container run -d -it --name tomcat --mount type=bind,source=/home/vaamonde/tomcat,destination=/tomcat ubuntu

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#informações que são mostradas na saída do comando: docker container inspect
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

#listando o conteúdo do diretório de dados do TomCAT no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh tomcat/
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
#filesystem.), source=/home/vaamonde/zabbix (The source of the mount. For bind mounts, this is the 
#path to the file or directory on the Docker daemon host. May be specified as source or src), destination 
#(The destination takes as its value the path where the file or directory is mounted in the container. 
#May be specified as destination, dst, or target), readonly (This option makes the mounted directory
#(/home/vaamonde/zabbix on the host) read-only in the container) ubuntu (imagem docker hub)
docker container run -d -it --name zabbix --mount type=bind,source=/home/vaamonde/zabbix,destination=/zabbix,readonly ubuntu

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

#05_ Criando (Create) Volumes (Volume) e Inspecionando (Inspect) o seu Conteúdo no Docker-CE<br>
```bash
#criando volume local no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), create (Create a volume), vaamonde
#(Volume name)
docker volume create vaamonde

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#informações que são mostradas na saída do comando: docker volume inspect
#"CreatedAt": "2024-10-11T09:41:05-03:00": Indica a data e hora em que o volume foi criado.
#"Driver": "local": O driver define como o volume é gerenciado em /var/lib/docker/volumes/.
#"Labels": null: Labels são metadados que podem ser atribuídos a um volume para facilitar
#                sua categorização e organização.
#"Mountpoint": "/var/lib/docker/volumes/vaamonde/_data": O Mountpoint é o caminho no sistema
#                                                        de arquivos do host onde os dados do
#                                                        volume estão armazenados.
#"Name": "vaamonde": O nome do volume.
#"Options": null: Opções adicionais configuráveis para o volume.
#"Scope": "local": O escopo do volume define onde ele pode ser usado,  o volume é acessível 
#                  apenas pelo Docker local.

#inspecionando o volume criado no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), inspect (Display detailed information on
#one or more volumes), vaamonde (Volume name)
docker volume inspect vaamonde
```

#06_ Montando (Mount) Volumes (Volume) no Contêiner (Container) da Imagem (Image) do Ubuntu no Docker-CE<br>
```bash
#executando o container do Ubuntu em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/#mount
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID)-i --interactive 
#(Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name (Assign a name 
#to the container), --mount (Attach a filesystem mount to the container), type=volume (Specifies 
#that the mount type is a Docker-managed volume.), source=vaamonde (The name of the volume to be 
#mounted. If the volume already exists, it will be reused. If it doesn't exist, Docker will create 
#that volume automatically.), destination=/var/vaamonde (Defines the path inside the container where 
#the volume will be mounted), ubuntu (imagem docker hub)
docker container run -d -it --name netdata --mount type=volume,source=vaamonde,destination=/var/vaamonde ubuntu

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#inspecionando as informações de montagem container do Netdata no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), netdata (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case), -E (extended-regexp), | (Pipe) (OU de bit (OR))
docker container inspect netdata | grep -i -E "source|destination"

#inspecionando as informações de montagem container do Netdata no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), netdata (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "volume"): 
#Filtra para exibir apenas as montagens do tipo volume.
docker container inspect netdata | jq '.[] | .Mounts[] | select(.Type == "volume")'

#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), netdata (Container Names or Container ID)
docker container attach netdata

#verificando os pontos de montagens na imagem do Ubuntu do container do Netdata
#opção do comando df: -h (human-readable)
df -h

#listando o volume de dados do Netdata no Ubuntu Server
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh /var

#acessando o volume de dados do Netdata e criando um arquivo de teste
cd /var/vaamonde
touch teste.txt

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)

#OBSERVAÇÃO IMPORTANTE: MESMO QUE VOCÊ FAÇA PARTE DO GRUPO DO DOCKER NO UBUNTU SERVER, SOMENTE
#O USUÁRIO ROOT TEM DIREITO DE LISTAR O CONTEÚDO DO DIRETÓRIO: /var/lib/docker/volumes/, PARA
#VER OS CONTEÚDOS DE ARQUIVOS DOS VOLUMES PRECISAMOS SE LOGAR/MUDAR PARA O USUÁRIO ROOT.
#opção do comando sudo: -i (login)
sudo -i

#listando o conteúdo do volume do container do Ubuntu
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh /var/lib/docker/volumes/vaamonde/_data/
exit
```

#07_ Criando (Create) Contêiner (Container) de Volume (Volume) para Apenas Dados (Data-Only) no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: QUANDO VOCÊ FAZ A CRIAÇÃO DE UM CONTAINER INDICANDO QUAL SERÁ O VOLUME
#A SER UTILIZADO, CASO O VOLUME NÃO EXISTA NO DOCKER ELE SERÁ CRIADO COM O NOME DE IDENTIFICAÇÃO
#PADRÃO GERADO AUTOMATICAMENTE PELO DOCKER É NÃO PELO SEU NOME.

#criando um novo container do CentOS mais sem executar o modo Interativo
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#opção do comando docker: container (Manage containers), create (Create a new container),
#-v --volume (Bind mount a volume), /data (Initialize volumes), --name (Assign a name to
#the container), dbdados (Container name), centos (Image Local or Docker Hub)
docker container create --volume /data --name dbdados centos

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#inspecionando as informações de montagem container do CentOS no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), dbdados (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "volume"): 
#Filtra para exibir apenas as montagens do tipo volume.
docker container inspect dbdados | jq '.[] | .Mounts[] | select(.Type == "volume")'

#OBSERVAÇÃO IMPORTANTE: NO EXEMPLO ABAIXO SERÁ UTILIZADO UMA IMAGEM DE CONTAINER DO BANCO
#DE DADOS POSTGRESQL DO REPOSITÓRIO DA CANONICAL: https://hub.docker.com/u/ubuntu, PARA ESSE
#CENÁRIO SERÁ NECESSÁRIO CONFIGURAR O MAPEAMENTO DAS PORTAS UTILIZADAS PELO POSTGRESQL QUE
#SERÁ VISTO MAIS ADIANTE NESSE CURSO NAS AULAS DE REDE E MAPEAMENTO DE PORTAS.

#executando o container do Ubuntu em modo Daemon/Background no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/#mount
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -d --detach (Run container in background and print container ID), -i --interactive 
#(Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), -p --publish (Publish a 
#container's port(s) to the host), --name (Assign a name to the container), --volumes-from (Mount 
#volumes from the specified container(s)), -e --env (Set environment variables)) ubuntu/postgres
#(repository and imagem docker hub)
docker container run -d -it --publish 5432:5432 --name pgsql01 --volumes-from dbdados -e POSTGRES_USER=docker \
-e POSTGRES_PASSWORD=docker -e POSTGRES_DB=docker -e PGDATA=/data ubuntu/postgres

docker container run -d -it --publish 5431:5432 --name pgsql02 --volumes-from dbdados -e POSTGRES_USER=docker \
-e POSTGRES_PASSWORD=docker -e POSTGRES_DB=docker -e PGDATA=/data ubuntu/postgres

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#inspecionando as informações de montagem container do CentOS no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), pgsql01 e pgsql02 (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[]: Isso percorre cada container no resultado, mesmo que você tenha 
#especificado um único container, o comando inspect retorna uma lista, .Mounts[]: Acessa todos 
#os pontos de montagem (bind mounts, volumes, etc.) do container, select(.Type == "volume"): 
#Filtra para exibir apenas as montagens do tipo volume.
docker container inspect pgsql01 | jq '.[] | .Mounts[] | select(.Type == "volume")'
docker container inspect pgsql02 | jq '.[] | .Mounts[] | select(.Type == "volume")'

#OBSERVAÇÃO IMPORTANTE: MESMO QUE VOCÊ FAÇA PARTE DO GRUPO DO DOCKER NO UBUNTU SERVER, SOMENTE
#O USUÁRIO ROOT TEM DIREITO DE LISTAR O CONTEÚDO DO DIRETÓRIO: /var/lib/docker/volumes/, PARA
#VER OS CONTEÚDOS DE ARQUIVOS DOS VOLUMES PRECISAMOS SE LOGAR/MUDAR PARA O USUÁRIO ROOT.
#opção do comando sudo: -i (login)
sudo -i

#listando o conteúdo do volume do container do Ubuntu
#opção do comando ls: -l (long listing format), -h (human-readable)
ls -lh /var/lib/docker/volumes/ID_DO_VOLUME_DBDADOS/_data/
exit
```

#08_ Removendo (RM) Volumes (Volume), Contêiners (Container) e Imagens (Image) no Docker-CE<br>
```bash
#verificando o uso do Disco das Imagens, Container e Volumes no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/system/df/
#opção do comando docker: system (Manage Docker), df (Show docker disk usage)
docker system df

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images)
docker container ls -a

#removendo o container do Ubuntu e do CentOS no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#-f (Force the removal of a running container), tomcat zabbix netdata dbdados pgsql01 pgsql02
#(Container Names or ID)
docker container rm -f tomcat zabbix netdata dbdados pgsql01 pgsql02

#listando os volumes criados no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/ls/
#Documentação do Docker-CE: https://docs.docker.com/engine/storage/volumes/
#opção do comando docker: volume (Manage volumes), ls (List volumes)
docker volume ls

#limpando todos os volumes no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/rm/
#opção do comando docker: volume (Manage volumes), rm (Remove one or more volumes)
docker volume rm vaamonde IDS_DOS_VOLUMES

#limpando todos os volumes no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/volume/prune/
#opção do comando docker: volume (Manage volumes), prune (Remove unused local volumes)
#OBSERVAÇÃO IMPORTANTE: MUITO CUIDADO NA HORA DE USAR ESSA OPÇÃO EM SERVIDORES DE PRODUÇÃO
#QUE ESTÁ RODANDO PRINCIPALMENTE O PORTAINER.
docker volume prune
  WARNING! This will remove anonymous local volumes not used by at least one container.
  Are you sure you want to continue? [y/N] y

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#removendo as imagens do Ubuntu e do CentOS localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#-f (Force removal of the image) ubuntu centos ubuntu/postgres (imagem docker)
docker image rm -f ubuntu centos ubuntu/postgres

#removendo os diretórios de dados localmente no Ubuntu Server
#opções do comando rm: -R (recursive), -f (force), -v (verbose)
sudo rm -Rfv tomcat/ zabbix/
```

========================================DESAFIOS=========================================

**#09_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Fedora`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 06 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`glpi`__.

**#10_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`ArchLinux`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 06 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`grafana`__.

**#11_ DESAFIO-03:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Ubuntu/MySQL`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 07 ATÉ 08 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM OS SEGUINTES NOMES: __`mysql01 e mysql02`__, PESQUISAR NO LINK: https://hub.docker.com/r/ubuntu/mysql NO CAMPO: __`Parameters`__ AS OPÇÕES DE: __`Usuário, Senha, Database e Localização da Base de Dados`__, MONTAR O MESMO CAMINHO DE: __`/data`__ NESSES SERVIDORES: **OBSERVAÇÃO**: NESSE CENÁRIO NÃO É NECESSÁRIO MUDAR O CAMINHO PADRÃO DO BANCO DE DADOS DO MYSQL QUE É: __`/var/lib/mysql`__ APENAS MONTAR O CAMINHO: __`/data`__ NESSES SERVIDORES, DEPOIS NESSE CURSO SERÁ ESTUDADO COMO CRIAR OS ARQUIVOS DO DOCKER COMPOSE E DOCKER FILE PARA FACILITAR A CRIAÇÃO DOS CONTAINERS E MAPEAMENTO DE VOLUMES.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Volumes dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/05-volume-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker