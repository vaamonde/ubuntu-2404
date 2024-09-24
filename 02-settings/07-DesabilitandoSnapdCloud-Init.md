#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/08/2024<br>
#Data de atualização: 24/09/2024<br>
#Versão: 0.07<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa configuração:<br>
#01_ Listando os aplicativos rodando no SNAPd no Ubuntu Server<br>
#02_ Removendo os aplicativos rodando no SNAPd no Ubuntu Server<br>
#03_ Parando e desabilitando o serviço do SNAPd no Ubuntu Server<br>
#04_ Prevenção contra instalação e inicialização do SNAPd no Ubuntu Server<br>
#05_ Parando e desabilitando o serviço do Cloud-Init no Ubuntu Server<br>
#06_ Prevenção contra instalação e inicialização do Cloud-Init no Ubuntu Server<br>
#07_ Verificando os Status de Serviços Rodando no Ubuntu Server<br>
#08_ Reiniciando o Ubuntu Server para Aplicar as mudanças<br>

Site Oficial do Snap: https://ubuntu.com/core/services/guide/snaps-intro<br>
Site Oficial do Snapcraft: https://snapcraft.io/docs/installing-snap-on-ubuntu<br>
Site Oficial do Snapcraft.io: https://snapcraft.io/<br>
Site Oficial do Cloud-Init: https://documentation.ubuntu.com/lxd/en/latest/cloud-init/#

Snap foi criado pela Canonical, o formato de empacotamento de arquivos Snap vem instalado no Ubuntu desde a versão 18.04. Ele isola aplicativos do restante do sistema, uma vantagem em segurança, e tem alguns programas exclusivos, mas vários outros sistemas não são nativamente compatíveis, demandando passos extra para isso.

Snapcraft é uma ferramenta de linha de comando poderosa e fácil de usar para criar snaps. Ele ajuda você a: construir e publicar seus snaps na loja Snap. use canais, trilhas e ramificações para controlar com precisão atualizações e lançamentos.

Cloud-init é o método de multidistribuição padrão da indústria para inicialização de instância de nuvem multiplataforma. Ele é suportado por todos os principais provedores de nuvem pública, sistemas de provisionamento para infraestrutura de nuvem privada e instalações bare-metal.

