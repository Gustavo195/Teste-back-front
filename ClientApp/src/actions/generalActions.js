import axios from "axios";

export const pedidoGet = function () {
  return function (dispatch) {
    dispatch({
      type: "GET_USER",
      payload: axios.get("https://localhost:44427/home"),
    });
  };
};
export const pedidoPost = function (usuario) {
  delete usuario.id;
  return function (dispatch) {
    dispatch({
      type: "POST_USER",
      payload: axios.post("https://localhost:44427/home", usuario),
    });
  };
};
export const pedidoPut = function (usuario) {
  return function (dispatch) {
    dispatch({
      type: "PUT_USER",
      payload: axios.post(
        "https://localhost:44427/home/" + usuario.id,
        usuario
      ),
    });
  };
};
export const pedidoDelete = function (id) {
  return function (dispatch) {
    dispatch({
      type: "DELETE_USER",
      payload: axios.delete("https://localhost:44427/home/" + id),
    });
  };
};
