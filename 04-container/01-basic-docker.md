#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/09/2024<br>
#Data de atualização: 15/09/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS
#Testado e homologado no Docker-CE (Community Edition) 24.x
#Testado e homologado no Portainer-CE (Community Edition) 2.x

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico dos Comandos de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiobasicdocker

Conteúdo estudado nesse desafio:<br>
#01_ Utilizando os comandos Básico de Pesquisa (Search) Docker-CE e Docker-HUB<br>
#02_ Utilizando os comandos Básicos de Containers (Container) e Imagens (Images) no Docker-CE<br>
#03_ Utilizando os comandos Básicos de Containers (Container), Execução (Run) e Sair (Exit) no Docker-CE<br>
#04_ Utilizando os comandos Básicos de Containers (Container) e Conectar (Attach) no Docker-CE<br>
#05_ Parando (Stop), Iniciando (Start), Reiniciar (Restart) e Pausando (Pause) os Containers (Container) no Docker-CE<br>
#06_ Verificando as Estáticas (Stats), Processos (Top), Logs (Log) e Inspecionando (Inspect) os Containers (Container) no Docker-CE<br>
#07_ Removendo (RM) e Limpando (Prune) os Containers (Container) no Docker-CE<br>
#08_ Listando Imagens (Images), Histórico (History), Inspecionando (Inspect) e Removendo (Rm) no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER COMPOSE: Docker Compose é uma ferramenta para executar aplicativos de vários contêineres no Docker definidos usando o formato de arquivo Compose. Um arquivo Compose é usado para definir como um ou mais contêineres que compõem seu aplicativo são configurados. Depois de ter um arquivo Compose, você pode criar e iniciar seu aplicativo com um único comando: docker compose up.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

