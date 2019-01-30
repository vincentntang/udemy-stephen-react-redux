export default () => {
  // bad !
  return document.querySelector("input");

  // bad
  return Axios.get("/posts");

  // good
  return state + action;
};
