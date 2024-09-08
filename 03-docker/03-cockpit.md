#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/09/2024<br>
#Data de atualização: 08/09/2024<br>
#Versão: 0.01<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO COCKPIT SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Cockpit realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiocockpit #desafiocockpitproject

Conteúdo estudado nesse desafio:<br>
#01_

Site Oficial do Cockpit: https://cockpit-project.org/<br>
Site Oficial do Cockpit Application: https://cockpit-project.org/applications<br>
Site Oficial do Podman: https://podman.io/

O QUE É E PARA QUE SERVER O COCKPIT: Cockpit é uma interface gráfica baseada na web para servidores, destinada a todos, especialmente aqueles que são: novos no Linux (incluindo administradores do Windows), familiarizados com o Linux e desejam uma maneira gráfica fácil de administrar servidores. administradores especialistas que usam principalmente outras ferramentas, mas desejam uma visão geral de sistemas individuais.

O QUE É E PARA QUE SERVER O PODMAN: Podman (o POD MANager) é uma ferramenta para gerenciar contêineres e imagens, volumes montados nesses contêineres e pods feitos de grupos de contêineres. O Podman executa contêineres no Linux, mas também pode ser usado em sistemas Mac e Windows usando uma máquina virtual gerenciada pelo Podman. Podman é baseado em libpod, uma biblioteca para gerenciamento do ciclo de vida de contêineres que também está contida neste repositório. A biblioteca libpod fornece APIs para gerenciar contêineres, pods, imagens de contêineres e volumes.

[![Cockpit](http://img.youtube.com/vi//0.jpg)]( "Cockpit")

Link da vídeo aula: 

#01_ Instalação do Cockpit no Ubuntu Server 24.04<br>
```bash
#instalando o Cockpit no Ubuntu Server
#opção do comando apt: --install-recommends (Consider suggested packages as a dependency for installing)
sudo apt install --install-recommends cockpit
```

#02_ Habilitando o Serviço do Cockpit<br>
```bash
#habilitando o serviço do Cockpit
sudo systemctl daemon-reload
sudo systemctl enable cockpit
sudo systemctl restart cockpit
```

#03_ Verificando o Serviço e Versão do Cockpit<br>
```bash
#verificando o serviço do Cockpit
sudo systemctl status cockpit
sudo systemctl restart cockpit
sudo systemctl stop cockpit
sudo systemctl start cockpit

#analisando os Log's e mensagens de erro do Cockpit
#opção do comando journalctl: -t (identifier), -x (catalog), -e (pager-end), -u (unit)
sudo journalctl -t cockpit
sudo journalctl -xeu cockpit

#verificando a versão do Cockpit
#opção do comando cockpit: -v (version)
sudo grafana-server -v
```

#04_ Verificando a Porta de Conexão do Cockpit<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#verificando a porta padrão do Cockpit
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'9090' -sTCP:LISTEN
```

#05_ Acessando e configurando o Cockpit via navegador<br>
```bash
#utilizar os navegadores para testar o acesso ao Cockpit 
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:9090

#Informações que serão solicitadas na configuração via Web do Cockpit
Please create the initial administrator user.

<Create User>
```

#06_ Adicionando o Módulo do Podman no Cockpit
```bash

```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO PORTAINER SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Portainer.io realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioportainer #desafioportainerio