const express = require('express')
const cors = require('cors')

const server = express()

//nuestra base de datos falsa
const proyectos = [
    {
        id: 1,
        nombre: 'Animedle',
        skills: ['HTML','CSS','JavaScript'],
        fecha: '29-05-2024',
        descripcion: 'Selecciona un personaje y un anime aleatorio por dia, y los usuarios deben adivinarlo mediante diferentes pistas que se mostrarán a medida que se prueben distintas opciones.',
        desarrollo:'Equipo',
        repositorio: 'https://github.com/Matiasjs1/Animedle'
        
    },
    {
        id: 2,
        nombre: 'JBrain',
        skills: ['Java'],
        fecha: '12-08-2024',
        descripcion: 'Juego de preguntas y respuestas educativo con roles de profesor y alumno, personalizable, con gestión de cuentas y resultados almacenados en una base de datos.',
        desarrollo:'Equipo',
        repositorio: 'https://github.com/Matiasjs1/JBrain'
    },
    {
        id: 3,
        nombre: 'Reservas paintball',
        skills: ['HTML','CSS','JavaScript','PHP'],
        fecha: '26-08-2024',
        descripcion: 'Sistema en línea de reservas para un campo de paintball, con gestión de horarios en tiempo real, evitando reservas duplicadas, e incluyendo opciones de pago en línea y una interfaz fácil de usar.',
        desarrollo:'Equipo',
        repositorio: 'https://github.com/Matiasjs1/Reservas-Paintball'
    },
    {
        id: 4,
        nombre: 'MyFit',
        skills: ['HTML','CSS','JavaScript','PHP'],
        fecha: '30-09-2024',
        descripcion: 'Sistema de gestión de materiales para gimnasio, con control en tiempo real de la disponibilidad de equipos y una interfaz intuitiva para facilitar la administración de barras y accesorios.',
        desarrollo:'Equipo',
        repositorio: 'https://github.com/Matiasjs1/MyFit'
    }
]

server.use(cors({
    origin: 'http://localhost:5173'
}))

server.get('/proyectos', (req, res) => {
    res.send(proyectos)
})

server.get('/proyectos/:id', (req, res) => {
    const id = Number(req.params.id)
    var newProyecto;
    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i].id === id) {
            newProyecto = proyectos[i]
        }
    };
    res.send(newProyecto)
})

server.listen(3000, ()=>{
    console.log("El sever esta corriendo en el puerto 3000");
})