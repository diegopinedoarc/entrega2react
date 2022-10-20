import React, { useContext } from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ToDo from "../pages/ToDo/ToDo";
import BuscadorPoke from "../pages/BuscadorPoke/BuscadorPoke";
import Layout from "../components/Layout/Layout";

const Routes = () => {
  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="buscadorpoke" element={<BuscadorPoke />} />
      </ReactDomRoutes>
    </Layout>
  );
};

export default Routes;
