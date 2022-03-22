import {createConnection} from "typeorm"

createConnection().then(() => {
    console.log('Conected with database')
})