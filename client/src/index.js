import React,{ createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Store from './store/store';

window.ondrop = (e) => {
  e.preventDefault()
}

const store = new Store();

export const Context  = createContext({
  store
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
     <Context.Provider value ={{ 
      store
     }}>
      <Router>
        <App />
      </Router>
    </Context.Provider>
  </React.StrictMode>
);