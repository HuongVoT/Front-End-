import { useEffect } from 'react';
import getListDevice from '../axios/getListDevice';

const useListDevice = () => {
  useEffect(() => {
    getListDevice()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
};

export default useListDevice;
