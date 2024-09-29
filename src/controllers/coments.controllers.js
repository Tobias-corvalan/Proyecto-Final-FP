import {getConnection} from '../database/connection.js'
import sql from 'mssql'


export const getComments = async(req,res) =>{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM comment")
    
    res.json(result.recordset);
}

export const getComment = async(req,res) =>{
    console.log(req.params)
    const pool = await getConnection();
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .query('SELECT * FROM comment WHERE ID = @id');
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Comentario no encontrado"});
    }
    return res.json(result.recordset[0]);
}

export const createComment = async(req,res) =>{
    
    const pool = await getConnection();
    const result = await pool.request()
        .input('id_usuario',sql.Int, req.body.id_usuario)
        .input('nombre',sql.VarChar, req.body.nombre)
        .input('localidad', sql.VarChar,req.body.localidad)
        .input('provincia',sql.VarChar, req.body.provincia)
        .input('descripcion', sql.VarChar,req.body.descripcion)
    .query('INSERT INTO comment(id_usuario,nombre,localidad,provincia,descripcion) VALUES(@id_usuario, @nombre, @localidad,@provincia,@descripcion); SELECT SCOPE_IDENTITY() AS id;')
    console.log(result)
    res.json({
        nombre: req.body.nombre,
        localidad: req.body.localidad,
        provincia: req.body.provincia,
        descripcion: req.body.descripcion,
    })
}

export const updateComment = async (req,res) =>{
    const id = req.params.id;
    const pool = await getConnection();
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .input('nombre',sql.VarChar, req.body.nombre)
    .input('localidad', sql.VarChar,req.body.localidad)
    .input('provincia',sql.VarChar, req.body.provincia)
    .input('descripcion', sql.VarChar,req.body.descripcion)
    .query('UPDATE comment SET nombre = @nombre, localidad = @localidad, provincia = @provincia, descripcion = @descripcion WHERE id = @id')
    console.log(result)
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Comentario no encontrado"});
    }
    res.json({
        nombre: req.body.nombre,
        localidad: req.body.localidad,
        provincia: req.body.provincia,
        descripcion: req.body.descripcion,
    })

}

export const deleteComment = async(req,res) =>{

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .query('DELETE FROM comment WHERE ID = @id');
    console.log(result)
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Comentario no encontrado"});
    }
    return res.json({message: "Comentario elimiando"});
}