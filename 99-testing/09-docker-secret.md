#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 31/10/2024<br>
#Data de atualização: 05/11/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Secret do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/11-docker-secret.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockersecret

Conteúdo estudado nesse desafio:<br>
#01_ 

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

O QUE É E PARA QUE SERVER O DOCKER HUB: Docker Hub é um registro de contêiner criado para desenvolvedores e colaboradores de código aberto encontrarem, usarem e compartilharem suas imagens de contêiner. Com o Hub, os desenvolvedores podem hospedar repositórios públicos que podem ser usados ​​gratuitamente ou repositórios privados para equipes e empresas.

O QUE É E PARA QUE SERVER O DOCKER IMAGE: O Docker Image é um dos conceitos fundamentais do Docker. Ele é o modelo imutável usado para criar containers. Basicamente, uma imagem Docker é um pacote que contém tudo o que é necessário para rodar um programa: código-fonte, bibliotecas, dependências, variáveis de ambiente, arquivos de configuração e muito mais. As imagens são "read-only" e os containers são instâncias de imagens em execução.

O QUE É E PARA QUE SERVER O DOCKERFILE: O Dockerfile é um arquivo de texto que contém instruções para criar uma imagem Docker de forma automatizada. Ele define os passos que o Docker deve seguir para montar uma aplicação como: Imagem, Aplicação, Configurações, Volumes, Arquivos, Comandos, etc..., isso facilita a criação e reprodução de ambientes consistentes, possibilitando que qualquer pessoa ou máquina possa construir uma imagem com as mesmas configurações, garantindo portabilidade e consistência em diferentes sistemas.

O QUE É E PARA QUE SERVER O COMPOSE DO DOCKER: Docker Compose é uma ferramenta que facilita a definição e o gerenciamento de aplicações Docker compostas por vários contêineres. Ele usa um arquivo YAML para definir e configurar serviços, redes e volumes que uma aplicação pode precisar, permitindo que tudo seja gerenciado e iniciado com um único comando.

O QUE É E PARA QUE SERVER O DOCKER SECRET: O Docker Secret é um recurso de segurança do Docker projetado para armazenar e gerenciar informações sensíveis, como senhas, chaves SSH, certificados, tokens de API e outros dados confidenciais usados por containers. Ele é especialmente útil em ambientes de produção e em arquiteturas de microsserviços, onde as credenciais e dados privados precisam ser mantidos seguros e acessíveis apenas para os serviços autorizados.

[![Docker Secret](http://img.youtube.com/vi//0.jpg)]( "Docker Secret")

Link da vídeo aula: 

#01_ Criando um Conta (Sing up) no site Oficial do Docker Hub<br>
```bash

```


echo "minha_senha_secreta" | docker secret create minha_senha -
docker service create --name meu_servico --secret minha_senha nginx
/run/secrets/nome_do_segredo

========================================DESAFIOS=========================================

**#14_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 13 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Secret do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/11-docker-secret.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2404 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockersecret