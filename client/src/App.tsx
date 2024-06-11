import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const apiCall = () => {
  axios.get("http://localhost:8080/secret").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};

function App() {
  return (
    <>
      <header>
        <SignedOut>
          Lorem ipsum
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          You are signed in
          <UserButton></UserButton>
        </SignedIn>
        <button onClick={apiCall}></button>
      </header>
    </>
  );
}

export default App;
