import React from "react";
import Docs from "./routes/docs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedbackForm from "./components/feedback-form";
import Start from "./routes/start";
import { Button, Stack } from "basikit";
import SponsorModal from "./components/sponsor-modal";

export const SponsorModalContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => undefined,
});

const App = () => {
  const [isSponsorModalOpen, setIsSponsorModalOpen] = React.useState<boolean>(
    true
  );

  return (
    <SponsorModalContext.Provider
      value={{ isOpen: isSponsorModalOpen, setIsOpen: setIsSponsorModalOpen }}
    >
      <BrowserRouter>
        <Stack direction="column" align="end">
          <FeedbackForm
            projectId="b0bad41aa6a1be"
            triggerComponent={(props: unknown) => (
              <Button
                variant="success"
                {...props}
                style={{
                  position: "fixed",
                  bottom: "2rem",
                  right: "2rem",
                  zIndex: 100,
                }}
              >
                Got feedback?
              </Button>
            )}
          />
        </Stack>

        <Switch>
          <Route exact component={Start} path="/" />
          <Route exact component={Docs} path="/documentation" />
        </Switch>

        {isSponsorModalOpen && (
          <SponsorModal onClose={() => setIsSponsorModalOpen(false)} />
        )}
      </BrowserRouter>
    </SponsorModalContext.Provider>
  );
};

export default App;
