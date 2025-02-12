export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};
export const setAccessToken = (token: string): void => {
  localStorage.setItem("accesstoken", token);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refreshToken");
};
export const setRefreshToken = (token: string): void => {
  return localStorage.setItem("refreshTOken", token);
};
export const clearTokens = (): void => {
  localStorage.removeItem("accesToken");
  localStorage.removeItem("refreshToken");
};
