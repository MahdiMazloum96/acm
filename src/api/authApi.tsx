import baseApi from "./baseApi";

export const refreshTokenRequest = async (
  refreshToken: string
): Promise<string> => {
  const response = await baseApi.post<{ accessToken: string }>(
    "/auth/refresh",
    { refreshToken }
  );
  return response.data.accessToken;
};
