import React from "react";
import { I18nProvider } from "./i18n";
import { Layout } from "./components/layout/Layout";
import { Route, Switch, Router } from "wouter";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EarlyAccess from "./pages/EarlyAccess";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Imprint from "./pages/Imprint";
import SubProcessor from "./pages/SubProcessor";
import NotFound from "./pages/not-found";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <I18nProvider>
      <Layout>
        <Router base={base}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/funktionen" component={Features} />
          <Route path="/preise" component={Pricing} />
          <Route path="/ueber-uns" component={About} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/early-access" component={EarlyAccess} />
          <Route path="/datenschutz" component={Privacy} />
          <Route path="/agb" component={Terms} />
          <Route path="/impressum" component={Imprint} />
          <Route path="/sub-processor" component={SubProcessor} />
          <Route component={NotFound} />
        </Switch>
        </Router>
      </Layout>
    </I18nProvider>
  );
}

export default App;
