import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddFilme = () => {
  const [titulo, setTitulo] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [genero, setGenero] = useState("Ação");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/filmes", {
        titulo,
        sinopse,
        genero,
        trailer,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sinopse">Sinopse:</label>
        <textarea
          id="sinopse"
          value={sinopse}
          onChange={(e) => setSinopse(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genero">Gênero:</label>
        <select
          id="genero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Ficção científica">Ficção científica</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
      <div>
        <label htmlFor="trailer">Trailer (link do YouTube):</label>
        <input
          type="text"
          id="trailer"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Filme</button>
      <Link to="/">Voltar para a lista de filmes</Link>
    </form>
  );
};

export default AddFilme;
