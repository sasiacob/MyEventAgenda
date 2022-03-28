import axios from 'axios';
import {baseUrl} from './constants';

export const login = async (username: string, password: string) => {
  //username = 'BigAdmina';
  //password = 'ddddd';
  const data = {
    userName: username,
    password: password,
  };
  const response = await axios.post('http://192.168.0.191:4000/auth/login', {
    ...data,
  });
  console.log(response);
  if (response.status == 200) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }
};
