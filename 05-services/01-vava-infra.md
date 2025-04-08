#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 05/11/2024<br>
#Data de atualização: 08/04/2025<br>
#Versão: 0.03<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

**OBSERVAÇÃO IMPORTANTE:** COMENTAR NO VÍDEO DO NGINX DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: *Implementação dos Servidores realizado com sucesso!!! #BoraParaPrática*

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/12-vava-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockefile #desafiodockercompose

Conteúdo estudado nesse desafio:<br>
#01_ 

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

**O QUE É E PARA QUE SERVER O DOCKER CE:** Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

**O QUE É E PARA QUE SERVER O DOCKERFILE:** O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

**O QUE É E PARA QUE SERVER O COMPOSE DO DOCKER:** Docker Compose é uma ferramenta que facilita a definição e o gerenciamento de aplicações Docker compostas por vários contêineres. Ele usa um arquivo YAML para definir e configurar serviços, redes e volumes que uma aplicação pode precisar, permitindo que tudo seja gerenciado e iniciado com um único comando.

**O QUE É E PARA QUE SERVER O NGINX:** O NGINX é um servidor web de alta performance e um proxy reverso. Ele é amplamente usado para servir páginas web, equilibrar carga de servidores e como cache de conteúdo. É conhecido por sua eficiência em lidar com milhares de conexões simultâneas, sendo uma escolha popular para sites de alto tráfego e para melhorar a distribuição e segurança de aplicações na internet.

**O QUE É E PARA QUE SERVER O MYSQL:** O MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado. Ele organiza e armazena dados de maneira estruturada, permitindo operações como consulta, inserção, atualização e exclusão de dados por meio da linguagem SQL (Structured Query Language).

**O QUE É E PARA QUE SERVER O WORDPRESS:** O WordPress é um sistema de gerenciamento de conteúdo (CMS) gratuito e open-source, amplamente utilizado para criar e gerenciar sites, blogs e lojas virtuais, sem a necessidade de conhecimentos avançados em programação.

**O QUE É E PARA QUE SERVER O NODE.JS:** O Node.js é um ambiente de execução JavaScript open-source e multiplataforma, projetado para criar aplicações de alta performance, especialmente no lado do servidor (backend).

**O QUE É E PARA QUE SERVER O APACHE TOMCAT:** O Apache Tomcat é um servidor de aplicações open-source usado para executar aplicações web desenvolvidas em Java. Ele é mantido pela Apache Software Foundation e é conhecido pela sua confiabilidade e desempenho.

**O QUE É E PARA QUE SERVER O MONGODB:** O MongoDB é um banco de dados NoSQL orientado a documentos, projetado para armazenar e gerenciar grandes volumes de dados não estruturados ou semi-estruturados de forma ágil e escalável.

[![Projeto Servidores](http://img.youtube.com/vi//0.jpg)]( "Projeto Servidores")

Link da vídeo aula: 

## 01_ Clonando o Repositório do Projeto de Servidores da VavaInfra do Github
```bash
git clone https://github.com/vaamonde/vava-docker

ls -lh

cd vava-docker/
```

## 02_ Verificando a estrutura de Diretórios do Projeto de Servidores da VavaInfra
```bash
tree

```

=========================================================================================

**OBSERVAÇÃO IMPORTANTE:** COMENTAR NO VÍDEO DO NGINX DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: *Implementação dos Servidores realizado com sucesso!!! #BoraParaPrática*

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/12-vava-docker.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockefile #desafiodockercompose