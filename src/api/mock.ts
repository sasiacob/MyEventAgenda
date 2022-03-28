import {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {endpoints} from './constants';

export class MockApi {
  mockAdapter: MockAdapter;

  constructor(instance: AxiosInstance) {
    this.mockAdapter = new MockAdapter(instance);
  }
  onLogin(type: mockType = 'SUCCESS') {
    switch (type) {
      case 'SUCCESS': {
        this.mockAdapter.onPost(endpoints.login).reply(200, {
          token: 'mockToken',
        });
        break;
      }
      case 'ERROR': {
        this.mockAdapter.onPost(endpoints.login).reply(500, {
          message: 'ERROR',
        });
        break;
      }
      case 'NO_CONNECTION': {
        this.mockAdapter.onPost(endpoints.login).networkError();
      }
      default:
        break;
    }
  }
}

type mockType = 'SUCCESS' | 'ERROR' | 'NO_CONNECTION';
