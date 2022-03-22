import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import {
  pedidoDelete,
  pedidoGet,
  pedidoPost,
  pedidoPut,
} from "../actions/generalActions";
function Home(props) {
  //coloquei tudo no mesmo arquivo porque estava
  //com pressa.
  const { data } = useSelector((state) => state.general);
  const [usuario, setUsuario] = useState({
    id: "",
    nome: "",
  });
  /*const pedidoGet = async () => {
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
*/
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    console.log(usuario);
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };
  useEffect(() => {
    props.dispatch(pedidoGet());
  }, [props]);
  return (
    <div class="d-flex align-items-start flex-column bd-highlight mb-3">
      <label>
        Nome:
        <input type="text" name="nome" required onChange={handleChange} />
      </label>
      <button
        onClick={() => {
          props.dispatch(pedidoPost(usuario));
          window.location.reload(false);
        }}
      >
        Adicionar
      </button>
      <table>
        {data.map((data) => (
          <div>
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.nome}</td>
            </tr>
          </div>
        ))}
      </table>
      <label>
        ID:
        <select type="text" name="id" onChange={handleChange} required>
          <option></option>
          {data.map((data) => (
            <option value={data.id}>{data.id}</option>
          ))}
        </select>
        Nome:
        <input type="text" name="nome" required onChange={handleChange} />
        <button
          onClick={() => {
            props.dispatch(pedidoPut(usuario));
            window.location.reload(false);
          }}
        >
          Atualizar
        </button>
      </label>
      <button
        onClick={() => {
          props.dispatch(pedidoDelete(usuario.id));
          window.location.reload(false);
        }}
      >
        Deletar
      </button>
    </div>
  );
}

export default connect()(Home);
