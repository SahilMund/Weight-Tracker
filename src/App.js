import React, { useState } from "react";

import Login from "./components/auth/Login";
import Home from "./components/Home";
import { onStateChange } from "./firebase/auth";

const App = () => {
  const [islogin, setIslogin] = useState(false);

  onStateChange((user) => {
    if (user) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  });

  return (
    <div className="app">
      {islogin ? (
        <Home islogin={islogin} setIslogin={setIslogin} />
      ) : (
        <Login setIslogin={setIslogin} islogin={islogin} />
      )}
    </div>
  );
};

export default App;
