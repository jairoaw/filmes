import Filme from "../models/FilmeModel.js";

// Listar todos os filmes
export const getFilmes = async (req, res) => {
    try {
        const filmes = await Filme.find();
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Listar um filme pelo ID
export const getFilmeById = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme) {
            res.json(filme);
        } else {
            res.status(404).json({ message: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Adicionar um novo filme
export const saveFilme = async (req, res) => {
    const filme = new Filme(req.body);
    try {
        const insertedFilme = await filme.save();
        res.status(201).json(insertedFilme);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Atualizar um filme pelo ID
export const updateFilme = async (req, res) => {
    try {
        const updatedFilme = await Filme.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (updatedFilme) {
            res.json(updatedFilme);
        } else {
            res.status(404).json({ message: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Apagar um filme pelo ID
export const deleteFilme = async (req, res) => {
    try {
        const deletedFilme = await Filme.findByIdAndDelete(req.params.id);
        if (deletedFilme) {
            res.json(deletedFilme);
        } else {
            res.status(404).json({ message: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const showFilme = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme) {
            res.json(filme);
        } else {
            res.status(404).json({ message: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
