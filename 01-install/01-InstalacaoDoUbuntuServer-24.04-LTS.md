Autor: Robson Vaamonde<br>
Procedimentos em TI: http://procedimentosemti.com.br<br>
Bora para Prática: http://boraparapratica.com.br<br>
Robson Vaamonde: http://vaamonde.com.br<br>
Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
LinkedIn Robson Vaamonde: https://www.linkedin.com/in/robson-vaamonde-0b029028/<br>
Github Procedimentos em TI: https://github.com/vaamonde<br>
Data de criação: 08/08/2024<br>
Data de atualização: 04/04/2025<br>
Versão: 0.05<br>
Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.2: https://fridge.ubuntu.com/2025/02/20/ubuntu-24-04-2-lts-released/<br>
Release Notes Ubuntu Server 24.04.1: https://lists.ubuntu.com/archives/ubuntu-announce/2024-August/000304.html<br>
Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa instalação:<br>
#01_ Download da ISO do Ubuntu Server 24.04.x LTS<br>
#02_ Criação da Máquina Virtual no Oracle VirtualBOX<br>
#03_ Configurações da Máquina Virtual DockerUbuntu<br>
#04_ Iniciando a Instalação do Ubuntu Server 24.04.x LTS (localizar a ISO)<br>
#05_ Instalação e Configuração do Ubuntu Server 24.04.x LTS<br>
#06_ Acessando o Ubuntu Server pela primeira vez<br>

**O QUE É E PARA QUE SERVER O ON-PREMISES:** O termo correto é "on-premises", e ele se refere a uma infraestrutura de TI que está localizada fisicamente nas instalações da empresa. Isso significa que os servidores, bancos de dados, aplicações e demais recursos de TI são hospedados, gerenciados e mantidos internamente pela equipe da empresa, em vez de serem executados em uma nuvem pública como AWS, Azure ou Google Cloud.

**O QUE É E PARA QUE SERVER O CLOUD:** O Cloud Computing (Computação em Nuvem) é um modelo de TI que permite o acesso remoto a servidores, armazenamento, bancos de dados, redes e softwares por meio da internet. Em vez de manter servidores e infraestrutura física dentro da empresa (on-premises), tudo é hospedado em datacenters de provedores de nuvem, como AWS, Microsoft Azure, Google Cloud, entre outros.

**O QUE É E PARA QUE SERVER O UBUNTU SERVER:** O Ubuntu Server é uma versão do sistema operacional Ubuntu desenvolvida especificamente para servidores. Ele é baseado no Debian e é uma das distribuições Linux mais populares para servidores devido à sua estabilidade, segurança e facilidade de uso.

**O QUE É E PARA QUE SERVER O LTS:** LTS significa Long-Term Support (Suporte de Longo Prazo). Ele é um tipo de versão de software que recebe atualizações e suporte por um período estendido, geralmente de 3 a 5 anos ou mais, dependendo do projeto.

**O QUE É E PARA QUE SERVER O HWE:** O HWE (Hardware Enablement Stack) no Ubuntu é um conjunto de atualizações de kernel, drivers e bibliotecas que estendem o suporte a hardware mais recente nas versões LTS (Long-Term Support) do sistema.

**O QUE É E PARA QUE SERVER O UBUNTU SERVER MINIMAL:** O Ubuntu Server Minimal é uma versão enxuta do Ubuntu Server, projetada para oferecer uma instalação mais leve e essencial, sem pacotes e serviços adicionais que podem não ser necessários para todos os usuários. Ele é ideal para quem deseja uma base limpa e personalizada, instalando apenas os componentes essenciais para o funcionamento do servidor.