[![Basic Docker](http://img.youtube.com/vi//0.jpg)]( "Basic Docker")

Link da vídeo aula: 

#01_ Utilizando os comandos Básico de Pesquisa (Search) Docker-CE e Docker-HUB<br>
```bash
#pesquisando imagens de containers do Ubuntu no Docker HUB
#opção do comando docker: search (Search the Docker Hub for images)
#link de consulta do Docker Hub: https://hub.docker.com/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
docker search ubuntu

#pesquisando imagens de containers do Ubuntu com filtro de estrela superior a 10
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided)
docker search ubuntu --filter=stars=10

#pesquisando imagens de containers do Ubuntu com filtro de estrela superior a 10
#e marcado como imagem do desenvolvedor oficial
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided)
docker search ubuntu --filter=stars=10 --filter=is-official=true

#pesquisando imagens de containers do Ubuntu com filtro de estrela superior a 10,
#marcado como imagem do desenvolvedor oficial e não truncar a descrição da imagem
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), --no-trunc (Don't truncate output)
docker search ubuntu --filter=stars=10 --filter=is-official=true --no-trunc
```

#02_ Utilizando os comandos Básicos de Containers (Container) e Imagens (Images) no Docker-CE<br>
```bash
#executando o container do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), ubuntu (imagem docker hub)
docker container run ubuntu

#informações que são mostradas na saída do comando: docker images
#REPOSITORY.: nome da imagem do docker;
#TAG........: versão da imagem do docker;
#IMAGE ID...: identificação da imagem do docker;
#CREATED....: quando a imagem foi criada;
#SIZE.......: tamanho da imagem do docker.

#listando as imagens de container do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List all imagens docker)
docker images

#outra opção para listar todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#informações que são mostradas na saída do comando: docker container ls
#CONTAINER ID.: dentificação única do container no docker;
#IMAGE.........: imagem utilizada na execução do container no docker;
#COMMAND.......: comando em execução da imagem do docker;
#CREATED.......: quando a imagem foi criada no docker;
#STATUS........: status atual da imagem no docker;
#PORTS.........: porta do container e do host utilizada para se comunicar no docker;
#NAMES.........: nome do container no docker.

#OBSERVAÇÃO IMPORTANTE: SE VOCÊ NÃO USAR A OPÇÃO: --name (QUE SERÁ VISTO EM BREVE NESSE CURSO), O
#DOCKER CRIA OS NOMES DOS CONTAINERS ALEATÓRIOS, COMO POR EXEMPLO: modest_shaw, peaceful_tharp, etc.

#verificando os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers)
docker container ls

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a
```

#03_ Utilizando os comandos Básicos de Containers (Container), Execução (Run) e Sair (Exit) no Docker-CE<br>
```bash
#executando o container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -i --interactive (Keep STDIN open even if not attached), -t --tty (Allocate 
#a pseudo-TTY) ubuntu (imagem docker hub)
docker container run -it ubuntu

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#atualizando as listas (sources.list) do apt do Ubuntu rodando no container do Docker-CE
apt update

#finalizando (matando/kill) a execução do container do Ubuntu
exit

#OBSERVAÇÃO IMPORTANTE: A CADA COMANDO: docker container run EXECUTADO NO TERMINAL, O DOCKER
#ENTENDE QUE SERÁ CRIADO MAIS UM CONTAINER (CONTAINER ID) COM A IMAGEM DO UBUNTU, PARA USAR
#O MESMO CONTAINER É NECESSÁRIO INDICAR O CONTAINER ID OU NAME NA EXECUÇÃO QUE SERÁ MOSTRADO
#NOS PRÓXIMOS COMANDOS.

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#executando novamente o container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/run/
#opção do comando docker: container (Manage containers), run (Create and run a new container 
#from an image), -i --interactive (Keep STDIN open even if not attached), -t --tty (Allocate 
#a pseudo-TTY) ubuntu (imagem docker hub)
docker container run -it ubuntu

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a
```

#04_ Utilizando os comandos Básicos de Containers (Container) e Conectar (Attach) no Docker-CE<br>
```bash
#executando o container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container attach 1851e38b8e18

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a
```

#05_ Parando (Stop), Iniciando (Start), Reiniciar (Restart) e Pausando (Pause) os Containers (Container) no Docker-CE<br>
```bash
#parando o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/stop/
#opção do comando docker: container (Manage containers), stop (Stop one or more running containers),
#happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container stop 1851e38b8e18

#iniciando o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/start/
#opção do comando docker: container (Manage containers), start (Start one or more stopped containers),
#happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container start 1851e38b8e18

#reiniciando o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/restart/
#opção do comando docker: container (Manage containers), restart (Restart one or more containers), 
#happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container restart 1851e38b8e18

#pausando o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/pause/
#opção do comando docker: container (Manage containers), pause (Pause all processes within one or more 
#containers), happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container pause 1851e38b8e18

#despausando o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/unpause/
#opção do comando docker: container (Manage containers), unpause (Unpause all processes within one or 
#more containers), happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container unpause 1851e38b8e18
```

#06_ Verificando as Estáticas (Stats), Processos (Top), Logs (Log) e Inspecionando (Inspect) os Containers (Container) no Docker-CE<br>
```bash
#informações que são mostradas na saída do comando: docker container stats
#CONTAINER ID...: Identificação única do container em execução;
#NAME...........: Nome atribuído ao container;
#CPU %..........: Percentual de uso da CPU pelo container em relação ao tempo de execução do sistema;
#MEM USAGE/LIMIT: Quantidade de memória que o container está utilizando no momento (MEM USAGE) e o 
#                 limite de memória disponível para ele (LIMIT);
#MEM %..........: Percentual de uso da memória pelo container em relação ao limite de memória;
#NET I/O........: Quantidade de dados trafegados pela rede (entrada e saída) do container;
#BLOCK I/O......: Quantidade de dados lidos e escritos pelo container em dispositivos de bloco (HD);
#PIDS...........: Número de processos (PIDs) em execução dentro do container.

#verificando as estáticas do container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/stats/
#opção do comando docker: container (Manage containers), stats (Display a live stream of container(s) 
#resource usage statistics), happy_carver 1851e38b8e18 (Container Names or Container ID)
#OBSERVAÇÃO IMPORTANTE: para sair das estáticas do container pressione: Ctrl+C
docker container stats 1851e38b8e18

#informações que são mostradas na saída do comando: docker top
#UID...: Identificador do usuário (User ID) que está executando o processo no container;
#PID...: Identificador do processo (Process ID) dentro do container;
#PPID..: Identificador do processo pai (Parent Process ID) que iniciou o processo;
#C.....: Percentual de uso da CPU pelo processo;
#STIME.: Hora de início (Start Time) do processo;
#TTY...: Terminal de controle (se houver) associado ao processo. Se não houver, pode mostrar ?;
#TIME..: Quantidade de tempo de CPU que o processo consumiu até o momento;
#CMD...: Comando ou caminho completo do executável que iniciou o processo.

#verificando os processos rodando no container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/top/
#opção do comando docker: container (Manage containers), top (Display the running processes of a 
#container), happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container top 1851e38b8e18

#verificando os logs do container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/logs/
#opção do comando docker: container (Manage containers), logs (Fetch the logs of a container), 
#happy_carver 1851e38b8e18 (Container Names or Container ID)
#OBSERVAÇÃO IMPORTANTE: para sair dos Logs do container pressione: Ctrl+C
docker container logs 1851e38b8e18

#inspecionando o conteúdo do container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container inspect 1851e38b8e18
```

#07_ Removendo (RM) e Limpando (Prune) os Containers (Container) no Docker-CE<br>
```bash
#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#removendo o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#happy_carver 1851e38b8e18 (Container Names or Container ID)
docker container rm 1851e38b8e18

#removendo forçado o container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/rm/
#opção do comando docker: container (Manage containers), rm (Remove one or more containers),
#-f --force (Force the removal of a running container (uses SIGKILL)), happy_carver 1851e38b8e18 
#(Container Names or Container ID)
docker container rm -f 1851e38b8e18

#limpando todos os containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/prune/
#opção do comando docker: container (Manage containers), prune (Remove all stopped containers)
#OBSERVAÇÃO IMPORTANTE: MUITO CUIDADO NA HORA DE USAR ESSA OPÇÃO EM SERVIDORES DE PRODUÇÃO
docker container prune
  WARNING! This will remove all stopped containers.
  Are you sure you want to continue? [y/N] y

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a
```

#08_ Listando Imagens (Images), Histórico (History), Inspecionando (Inspect) e Removendo (Rm) no Docker-CE<br>
```bash
#listando as imagens de container do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List all imagens docker)
docker images

#informações que são mostradas na saída do comando: docker image history
#IMAGE......: Identificador (ID) da camada da imagem ou o hash da imagem correspondente a cada etapa
#             de criação. Cada camada é uma modificação incremental.
#CREATED....: Tempo decorrido desde que a camada foi criada (por exemplo, "2 weeks ago").
#CREATED BY.: Comando ou instrução utilizada no Dockerfile ou linha de comando que gerou a camada 
#             da imagem (por exemplo, RUN apt-get update).
#SIZE.......: Tamanho da camada de imagem. Representa a quantidade de dados adicionados ou modificados 
#             nesta etapa específica.
#COMMENT....: Comentários associados à criação da imagem. Normalmente, essa coluna pode estar em branco, 
#             a menos que tenha sido explicitamente preenchida durante o processo de build da imagem.

#verificando o histórico da imagem do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/history/
#opção do comando docker: images (List all imagens docker), history (Show the history of an image)
#ubuntu (imagem docker)
docker image history ubuntu

#inspecionando a imagem do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/inspect/
#opção do comando docker: images (List all imagens docker), inspect (Display detailed information 
#on one or more images, ubuntu (imagem docker)
docker image inspect ubuntu

#removendo a imagem do Ubuntu localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/rm/
#opção do comando docker: images (List all imagens docker), rm (Remove one or more images), 
#ubuntu (imagem docker)
docker image rm ubuntu
```

========================================DESAFIOS=========================================

**#09_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Debian`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 08 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container run`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`seunome`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO).

**#10_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Rocky`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 08 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container run`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`seusobrenome`__ (SEU SOBRENOME TUDO EM MINÚSCULO SEM ACENTO).

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico dos Comandos de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiobasicdocker