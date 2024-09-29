import {getConnection} from '../database/connection.js'
import sql from 'mssql'
import bcryptjs from 'bcryptjs'


//
export const getUser = async(req,res) =>{
    const pool = await getConnection();
    const passw = req.body.pass;
    console.log(req.body);
    let passhash = await bcryptjs.hash(passw,8);
    if(req.body.email && passw)
    pool.request()
    .input('email', sql.VarChar, req.body.email)
    .query('SELECT * FROM usuario WHERE email = @email',async(error,resul)=>{
        if(resul.rowsAffected[0] == 0 || !(await bcryptjs.compare(passw, resul.recordset[0].contraseña))){
            res.send("email o contraseña incorrecto")
        }else{
          
            res.send("login correcto")
            console.log(resul.recordset[0].contraseña)
        }
    })
}

// export const getComment = async(req,res) =>{
//     console.log(req.params)
//     const pool = await getConnection();
//     const result = await pool.request()
//     .input('id', sql.Int, req.params.id)
//     .query('SELECT * FROM comment WHERE ID = @id');
//     if(result.rowsAffected[0] === 0){
//         return res.status(404).json({message: "Comentario no encontrado"});
//     }
//     return res.json(result.recordset[0]);
// }
//
export const createUser = async(req,res) =>{
    console.log(req.body);
    const pool = await getConnection();
    let passhash = await bcryptjs.hash(req.body.pass,8);
    pool.request()
    .input('nombre', sql.VarChar, req.body.nombre)
    .input('apellido', sql.VarChar, req.body.apellido)
    .input('email', sql.VarChar, req.body.email)
    .input('contraseña', sql.VarChar, passhash)
    .query('INSERT INTO usuario(nombre,apellido,email,contraseña) VALUES (@nombre,@apellido,@email,@contraseña)',async(error,resul)=>{
        if(error){
            console.log(error);
        }else{
            res.render('register.ejs',{
                alert:true,
                alertTitle: "registration",
                alertMessage: "¡Successful register",
                alertIcon:'success',
                showConfirmButton: false,
                time:1500,
                ruta:''
            })
        }
    })
    }
        



// export const updateComment = async (req,res) =>{
//     const id = req.params.id;
//     const pool = await getConnection();
//     const result = await pool.request()
//     .input('id', sql.Int, req.params.id)
//     .input('nombre',sql.VarChar, req.body.nombre)
//     .input('localidad', sql.VarChar,req.body.localidad)
//     .input('provincia',sql.VarChar, req.body.provincia)
//     .input('descripcion', sql.VarChar,req.body.descripcion)
//     .query('UPDATE comment SET nombre = @nombre, localidad = @localidad, provincia = @provincia, descripcion = @descripcion WHERE id = @id')
//     console.log(result)
//     if(result.rowsAffected[0] === 0){
//         return res.status(404).json({message: "Comentario no encontrado"});
//     }
//     res.json({
//         nombre: req.body.nombre,
//         localidad: req.body.localidad,
//         provincia: req.body.provincia,
//         descripcion: req.body.descripcion,
//     })

// }

// export const deleteComment = async(req,res) =>{

//     const pool = await getConnection();
//     const result = await pool.request()
//     .input('id', sql.Int, req.params.id)
//     .query('DELETE FROM comment WHERE ID = @id');
//     console.log(result)
//     if(result.rowsAffected[0] === 0){
//         return res.status(404).json({message: "Comentario no encontrado"});
//     }
//     return res.json({message: "Comentario elimiando"});
// }