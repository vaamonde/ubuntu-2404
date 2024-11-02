#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 31/10/2024<br>
#Data de atualização: 02/10/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Compose do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/10-docker-compose.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockercompose

Conteúdo estudado nesse desafio:<br>
#01_ Pesquisando (Search) as Imagens (Image) do NGINX e MySQL no Docker-HUB do Docker-CE<br>
#02_ Baixando (Pull) as Imagens (Image) do NGINX e MySQL para o Repositório Local do Docker-CE<br>
#03_ Criando o Primeiro arquivo do Docker Compose File YML (YAML Ain't Markup Language) no Docker-CE<br>
#04_ Executando o Docker Compose utilizando o arquivo (file) para construir os Contêiners (Container) no Docker-CE<br>
#05_ Verificando as Informações dos Contêiners (Container) do Projeto do Docker Compose no Docker-CE<br>
#06_ Parando (Stop), Iniciando (Start), Pausando (Pause) e Despausando (Unpause) os Contêiners (Container) do Projeto no Docker-CE<br
#07_ Liberando o acesso Remoto dos Contêiners (Container) do NGINX e MySQL no Docker-CE<br>
#08_ Removendo (Rm/Down) os Contêiners (Container) do Projeto do Docker Compose no Docker-CE<br>

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O DOCKER IMAGE: O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

O QUE É E PARA QUE SERVER O DOCKERFILE: O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

O QUE É E PARA QUE SERVER O COMPOSE DO DOCKER: Docker Compose é uma ferramenta que facilita a definição e o gerenciamento de aplicações Docker compostas por vários contêineres. Ele usa um arquivo YAML para definir e configurar serviços, redes e volumes que uma aplicação pode precisar, permitindo que tudo seja gerenciado e iniciado com um único comando.

