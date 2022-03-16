import React, { useEffect, useState } from "react";

import axios from "axios";
function Home() {
  //coloquei tudo no mesmo arquivo porque estava
  //com pressa.
  const baseUrl = "https://localhost:44427/home";
  const [data, setData] = useState([]);
  const [usuario, setUsuario] = useState({
    id: "",
    nome: "",
  });
  const pedidoGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const pedidoPost = async () => {
    delete usuario.id;
    await axios
      .post(baseUrl, usuario)
      .then((response) => {
        setData(data.concat(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const pedidoPut = async () => {
    await axios
      .post(baseUrl + "/" + usuario.id, usuario)
      .then((response) => {
        var resposta = response.data;
        var dadoAuxiliar = data;
        // eslint-disable-next-line array-callback-return
        dadoAuxiliar.map((user) => {
          if (user.id === usuario.id) {
            usuario.nome = resposta.nome;
          }
        });

        setData(data.concat(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const pedidoDelete = async () => {
    await axios
      .delete(baseUrl + "/" + usuario.id)
      .then((response) => {
        setData(data.filter((user) => user.id !== response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };
  useEffect(() => {
    pedidoGet();
  });

  return (
    <div class="d-flex align-items-start flex-column bd-highlight mb-3">
      <label>
        Nome:
        <input type="text" name="nome" required onChange={handleChange} />
      </label>
      <button onClick={() => pedidoPost()}>Adicionar</button>
      <table>
        {data.map((usuario) => (
          <div>
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
            </tr>
          </div>
        ))}
      </table>
      <label>
        ID:
        <input type="text" name="id" required onChange={handleChange} />
      </label>
      <button onClick={() => pedidoPut()}>Atualizar</button>
      <button onClick={() => pedidoDelete()}>Deletar</button>
    </div>
  );
}

export default Home;
