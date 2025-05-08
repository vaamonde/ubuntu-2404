#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/08/2024<br>
#Data de atualização: 08/05/2025<br>
#Versão: 0.06<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

**OBSERVAÇÃO IMPORTANTE:** O VÍDEO DAS CONFIGURAÇÕES DO HOSTNAME, FQDN, HOSTS E DA PLACA DE REDE DO UBUNTU SERVER ESTÁ NA *VERSÃO 22.04.x LTS*, O PROCEDIMENTO DE ATUALIZAR É O MESMO NA VERSÃO 24.04.x LTS, LEVANDO EM CONSIDERAÇÃO APENAS AS DEPENDÊNCIAS DE APLICATIVOS QUE TEM NESSA DOCUMENTAÇÃO, ESSE CURSO ESTÁ USANDO A INSTALAÇÃO **MINIMIZADA (MINIMIZED)** DO UBUNTU SERVER.

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa configuração:<br>
#01_ Alterando o nome FQDN (Fully Qualified Domain Name) do Ubuntu Server<br>
#02_ Alterando as entradas no arquivo Hosts do Ubuntu Server<br>
#03_ Instalando os principais software de rede no Ubuntu Server<br>
#04_ Verificando informações do Hardware de Rede no Ubuntu Server<br>
#05_ Verificando as informações de Endereços IPv4 no Ubuntu Server<br>
#06_ Alterando as configurações da Placa de Rede do Ubuntu Server<br>
#07_ Aplicando as configurações do Netplan e verificando as informações de Rede do Ubuntu Server<br>
#08_ Acessando a máquina virtual do Ubuntu Server remotamente via SSH<br>

**O QUE É E PARA QUE SERVER O NETPLAN:** O Netplan é um utilitário para configurar facilmente a rede em um sistema Linux. Você simplesmente cria uma descrição YAML das interfaces de rede necessárias e o que cada uma deve ser configurada para fazer. A partir desta descrição o Netplan irá gerar toda a configuração necessária para a ferramenta de renderização escolhida.

**O QUE É E PARA QUE SERVER O HOSTNAME:** O arquivo Hostname é usado para exibir o nome DNS do sistema e para exibir ou defina seu nome de host ou nome de domínio NIS. O arquivo /etc/hostname armazena as informações de nome de máquina e domínio no formato FQDN (Fully Qualified Domain Name)

**O QUE É E PARA QUE SERVER O FQDN:** Algumas vezes denominado nome de domínio absoluto, é um nome de domínio que especifica sua localização exata na árvore hierárquica do Domain Name System. Ele especifica todos os níveis de domínio, incluindo, pelo menos, um domínio de segundo nível e um domínio de nível superior.

**O QUE É E PARA QUE SERVER O HOSTS:** O arquivo Hosts faz a pesquisa na tabela estática para nomes de host, é utilizado quando não temos servidores DNS (Domain Name System) e fazermos o apontamento diretamente no arquivo localizado em /etc/hosts.

