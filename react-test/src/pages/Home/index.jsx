import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
	const [data, setData] = useState(null);
  const [nombreMascota, setNombreMascota] = useState("");
  const [tipoMascota, setTipoMascota] = useState("");

	useEffect(() => {
		getData();
	}, [])

	const getData = async () => {
		try {
			let res = await axios.get("http://localhost:5000/mascotas");
			let data = await res.data;
			console.log(data);
			setData(data);
		} catch (error) {
			
		}
	}


  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (nombreMascota === "") {
      isValid = false;
    }
    if (tipoMascota === "") {
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post("http://localhost:5000/mascotas", {
        id: Math.random() * 100,
        nombre: nombreMascota,
        tipo: tipoMascota,
      });
      console.log("response", response);
      setNombreMascota("");
      setTipoMascota("");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <h2>Agregar mascotas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
          placeholder="Nombre de mascota"
        />
        <br />
        <input
          type="text"
          value={tipoMascota}
          onChange={(e) => setTipoMascota(e.target.value)}
          placeholder="Tipo de mascota"
        />
        <br />
        <input type="submit" value="Registrar mascota" />
      </form>
			<h3>Lista de Mascotas</h3>
			<div>
				<ol>
					{data && data.map(el => <li key={el.id} >{el.nombre} - {el.tipo}</li> )}
				</ol>
			</div>
    </div>
  );
};

export default Home;
