<h1 align="center"> Api - Atac-Sistemas</h1>
<h2 align="center">Este é o back-end da aplicação Atac-Sismetas. A aplicação é um repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.</h2>

## Ferramentas utilizadas
- Node.js
- PostgresSQL
- Express
- Typescript
- TypeORM

[![Arquivo para Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Atac-Sistemas&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fallan-verde%2Fback-end-atac-sistemas%2Ffeature%2Freadme%2Fatac-sistemas.json)

## Rotas Tools

### Obter todas as ferramentas

`GET /tools - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

### Caso dê tudo certo, a resposta será assim:

`GET /tools - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": 8,
    "title": "notion",
    "link": "https://notion.so",
    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized",
    "tags": [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  },
  {
    "id": 9,
    "title": "json-server",
    "link": "https://github.com/typicode/json-server",
    "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding...",
    "tags": [
      "api",
      "json",
      "schema",
      "node",
      "github",
      "rest"
    ]
  },
  {
    "id": 10,
    "title": "fastify",
    "link": "https://www.fastify.io/",
    "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    "tags": [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ]
  },
  (...)
]
```


### Obter ferramentas por parâmentro title ou tag

`GET /tools?tag=organization&title=notion - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

### Caso dê tudo certo, a resposta será assim:

`GET /tools - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": 8,
    "title": "notion",
    "link": "https://notion.so",
    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized",
    "tags": [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  }
]
```

### Criar uma nova ferramenta

`POST /tools - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "fastify",
  "link": "https://www.fastify.io/",
  "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
  "tags": [
    "web",
    "framework",
    "node",
    "http2",
    "https",
    "localhost"
  ]
}
```

### Caso dê tudo certo, a resposta será assim:

`POST /tools - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 10
  "title": "fastify",
  "link": "https://www.fastify.io/",
  "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
  "tags": [
    "web",
    "framework",
    "node",
    "http2",
    "https",
    "localhost"
  ]
}
```

### Apagar uma ferramenta

`DELETE /tools - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

### Caso dê tudo certo, a resposta será assim:

`DELETE /tools - FORMATO DA RESPOSTA - STATUS 204`

```
Sem corpo da resposta.
```


>**By**: Allan Verde
