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
#Versão: 0.03<br>
#Testado e homologado no GNU/Linux Ubuntu Server 24.04.x LTS

**OBSERVAÇÃO IMPORTANTE: O VÍDEO DAS ATUALIZAÇÕES DO UBUNTU SERVER ESTÁ NA VERSÃO 22.04.x LTS, O PROCEDIMENTO DE ATUALIZAR É O MESMO NA VERSÃO 24.04.x LTS, LEVANDO EM CONSIDERAÇÃO APENAS AS DEPENDÊNCIAS DE APLICATIVOS QUE TEM NESSA DOCUMENTAÇÃO, ESSE CURSO ESTÁ USANDO A INSTALAÇÃO MINIMIZADA (MINIMIZED) DO UBUNTU SERVER.**

Release Ubuntu Server 24.04: https://fridge.ubuntu.com/2024/04/25/ubuntu-24-04-lts-noble-numbat-released/

Release Notes Ubuntu Server 24.04.x: https://canonical.com/blog/canonical-releases-ubuntu-24-04-noble-numbat<br>
Ubuntu Advantage for Infrastructure: https://ubuntu.com/advantage<br>
Ciclo de Lançamento do Ubuntu Server: https://ubuntu.com/about/release-cycle<br>
Releases All Ubuntu Server: https://wiki.ubuntu.com/Releases

Conteúdo estudado nessa atualização:<br>
#01_ Atualizando as Listas sources.list do Apt ou Apt-Get no Ubuntu Server<br>
#02_ Verificando todos os pacotes a serem utilizados no Ubuntu Server<br>
#03_ Atualizando todos os software no Ubuntu Server<br>
#04_ Forçando uma atualização completa de todos os software e dependências no Ubuntu Server<br>
#05_ Forçando uma atualização e remoção de software desnecessários no Ubuntu Server<br>
#06_ Removendo pacotes desnecessários no Ubuntu Server<br>
#07_ Fazendo a limpeza dos repositórios locais e pacotes desnecessários no Ubuntu Server<br>
#08_ Limpando o cache local do sources.list no Ubuntu Server<br>

Apt-Get ou Apt A ferramenta de pacote avançada, é uma interface de usuário de software livre que funciona com bibliotecas centrais para lidar com a instalação e remoção de software no Debian e em distribuições Linux baseadas nele.

[![Atualização Ubuntu Server](http://img.youtube.com/vi/B3FzV2bxjtw/0.jpg)](https://www.youtube.com/watch?v=B3FzV2bxjtw "Atualização Ubuntu Server")

Link da vídeo aula: https://www.youtube.com/watch?v=B3FzV2bxjtw

#01_ Atualizando as Listas sources.list do Apt ou Apt-Get no Ubuntu Server<br>
```bash
#Update é utilizado para baixar informações de pacotes de todas as fontes configuradas.
sudo apt update
```

#02_ Verificando todos os pacotes a serem utilizados no Ubuntu Server<br>
```bash
#List é utilizado para listar todos os software que serão atualizados no sistema.
sudo apt list --upgradable
```

#03_ Atualizando todos os software no Ubuntu Server<br>
```bash
#Upgrade é utilizado para instalar atualizações disponíveis de todos os pacotes atualmente 
#instalados no sistema a partir das fontes configuradas via sources.list
sudo apt upgrade
```

#04_ Forçando uma atualização completa de todos os software e dependências no Ubuntu Server<br>
```bash
#Dist-Upgrade além de executar a função de atualização, também lida de forma inteligente 
#com as novas dependências das novas versões de pacotes
sudo apt dist-upgrade
```

#05_ Forçando uma atualização e remoção de software desnecessários no Ubuntu Server<br>
```bash
#Full-Upgrade executa a função de atualização, mas removerá os pacotes atualmente 
#instalados se isso for necessário para atualizar o sistema como um todo
sudo apt full-upgrade
```

#06_ Removendo pacotes desnecessários no Ubuntu Server<br>
```bash
#Autoremove é utilizado para remover pacotes que foram instalados automaticamente para 
#satisfazer dependências de outros pacotes e agora não são mais necessários, pois as 
#dependências foram alteradas ou os pacotes que precisavam deles foram removidos nesse 
#meio tempo.
sudo apt autoremove
```

#07_ Fazendo a limpeza dos repositórios locais e pacotes desnecessários no Ubuntu Server<br>
```bash
#Autoclean como Clean, o autoclean limpa o repositório local de arquivos de pacotes 
#recuperados. A diferença é que ele remove apenas arquivos de pacotes que não podem 
#mais ser baixados e são inúteis.
sudo apt autoclean
```

#08_ Limpando o cache local do sources.list no Ubuntu Server<br> 
```bash
#Clean limpa o repositório local de arquivos de pacotes recuperados
sudo apt clean

#Reiniciar o servidor para testar as atualizações
sudo reboot
```