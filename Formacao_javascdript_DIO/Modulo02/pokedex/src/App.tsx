// ! arquivo do app principal o que pucha todos.


import React from 'react';
import { Pokedex } from './pokedex/Pokedex';
import { Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <Route>
        <Pokedex />
      </Route>
    </>
  )
}

export default App;
