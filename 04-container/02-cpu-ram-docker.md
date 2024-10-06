#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 15/09/2024<br>
#Data de atualização: 06/10/2024<br>
#Versão: 0.04<br>
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
#01_ Criando (Create) os Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
#02_ Iniciando (Start) os Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
#03_ Conectando (Attach) nos Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
#04_ Parando (Stop) e Inspecionando (Inspect) o Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
#05_ Atualizando (Update) as Configurações de RAM e CPU dos Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
#06_ Atualizando (Update) as Configurações de RAM e CPU dos Contêiner (Container) em Execução (Run) no Docker-CE<br>
#07_ Criando (Create) Contêiner (Container) com RAM e CPU Customizada no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

[![CPU e RAM Basic Docker](http://img.youtube.com/vi//0.jpg)]( "CPU e RAM Basic Docker")

Link da vídeo aula: 

#01_ Criando (Create) os Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
```bash
#criando o container do Ubuntu Nginx Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#opção do comando docker: container (Manage containers), create (Create a new container), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#nginx (Assign a name to the container), ubuntu (imagem docker hub).
docker container create -it --name nginx ubuntu

#criando o container do Ubuntu MySQL Server localmente no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#opção do comando docker: container (Manage containers), create (Create a new container), -i 
#--interactive (Keep STDIN open even if not attached), -t --tty (Allocate a pseudo-TTY), --name 
#mysql (Assign a name to the container), ubuntu (imagem docker hub).
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

#02_ Iniciando (Start) os Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
```bash
#iniciando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/start/
#opção do comando docker: container (Manage containers), start (Start one or more stopped containers),
#nginx mysql (Container Names or Container ID)
docker container start nginx mysql

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images)
docker container ls -a
```

#03_ Conectando (Attach) nos Contêiner (Container) do Ubuntu (Image) no Docker-CE<br> 
```bash
#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), nginx (Container Names or Container ID)
docker container attach nginx

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)

#conectando no container do Ubuntu em modo Interativo no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/attach/
#opção do comando docker: container (Manage containers), attach (Attach local standard input, output, 
#and error streams to a running container), mysql (Container Names or Container ID)
docker container attach mysql

#verificando a versão da imagem do Ubuntu rodando no container do Docker-CE
cat /etc/os-release

#saindo do container do Ubuntu mais mantendo a imagem em execução (Atalho)
Ctrl + p + q (Mantenha pressionado o Ctrl e depois pressiona: p e depois: q para sair)
```

#04_ Parando (Stop) e Inspecionando (Inspect) o Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
```bash
#parando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/stop/
#opção do comando docker: container (Manage containers), stop (Stop one or more running containers),
#nginx mysql (Container Names or Container ID)
docker container stop nginx mysql

#"Memory":            0: Indica o limite máximo de memória que o container pode usar. O valor 0 significa 
#                        que não há limite específico de memória configurado para o container.
#"MemoryReservation": 0: Define a quantidade mínima de memória que é reservada para o container. O valor 0 
#                        significa que não há reserva mínima de memória.
#"MemorySwap"       : 0: Limite combinado de memória física (RAM) e swap. 0 indica que o container não pode 
#                        usar swap.
#"MemorySwappiness" : null: Controla a propensão do sistema a usar a memória swap para o container. 
#                        null significa que o Docker está usando a configuração padrão do sistema operacional
#                        para a "swappiness" (que geralmente é 60).

#inspecionando as informações de RAM dos containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), nginx mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container inspect nginx | grep -i memory
docker container inspect mysql | grep -i memory

#"CpuShares":   0: Define a quantidade de "shares" (partes) de CPU atribuídas ao container em
#                  relação a outros containers. O valor 0 indica que o container está usando o 
#                  valor padrão (normalmente 1024), o que significa que ele compartilhará a CPU 
#                  de forma igualitária com outros containers que também usam o padrão.
#"NanoCpus"   : 0: Especifica a quantidade exata de CPU alocada para o container em nanossegundos 
#                  por segundo (1 bilhão de nanossegundos = 1 segundo de CPU). 0 indica que não há 
#                  uma limitação explícita de CPU.
#"CpusetCpus": "": Especifica quais CPUs o container pode usar. O valor vazio ("") significa que o 
#                  container pode usar todas as CPUs disponíveis no sistema.
#"CpusetMems": "": Indica quais nós de memória o container pode usar. Se vazio (""), significa que 
#                  o container pode usar qualquer nó de memória disponível no sistema.

