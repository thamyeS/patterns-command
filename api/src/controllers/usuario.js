const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { nome } = req.body;

        const usuario = await prisma.usuario.create({
            data: { nome }
        });

        res.status(201).json(usuario);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            include: { comandos: true }
        });
        res.json(usuarios);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    read
};
