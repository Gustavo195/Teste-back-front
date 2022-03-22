var initialState = {
  data: [],
};

const generalReducer = function (state = initialState, action) {
  switch (action.type) {
    case "GET_USER_PENDING":
      state = {
        ...state,
      };
      break;
    case "GET_USER_REJECTED":
      state = {
        ...state,
      };
      alert(action.payload.message);
      break;
    case "GET_USER_FULFILLED":
      state = {
        ...state,
        data: action.payload.data,
      };
      break;
    case "POST_USER_PENDING":
      state = {
        ...state,
      };
      break;
    case "POST_USER_REJECTED":
      state = {
        ...state,
      };
      alert(action.payload.message);
      break;
    case "POST_USER_FULFILLED":
      state = {
        ...state,
        data: [...state.data, action.payload.data],
      };
      break;
    case "PUT_USER_PENDING":
      state = {
        ...state,
      };
      break;
    case "PUT_USER_REJECTED":
      state = {
        ...state,
      };
      alert(action.payload.message);
      break;
    case "PUT_USER_FULFILLED":
      state = {
        ...state,
        data: state.data.map((c) => {
          if (c.key === action.payload.key) return action.payload;
          else return c;
        }),
      };
      break;
    case "DELETE_USER_PENDING":
      state = {
        ...state,
      };
      break;
    case "DELETE_USER_REJECTED":
      state = {
        ...state,
      };
      alert(action.payload.message);
      break;
    case "DELETE_USER_FULFILLED":
      state = {
        ...state,
        data: state.data.filter((c) => c.key !== action.payload),
      };
      break;
    default:
      return state;
  }
  return state;
};

export default generalReducer;
