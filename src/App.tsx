import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CartList from './components/CartList';
import TotalAmount from './components/TotalAmount';
import '@vkontakte/vkui/dist/vkui.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CartList />
        <TotalAmount />
      </div>
    </Provider>
  );
};

export default App;