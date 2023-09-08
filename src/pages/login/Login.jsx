import React, { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../../components/pageNav/PageNav";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            to="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="traveller@worldwise.com"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            to="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
