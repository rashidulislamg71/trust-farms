
/* eslint-disable no-unused-vars */

import React from "react";
import MainLayout from "./Components/MainLayout/MainLayout/MainLayout";
import { GlobalProvider } from "./Components/GlobalContext/GlobalContext";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout />
      </GlobalProvider>
    </div>
  );
};

export default App;
