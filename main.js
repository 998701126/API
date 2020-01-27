const {Client} = require('pg');

const c = new Client({
    user: 'postgres',
    password: '1234',
    database: 'conti',
    host: 'localhost',
    port: 5432
});

c.connect();
c.query(`
INSERT INTO public."Ususarios"(
	nombre, password)
	VALUES ('Arturo', '666');
`
        , function(error, respuesta){
            if (error){
                console.log(error);
            }
            console.log(respuesta.rows);
            c.end();
});