#inspecionando as informações de CPU dos containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), nginx mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container inspect nginx | grep -i cpus
docker container inspect mysql | grep -i cpus
```

#05_ Atualizando (Update) as Configurações de RAM e CPU dos Contêiner (Container) do Ubuntu (Image) no Docker-CE<br>
```bash
#alterando a quantidade de memória RAM dos containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/update/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), update (Update configuration of one or more 
#containers), -m --memory (Memory limit), --memory-swap 1g (The amount of memory this container is 
#allowed to swap to disk), nginx mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container update --memory 512m --memory-swap 1g nginx
docker container update --memory 512m --memory-swap 1g mysql
docker container inspect nginx mysql | grep -i memory

#alterando a quantidade de processador CPU dos containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/update/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), update (Update configuration of one or more 
#containers), --cpus (Number of CPUs), nginx mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case)
docker container update --cpus=1 nginx
docker container update --cpus=1 mysql
docker container inspect nginx mysql | grep -i cpus
```

#06_ Atualizando (Update) as Configurações de RAM e CPU dos Contêiner (Container) em Execução (Run) no Docker-CE<br>
```bash
#iniciando os containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/start/
#opção do comando docker: container (Manage containers), start (Start one or more stopped containers),
#nginx mysql (Container Names or Container ID)
docker container start nginx mysql

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#alterando as configurações de Memória (RAM) e CPU Compartilhada (CPU-Share) dos container em execução
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/update/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), update (Update configuration of one or more 
#containers), -m --memory (Memory limit), --cpu-share (Set this flag to a value greater or less than the 
#default of 1024 to increase or reduce the container's weight) nginx mysql (Container Names or Container ID)
docker container update -memory 256m --cpu-share 512 nginx
docker container update -memory 256m --cpu-share 512 mysql

#inspecionando as informações de RAM e CPU dos containers do Ubuntu no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), nginx mysql (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case), -E (extended-regexp), | (Pipe) (OU de bit (OR))
docker container inspect nginx | grep -i -E "memory|cpus"
docker container inspect mysql | grep -i -E "memory|cpus"
```

#07_ Criando (Create) Contêiner (Container) com RAM e CPU Customizada no Docker-CE<br>
```bash
#criando um novo container Debian mais sem executar no modo interativo
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/create/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), create (Create a new container), --name 
#mongodb (Assign a name to the container), -m --memory (Memory limit), --memory-swap 1g (The amount 
#of memory this container is allowed to swap to disk), --cpus (Number of CPUs), --cpu-share (Set this 
#flag to a value greater or less than the default of 1024 to increase or reduce the container's weight), 
#debian (imagem docker hub).
docker container create --name mongodb --memory 512m --memory-swap 1g --cpus=1 --cpu-share 1024 debian

#verificando todos os status dos containers em execução no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/ls/
#opção do comando docker: container (Manage containers), ls (List containers), -a --all (Show all
#images (default hides intermediate images))
docker container ls -a

#inspecionando as informações de RAM e CPU do container do MongoDB no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/container/inspect/
#Documentação do Docker-CE: https://docs.docker.com/engine/containers/resource_constraints/
#opção do comando docker: container (Manage containers), inspect (Display detailed information 
#on one or more containers), mongodb (Container Names or Container ID)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando grep: -i (ignore-case), -E (extended-regexp), | (Pipe) (OU de bit (OR))
docker container inspect mongodb | grep -i -E "memory|cpus"
```

========================================DESAFIOS=========================================

**#08_ DESAFIO-01:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`Alpine`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 07 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`apache2`__ (SEU PRIMEIRO NOME TUDO EM MINÚSCULO SEM ACENTO).

**#09_ DESAFIO-02:** PESQUISAR NO DOCKER-HUB A IMAGEM DE CONTAINER DO: __`CentOS`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 07 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`mariadb`__ (SEU SOBRENOME TUDO EM MINÚSCULO SEM ACENTO).

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de CPU e RAM dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/04-cpu-ram-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiocpuramdocker