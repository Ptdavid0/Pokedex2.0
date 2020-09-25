import React from "react";
import Pokedex from "./pages/Pokedex/index";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
}

export default App;
