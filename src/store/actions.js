const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const add = () => {
  let newAuthor = {
    id: 5,
    first_name: "Anas",
    last_name: "Alsahli",
    imageUrl:
      "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
    books: [
      {
        title: "Hairy Bitter and the Philosopher's Philosophy",
        color: "pink"
      }
    ]
  };
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  };
};

export const remove = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
