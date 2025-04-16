import apiConfig from "@/common/http/apiConfig";

export const fetchAuthLogin = async <T, R>(data: T): Promise<R> => {
  try {
    const res = await apiConfig.post<R>('https://api.bnine.co/api/v1/auth/login', data);
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      localStorage.removeItem('access_token');
      throw new Error('Session expired');
    }
    throw err;
  }
}
