import React from "react";
import Docs from "./routes/docs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedbackForm from "./components/feedback-form";
import Start from "./routes/start";
import { Button } from "basikit";

const App = () => (
  <BrowserRouter>
    <FeedbackForm
      projectId="b0bad41aa6a1be"
      triggerComponent={(props: unknown) => (
        <Button
          variant="success"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 100,
          }}
          {...props}
        >
          Got feedback?
        </Button>
      )}
    />
    <Switch>
      <Route exact component={Start} path="/" />
      <Route exact component={Docs} path="/documentation" />
    </Switch>
  </BrowserRouter>
);

export default App;
