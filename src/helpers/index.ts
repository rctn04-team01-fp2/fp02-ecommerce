export const getToken = () => {
  return localStorage.getItem(process.env.REACT_APP_TOKEN_LOCAL_KEY as string);
};
