import axios, { AxiosError, AxiosResponse } from 'axios';

const getListDevice = () => {
  return axios(`${import.meta.env.VITE_BASE_URL}`, {
    method: 'GET',
  })
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.error(error);
    });
};

export default getListDevice;
