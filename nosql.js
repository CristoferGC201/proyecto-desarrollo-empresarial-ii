
db.Usuarios.insertOne ({ usuario_id: "0000001", nombre_de_usuario: "Usuario1", correo: "Usuario1@gmail.com", contraseña: "Contraseña1", fecha: new Date() } )

db.Blogs.insertOne ({ nombre_blog: "Blog1", creador: "Nombre de usuario1", publicaciones: [{ id_publicacion: "00000000", publicador: "Nombre de usuario1", publicacion: "texto largo1", fecha: new Date()}, { id_publicacion: "00000001", publicador: "Nombre de usuario1", publicacion: "texto largo2", fecha: new Date()}] } )

db.Comentarios.insertOne ({ usuario_id: "0000001", juego_id: "0000001", texto: "Comentario1", fecha: new Date() } )

db.Juegos.insertOne ({ juego_id: "0000001", titulo: "Juego1", descripción: "Este juego se trata de1", fecha_de_lanzamiento: new Date("2008-06-12"), categoria_id: "001" } )

db.Categorias.insertOne ({ categoria_id: "001", nombre: "categoria1", descripción: "Este categoria es1" } )

db.Chat.insertOne ({ chat_id: "0000001", Receptor: [{ usuario_id: "0000002", nombre_de_usuario: "Usuario2", pfp: "https://live.staticflickr.com/4223/35135422151_80d3022fd1.jpg"}], mensajes: [{ fecha_de_mensaje: new Date(), mensaje: "texto", emisor: "Usuario2" }] } )
