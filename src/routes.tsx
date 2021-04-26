import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Logon from "./pages/Logon";
import ProductList from "./pages/ProductList";
import ProductRegister from "./pages/ProductRegister";
import ProductsDetails from "./pages/ProductsDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detalhes-compra" component={ProductsDetails} />
        <Route path="/registo-produto" component={ProductRegister} />
        <Route path="/entrar" component={Logon} />
        <Route path="/lista-de-produtos" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
