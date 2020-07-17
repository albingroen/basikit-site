import React from "react";
import { Button, Stack, Tooltip, useMessage } from "basikit";
import { logoWhite } from "../lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
import CopyToClipboard from "react-copy-to-clipboard";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Start = () => {
  const { pushMessage } = useMessage();

  React.useEffect(() => {
    document.body.style.background = "#006aff";
    return () => {
      document.body.style.background = "#ffffff";
    };
  }, []);

  return (
    <div className="start-page">
      <header>
        <Stack direction="column" align="center" className="header-content">
          <img src={logoWhite} alt="Basikit logotype" />
          <h1>
            <strong>Basikit</strong> for React
          </h1>
          <Stack direction="column" align="center" size="large">
            <p>
              Bootstrapping a startup or fulfilling your side project idea? Use
              basikit to get up and running in no time with our prebuilt,
              accessible, and beautiful React.js components.{" "}
              <span role="img" aria-label="emoji">
                💎
              </span>
            </p>
            <Stack>
              <HashLink to="/documentation#installing-package">
                <Button size="large" variant="success">
                  <Stack block align="center" size="small">
                    <span>Install now</span>
                    <i>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                  </Stack>
                </Button>
              </HashLink>
              <Link to="/documentation">
                <Button id="documentation-button" size="large">
                  <Stack block align="center" size="small">
                    <span>Documentation</span>
                    <i>
                      <FontAwesomeIcon icon={faCode} />
                    </i>
                  </Stack>
                </Button>
              </Link>
            </Stack>
            <Tooltip content="Copy to clipboard">
              <CopyToClipboard
                text="yarn add basikit"
                onCopy={() =>
                  pushMessage({
                    title: "Copied to clipboard!",
                    id: "copied-to-clipboard",
                    variant: "success",
                  })
                }
              >
                <code>yarn add basikit</code>
              </CopyToClipboard>
            </Tooltip>
          </Stack>
        </Stack>
      </header>
    </div>
  );
};

export default Start;
