import React from "react";
import Docs from "./routes/docs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedbackForm from "./components/feedback-form";
import Start from "./routes/start";
import { Button, Stack } from "basikit";
import NewsletterModal from "./components/newsletter-modal";

export const NewsletterModalContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => undefined,
});

const App = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = React.useState<
    boolean
  >(false);

  return (
    <NewsletterModalContext.Provider
      value={{
        isOpen: isNewsletterModalOpen,
        setIsOpen: setIsNewsletterModalOpen,
      }}
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

        {isNewsletterModalOpen && (
          <NewsletterModal onClose={() => setIsNewsletterModalOpen(false)} />
        )}
      </BrowserRouter>
    </NewsletterModalContext.Provider>
  );
};

export default App;
