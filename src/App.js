import React from "react";
// import { Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Wrapper
import Wrapper from "./components/Wrapper";
// Pages
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Wrapper>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Redirect to="/about" />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolio">
                <PortfolioPage />
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
