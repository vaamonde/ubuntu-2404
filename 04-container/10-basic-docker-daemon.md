#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 31/10/2024<br>
#Data de atualização: 31/10/2024<br>
#Versão: 0.01<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS<br>
#Testado e homologado no Docker-CE (Community Edition) 24.x<br>
#Testado e homologado no Portainer-CE (Community Edition) 2.x<br>

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Daemon do Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/12-docker-daemon.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerdaemon

Conteúdo estudado nesse desafio:<br>
#01_ 

Site Oficial do Docker: https://www.docker.com/<br>
Site Oficial do Docker Engine: https://docs.docker.com/engine/install/<br>
Site Oficial do Docker Compose: https://github.com/docker/compose<br>
Site Oficial do Docker Hub: https://hub.docker.com/<br>

O QUE É E PARA QUE SERVER O DOCKER CE: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

[![Docker Daemon](http://img.youtube.com/vi//0.jpg)]( "Docker Daemon")

Link da vídeo aula: 

#01_ Verificando o Status de Serviço do Docker-CE e do Docker Socket no Ubuntu Server<br>
```bash
#verificando o status de serviço do Docker-CE
sudo systemctl status docker.service

#verificando o status de serviço do Docker Socket
sudo systemctl status docker.socket

#visualizando os logs de serviço do Docker-CE
#opção do comando journalctl: -x (catalog), -u (unit)
sudo journalctl -xu docker.service

#visualizando os logs de serviço do Docker Socket
#opção do comando journalctl: -x (catalog), -u (unit)
sudo journalctl -xu docker.service

#visualizando os logs de sistema do Docker-CE
#opção do comando cat: -n (number)
#opção do comando grep: -i (ignore-case)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
sud cat -n /var/log/syslog | grep -i docker
```

#02_ Habilitando o Suporte Remoto do Docker-CE no SystemD<br>
```bash
#editando o arquivo de inicialização do serviço do Docker-CE
sudo systemctl edit docker.service

#COPIAR E COLOCAR O CÓDIGO ABAIXO NO ARQUIVO DE SERVIÇO DO DOCKER-CE

#OBSERVAÇÃO IMPORTANTE: A porta padrão é 2376 se você estiver usando transporte 
#criptografado TLS ou 2375 caso contrário.
#Documentação do Docker-CE: https://docs.docker.com/engine/daemon/remote-access/
#Documentação do Docker-CE: https://docs.docker.com/engine/daemon/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/dockerd/
#Documentação do Docker-CE: https://docs.docker.com/reference/cli/dockerd/#daemon-configuration-file

#entrando no modo de edição do VIM
INSERT
```
```bash
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375
```
```bash
#salvar e sair do arquivo
Esc Shift : x <Enter>

#reiniciando os serviços do SystemD
sudo systemctl daemon-reload

#reiniciando as configurações do Docker-CE
sudo systemctl restart docker.service

#verificando o status de serviço do Docker-CE
sudo systemctl status docker.service
```

#03_ Liberando o acesso Remoto da API do Docker-CE no Ubuntu Server<br>
```bash
#verificando a porta padrão do Docker-CE
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'2375' -sTCP:LISTEN

#Liberando (allow) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o 
#servidor (TO) do Docker-CE na porta (PORT) 2375 via protocolo TCP (PROTO TCP)
sudo ufw allow log-all from 172.16.1.0/24 to 172.16.1.30 port 2375 proto tcp comment 'Liberando a sub-rede para acessar o Docker-CE'

#Verificando as Regras Detalhadas padrão do UFW em modo Verboso
sudo ufw status verbose

#utilizar os navegadores para testar o acesso ao Docker Daemon 
#Documentação do Docker-CE: https://docs.docker.com/engine/security/#docker-daemon-attack-surface
#Documentação do Docker-CE: https://docs.docker.com/engine/security/protect-access/
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:2375
```

#04_ Baixando e Instalando o Docker-CE no Linux Mint<br>
http://172.16.1.30:2375/v1.43/info
http://172.16.1.30:2375/v1.43/images/json
http://172.16.1.30:2375/v1.43/containers/json
http://172.16.1.30:2375/v1.43/networks
http://172.16.1.30:2375/v1.43/volumes

https://docs.docker.com/reference/api/engine/version/v1.43/

========================================DESAFIOS=========================================

**#14_ DESAFIO-01:** UTILIZAR A IMAGEM DE CONTAINER DO: __`Ubuntu`__ EXECUTAR TODOS OS PROCEDIMENTOS DAS ETAPAS: 01 ATÉ 13 UTILIZANDO ESSA IMAGEM E ADICIONANDO NO COMANDO: __`docker container create`__ A OPÇÃO: __`--name`__ COM O SEGUINTE NOME: __`webserver01`__, UTILIZANDO O VOLUME DE: __`webserver01`__ E A REDE: __`webserver01`__.

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO BÁSICO DE DOCKER-CE SE VOCÊ CONSEGUIU FAZER A IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Básico de Docker Hub e Imagens dos Containers de Docker-CE realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ubuntu-2404/blob/main/selos/09-docker-hub.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiodocker #desafiodockerce #desafiodockerhub