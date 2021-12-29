import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let reactotron: any;
if (__DEV__) {
  reactotron = Reactotron
    // .setAsyncStorageHandler(AsyncStorage)
    .configure() // controls connection & communication settings
    .use(reactotronRedux())
    .useReactNative({}) // add all built-in react native plugins
    .connect(); // let's connect!
}
export {reactotron};
