#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 15/09/2024<br>
#Data de atualização: 16/09/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de CPU e RAM dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/04-cpu-ram-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker

Conteúdo estudado nesse desafio:<br>
#01_ Criando (Create) os Containers (Container) do Ubuntu (Image) no Docker-CE<br>
#02_ Iniciando (Start) os Containers (Container) do Ubuntu no Docker-CE<br>
#03_ Conectando (Attach) nos Containers (Container) do Ubuntu no Docker-CE<br> 
#04_ Parando (Stop) e Inspecionando (Inspect) o Container (Container) do Ubuntu no Docker-CE<br>
#05_ Atualizando (Update) as Configurações de RAM e CPU dos (Container) do Ubuntu no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER COMPOSE: Docker Compose é uma ferramenta para executar aplicativos de vários contêineres no Docker definidos usando o formato de arquivo Compose. Um arquivo Compose é usado para definir como um ou mais contêineres que compõem seu aplicativo são configurados. Depois de ter um arquivo Compose, você pode criar e iniciar seu aplicativo com um único comando: docker compose up.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

[![Basic Docker](http://img.youtube.com/vi//0.jpg)]( "Basic Docker")

Link da vídeo aula: 

#01_ Criando (Create) os Containers (Container) do Ubuntu (Image) no Docker-CE<br>
```bash
#criando o container do Ubuntu Apache2 Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#opção do comando docker: container (Manage containers), create (Create a new container), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#(Assign a name to the container), ubuntu (imagem docker hub).
docker container create -it --name apache2 ubuntu

#criando o container do Ubuntu MySQL Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#opção do comando docker: container (Manage containers), create (Create a new container), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#(Assign a name to the container), ubuntu (imagem docker hub).
docker container create -it --name mysql ubuntu

#listando todas as imagens de container localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#opção do comando docker: images (List all imagens docker)
docker images

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images)
docker container ls -a
```

#02_ Iniciando (Start) os Containers (Container) do Ubuntu no Docker-CE<br>
```bash
#iniciando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/start/
#opção do comando docker: container (Manage containers), start (Start one or more stopped containers),
#apache2 mysql (Container Names or Container ID)
docker container start apache2 mysql

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images)
docker container ls -a
```

#03_ Conectando (Attach) nos Containers (Container) do Ubuntu no Docker-CE<br> 
```bash
#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), apache2 (Container Names or Container ID)
docker container attach apache2

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)

#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), mysql (Container Names or Container ID)
docker container attach mysql

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Manter pressionado o Ctrl e depois pressionar: p e depois: q para sair)
```

#04_ Parando (Stop) e Inspecionando (Inspect) o Container (Container) do Ubuntu no Docker-CE<br>
```bash
#parando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/stop/
#opção do comando docker: container (Manage containers), stop (Stop one or more running containers),
#apache2 mysql (Container Names or Container ID)
docker container stop apache2 mysql

#"Memory": 0: Indica o limite máximo de memória que o container pode usar. O valor 0 significa 
#             que não há limite específico de memória configurado para o container.
#"MemoryReservation": 0: Define a quantidade mínima de memória que é reservada para o container. 0 
#                        significa que não há reserva mínima de memória.
#"MemorySwap": 0: Limite combinado de memória física (RAM) e swap. 0 indica que o container não pode 
#                 usar swap.
#"MemorySwappiness": null: Controla a propensão do sistema a usar a memória swap para o container. 
#                    null significa que o Docker está usando a configuração padrão do sistema operacional
#                    para a "swappiness" (que geralmente é 60).

#inspecionando as informações de RAM do container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), apache2 mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container inspect apache2 | grep -i memory
docker container inspect mysql | grep -i memory

#"CpuShares": 0: Define a quantidade de "shares" (partes) de CPU atribuídas ao container em
#                relação a outros containers. O valor 0 indica que o container está usando o 
#                valor padrão (normalmente 1024), o que significa que ele compartilhará a CPU 
#                de forma igualitária com outros containers que também usam o padrão.
#"NanoCpus": 0: Especifica a quantidade exata de CPU alocada para o container em nanossegundos 
#               por segundo (1 bilhão de nanossegundos = 1 segundo de CPU). 0 indica que não há 
#               uma limitação explícita de CPU.
#"CpusetCpus": "": Especifica quais CPUs o container pode usar. O valor vazio ("") significa que o 
#                  container pode usar todas as CPUs disponíveis no sistema.
#"CpusetMems": "": Indica quais nós de memória o container pode usar. Se vazio (""), significa que 
#                  o container pode usar qualquer nó de memória disponível no sistema.

#inspecionando as informações de CPU do container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), apache2 mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container inspect apache2 | grep -i cpus
docker container inspect mysql | grep -i cpus
```

#05_ Atualizando (Update) as Configurações de RAM e CPU dos (Container) do Ubuntu no Docker-CE<br>
```bash
#alterando a quantidade de memória RAM dos container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/update/
#opção do comando docker: container (Manage containers), update (Update configuration of one or more 
#containers), -m --memory (Memory limit), --memory-swap 1g ()
docker container update -memory 512m --memory-swap 1g apache2
docker container update -memory 512m --memory-swap 1g mysql
docker container inspect apache2 mysql | grep -i memory

#alterando a quantidade de processador CPU dos container do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/update/
#opção do comando docker: container (Manage containers), update (Update configuration of one or more 
#containers), --cpus (Number of CPUs)
docker container update --cpus=1 apache2
docker container update --cpus=1 mysql
docker container inspect apache2 mysql | grep -i cpus
```

========================================DESAFIOS=========================================

**#09_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Debian`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 08 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container run`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`seunome`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO).

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de CPU e RAM dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/04-cpu-ram-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker