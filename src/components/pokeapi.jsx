import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeApi() {
	const [pokemon, setPokemon] = useState([]);
	
	useEffect (() => {
		const obtenerPokemon = async () => {
			
			const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
			const solve =	await axios.get(url)
			
			setPokemon(solve.data.results);
		}
		obtenerPokemon();
		},[]);
	
				return (
					<>
					<div>
						<h1>Pokemon</h1>
			
						<ul>
							{pokemon.length === 0 && <p>Cargando...</p>}
							{pokemon.map((value, i) => {
								return i < 10 ? (
									<li key={i}>
										<img 
										className="pokemon__img"
										src={value.url} alt={value.name} />
										<h2>Nombre: {value.name}</h2>
									</li>
								) : null;
							})}
						</ul>
					</div>
					</>
				);
			}
		

export default PokeApi;
