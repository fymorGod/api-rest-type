import {createConnection} from "typeorm"

//arquivo de conexão com o banco de dados

/**
 * Os dados de cadastro da conexão com o banco de dados
 * vem do arquivo ormconfig 
 * que está localizado na raiz do projeto
 */

createConnection().then(() => {
    console.log('Conected with database')
})