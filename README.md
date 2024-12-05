# 📋 Tasky APP   

Aplicativo para gestão de tasks desenvolvido em **TypeScript + React Native + Docker **,

## **Funcionalidades**

- **Adicionar novas tarefas:** Crie tarefas rapidamente para gerenciar seu dia.
- **Editar tarefas existentes:** Atualize informações de uma tarefa sempre que necessário.
- **Excluir tarefas:** Remova tarefas concluídas ou não desejadas.

---

## 🛠 **Tecnologias Utilizadas**

- **React Native**: Framework principal para desenvolvimento.
- **Docker**: Para containerização do projeto.
- **Expo**: O Expo é um framework que oferece um conjunto de ferramentas e serviços construídos em torno de plataformas nativas e React Native.

---

## 🚀 **Como Executar o Projeto**

1. Clone o repositório:
   ```bash
   https://github.com/jaohenriqu3/to-doAPP.git
   ```

2. Instale as dependências:
   ```bash
   npm install expo-cli --global
   ```

3. Inicie o projeto:
   ```bash
   npm run web
   ```
   
## 🐳 **Como Executar o Container**

Pré-requisitos: Docker instalado.

Após clonar o repositório, execute o comando:
docker build -t to-doAPP .
docker run -p 8081:8081 todo-list-app

A porta principal do container é a 8081.
