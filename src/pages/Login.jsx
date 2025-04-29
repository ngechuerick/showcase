import { useState } from "react";

function Login({ loggedIn, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validemail, setValidEmail] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase());
  }

  function handleEmail(val) {
    if (val.length < 5) return;
    const valid = isValidEmail(val);

    if (valid === true) setValidEmail(true);
    if (valid === false) setValidEmail(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    /**We intentionally delay the fake login funcitonality */
    setTimeout(() => {
      setLoggedIn();
    }, 1500);
  }

  return (
    <div className="login__page">
      <div className="login__page-cont">
        <h1>Login</h1>
        <form className="form__login" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              onChange={(e) => handleEmail(e.target.value)}
              className="loginInput"
            />
          </div>
          <div>
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="loginInput"
              placeholder="*****"
              min={8}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {validemail === true && password.length > 8 ? (
            <button className="btn btn-login">Submit</button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
