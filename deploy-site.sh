#!/bin/bash

# Defina o diretório do site
SITE_DIR=~/prog/site-pessoal

# Navegar para o diretório do site
echo "Navegando para o diretório do site..."
cd $SITE_DIR || { echo "Falha ao acessar o diretório $SITE_DIR"; exit 1; }

# Rodar o comando de build
echo "Executando o build do projeto..."
npm run build || { echo "Erro ao executar o build"; exit 1; }

# Copiar os arquivos da pasta dist para o diretório do servidor web
echo "Copiando arquivos da pasta dist para o servidor web..."
sudo cp -r dist/ /var/www/html/site-pessoal/ || { echo "Erro ao copiar os arquivos da pasta dist"; exit 1; }

# Copiar os arquivos da pasta api para o diretório do servidor web
echo "Copiando arquivos da pasta api para o servidor web..."
sudo cp -r api/ /var/www/html/site-pessoal/ || { echo "Erro ao copiar os arquivos da pasta api"; exit 1; }

# Reiniciar o Nginx
echo "Reiniciando o Nginx..."
sudo systemctl restart nginx || { echo "Erro ao reiniciar o Nginx"; exit 1; }

echo "Processo de deploy concluído com sucesso!"

