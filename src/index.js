import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore} from "@reduxjs/toolkit";
import { Provider} from "react-redux";//agora a informação dos reducres pode ir para todos os lugares da aplicação
//importando o reducer
import userReducer from "./features/user";

//aqui vai ter uma coleção de reduxes
//reducer é um função que possui informações do state e também a ação do state
const store = configureStore( {
  reducer: {
    user:userReducer,//pegando o reducer importado
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>{/*passando o store para a aplicação */}
      <App />
    </Provider>     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
