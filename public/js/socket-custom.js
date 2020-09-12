var socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});
// Escuchar
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jorge Luis',
    message: 'Hola mundo'
}, (resp) => {
    console.log('Se disparo el callback');
    console.log(resp);
});

// Escuchar Informacion
socket.on('enviarMensaje', (message) => {
    console.log('Servidor:', message);
});