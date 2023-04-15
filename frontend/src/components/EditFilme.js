import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditFilme = () => {
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState({
    titulo: "",
    sinopse: "",
    genero: "Ação",
    trailer: "",
  });

  useEffect(() => {
    const getFilme = async () => {
      const response = await axios.get(`http://localhost:5000/filmes/${id}`);
      setFilme(response.data);
    };
    getFilme();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/filmes/${id}`,
        filme
      );
      console.log(response.data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFilme({ ...filme, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={filme.titulo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sinopse:</label>
        <textarea name="sinopse" value={filme.sinopse} onChange={handleChange} />
      </div>
      <div>
        <label>Gênero:</label>
        <select name="genero" value={filme.genero} onChange={handleChange}>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Ficção científica">Ficção científica</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
      <div>
        <label>Trailer (link do YouTube):</label>
        <input
          type="text"
          name="trailer"
          value={filme.trailer}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditFilme;
