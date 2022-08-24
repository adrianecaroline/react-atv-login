import login from './images/login.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <img src={login} alt="login"/>

        <form>
          <h2>Member Login</h2>
          <div className="login">
            <input type="text" name="email" placeholder="E-mail"/>
            <input type="password" name="pass" placeholder="Password"/>
            <p>Forgot your password?</p>
          </div>
          <button>Login</button>
          <p>Create your account</p>
        </form>
      </section>
    </div>
  );
}

export default App;