[![Endereço IPv4 Ubuntu Server](http://img.youtube.com/vi/sKn5fTy1OHI/0.jpg)](https://www.youtube.com/watch?v=sKn5fTy1OHI "Endereço IPv4 Ubuntu Server")

Link da vídeo aula: https://www.youtube.com/watch?v=sKn5fTy1OHI

## 01_ Alterando o nome FQDN (Fully Qualified Domain Name) do Ubuntu Server
```bash
#instalando o editor de Texto Vim, Git e o Python3
sudo apt update
sudo apt install vim git python3

#editando o arquivo de configuração do Hostname
sudo vim /etc/hostname

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#alterar o nome de domínio FQDN na linha 1
#OBSERVAÇÃO IMPORTANTE: ALTERAR O NOME DO DOMÍNIO PARA O SEU CENÁRIO
ctnseunome.seu.domínio
```
```bash
#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

## 02_ Alterando as entradas no arquivo Hosts do Ubuntu Server
```bash
#editando o arquivo de configuração do Hosts
sudo vim /etc/hosts

#entrando no modo de edição do editor de texto VIM
INSERT
```
```bash
#adicionar o nome de domínio e apelido nas linhas 2 e 3
#OBSERVAÇÃO IMPORTANTE: ALTERAR O NOME DO DOMÍNIO E APELIDO PARA O SEU CENÁRIO
127.0.0.1      localhost.seu.dominio    localhost
127.0.1.1      ctnseunome.seu.domínio   ctnseunome
ENDEREÇO_IPV4  ctnseunome.seu.domínio   ctnseunome

#OBSERVAÇÃO IMPORTANTE: NESSE CENÁRIO NÃO SERÁ CONFIGURADO O IPv6
# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```
```bash
#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

## 03_ Instalando os principais software de rede no Ubuntu Server
```bash
#atualizando as lista do sources.list e instalando os pacotes e ferramentas de rede
sudo apt update
sudo apt install bridge-utils ifenslave net-tools lshw iputils-ping
```

## 04_ Verificando as informações do Hardware de Rede no Ubuntu Server
```bash
#verificando os dispositivos PCI de Placa de Rede instalados
#opções do comando lspci: -v (verbose), -s (show)
#opção do comando grep: -i (ignore-case)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo lspci -v | grep -i ethernet

#verificando os detalhes do hardware de Placa de Rede instalada
sudo lshw -class network
```

## 05_ Verificando as informações de Endereços IPv4 no Ubuntu Server
```bash
#verificando as configurações de endereçamento IP da Placa de Rede instalada
#opção do comando ifconfig: -a (all)
#opções do comando ip: address (Protocol (IP or IPv6) address on a device)
sudo ifconfig -a
sudo ip address show

#verificando as configurações de Gateway (route)
#opção do comando route: -n (number)
#opções do comando ip: route (Routing table entry)
sudo route -n
sudo ip route

#verificando as informações de cache dos Servidores DNS (resolução de nomes)
sudo resolvectl
```

## 06_ Alterando as configurações da Placa de Rede do Ubuntu Server

**OBSERVAÇÃO:** o nome do arquivo pode mudar dependendo da versão do Ubuntu Server, o arquivo: */etc/netplan/00-installer-config.yaml* é o padrão do *Ubuntu Server 22.04.x LTS*, no Ubuntu Server 24.04.x LTS tem o nome: */etc/netplan/50-cloud-init.yaml*, sempre digita o comando: *ls -lh /etc/netplan* antes saber e editar o arquivo Netplan corretamente.

**OBSERVAÇÃO IMPORTANTE:** o arquivo de configuração do *Netplan* e baseado no formato de *Serialização de Dados Legíveis YAML (Yet Another Markup Language)* utilizado pela linguagem de programação **Python**, muito cuidado com o uso de espaços e tabulação e principalmente sua indentação.

```bash
#listando o conteúdo do diretório do Netplan
#opção do comando ls: -l (long listing), -h (human-readable)
ls -lh /etc/netplan/

#fazendo o backup do arquivo de configuração original do Netplan
#opção do comando cp: -v (verbose)
sudo cp -v /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.old

#editando o arquivo de configuração do Netplan
sudo vim /etc/netplan/50-cloud-init.yaml
INSERT
```
```yaml
#bloco de configuração da rede
network:
  #bloco de configuração do protocolo Ethernet
  ethernets:
    #configuração da Interface Física (Nome Lógico comando lshw)
    enp0s3:
      #desabilitando o suporte ao DHCP Client
      dhcp4: false
      #desativando o suporte ao IPv6
      #OBSERVAÇÃO IMPORTANTE: utilizar essa opção somente se você não está usando
      #na sua rede o recurso do IPv6
      link-local: []
      #alterar o endereço IPv4 para o seu cenário
      #OBSERVAÇÃO IMPORTANTE: configuração do Endereço IPv4 dentro de Colchetes
      addresses: [ENDEREÇO_IPv4_SERVIDOR/CIDR]
      #alterar o gateway padrão para o seu cenário
      #OBSERVAÇÃO IMPORTANTE: a opção de Gateway4 foi descontinuada, recomendo
      #utilizar as opções de Routes do Netplan para configurar o Gateway padrão
      #gateway4: 172.16.1.254
      routes:
        #configuração da rota padrão (cuidado com o traço antes do to)
        - to: default
          #configuração do endereço IPv4 do Gateway
          via: ENDEREÇO_IPv4_GATEWAY
      #configuração dos servidores de DNS Preferencial e Alternativo
      nameservers:
        #alterar os servidores DNS para o seu cenário
        #OBSERVAÇÃO: configuração do Endereço IPv4 dentro de Colchetes e separados
        #por vírgula, recomendo pelo menos dois DNS Server serem configurados ou 
        #somente o endereço do Servidor de DNS Local d Rede.
        addresses: [8.8.8.8, 8.8.4.4]
        #alterar a pesquisa de domínio para o seu cenário
        #OBSERVAÇÃO: configuração da pesquisa de Domínio dentro de Colchetes
        search: [SEU.DOMÍNIO]
  #fim do bloco de configuração do protocolo Ethernet versão 2
  version: 2
```
```bash
#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

## 07_ Aplicando as configurações do Netplan e verificando as informações de Rede do Ubuntu Server
```bash
#aplicando as mudanças do Netplan em modo Debug (detalhado)
sudo netplan --debug apply

#OBSERVAÇÃO IMPORTANTE: você pode utilizar a opção: try que caso aconteça alguma
#falha na hora de configurar a placa de rede ele reverte a configuração inicial
sudo netplan --debug try

#verificando o endereço IPv4 da Interface de Rede
sudo ifconfig
sudo ip address show

#verificando as informações de Gateway padrão
#opção do comando route: -n (numeric)
sudo route -n
sudo ip route

#verificando as informações dos Servidores DNS e Pesquisa de Domínio
sudo resolvectl

#testando a conexão com a Internet
ping 8.8.8.8
ping google.com

#verificando as informações do nome do servidor Ubuntu Server
#opção do comando hostname: -A (all-fqdns), -d (domain), -i (ip address)
sudo hostname
sudo hostname -A
sudo hostname -d
sudo hostname -i
```

## 08_ Acessando a máquina virtual do Ubuntu Server remotamente via SSH

**OBSERVAÇÃO:** após a configuração da Placa de Rede do Ubuntu Server você já pode acessar remotamente o seu servidor utilizando o Protocolo SSH nos clientes Linux ou Microsoft para dá continuidade nas configurações do servidor, ficando mais fácil administrar e configurar os principais serviços de rede de forma remota.

```bash
#testando a conexão com o Ubuntu Server
ping ENDEREÇO_IPv4_SERVIDOR

#acessando remotamente o Ubuntu Server
ssh seu_usuário@ENDEREÇO_IPv4_SERVIDOR

#confirmando a troca das chaves públicas e do fingerprint do SSH
Yes <Enter>
```