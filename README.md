📘 BlogPessoal

API RESTful de Blog construída com NestJS, TypeORM e MySQL 

<div align="center">










</div>
📌 Sobre o projeto

Esta API implementa um CRUD completo de postagens, incluindo:

✍️ Título, texto e data

🔒 Validações com class-validator

🗄️ Persistência com TypeORM + MySQL

🧪 Testes end-to-end com Jest + Supertest

O foco do projeto é demonstrar boas práticas, organização e capacidade de desenvolver APIs profissionais.

🧱 Tech Stack

🟩 Node.js + TypeScript

🔺 NestJS

🗄️ TypeORM + MySQL

🧹 class-validator / class-transformer


🚀 Como rodar o projeto
1️⃣ Instalar dependências
npm install

2️⃣ Configurar variáveis de ambiente (.env)
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=sua-senha
DB_NAME=blogpessoal

3️⃣ Rodar em desenvolvimento
npm run start:dev

4️⃣ Executar testes end-to-end
npm run test:e2e

📂 Estrutura principal do projeto
src/
 ├── postagem/
 │    ├── entities/postagem.entity.ts      # Entidade Postagem
 │    ├── controllers/postagem.controller.ts  # Rotas CRUD
 │    └── services/postagem.service.ts     # Lógica de negócio
 ├── app.module.ts                         # Configurações e módulos
 └── main.ts                               # Entry point

🧪 Testes

Os testes e2e garantem o funcionamento real da aplicação:

Criar postagem

Listar postagens

Atualizar postagem

Remover postagem

Rodar:

npm run test:e2e

💡 Boas práticas aplicadas

Arquitetura modular do NestJS

DTOs com validações centralizadas

Código formatado com prettier/eslint

Testes cobrindo os fluxos principais

Separação clara entre camadas (controller → service → repository)

📸 Demonstração (sugestão para o portfólio)
GET /postagens
POST /postagens
PUT /postagens/:id
DELETE /postagens/:id


Exemplo de requisição:

{
  "titulo": "Meu primeiro post",
  "texto": "Conteúdo da postagem"
}


Se quiser, posso gerar coleção do Postman / Insomnia para incluir no repositório.

📬 Contato

Seu Nome
📧 seu-email@example.com


🐙 GitHub: https://github.com/seu-usuario
📄 Licença

MIT — sinta-se livre para usar e adaptar.



