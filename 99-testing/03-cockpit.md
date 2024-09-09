#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/09/2024<br>
#Data de atualização: 09/09/2024<br>
#Versão: 0.02<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO COCKPIT SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Cockpit e Podman realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiocockpit #desafiopodman

Conteúdo estudado nesse desafio:<br>
#01_ Instalação do Cockpit e Podman no Ubuntu Server 24.04<br>
#02_ Habilitando os Serviços do Cockpit e do Podman<br>
#03_ Verificando o Serviço e Versão do Cockpit<br>
#04_ Verificando o Serviço e Versão do Podman<br>
#05_ Verificando a Porta de Conexão do Cockpit<br>
#06_ Acessando e configurando o Cockpit e Podman via navegador<br>

Site Oficial do Cockpit: https://cockpit-project.org/<br>
Site Oficial do Cockpit Application: https://cockpit-project.org/applications<br>
Site Oficial do Podman: https://podman.io/

O QUE É E PARA QUE SERVER O COCKPIT: Cockpit é uma interface gráfica baseada na web para servidores, destinada a todos, especialmente aqueles que são: novos no Linux (incluindo administradores do Windows), familiarizados com o Linux e desejam uma maneira gráfica fácil de administrar servidores. administradores especialistas que usam principalmente outras ferramentas, mas desejam uma visão geral de sistemas individuais.

O QUE É E PARA QUE SERVER O PODMAN: Podman (o POD MANager) é uma ferramenta para gerenciar contêineres e imagens, volumes montados nesses contêineres e pods feitos de grupos de contêineres. O Podman executa contêineres no Linux, mas também pode ser usado em sistemas Mac e Windows usando uma máquina virtual gerenciada pelo Podman. Podman é baseado em libpod, uma biblioteca para gerenciamento do ciclo de vida de contêineres que também está contida neste repositório. A biblioteca libpod fornece APIs para gerenciar contêineres, pods, imagens de contêineres e volumes.

[![Cockpit](http://img.youtube.com/vi//0.jpg)]( "Cockpit")

Link da vídeo aula: 

#01_ Instalação do Cockpit e Podman no Ubuntu Server 24.04<br>
```bash
#instalando o Cockpit no Ubuntu Server
#opção do comando apt: --install-recommends (Consider suggested packages as a dependency for installing)
sudo apt install --install-recommends cockpit cockpit-podman podman
```

#02_ Habilitando os Serviços do Cockpit e do Podman no Ubuntu Server 24.04<br>
```bash
#habilitando os serviços do Cockpit e do Podman
sudo systemctl daemon-reload
sudo systemctl enable cockpit podman
sudo systemctl restart cockpit podman
```

#03_ Verificando o Serviço e Versão do Cockpit no Ubuntu Server 24.04<br>
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
#opção do comando grep: -i (ignore-case)
#opção do redirecionador |: Conecta a saída padrão com a entrada padrão de outro comando
sudo apt list --installed | grep -i cockpit 
```

#04_ Verificando o Serviço e Versão do Podman no Ubuntu Server 24.04<br>
```bash
#verificando o serviço do Podman
sudo systemctl status podman
sudo systemctl restart podman
sudo systemctl stop podman
sudo systemctl start podman

#analisando os Log's e mensagens de erro do Podman
#opção do comando journalctl: -t (identifier), -x (catalog), -e (pager-end), -u (unit)
sudo journalctl -t podman
sudo journalctl -xeu podman

#verificando a versão do Podman
#opção do comando podman: -v (version)
sudo podman -v
```

#05_ Verificando a Porta de Conexão do Cockpit no Ubuntu Server 24.04<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#verificando a porta padrão do Cockpit
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'9090' -sTCP:LISTEN
```

#06_ Interface e Endereçamento IPv4 padrão do Podman no Ubuntu Server 24.04<br>
```bash
#verificando a interface e endereço IPv4 do Podman
sudo ifconfig podman0
  podman0: 10.88.0.1/16 (255.255.0.0)
```

#07_ Localização dos diretórios principais do Cockpit no Ubuntu Server 24.04<br>
```bash
/etc/cockpit/*   <-- Diretório dos arquivos de Configuração do serviço do Cockpit
```

#08_ Acessando e configurando o Cockpit e Podman via navegador<br>
```bash
#utilizar os navegadores para testar o acesso ao Cockpit 
firefox ou google chrome: https://endereço_ipv4_ubuntuserver:9090

#Informações que serão solicitadas na configuração via Web do Cockpit
Ubuntu Server.
  Username: vaamonde
  Password: pti@2018
  Other options
    
<Log in>

#configurações básicas do Cockpit
Overview
  <Turn on administrative access>

#configurações básicas do Podman
Podman containers
  User Podman service is also available: <Start>
  Imagens
  Container
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO COCKPIT SE VOCÊ CONSEGUIU FAZER O IMPLEMENTAÇÃO COM A SEGUINTE FRASE: Implementação do Cockpit e Podman realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiocockpit #desafiopodman