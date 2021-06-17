export const TOKEN_KEY = '@Desafio-Token';
export const USER = '@Desafio-user';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER);

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER, JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
