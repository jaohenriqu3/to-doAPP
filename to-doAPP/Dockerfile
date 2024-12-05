FROM node:20.11.0

# Configurar o diretório de trabalho
WORKDIR /to-doAPP

# Copiar aqruivos para instalar dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install expo-cli --global  \ 
npm run web

# Copiar todos os arquivos do projeto para o contêiner
COPY . .

# Porta padrão do Metro Bundler
EXPOSE 8081

# inicializar Metro Bundler => React Native
CMD ["npm", "start"]
