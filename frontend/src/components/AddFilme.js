import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//adiciona filme no mongodb
const AddFilme = () => {
  const [titulo, setTitulo] = useState("Título padrao");
  const [sinopse, setSinopse] = useState("Sinopse modelo");
  const [capa_url, setCapaUrl] = useState("https://thumbs.dreamstime.com/z/carretel-e-pipoca-de-filme-do-filme-29636508.jpg");
  const [data_lancamento, setDataLancamento] = useState("2000-01-01");
  const [genero, setGenero] = useState("Ação");
  const [trailer, setTrailer] = useState("https://youtube.com");
  const navigate = useNavigate();

  const saveFilme = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/filmes", {
        titulo,
        sinopse,
        capa_url,
        data_lancamento,
        genero,
        trailer,
      });
      navigate("/"); //depois de adicionar, volta pra tela inicial
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="columns mt-5">
      <div className="column is-fullwidth">
        <Link to="/" className="button is-success">
          Home
        </Link>
      </div>
      <div className="column is-fullwidth">
        <form onSubmit={saveFilme}>
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
            <label htmlFor="capa_url">capa_url:</label>
            <textarea
              id="capa_url"
              value={capa_url}
              onChange={(e) => setCapaUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="data_lancamento">Data de Lançamento:</label>
            <input
              type="date"
              id="data_lancamento"
              value={data_lancamento}
              onChange={(e) => setDataLancamento(e.target.value)}
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
          <button type="submit" className="button is-black">
            Salvar
          </button>
        </form>
        <Link to="/" className="button is-black">
          Voltar para a lista de filmes
        </Link>
      </div>
    </div>
  );
};
export default AddFilme;
