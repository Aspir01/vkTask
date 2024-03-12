import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CartList from './components/CartList';
import TotalAmount from './components/TotalAmount';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="cart-container">
          <CartList />
          <TotalAmount />
        </div>
      </div>
    </Provider>
  );
};

export default App;