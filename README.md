# BlogPessoal

API RESTful de blog construída com NestJS, TypeORM e MySQL.

---

## Sobre o projeto

Implementação de um CRUD completo de postagens com foco em boas práticas, organização e desenvolvimento de APIs profissionais.

Funcionalidades:

- Gerenciamento de postagens (título, texto e data)
- Validações com `class-validator`
- Persistência com TypeORM + MySQL
- Testes end-to-end com Jest + Supertest

---

## Tech Stack

- Node.js + TypeScript
- NestJS
- TypeORM + MySQL
- class-validator / class-transformer

---

## Como rodar o projeto

**1. Instalar dependências**

```bash
npm install
```

**2. Configurar variáveis de ambiente (`.env`)**

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=sua-senha
DB_NAME=blogpessoal
```

**3. Rodar em desenvolvimento**

```bash
npm run start:dev
```

**4. Executar testes end-to-end**

```bash
npm run test:e2e
```

---

## Estrutura do projeto

```
src/
 ├── postagem/
 │    ├── entities/postagem.entity.ts
 │    ├── controllers/postagem.controller.ts
 │    └── services/postagem.service.ts
 ├── app.module.ts
 └── main.ts
```

---

## Testes

Os testes e2e cobrem os fluxos principais da aplicação:

- Criar postagem
- Listar postagens
- Atualizar postagem
- Remover postagem

---

## Boas práticas aplicadas

- Arquitetura modular do NestJS
- DTOs com validações centralizadas
- Formatação com Prettier e ESLint
- Separação clara entre camadas (controller → service → repository)
- Testes cobrindo os fluxos principais

---

## Endpoints

| Método | Rota              | Descrição             |
|--------|-------------------|-----------------------|
| GET    | /postagens        | Lista todas as postagens |
| POST   | /postagens        | Cria uma nova postagem |
| PUT    | /postagens/:id    | Atualiza uma postagem  |
| DELETE | /postagens/:id    | Remove uma postagem    |

**Exemplo de requisição:**

```json
{
  "titulo": "Meu primeiro post",
  "texto": "Conteúdo da postagem"
}
```

---

## Contato

Eduardo Duarte  
edu.duartecunha@gmail.com  
[github.com/edduarte-dev](https://github.com/edduarte-dev)

---

## Licença

MIT — livre para usar e adaptar.
