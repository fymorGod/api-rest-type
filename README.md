# Projeto - API REST FULL com Typescript 

## Banco de dados utilizado no projeto

        - Mysql

## Tecnologia aplicada 

        - Typeorm

## Como iniciar um Projeto com Typescript

        - yarn init -y 
        
        - npm init -y

## Criando arquivo tsconfig.json

        - yarn tsc --init

## Alterando o tsconfig.json

        - "experimentalDecorators": true,
        - "emitDecoratorMetadata": true,    

## Instalando Dependências

        - yarn add express 
        - yarn add mysql2
        - yarn add reflect-metadata
        - yarn add typeorm@^0.2.25
        - yarn add uuid

## Instalando Dependências de Desenvolvimento

        - yarn add @types/express @types/nodemon ts-node-dev typescript -D
        - yarn add ts-node

## Criando scripts 

        - "scripts": {
                "dev": "ts-node-dev --transpile-only src/server.ts",
                "typeorm": "npx ts-node ./node_modules/typeorm/cli.js"
             },

## Criando a migração

        - yarn typeorm migration:create -n "NOME DA MIGRATION " -d "local onde deve ser armazenado a migration"
        - yarn typeorm migration:create -n CreateUsers -d src/database/migrations  