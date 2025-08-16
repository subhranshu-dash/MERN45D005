import React from 'react'
import './index.css'


function Login() {
  return (
    <div class="login-container">
    <h2>Login</h2>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" id='log'>Login</button>
      <div class="link">
        <p id='acc'>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>

  )
}

export default Login