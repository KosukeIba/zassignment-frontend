<script lang="ts">
	import { auth } from "../firebase";
	import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword, type PasswordPolicy, EmailAuthCredential } from "firebase/auth";
	import { goto } from "$app/navigation";

  let loginDisplay : boolean = true;
  let signupDisplay : boolean = false;

  let email : string
  let password : string

  function login() {
    setPersistence(auth, browserSessionPersistence).then(async () => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      email = '';
      password = ''
      goto('/protected/dashboard')
      const user = userCredential.user;
      console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        alert('wrong information')
    });
  }
</script>

<div class="authForm--container">
  {#if loginDisplay}
    <form class="login--container">
      <input type='email' bind:value={email} placeholder="email"/>
      <input type="password" bind:value={password} placeholder="password"/>
      <button class="login--button" on:click={login}>login</button>
      <p class="login--message">not have an account? 
        <button class="login--gotoSignup" 
          on:click={() => {
            loginDisplay = !loginDisplay
            signupDisplay = !signupDisplay
          }}>Sign In
        </button> 
      </p>
    </form>
  {/if}

  {#if signupDisplay}
    <form class="signup--container">
      <input type='email' placeholder="email"/>
      <input type="password" placeholder="password"/>
      <button class="signup--button">sign up</button>
      <p class="signup--message">Already registered? 
        <button class="signup--gotoLogin"
          on:click={() => {
            loginDisplay = !loginDisplay
            signupDisplay = !signupDisplay
          }}>Log in
        </button>
    </form>
  {/if}
</div>

<style>
  .authForm--container {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 10vh auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .authForm--container input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .login--button, .signup--button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .login--button:hover, .signup--button:hover {
    background: #3b8a3f;
  }
  .login--gotoSignup {
    border: none;
    background-color: transparent;
  }
  .login--gotoSignup:hover {
    text-decoration: underline;
  }
  .signup--gotoLogin {
    border: none;
    background-color: transparent;
  }
  .signup--gotoLogin:hover {
    text-decoration: underline;
  }
  
</style>