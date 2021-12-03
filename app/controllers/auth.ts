import { Request, Response } from 'express';
import bcryptjs  from 'bcryptjs';
import generarJWT  from "../helpers/generar-jwt";

const Usuario = require('../models/usuario');


const login = async(req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
      
        // Verificar si el email existe
        const usuario = await Usuario.findOne({ email });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        // VER SI EL ESTADO ES UN BOOLEAN O NUMERO
        if ( !usuario.estado ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.email, usuario.nombre );

        res.json({
            email: usuario.email,
            nombre: usuario.nombre,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}

// opcional

const Signin = async(req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario( req.body );
    
        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt );


        await usuario.save();

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}



module.exports = {
    login
}