[![Instalação Ubuntu Server](http://img.youtube.com/vi/p4f6a_-yM_8/0.jpg)](https://www.youtube.com/watch?v=p4f6a_-yM_8 "Instalação Ubuntu Server")

Link da vídeo aula: https://www.youtube.com/watch?v=p4f6a_-yM_8

## 01_ Download da ISO do Ubuntu Server 24.04.x LTS

Link de download do Ubuntu Server: https://releases.ubuntu.com/24.04/

```bash
A) Versão do download Ubuntu Server: ubuntu-24.04.2-live-server-amd64.iso (Link atualizado em 04/04/2025)
B) Arquitetura do Ubuntu Server: AMD64 (64-bit)
C) Tipo de instalação: DVD Image (ISO) Installer
```

## 02_ Criação da Máquina Virtual no Oracle VirtualBOX

Link de download do Oracle VirtualBOX: https://www.virtualbox.org/wiki/Downloads<br>
Vídeo de instalação do VirtualBOX no Linux Mint: https://www.youtube.com/watch?v=yTihvAaaxpU<br>
Atualização do VirtualBOX no Linux Mint: https://www.youtube.com/watch?v=DU47PLFSxpA<br>

```bash
Oracle VirtualBOX Gerenciado (versão 7.x ou superior).

01) Ferramentas;	
<Novo>

02) Nome da Máquina Virtual e Sistema Operacional:
    Nome: DockerUbuntu (altere conforme a sua necessidade)
    Pasta (F): #PATH_PADRÃO\DockerUbuntu (altere conforme a sua necessidade)
    Imagem ISO: <não selecionar>
    Edição: (sem informação)
    Tipo: Linux
    Versão: Ubuntu (64-bit)
<Próximo>

03) Hardware:
    Memória Base: 4096MB (altere conforme a sua necessidade, mínimo 2048MB)
    Processadores: 02 CPU (altere conforme a sua necessidade, mínimo 2 CPU)
    Habilitar EFI (SOs especiais apenas): OFF (Desligado)
<Próximo>

04) Disco Rígido Virtual:
    Criar um novo disco rígido virtual agora: ON (Selecionar)
      Tamanho do Disco: 50,00GB (alterar conforme a sua necessidade, mínimo 50GB)
    Pré-alocar Tamanho Total (F): OFF (Desativado) 
<Próximo>

05) Sumário
<Finalizar>
```

## 03_ Configurações da Máquina Virtual DockerUbuntu
```bash
Oracle VirtualBOX Gerenciado (versão 7.x ou superior).

01) Selecionar a Máquina Virtual: DockerUbuntu
<Configurações>

02) Sistema
    Placa-Mãe
      Recurso Estendidos
        Relógio da máquina retorno hora UTC: OFF (Desabilitar)
    Processador
        Recursos Estendidos: Habilitar PAE/NX
                             Habilitar VT-x/AMD-v Aninhado

03) Monitor
    Tela (S)
      Memória de Vídeo: 128MB
      Recursos Estendidos: Habilitar Aceleração 3D: ON (Habilitar)

04) Áudio
    Habilitar Áudio: OFF (Desabilitar)

05) Rede
    Adaptador 1 (LAN)
      Habilitar Placa de Rede: ON (Habilitar)
      Conectado a: Placa em modo Bridge
      Nome: Intel(R) Ethernet Connection (Placa de Rede On-Board)
      #OBSERVAÇÃO: VERIFIQUE QUAL PLACA DE REDE VOCÊ ESTÁ USANDO NO SEU EQUIPAMENTO
      #QUE ESTÁ CONECTADO NA SUA REDE LOCAL, PODE SER PLACA DE REDE CABEADA OU PLACA
      #SEM-FIO (RECOMENDO SEMPRE PLACA DE REDE CABEADA, MELHOR DESEMPENHO).
<OK>
```

## 04_ Iniciando a Instalação do Ubuntu Server 24.04.x LTS (localizar a ISO)
```bash
Oracle VirtualBOX Gerenciado (versão 7.x ou superior).

01) Selecionar a Máquina Virtual: DockerUbuntu: 
<Iniciar>

02) VirtualBOX VM	
    DVD: <Outro>
    LOCALIZAR A IMAGEM DA ISO DO UBUNTU SERVER 24.04.x LTS
<Montar e Tentar Novo Boot>
```

## 05_ Instalação e Configuração do Ubuntu Server 24.04.x LTS

Link Oficial da Instalação do Ubuntu Server: https://ubuntu.com/server/docs/installation

```bash
01) *Try or Install Ubuntu Server
<Enter>

02) Use UP, DOWN and ENTER keys to select your language
    English (recomendado utilizar sempre a opção em Inglês)
<Enter>

03) Keyboard configuration
    Layout: [English (US)] ou [Portuguese (Brazil)] (altere conforme a sua necessidade)
    Variant: [English (US)] ou [Portuguese (Brazil)] (altere conforme a sua necessidade)
<Done>

04) Choose type of install
    ( ) Ubuntu Server (DEFAULT - Selecionado por padrão)
    (X) Ubuntu Server (minimized) (SELECIONAR PRESSIONANDO SPACE)
    Additional options
      [ ] Search for third-party drivers
<Done>

05) Network connections
    enp0s3 eth - (o nome lógico da placa de rede muda de equipamento para equipamento)
    DHCPv4 172.16.1.XXX/24 (altere conforme a sua necessidade)
    #OBSERVAÇÃO IMPORTANTE: VERIFICAR O ENDEREÇO IPv4 QUE VOCÊ ESTÁ USANDO NA SUA REDE 
    #INTERNA PARA ADAPTAR NO SEU CENÁRIO.
<Done>

06) Configure proxy
    Proxy address: (Default)
<Done>

07) Configure Ubuntu archive mirror
    Mirror: http://archive.ubuntu.com/ubuntu
    #OBSERVAÇÃO IMPORTANTE: CASO QUEIRA TROCAR O MIRROR DO UBUNTU DO BRASIL PARA O
    #OFICIAL NO US, SUBSTITUA A URL DE: http://br.archive.ubuntu.com/ubuntu PARA A
    #URL: http://us.archive.ubuntu.com/ubuntu
<Done>

08) Guided storage configuration
    (X) Use an entire disk (Default)
      [VBOX_HARDISK-XXXX local disk 50.000G]
        (X) Set up this disk as an LVM group (Default)
          [] Encrypt the LVM group with LUKS (Default - No (Não))
<Done>

09) Storage configuration
    USED DEVICES
      ubuntu-lv	new, to be formatted as ext4, mounted at /	24G <Enter>
        Edit <Enter>
          Name: ubuntu-lv
          Size (max 47.996G): 47.996G
          Format: ext4
          Mount: /
        <Save>
<Done>
  Confirm destructive action
<Continue>

10) Profile setup
    #OBSERVAÇÃO: ALTERAR OS DADOS DO NOME DO SERVIDOR, USUÁRIO E SENHA PARA O SEU CENÁRIO.
    Your name: Seu Nome e Sobrenome <Tab>
    Your servers name: ctnseunome <Tab>
    Pick a username: seu_usuário <Tab>
    Choose a passwords: sua_senha <Tab>
    Confirm your passwords: sua_senha
<Done>

11) Upgrade to Ubuntu Pro
    (X) Skip Ubuntu Pro setup for now
<Continue>

12) SSH Setup
    [X] Install OpenSSH server: ON (Habilitar - pressione <Space> para selecionar)
    Import SSH identity: No (Default)
<Done>

13) Featured Server Snaps
<Done>

14) Install complete!
<Reboot Now>

15) Please remove the installation medium, then press ENTER:
<Enter>
```

## 06_ Acessando o Ubuntu Server pela primeira vez
```bash
#AGUARDAR A INICIALIZAÇÃO TOTAL DO UBUNTU SERVER, NO FINAL SERÁ GERADO VÁRIAS CHAVES 
#DE AUTENTICAÇÃO DO SSH SERVER, PRESSIONE <ENTER> PARA APARECER A TELA DE LOGIN.

01) Tela de Login do Ubuntu Server
    ctnseunome login: seu_usuário <Enter> (altere para o seu usuário)
    Password: sua_senha <Enter> (altere para o seu usuário)
```