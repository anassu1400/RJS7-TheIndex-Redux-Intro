import authors from "../data";
const initialState = {
  authors: authors
};

const reducer = (state = initialState, action) => {
  let newAuthors = state.authors;
  switch (action.type) {
    case "ADD_AUTHOR":
      newAuthors = state.authors.concat(action.payload);
      return {
        ...state,
        authors: newAuthors
      };
    case "DELETE_AUTHOR":
      newAuthors = state.authors.filter(author => author !== action.payload);
      return {
        ...state,
        authors: newAuthors
      };
    default:
      return {
        ...state,
        authors: newAuthors
      };
  }
};
export default reducer;
