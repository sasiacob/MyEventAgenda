import axios from 'axios';
import {baseUrl} from './constants';
import {MockApi} from './mock';

axios.defaults.baseURL = baseUrl;
const mockAdapter = new MockApi(axios);
mockAdapter.onLogin('SUCCESS');

export const login = async (username: string, password: string) => {
  //username = 'BigAdmina';
  //password = 'ddddd';
  const data = {
    userName: username,
    password: password,
  };
  const response = await axios.post('/auth/login', {
    ...data,
  });

  console.log('response.data', response.data);
  console.log('response.status', response.status);
  if (response.status == 200) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }
};