[![Docker Compose](http://img.youtube.com/vi//0.jpg)]( "Docker Compose")

Link da vídeo aula: 

#01_ Pesquisando (Search) as Imagens (Image) do NGINX e MySQL no Docker-HUB do Docker-CE<br>
```bash
#pesquisando as imagens dos container do NGINX e do MySQL oficial no Docker-HUB
#Link de consulta do Docker Hub: https://hub.docker.com/
#Link da imagem oficial do NGINX: https://hub.docker.com/_/nginx
#Link da imagem oficial do MySQL: https://hub.docker.com/_/mysql
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/search/
#opção do comando docker: search (Search the Docker Hub for images), --filters (Filter output 
#based on conditions provided), is-official (parameters and value used in the filter)
docker search nginx --filter is-official=true
docker search mysql --filter is-official=true
```

#02_ Baixando (Pull) as Imagens (Image) do NGINX e MySQL para o Repositório Local do Docker-CE<br>
```bash
#baixando as imagens do NGINX e do MySQL do Docker-HUB
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/pull/
#opção do comando docker: imagem (Manage images), pull (Download an image from a registry)
docker image pull nginx:latest
docker image pull nginx:latest

#listando todas as imagens de containers no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/ls/
#opção do comando docker: image (Manage images), ls (List images)
docker image ls

#inspecionando as imagens do NGINX e do MySQL no Docker-CE
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/image/inspect/
#opção do comando docker: imagem (Manage images), inspect (Display detailed information
#on one or more images), nginx:latest mysql:latest (Imagem name and Tag)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
#opção do comando jq: .[0].Config.Env': Filtra o JSON, acessando o primeiro elemento (.[0])
#e então a seção "Config.Env" para exibir apenas o bloco de variáveis de ambiente.
docker image inspect nginx:latest | jq '.[0].Config.Env'
docker image inspect mysql:latest | jq '.[0].Config.Env'
```

#03_ Criando o Primeiro arquivo do Docker Compose File YML (YAML Ain't Markup Language) no Docker-CE<br>
```bash
#OBSERVAÇÃO IMPORTANTE: É INDICADO SEMPRE TRABALHAR COM DIRETÓRIOS DE PROJETO QUANDO
#VOCÊ ESTÁ TRABALHANDO COM ARQUIVOS DOCKERFILE OU COM O DOCKER COMPOSE. CADA PROJETO
#DEVE FICAR EM UM DIRETÓRIO SEPARADO PARA FACILITAR A CONSTRUÇÃO DOS CONTAINERS.

#criando o diretório de teste01 do Compose
#opção do comando mkdir: -v (verbose)
mkdir -v teste01/

#criando o arquivo do Compose no diretório teste01
#Documentação do Docker-CE: https://docs.docker.com/reference/compose-file/
#Documentação do Docker-CE: https://docs.docker.com/compose/
vim teste01/vavatour.yml

#entrando no modo de edição do VIM
INSERT
```
```yaml
#COPIAR E COLAR: as configurações básicas do Compose

#OBSERVAÇÃO IMPORTANTE: NOS ARQUIVOS DO COMPOSE QUE UTILIZA A EXTENSÃO .YML NUNCA
#UTILIZAR O TAB (TABULADOR) SEMPRE UTILIZAR 02 (DOIS) ESPAÇOS PARA A INDENTAÇÃO DO
#DAS CONFIGURAÇÕES.

#definindo o nome do projeto
#Documentação do Docker: https://docs.docker.com/reference/compose-file/version-and-name/
name: vavatour

#definindo a seção dos serviços do projeto
#Documentação do Docker: https://docs.docker.com/reference/compose-file/services/
services:
  #definindo o nome do serviço de Web Site (pode ser qualquer nome)
  webserver:
    #definindo a imagem que será utilizada no container do Web Site
    image: nginx:latest
    #definindo as publicações de portas do host e do container do Web Site
    #DICA: recomendo deixar o mapeamento das portas dentro de Aspas Duplas
    ports: 
      - "80:80"
    #definindo as políticas de reinício automático do container do Data Base
    #OBSERVAÇÃO a opção: always (sempre) é utilizada caso tenha alguma falha
    #no container ele será reiniciado automaticamente.
    restart: always

  #definindo o nome do serviço do Banco de Dados (pode ser qualquer nome)
  database:
    #definindo a imagem que será utilizada no container do Data Base
    image: mysql:latest
    #definindo as publicações de portas do host e do container do Data Base
    ports:
      - "3306:3306"
    #definindo as variáveis de ambiente do container do Data Base
    #OBSERVAÇÃO: as variáveis de ambiente sempre está disponível na descrição
    #do Docker Hub e na sua documentação oficial.
    environment:
      MYSQL_ROOT_PASSWORD: pti@2018
    #definindo as políticas de reinício automático do container do Data Base
    restart: always
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>

#listando o conteúdo do diretório de projeto do Compose
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh teste01/
```

#04_ Executando o Docker Compose utilizando o arquivo (file) para construir os Contêiners (Container) no Docker-CE<br>
```bash
#executando o projeto do Docker Compose utilizando o comando docker-compose
#Documentação do Docker: https://docs.docker.com/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/up/
#opção do comando docker compose: -f --file (Compose configuration files), up (Create
#and start containers), -d --detach (Detached mode: Run containers in the background)
docker compose --file teste01/vavatour.yml up -d

#listando os containers do projetos do Docker Compose em execução no Docker-CE
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/ls/
#opção do comando docker compose: ls (List running compose projects), -a --all (Show 
#all stopped Compose projects)
docker compose ls --all

#listando a rede criada no projeto do Docker Compose no Docker-CE 
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/docker/network/ls/
#opção do comando docker: network (Manage networks), ls (List networks), -f --filter (Provide
#filter values)
docker network ls --filter name=vavatour
```

#05_ Verificando as Informações dos Contêiners (Container) do Projeto do Docker Compose no Docker-CE<br>
```bash
#visualizando as imagens de containers utilizadas no projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/images/
#opção do comando docker compose: -f --file (Compose configuration files), images (List 
#images used by the created containers)
docker compose --file teste01/vavatour.yml images

#visualizando os containers em execução do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/ps/
#opção do comando docker compose: -f --file (Compose configuration files), ps (List 
#containers), -a --all (Show all stopped containers)
docker compose --file teste01/vavatour.yml ps --all

#visualizando as estáticas de uso dos containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/container/stats/
#opção do comando docker compose: -f --file (Compose configuration files), stats (Display 
#a live stream of container(s) resource usage statistics)
#OBSERVAÇÃO: para sair das estáticas e só pressionar: Ctrl+C
docker compose --file teste01/vavatour.yml stats

#visualizando os logs dos containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/container/stats/
#opção do comando docker compose: -f --file (Compose configuration files), logs (View 
#output from containers)
docker compose --file teste01/vavatour.yml logs

#visualizando os processos dos containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/top/
#opção do comando docker compose: -f --file (Compose configuration files), top (Display 
#the running processes)
docker compose --file teste01/vavatour.yml top
```

#06_ Parando (Stop), Iniciando (Start), Pausando (Pause) e Despausando (Unpause) os Contêiners (Container) do Projeto no Docker-CE<br>
```bash
#parando os containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/stop/
#opção do comando docker compose: -f --file (Compose configuration files), stop (Stop 
#services)
docker compose --file teste01/vavatour.yml stop

#iniciando os containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/start/
#opção do comando docker compose: -f --file (Compose configuration files), start (Start 
#services)
docker compose --file teste01/vavatour.yml start

#pausando os containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/pause/
#opção do comando docker compose: -f --file (Compose configuration files), pause (Pause 
#services)
docker compose --file teste01/vavatour.yml pause

#despausando os containers do projeto
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/unpause/
#opção do comando docker compose: -f --file (Compose configuration files), unpause (Unpause 
#services)
docker compose --file teste01/vavatour.yml unpause
```

#07_ Liberando o acesso Remoto dos Contêiners (Container) do NGINX e MySQL no Docker-CE<br>
```bash
#verificando o redirecionamento da Porta padrão do NGINX e do MySQL
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'80,3306' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do NGINX Server na porta (PORT) 80 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do MySQL Server na porta (PORT) 3306 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 3306 proto tcp comment 'Liberando a sub-rede para acessar o MySQL'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#utilizar os navegadores para testar o acesso ao NGINX 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver

#utilizar o MySQL Workbench para testar o acesso ao MySQL
MySQL Workbench
  MySQL Connections (+)
    Connection Name: MySQL-Docker
    Connection Method
      Parameters
        Hostname: 172.16.1.30
        Port: 3306
        Username: root
        Password:
          <Store in Keychains>
            Password: pti@2018 <OK>
    <Test Connection>
      OBSERVAÇÃO IMPORTANTE: A VERSÃO DA IMAGEM DO DOCKER UTILIZADA DO MYSQL É A
      9.x, SE APARECER A MENSAGEM DE INCOMPATIBILIDADE DE VERSÃO ATUALIZE O SEU
      MYSQL WORKBENCH
      <Continue Anyway>
    <OK>
  <OK>
```

#08_ Removendo (Rm/Down) os Contêiners (Container) do Projeto do Docker Compose no Docker-CE<br>
```bash
#removendo os containers parados do projeto do Docker Compose
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/rm/
#opção do comando docker compose: -f --file (Compose configuration files), rm (Removes 
#stopped service containers)
docker compose --file teste01/vavatour.yml rm
  ? Going to remove vavatour-database-1, vavatour-webserver-1 (y/N): y <Enter>

#parando e removendo os containers do projeto do Docker Compose
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/
#Documentação do Docker: https://docs.docker.com/reference/cli/docker/compose/down/
#opção do comando docker compose: -f --file (Compose configuration files), down (Stop 
#and remove containers, networks)
docker compose --file teste01/vavatour.yml down

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao NGINX (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 80 proto tcp comment 'Liberando a sub-rede para acessar o NGINX'
Proceed with operation (y|n)? y <Enter>

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status numbered

#Removendo (DELETE) a Regra (RULES) de Acesso ao MYSQL (9) do Docker-CE
sudo ufw delete 9
Deleting:
 allow log-all from 172.16.1.0/24 to 172.16.1.30 port 3306 proto tcp comment 'Liberando a sub-rede para acessar o MySQL'
Proceed with operation (y|n)? y <Enter>

#listando o diretório de testes do Docker Compose
#opções do comando ls: -l (long listing format), -h (human-readable)
ls -lh

#removendo o diretório de testes do Docker Compose
#opção do comando rm: -R (recursive), f (force), -v (verbose), * (all)
rm -Rfv teste0*/
```

========================================DESAFIOS=========================================

**#14_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 13 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Compose do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/10-docker-compose.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockercompose