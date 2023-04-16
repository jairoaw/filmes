import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function FilmeDetails(props) {
	const [filme, setFilme] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getFilmeById() {
				try {
					const response = await axios.get(`/api/filmes/${_id}`);
					setFilme(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getFilmeById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/filmes/${_id}`);
			navigate("/filmes");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h2>{filme.titulo}</h2>

			<p>
				<b>Phone</b>: <a href={`tel:+${filme.phone}`}> {filme.phone} </a>
			</p>

			<p>
				<b>Email</b>: {filme.email}
			</p>
			<p>
				<b>Location</b>: {filme.location}
			</p>
			<p>
				<b>Link</b> :
				<a href={` ${filme.link}`} target="_blank" rel="noreferrer">
					{filme.link}
				</a>
			</p>
			<p>
				<b>Description</b>: <p align="justify">{filme.description}</p>
			</p>
			<p>
				<small>
					<b>ID</b>: {filme._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/filmes/${filme._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/filmes" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default FilmeDetails;
