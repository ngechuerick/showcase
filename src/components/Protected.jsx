import { useState } from "react";
import Login from "../pages/Login";

function Protected({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleFakeLogin() {
    setLoggedIn(true);
  }

  return loggedIn ? (
    children
  ) : (
    <Login loggedIn={loggedIn} setLoggedIn={handleFakeLogin} />
  );
}

export default Protected;
