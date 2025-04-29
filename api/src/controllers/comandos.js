const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { tipo, usuarioId, luzId } = req.body;

        if (!['ligar', 'desligar'].includes(tipo)) {
            return res.status(400).json({ message: 'Tipo inválido. Use "ligar" ou "desligar".' });
        }

        await prisma.luz.update({
            where: { id: luzId },
            data: { estado: tipo === 'ligar' }
        });

        const comando = await prisma.comando.create({
            data: {
                tipo,
                usuarioId,
                luzId
            }
        });

        res.status(201).json(comando);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const undo = async (req, res) => {
    try {
        const { usuarioId } = req.body;

        const ultimoComando = await prisma.comando.findFirst({
            where: {
                usuarioId,
                desfazido: false
            },
            orderBy: {
                criadoEm: 'desc'
            }
        });

        if (!ultimoComando) {
            return res.status(404).json({ message: 'Nenhum comando para desfazer.' });
        }

        const tipoInverso = ultimoComando.tipo === 'ligar' ? 'desligar' : 'ligar';

        await prisma.luz.update({
            where: { id: ultimoComando.luzId },
            data: { estado: tipoInverso === 'ligar' }
        });

        await prisma.comando.update({
            where: { id: ultimoComando.id },
            data: { desfazido: true }
        });

        const comandoDesfeito = await prisma.comando.create({
            data: {
                tipo: tipoInverso,
                usuarioId,
                luzId: ultimoComando.luzId
            }
        });

        res.json(comandoDesfeito);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const comandos = await prisma.comando.findMany({
            include: {
                usuario: true,
                luz: true
            },
            orderBy: { criadoEm: 'desc' }
        });
        res.json(comandos);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    undo,
    read
};
