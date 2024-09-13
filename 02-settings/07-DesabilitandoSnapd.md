#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 08/08/2024<br>
#Data de atualização: 13/09/2024<br>
#Versão: 0.05<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa configuração:<br>
#01_ Listando as aplicativos rodando no SNAP do Ubuntu Server<br>
#02_ Parando e desabilitando o serviço do SNAP do Ubuntu Server<br>
#03_ Desinstalando o Serviço do SNAP do Ubuntu Server<br>
#04_ Prevenção contra instalação do SNAP do Ubuntu Server<br>

Site Oficial do Snap: https://ubuntu.com/core/services/guide/snaps-intro<br>
Site Oficial do Snapcraft: https://snapcraft.io/docs/installing-snap-on-ubuntu<br>
Site Oficial do Snapcraft.io: https://snapcraft.io/

Snap foi criado pela Canonical, o formato de empacotamento de arquivos Snap vem instalado no Ubuntu desde a versão 18.04. Ele isola aplicativos do restante do sistema, uma vantagem em segurança, e tem alguns programas exclusivos, mas vários outros sistemas não são nativamente compatíveis, demandando passos extra para isso.

Snapcraft é uma ferramenta de linha de comando poderosa e fácil de usar para criar snaps. Ele ajuda você a: construir e publicar seus snaps na loja Snap. use canais, trilhas e ramificações para controlar com precisão atualizações e lançamentos.

[![SNAP](http://img.youtube.com/vi//0.jpg)]( "SNAP")

Link da vídeo aula: 

#01_ Listando os aplicativos rodando no SNAP do Ubuntu Server<br>
```bash
#listando os aplicativos rodando no Snap
#opção do comando snap: list (List installed snaps)
snap list
```

#02_ Parando e desabilitando o serviço do SNAP do Ubuntu Server<br>
```bash
#listando o status de serviço do SNAP
sudo systemctl status snapd

#parando o serviço do SNAP
sudo systemctl stop snapd

#desabilitando o serviço do SNAP
sudo systemctl disable snapd

#desativando o serviço para não ser iniciado sem querer
sudo systemctl mask snapd
```

#03_ Desinstalando o Serviço do SNAP no Ubuntu Server<br>
```bash
#removendo o pacote do SNAP
#opção do comando apt: purge (remove and purge package)
sudo apt purge snapd

#marcando o pacote do SNAP como hold (retido/antigo)
#opção do comando apt-mark: hold (security package install)
sudo apt-mark hold snapd
```

#04_ Prevenção contra instalação do SNAP no Ubuntu Server<br>
```bash
#criando o arquivo de preferencia do SNAP
#opção do redirecionador | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
#opção do redirecionador > (maior): Redireciona a saída padrão (STDOUT)
echo 'Package: snapd
Pin: release a=*
Pin-Priority: -10 ' | sudo tee /etc/apt/preferences.d/nosnap.pref > /dev/null
```