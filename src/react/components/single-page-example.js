import React from 'react';
import SimpleComponent from './simple-example'
// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from '../../redux/example-redux';

// Wrap existing app in Provider - Step 2
const SinglePageExample = () => (
  <Provider store={store}>
    <SimpleComponent />
  </Provider>
);


export default SinglePageExample
