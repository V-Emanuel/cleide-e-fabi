import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [name, setNameLS] = useState("");
  const [token, setTokenLS] = useState("");

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={{ name, setNameLS, token, setTokenLS }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
`;
