const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { nome } = req.body;

        const luz = await prisma.luz.create({
            data: { nome }
        });

        res.status(201).json(luz);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const luzes = await prisma.luz.findMany({
            include: { comandos: true }
        });
        res.json(luzes);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const atualizarEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const luz = await prisma.luz.update({
            where: { id: parseInt(id) },
            data: { estado }
        });

        res.json(luz);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    read,
    atualizarEstado
};
