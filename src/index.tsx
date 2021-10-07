import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer} from "miragejs"

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/rooms' , () => {
      return[
        {sala: 200, professor: 'Duany Bruna', aula: 'Canto'},
        {sala: 212, professor: 'Diogo Navia', aula: 'Flauta Transaversal'},
        {sala: 219, professor: 'Fabio Carmo', aula: 'Trombone'},
        {sala: 232, professor: 'Nicolas Ribeiro', aula: 'Trompete'},
      ]
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

