import { Request, Response } from "express";
import Usuario from "../models/usuario";

interface Usuario {
    email: string;
    nombre: string;
    password: string;
    estado: boolean;
}

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();

    res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`,
        });
    }
};

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email,
            },
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: "Ya existe un usuario con el email " + body.email,
            });
        }

        // id?,
        // hashear password
        const usuario = await Usuario.create({
            email: body.email,
            nombre: body.nombre,
            password: body.password,
            estado: true,
        });

        await usuario.save();
    } catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }

        await usuario.update(body);

        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }

        await usuario.update({ estado: false });

        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};
