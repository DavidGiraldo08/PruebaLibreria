import app from '../src/app'
import request from 'supertest'

describe('GET /api/libros', ()=>{    // TEST DE GET
test('Debe haber procesado la solicitud de manera correcta para GET',async() =>{
  const response = await request(app).get('/api/libros').send()
  expect(response.statusCode).toBe(200);
})
})

describe('POST /api/libros',() =>{   // TEST DE POST
  test('Debe haber procesado la solicitud de manera correcta para POST',async()=>{
    const response = await request(app).post('/api/libros').send()
    expect(response.statusCode).toBe(200);  
  })
  
  test('Debe contener todos los campos',async() =>{
    const response = await request(app).post('/api/libros').send({
      "titulo":"La casa grande",
      "autor":"Andrés",
      "fecha":"1843",
      "genero": "Ficcion"
      })
    expect(response.body.titulo &&response.body.autor&&response.body.fecha&&response.body.genero).toBeDefined();
  })
})

describe('DELETE /api/libros/id=?', () =>{ // TEST DE DELETE
test('Debe haber procesado la solicitud de manera correcta para DELETE', async() =>{
const response = await request(app).delete('/api/libros/10')
expect(response.statusCode).toBe(200);
})
})

describe('PUT /api/libros/id=?',()=>{  // TEST DE PUT
test('Debe haber procesado la solicitud de manera correcta para PUT', async()=>{
  const response = await request(app).put('/api/libros/1').send()
  expect(response.statusCode).toBe(200); 
})
test('Debe haber procesado la solicitud de manera correcta para PUT', async()=>{
  const response = await request(app).put('/api/libros/9').send({"titulo":"Cartas","autor":"David","fecha":"2023","genero":"Romance"})
  expect(response.body.titulo &&response.body.autor&&response.body.fecha&&response.body.genero).toBeDefined(); 
})
})