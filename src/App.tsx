import React from "react";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
// import { LoginForm } from "./components/LoginForm";
import  AuthProvider  from "./provider/authProvider";
import  Routes  from "./routes/index";
function App() {
  return (
    <>
      <AuthProvider>
        {/* <HeaderComponent /> */}
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
