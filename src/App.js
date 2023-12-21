import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "../src/components/TopBar";
import "react-toastify/dist/ReactToastify.css";
import FlavorPage from "./components/FlavorPage";
import Products from "./components/product";
import SignInPage from "./components/Login/SignInPage";
import SignUpPage from "./components/Login/SignUpPage";
import EditPage from "./components/EditPage";
import AddPage from "./components/AddPage";
import IceCreamPage from "./components/IceCreamPage";
import CartPage from "./components/CartPage";
import MainPage from "./components/MainPage";
import Footer from "./components/footer";
import AboutUs from "./components/AboutUs";

function App() {
  const [cart, setcart] = React.useState(localStorage.getItem("items"));
  return (
    <Router>
      <div className="maincon" style={{ backgroundColor: "#d8c4b798" }}>
        <div style={{ backgroundColor: "rgb(252, 230, 233)" }}>
          <TopBar cart={cart} setcart={setcart} />
          <Switch>
            <Route
              path="/CartPage"
              exact
              component={() => <CartPage setcart={setcart} />}
            />
            <Route path="/AboutUs" exact component={AboutUs} />
            <Route path="/SignInPage" exact component={SignInPage} />
            <Route path="/SignUpPage" exact component={SignUpPage} />
            <Route
              path="/products"
              exact
              component={() => <FlavorPage setcart={setcart} />}
            />
            <Route
              path="/IceCreamPage/:id"
              exact
              component={(props) => <IceCreamPage setcart={setcart} />}
            />
            <Route path="/products/EditPage/:id" exact component={EditPage} />
            <Route path="/products/AddPage" exact component={AddPage} />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