[![SNAPd e Cloud-Init](http://img.youtube.com/vi/dWoiPeTGFFE/0.jpg)](https://www.youtube.com/watch?v=dWoiPeTGFFE "SNAPd e Cloud-Init")

Link da vídeo aula: https://www.youtube.com/watch?v=dWoiPeTGFFE

#01_ Listando os aplicativos rodando no SNAPd no Ubuntu Server<br>
```bash
#listando os aplicativos rodando no Snap
#opção do comando snap: list (List installed snaps), --all (Show all revisions)
sudo snap list --all
```

#02_ Removendo os aplicativos rodando no SNAPd no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: quando você habilita o recurso do Ubuntu Pro automaticamente e
#habilitado o recurso do Livepatch no SNAP, quando você remover o Livepatch do SNAP ele
#será desativado automaticamente do Ubuntu Pro.

#listando todos os recursos habilitados do Ubuntu Pro
#opção do comando pro: status (Report current status), --all (beta and unavailable services) 
sudo pro status --all

#listando todos os aplicativos rodando no SNAPd
#opção do comando snap: list (List installed snaps), --all (Show all revisions)
sudo snap list --all

#removendo todos os aplicativos (manualmente) rodando no SNAPd
#opção do comando snap: remove (Remove snaps from the system)
sudo snap remove canonical-livepatch
sudo snap remove core22
sudo snap remove snapd

#listando todos os aplicativos rodando no SNAPd
#opção do comando snap: list (List installed snaps), --all (Show all revisions
sudo snap list --all

#listando todos os recursos habilitados do Ubuntu Pro
#opção do comando pro: status (Report current status), --all (beta and unavailable services)
sudo pro status --all
```

#03_ Parando e desabilitando o serviço do SNAPd no Ubuntu Server<br>
```bash
#listando o status dos serviços do SNAPd
#opção do comando systemctl: status (Show terse runtime status information about one or 
#more units)
sudo systemctl status snapd.service snapd.socket snapd.seeded.service

#parando os serviços do SNAPd
#opção do comando systemctl: stop (Stop (deactivate) one or more units specified on the 
#command line)
sudo systemctl stop snapd.service snapd.socket snapd.seeded.service

#desabilitando os serviços do SNAPd
#opção do comando systemctl: disable (Disables one or more units)
sudo systemctl disable snapd.service snapd.socket snapd.seeded.service

#desativando os serviços do SNAPd para não ser iniciado sem querer
#opção do comando systemctl: mask (Mask one or more units)
sudo systemctl mask snapd.service snapd.socket snapd.seeded.service
```

#04_ Prevenção contra instalação e inicialização do SNAPd no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: NÃO É RECOMENDADO REMOVER O SNAPd DO UBUNTU SERVER, VÁRIOS SERVIÇOS
#DEPENDE DELE PARA FUNCIONAR E VÁRIAS BIBLIOTECAS E DEPENDÊNCIAS COMO O NETPLAN.IO FAZ PARTE
#DAS DEPENDÊNCIAS DO SNAPd REMOVENDO ELE OU PURGANDO PODE PREJUDICAR O SERVIDOR.

#marcando o pacote do SNAP como hold (retido/antigo)
#opção do comando apt-mark: hold (security package install)
sudo apt-mark hold snapd

#criando o arquivo de preferencia do SNAPd
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
#opção do redirecionador > (maior): Redireciona a saída padrão (STDOUT)
echo 'Package: snapd
Pin: release a=*
Pin-Priority: -10 ' | sudo tee /etc/apt/preferences.d/nosnap.pref > /dev/null

#listando o conteúdo do arquivo de preferencia do SNAPd
#opção do comando cat: -n (number line)
sudo cat -n /etc/apt/preferences.d/nosnap.pref
```

#05_ Parando e desabilitando o serviço do Cloud-Init no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: Por padrão no Ubuntu Server 24.04 Minimal o serviço do Ubuntu 
#Cloud está parado (Stop/Dead).

#verificando o Status do Cloud-Init
#opção do comando cloud-init: status (Report cloud-init status or wait on completion)
sudo cloud-init status

#verificando o Status de serviço do Cloud-Init
#opção do comando systemctl: status (Show terse runtime status information about one or 
#more units)
sudo systemctl status cloud-init

#parando o serviço do Cloud-Init
#opção do comando systemctl: stop (Stop (deactivate) one or more units specified on the 
#command line)
sudo systemctl stop cloud-init

#desabilitando o serviço do Cloud-Init
#opção do comando systemctl: disable (Disables one or more units)
sudo systemctl disable cloud-init

#desativando o serviço para não ser iniciado sem querer
#opção do comando systemctl: mask (Mask one or more units)
sudo systemctl mask cloud-init
```

#06_ Prevenção contra instalação e inicialização do Cloud-Init no Ubuntu Server<br>
```bash
#verificando o Status do Cloud-Init
#opção do comando cloud-init: status (Report cloud-init status or wait on completion)
sudo cloud-init status

#verificando o arquivo para desabilitar o Cloud-Init
#opções do comando ls: -l (use a long listing format), -h (human-readable)
sudo ls -lh /etc/cloud/cloud-init.disabled

#OBSERVAÇÃO IMPORTANTE: NÃO É RECOMENDADO REMOVER O CLOUD DO UBUNTU SERVER, VÁRIOS SERVIÇOS
#DEPENDE DELE PARA FUNCIONAR E VÁRIAS BIBLIOTECAS E DEPENDÊNCIAS COMO O NETPLAN.IO FAZ PARTE
#DAS DEPENDÊNCIAS DO CLOUD REMOVENDO ELE OU PURGANDO PODE PREJUDICAR O SERVIDOR.

#marcando o pacote do Cloud-Init como hold (retido/antigo)
#opção do comando apt-mark: hold (security package install)
sudo apt-mark hold cloud-init

#criando o arquivo de preferencia do Cloud
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
#opção do redirecionador > (maior): Redireciona a saída padrão (STDOUT)
echo 'Package: cloud-init
Pin: release a=*
Pin-Priority: -10 ' | sudo tee /etc/apt/preferences.d/nocloud.pref > /dev/null

#listando o conteúdo do arquivo de preferencia do Cloud
#opção do comando cat: -n (number line)
sudo cat -n /etc/apt/preferences.d/nocloud.pref
```

#07_ Verificando os Status de Serviços Rodando no Ubuntu Server<br>
```bash
#verificando todos os serviços rodando no servidor com o Service
#opção do comando service: --status-all ( runs all init scripts, in alphabetical order)
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo service --status-all | grep "+"

#verificando todos os serviços rodando no servidor com o Systemctl
#opções do comando systemctl: list-units (List units that systemd currently has in memory), 
#--state (additionally filtered), running (running services in system)
sudo systemctl list-units --state running
```

#08_ Reiniciando o Ubuntu Server para Aplicar as mudanças<br>
```bash
#reiniciando o ubuntu server
sudo reboot
```