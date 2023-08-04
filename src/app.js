import express from 'express';
const app = express();
import morgan from 'morgan';
import {PORT} from './config.js';
import{pool} from './db.js';

// Configuraciones
app.set('port',3001);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
// Obtener libros
app.get('/api/libros', async(req, res) => {
const [rows] = await pool.query('SELECT * FROM catalogo')
res.json(rows)

})


// Agregar libros
app.post('/api/libros', async(req,res)=>{
    const {titulo,autor,fecha,genero} = req.body;
   if(titulo&&autor&&fecha&&genero){ 
   const[rows]=await pool.query('INSERT INTO catalogo (titulo,autor,fecha,genero) VALUES (?,?,?,?)',
   [titulo,autor,fecha,genero]);
   res.json({
    titulo,autor,fecha,genero
   });
  console.log(req.body);  
   }
   else{
    console.log(req.body)
    res.send("Agregue todos los campos");
   }
})


// Borrar libro
app.delete('/api/libros/:id', async(req,res)=>{
    const result = await pool.query('DELETE FROM catalogo WHERE id=?', [req.params.id])
    console.log(result)
    res.send("Libro eliminado")
})


// Actualizar información
app.put('/api/libros/:id', async(req,res)=>{
    const {id} = req.params
    const{titulo,autor,fecha,genero} = req.body
    if(titulo&&autor&&fecha&&genero){
    const [result] = await pool.query('UPDATE catalogo SET titulo = ?,autor = ?,fecha = ?,genero = ? WHERE id = ?', [titulo,autor,fecha,genero,id])
    console.log(result)
    res.json({
        titulo,autor,fecha,genero
       });
    }
    else{
        console.log("Por favor llene todo el formulario")
        res.send("Agregue todos los campos");
    }

    
})
export default app;