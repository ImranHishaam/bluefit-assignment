import React from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { initializeStore } from "./store/store";
import GlobalStyles from './styles/global.style';

import { SearchComponent } from './components/search';

const { store, persistor } = initializeStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <SearchComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
