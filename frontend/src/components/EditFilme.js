import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditFilme = () => {
  const [titulo, setTitulo] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [capa_url, setCapaUrl] = useState(""); 
  const [data_lancamento, setDataLancamento] = useState("");
  const [genero, setGenero] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getFilmeById();
  }, []);

  const getFilmeById = async () => {
    const response = await axios.get(`http://localhost:5000/filmes/${id}`);
    setTitulo(response.data.titulo);
    setSinopse(response.data.sinopse);
    setCapaUrl(response.data.capa_url);
    setDataLancamento(response.data.data_lancamento);
    setGenero(response.data.genero);
    setTrailer(response.data.trailer);
  };

  const updateFilme = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/filmes/${id}`, {
        titulo,
        sinopse,
        capa_url,
        data_lancamento,
        genero,
        trailer
      });
      navigate("/"); //depois de alterar, volta pra tela inicial
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-full">
        <Link to="/" className="button is-success">
          Home
        </Link>
        <form onSubmit={updateFilme}>
          
        <div className="field">
          <label className="label">Título</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título do filme"
              />
          </div>
        </div>
        <div className="field">
          <label className="label">Sinopse</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={sinopse}
                onChange={(e) => setSinopse(e.target.value)}
                placeholder="Sinopse do filme"
              />
          </div>
        </div>  
        <div className="field">
          <label className="label">Url da imagem da capa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={capa_url}
                onChange={(e) => setCapaUrl(e.target.value)}
                placeholder="capa do filme"
              />
          </div>
        </div>  

          
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Atualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditFilme;
