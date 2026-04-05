import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />

        <Route
          path="/menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;