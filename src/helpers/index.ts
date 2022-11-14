export const getToken = () => {
  const user = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_LOCAL_KEY as string)!,
  );
  if (user) {
    return user.role === 'user' ? 'user' : 'admin';
  } else {
    return null;
  }
};

export const isUser = (role: string) => role === 'user';
export const isAdmin = (role: string) => role === 'admin';
