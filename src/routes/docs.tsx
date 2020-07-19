import React from "react";
import { CopyBlock, nord } from "react-code-blocks";
import componentIndex from "../index.json";
import {
  Avatar,
  Autocomplete,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Grid,
  Input,
  List,
  Modal,
  PopConfirm,
  Popover,
  Progress,
  Select,
  Spinner,
  Stack,
  Table,
  Tag,
  Toast,
  Tooltip,
  Typography,
  useMessage,
  useNotification,
  useModal,
} from "basikit";
import { logo } from "../lib";
import Sidebar from "../components/sidebar";
import ComponentSearch from "../components/component-search";

const { Heading, Text } = Typography;

function Docs() {
  const { pushNotification } = useNotification();
  const { pushMessage } = useMessage();
  const { pushModal } = useModal();

  const [autocompleteValue, setAutocompleteValue] = React.useState<string>();
  const [checked, setChecked] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [selectValue, setSelectValue] = React.useState<string>();
  const [toastErrorOpen, setToastErrorOpen] = React.useState<boolean>(false);
  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastSuccessOpen, setToastSuccessOpen] = React.useState<boolean>(
    false
  );

  return (
    <div className="documentation-page">
      <Sidebar />
      <div className="documentation-content-wrapper">
        <Card style={{ border: "none", borderBottom: "1px solid #eee" }} block>
          <Stack style={{ justifyContent: "space-between" }} align="center">
            <ComponentSearch style={{ borderColor: "#eee", width: 400 }} />
            <Stack size="small" align="center">
              <a
                data-formkit-toggle="0c30fec2a6"
                href="https://basikit-newsletter.ck.page/0c30fec2a6"
              >
                <Button variant="link">
                  Improve my React app{" "}
                  <span role="img" aria-label="emoji">
                    ✨
                  </span>
                </Button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/albingroen/basikit"
              >
                <Button
                  style={{
                    background: "#333",
                    color: "white",
                    borderColor: "#333",
                  }}
                >
                  GitHub
                </Button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.npmjs.com/package/basikit"
              >
                <Button variant="error">npm.js</Button>
              </a>
              <a href="#installing-package">
                <Button variant="primary">Install now</Button>
              </a>
            </Stack>
          </Stack>
        </Card>

        <Stack
          direction="column"
          size="large"
          className="documentation-content"
        >
          <header style={{ width: "100%" }}>
            <Stack block direction="column" size="large">
              <a href="/">
                <img src={logo} width={150} alt="Basikit Logo" />
              </a>
              <Stack direction="column" size="large">
                <Stack direction="column">
                  <Heading>Basikit for React</Heading>
                  <Text>
                    <span role="img" aria-label="emoji">
                      📚
                    </span>{" "}
                    Yet another React.js ui-kit
                  </Text>
                </Stack>

                <Stack direction="column" size="small">
                  <Heading level={2}>What is basikit?</Heading>
                  <Text style={{ maxWidth: 600 }}>
                    Basikit is a{" "}
                    <strong>
                      Javascript NPM module with up towards 30 React.js jsx
                      components
                    </strong>
                    . They are meant to enable you to quickly get a modern and
                    accessible user interface up and running as fast as
                    possible.
                  </Text>
                </Stack>
              </Stack>

              <Stack direction="column">
                <Heading level={2}>Product features</Heading>
                <List
                  items={[
                    {
                      key: 0,
                      title: "📦 Full featured component library for React.",
                    },
                    {
                      key: 1,
                      title: "🌈 Modern beautiful and reactive components.",
                    },
                    {
                      key: 2,
                      title:
                        "⚙️ Utilities to easily push notifications and messages.",
                    },
                    {
                      key: 3,
                      title:
                        "⏱ Saves time when bootstrapping software products.",
                    },
                    {
                      key: 4,
                      title:
                        "🌍 Fully open source through git version control.",
                    },
                  ]}
                  style={{ listStyleType: "circle" }}
                />
              </Stack>
            </Stack>
          </header>

          <Divider style={{ opacity: 0 }} />

          <Stack
            size="large"
            direction="column"
            style={{ width: 950 }}
            id="getting-started"
          >
            <Heading>Getting started</Heading>

            <Stack size="large" direction="column" block>
              <Card id="installing-package" block>
                <Stack direction="column" size="large" block>
                  <Stack direction="column" size="small">
                    <Heading level={2}>Installing package</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      You can install the basikit package by simply using your
                      Javascript package manager, like npm or yarn. Just run one
                      of the following commands listed down below.
                    </Text>
                  </Stack>

                  <Stack direction="column" block>
                    <code className="code-block code-block-inline">
                      $ yarn add basikit
                    </code>
                    <code className="code-block code-block-inline">
                      $ npm install basikit
                    </code>
                  </Stack>
                </Stack>
              </Card>

              <Card id="including-styles" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Including styles</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      To get proper styling for basikit, you need to import the
                      main css file located at basikit/dist/index.css. This will
                      ensure that all components look the way they should.
                    </Text>
                  </Stack>

                  <code className="block code-block-inline">
                    import 'basikit/dist/index.css'
                  </code>
                </Stack>
              </Card>

              <Card id="app-container" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>App container</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      If you want utility functions like notifications, toasts
                      and modals to work for example, you need to wrap your app
                      in our Container component. This ensures the necessary
                      context is accessible for the components.
                    </Text>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      theme={nord}
                      text={`// src/index.tsx
  import React from 'react'
  import ReactDOM from 'react-dom'
  import { Container } from 'basikit
  import 'basikit/dist/index.css'
  import App from './App'

  ReactDOM.render(
    <Container>
      <App />
    </Container>,
    document.getElementById('root')
  )
  `}
                      language="javascript"
                      showLineNumbers={false}
                    />
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Stack>

          <Stack
            size="large"
            direction="column"
            style={{ width: 950 }}
            id="components"
          >
            <Heading>Components</Heading>

            <Stack direction="column" size="large" block>
              <Card id="typography" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Typography</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The typography component is an abstraction of the default
                      html heading and p tags. They use the default css font
                      sizes and all headings have a default font-weight of 500.
                      The text component has a line-height of 1.5 and a slightly
                      grayer color.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Heading:</Text>
                    <Stack size="small" direction="column">
                      <Heading>Basikit component library</Heading>
                      <Heading level={2}>Basikit component library</Heading>
                      <Heading level={3}>Basikit component library</Heading>
                      <Heading level={4}>Basikit component library</Heading>
                      <Heading level={5}>Basikit component library</Heading>
                      <Heading level={6}>Basikit component library</Heading>
                    </Stack>
                  </Stack>

                  <Stack direction="column">
                    <Text>Default Text:</Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cumque, debitis consequatur. Magnam quasi perspiciatis
                      quia consequatur corporis animi quibusdam sapiente,
                      explicabo inventore ullam facere, nobis minima at labore
                      fuga iure.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Error Text:</Text>
                    <Text variant="error">
                      Failed to subscribe to newsletter!
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Bold Text:</Text>
                    <Text bold>This message is very important!</Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Italic Text:</Text>
                    <Text italic>The following conditions do apply*</Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Code Text:</Text>
                    <Text code>yarn add basikit</Text>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`const { Heading, Text } = Typography

<Stack direction="column">
  <Text>Heading:</Text>
  <Stack size="small" direction="column">
    <Heading>Basikit component library</Heading>
    <Heading level={2}>Basikit component library</Heading>
    <Heading level={3}>Basikit component library</Heading>
    <Heading level={4}>Basikit component library</Heading>
    <Heading level={5}>Basikit component library</Heading>
    <Heading level={6}>Basikit component library</Heading>
  </Stack>
</Stack>

<Stack direction="column">
  <Text>Default Text:</Text>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Cumque, debitis consequatur. Magnam quasi perspiciatis
    quia consequatur corporis animi quibusdam sapiente,
    explicabo inventore ullam facere, nobis minima at labore
    fuga iure.
  </Text>
</Stack>

<Stack direction="column">
  <Text>Error Text:</Text>
  <Text variant="error">
    Failed to subscribe to newsletter!
  </Text>
</Stack>

<Stack direction="column">
  <Text>Bold Text:</Text>
  <Text bold>This message is very important!</Text>
</Stack>                  

<Stack direction="column">
  <Text>Italic Text:</Text>
  <Text italic>The following conditions do apply*</Text>
</Stack>

<Stack direction="column">
  <Text>Code Text:</Text>
  <Text code>yarn add basikit</Text>
</Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (<code>Heading</code>) (
                      <i>extends html heading attributes</i>)
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>level</code>
                        </td>
                        <td>
                          <code>1 | 2 | 3 | 4 | 5 | 6</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>1</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (<code>Text</code>) (
                      <i>extends html paragraph attributes</i>)
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>'default' | 'error'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>bold</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>italic</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="button" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Button</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The button have a couple of different styles. Default,
                      Primary, Error and Link. It has all the default HTML
                      Button attributes and should be used when a user wants to
                      make any sort of action.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Button>Default button</Button>
                    <Button variant="primary">Primary button</Button>
                    <Button variant="success">Success button</Button>
                    <Button variant="error">Error button</Button>
                    <Button bordered>Bordered button</Button>
                    <Button variant="link">Link button</Button>
                  </Stack>

                  <Stack direction="column">
                    <Text>Loading state</Text>
                    <Stack size="small">
                      <Button loading>Default button</Button>
                      <Button loading variant="primary">
                        Primary button
                      </Button>
                      <Button loading variant="success">
                        Success button
                      </Button>
                      <Button loading variant="error">
                        Error button
                      </Button>
                      <Button loading bordered>
                        Bordered button
                      </Button>
                      <Button loading variant="link">
                        Link button
                      </Button>
                    </Stack>
                  </Stack>

                  <Text>
                    If you supply a <code>block</code> prop the button will span
                    the entire length
                  </Text>

                  <Stack size="small" direction="column" block>
                    <Button block>Default button</Button>
                    <Button block variant="primary">
                      Primary button
                    </Button>
                    <Button block variant="success">
                      Success button
                    </Button>
                    <Button block variant="error">
                      Error button
                    </Button>
                    <Button block bordered>
                      Bordered button
                    </Button>
                    <Button block variant="link">
                      Link button
                    </Button>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack size="small">
    <Button>Default button</Button>
    <Button variant="primary">Primary button</Button>
    <Button variant="success">Success button</Button>
    <Button variant="error">Error button</Button>
    <Button bordered>Bordered button</Button>
    <Button variant="link">Link button</Button>
  </Stack>

  <Stack direction="column">
    <Text>Loading state</Text>
    <Stack size="small">
      <Button loading>Default button</Button>
      <Button loading variant="primary">
        Primary button
      </Button>
      <Button loading variant="success">
        Success button
      </Button>
      <Button loading variant="error">
        Error button
      </Button>
      <Button loading bordered>
        Bordered button
      </Button>
      <Button loading variant="link">
        Link button
      </Button>
    </Stack>
  </Stack>

  <Text>
    If you supply a <code>block</code> prop the button will span
    the entire length
  </Text>

  <Stack size="small" direction="column" block>
    <Button block>Default button</Button>
    <Button block variant="primary">
      Primary button
    </Button>
    <Button block variant="success">
      Success button
    </Button>
    <Button block variant="error">
      Error button
    </Button>
    <Button block bordered>
      Bordered button
    </Button>
    <Button block variant="link">
      Link button
    </Button>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'success' | 'error'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>size</code>
                        </td>
                        <td>
                          <code>'default' | 'small' | 'large'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>loading</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="popover" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Popover</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The popover component is a component to use when you
                      quickly want to display some information or let the user
                      be able to quickly create something without having to go
                      another page.
                    </Text>
                  </Stack>

                  <Popover
                    content={<Input autoFocus placeholder="Popover input..." />}
                  >
                    <Button>Launch popover</Button>
                  </Popover>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Popover
    content={<input autoFocus placeholder="Popover input..." />}
  >
    <Button>Launch popover</Button>
  </Popover>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactNode</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>content</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="popconfirm" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>PopConfirm</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The popconfirm component is really good if you want to
                      quickly make the user confirm some sort of action. A good
                      example of this is when a user want to delete some entity
                      and you want to confirm their action.
                    </Text>
                  </Stack>

                  <PopConfirm
                    variant="error"
                    title="Are you sure you want to delete?"
                  >
                    <Button>Open popconfirm</Button>
                  </PopConfirm>

                  <div className="code-block">
                    <CopyBlock
                      text={`<PopConfirm
    variant='error'
    title='Are you sure you want to delete?'
  >
    <Button>Open popconfirm</Button>
  </PopConfirm>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>title</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'Are you sure?'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>'primary' | 'success' | 'error'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'primary'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>confirmText</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'Yes'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>denyText</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'No'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>onConfirm</code>
                        </td>
                        <td>
                          <code>{"() => void"}</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>onDeny</code>
                        </td>
                        <td>
                          <code>{"() => void"}</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="dropdown" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Dropdown</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The dropdown component is a component that you can use
                      when you want a user to pick a option from several
                      alternatives. For example this could be useful in a
                      navigation bar when clicking the profile picture.
                    </Text>
                  </Stack>

                  <Dropdown
                    items={[
                      {
                        title: "Dropdown item 1",
                        onClick: () => {},
                      },
                      {
                        title: "Dropdown item 2",
                        onClick: () => {},
                      },
                      {
                        title: "Dropdown item 3",
                        onClick: () => {},
                      },
                    ]}
                  >
                    <Button>Open dropdown</Button>
                  </Dropdown>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Dropdown
    items={[
      {
        title: "Dropdown item 1",
        onClick: () => {},
      },
      {
        title: "Dropdown item 2",
        onClick: () => {},
      },
      {
        title: "Dropdown item 3",
        onClick: () => {},
      },
    ]}
  >
    <Button>Open dropdown</Button>
  </Dropdown>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactElement</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>items</code>
                        </td>
                        <td>
                          <code>
                            {`{ title: string, onClick: () => void }`}[]
                          </code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="toast" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Toast</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The toast component is a component that should be used
                      when you want to quickly display some short information
                      about if a action has succeeded or failed for some reason.
                      It is not the same as a notification.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Button onClick={() => setToastOpen(true)}>
                      Open default toast
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => setToastSuccessOpen(true)}
                    >
                      Open success toast
                    </Button>
                    <Button
                      variant="error"
                      onClick={() => setToastErrorOpen(true)}
                    >
                      Open error toast
                    </Button>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`{toastOpen && (
    <Toast onClose={() => setToastOpen(false)}>Default Toast</Toast>
  )}

  {toastSuccessOpen && (
    <Toast variant="success" onClose={() => setToastSuccessOpen(false)}>
      Success Toast
    </Toast>
  )}

  {toastErrorOpen && (
    <Toast variant="error" onClose={() => setToastErrorOpen(false)}>
      Error Toast
    </Toast>
  )}`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>'default' | 'success' | 'error'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>onClose</code>
                        </td>
                        <td>
                          <code>{"() => void"}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="modal" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Modal</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The modal component is useful if you want the user to be
                      able to fill out some information or choose a action
                      without having to go to another page. Use this if there is
                      too much information for a popover but not enough to have
                      a separate page.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Button
                      onClick={() =>
                        pushModal({
                          title: "Modal",
                          content: <Text>modal content</Text>,
                          id: "example-modal",
                        })
                      }
                    >
                      Open uncontrolled modal
                    </Button>

                    <Button onClick={() => setModalOpen(true)}>
                      Open controlled modal
                    </Button>
                  </Stack>

                  {modalOpen && (
                    <Modal onClose={() => setModalOpen(false)}>
                      <Stack direction="column">
                        <Heading level={2}>Basic modal</Heading>
                        <Divider />
                        <Text>
                          This is a basic modal component. You can have anything
                          want inside of here
                        </Text>
                        <Button
                          style={{ marginTop: "1rem" }}
                          block
                          onClick={() => setModalOpen(false)}
                        >
                          Close modal
                        </Button>
                      </Stack>
                    </Modal>
                  )}

                  <div className="code-block">
                    <CopyBlock
                      text={`const { pushModal } = useModal()

  <Stack size='small'>
    <Button
      onClick={() =>
        pushModal({
          title: 'Modal',
          content: <Text>modal content</Text>,
          id: 'example-modal'
        })
      }
    >
      Open uncontrolled modal
    </Button>

    <Button onClick={() => setModalOpen(true)}>
      Open controlled modal
    </Button>
  </Stack>

  {modalOpen && (
    <Modal onClose={() => setModalOpen(false)}>
      <Stack direction="column">
        <Heading level={2}>Basic modal</Heading>
        <Divider />
        <Text>
          This is a basic modal component. You can have anything
          want inside of here
        </Text>
        <Button
          style={{ marginTop: "1rem" }}
          block
          onClick={() => setModalOpen(false)}
        >
          Close modal
        </Button>
      </Stack>
    </Modal>
  )}`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (uncontrolled)
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>title</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>id</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>content</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (controlled)
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>onClose</code>
                        </td>
                        <td>
                          <code>{"() => void"}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>title</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="divider" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Divider</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The divider component should be used when you want to
                      separate two components from each other. For example you
                      might want to separate a heading and its subheading or
                      paragraph.
                    </Text>
                  </Stack>

                  <div style={{ width: "100%" }}>
                    <Divider />
                    <Divider spacing="small" />
                    <Divider spacing="medium" />
                    <Divider spacing="large" />
                  </div>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Divider />
  <Divider spacing="small" />
  <Divider spacing="medium" />
  <Divider spacing="large" />`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>spacing</code>
                        </td>
                        <td>
                          <code>'small' | 'medium' | 'large'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="tooltip" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Tooltip</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The tooltip is a component that is very useful if you want
                      to highlight some really basic information to the user at
                      a quick glance. For example, if you have a button with
                      only an icon this might be helpful.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Hover the icon-button to show the tooltip</Text>

                    <Tooltip content="Delete this item entirely?">
                      <Button>🗑</Button>
                    </Tooltip>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Tooltip content="Delete this item entirely?">
    <Button>🗑</Button>
  </Tooltip>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" style={{ width: "100%" }}>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>content</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="table" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Table</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The table component is really useful if you want to
                      display structured data to a user. For example if you have
                      an array of products or customers, this is a good
                      component for displaying something like that.
                    </Text>
                  </Stack>

                  <Stack direction="column" style={{ width: "100%" }}>
                    <Table
                      columns={[
                        {
                          key: 0,
                          title: "Header 1",
                        },
                        {
                          key: 1,
                          title: "Header 2",
                        },
                        {
                          key: 2,
                          title: "Header 3",
                        },
                      ]}
                      rows={[
                        [
                          {
                            key: 0,
                            value: "Column 1",
                            onClick: () => setToastOpen(true),
                          },
                          {
                            key: 1,
                            value: "Column 2",
                          },
                          {
                            key: 2,
                            value: "Column 3",
                          },
                        ],
                      ]}
                    />
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Table
    columns={[
      {
        key: 0,
        title: 'Header 1'
      },
      {
        key: 1,
        title: 'Header 2'
      },
      {
        key: 2,
        title: 'Header 3'
      },
    ]}
    rows={[
      [
        {
          key: 0,
          value: 'Column 1',
          onClick: () => setModalOpen(true)
        },
        {
          key: 1,
          value: 'Column 2'
        },
        {
          key: 2,
          value: 'Column 3'
        },
      ]
    ]}
  />`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" style={{ width: "100%" }}>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>columns</code>
                        </td>
                        <td>
                          <code>
                            {"{ key: string | number, title: string }[]"}
                          </code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>rows</code>
                        </td>
                        <td>
                          <code>
                            {
                              "{ key: string | number, value: string, onClick?: () => void }[][]"
                            }
                          </code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="checkbox" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Checkbox</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The checkbox component should be used when you want users
                      to agree on some sort of condition. Or for example when
                      you want to add filters for a table, the checkbox is a
                      good component.
                    </Text>
                  </Stack>

                  <Checkbox
                    label="Approve conditions"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                    checked={checked}
                  />

                  <div className="code-block">
                    <CopyBlock
                      text={`<Checkbox
    label="Approve conditions"
    onChange={(e) => setChecked(e.currentTarget.checked)}
    checked={checked}
  />
  `}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" style={{ width: "100%" }}>
                    <Heading level={3}>
                      Component properties (<i>extends html input attributes</i>
                      )
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>label</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="select" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Select</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The checkbox component should be used when you want users
                      to agree on some sort of condition. Or for example when
                      you want to add filters for a table, the checkbox is a
                      good component.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Select
                      defaultValue="Select dropdown"
                      style={{ width: 175 }}
                      onChange={setSelectValue}
                      value={selectValue}
                      items={[
                        {
                          value: "value1",
                          title: "Value 1",
                        },
                        {
                          value: "value2",
                          title: "Value 2",
                        },
                        {
                          value: "value3",
                          title: "Value 3",
                        },
                      ]}
                    />
                    {selectValue && (
                      <Button
                        variant="link"
                        onClick={() => setSelectValue(undefined)}
                      >
                        Clear value
                      </Button>
                    )}
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack size="small">
    <Select
      defaultValue="Select dropdown"
      style={{ width: 175 }}
      onChange={setSelectValue}
      value={selectValue}
      items={[
        {
          value: "value1",
          title: "Value 1",
        },
        {
          value: "value2",
          title: "Value 2",
        },
        {
          value: "value3",
          title: "Value 3",
        },
      ]}
    />

    {selectValue && (
      <Button
        variant="link"
        onClick={() => setSelectValue(undefined)}
      >
        Clear value
      </Button>
    )}
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" style={{ width: "100%" }}>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>value</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>items</code>
                        </td>
                        <td>
                          <code>{"{ title: string, value: string }[]"}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>onChange</code>
                        </td>
                        <td>
                          <code>{"(value: string) => void"}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="input" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Input</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The input component should be used when you want to
                      collect some sort of text information from a user. For
                      example when signing up or logging in and you want them to
                      enter a email and password.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Default input component</Text>
                    <Input placeholder="Input component..." />
                  </Stack>

                  <Stack direction="column">
                    <Text>Input with prefix/icon</Text>
                    <Input icon="🔥" placeholder="Input component..." />
                  </Stack>

                  <Stack block direction="column">
                    <Text>Full width input</Text>
                    <Input block placeholder="Input component..." />
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack direction="column">
    <Text>Default input component</Text>
    <Input placeholder="Input component..." />
  </Stack>

  <Stack direction="column">
    <Text>Input with prefix/icon</Text>
    <Input icon="🔥" placeholder="Input component..." />
  </Stack>

  <Stack block direction="column">
    <Text>Full width input</Text>
    <Input block placeholder="Input component..." />
  </Stack>
  `}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (<i>extends html input attributes</i>
                      )
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>icon</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="autocomplete" style={{ width: "100%" }}>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Autocomplete</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The autocomplete component is a really useful component if
                      you want a user to be able to enter some sort of text but
                      also be able to choose between a range of predefined or
                      dynamic options at the same time.
                    </Text>
                  </Stack>

                  <Autocomplete
                    blurOnSelect
                    placeholder="Search for a component..."
                    items={componentIndex}
                    onChange={(e) =>
                      setAutocompleteValue(e.currentTarget.value)
                    }
                    searchFields={["name"]}
                    value={autocompleteValue}
                    renderItem={(item) => <Text>{item.name}</Text>}
                    onSelectItem={(item) => setAutocompleteValue(item.name)}
                  />

                  <div className="code-block">
                    <CopyBlock
                      text={`<Autocomplete
    items={componentIndex}
    onChange={(e) => setAutocompleteValue(e.currentTarget.value)}
    onSelectItem={(item) => setAutocompleteValue(item.name)}
    placeholder='Search for a component...'
    renderItem={(item) => <Text>{item.name}</Text>}
    searchFields={['name']}
    value={autocompleteValue}
  />`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (
                      <i>
                        extends <code>Input</code> attributes
                      </i>
                      )
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>items</code>
                        </td>
                        <td>
                          <code>{`{ [key: string]: any }[]`}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>searchFields</code>
                        </td>
                        <td>
                          <code>{"'path.to.property'[]"}</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>renderItem</code>
                        </td>
                        <td>
                          <code>
                            {"(item: YourItemType) => React.ReactNode"}
                          </code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>onSelectItem</code>
                        </td>
                        <td>
                          <code>{"(item: YourItemType) => void"}</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>blurOnSelect</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="card" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Card</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The input component should be used when you want to
                      collect some sort of text information from a user. For
                      example when signing up or logging in and you want them to
                      enter a email and password.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Card>
                      <Stack direction="column">
                        <Heading level={2}>Card component</Heading>
                        <Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur voluptatum nemo sed omnis eligendi
                          illum incidunt nostrum excepturi dolorum porro.
                        </Text>
                        <Stack size="small">
                          <Button variant="primary">Get started</Button>
                          <Button>See pricing</Button>
                        </Stack>
                      </Stack>
                    </Card>

                    <Card block bordered style={{ borderColor: "#ccc" }}>
                      <Stack
                        direction="column"
                        style={{
                          alignItems: "center",
                          height: 200,
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <Heading level={2}>Time for a new project?</Heading>
                        <Text style={{ maxWidth: 400 }}>
                          Time to create a new side project? Just hit the button
                          below and we'll get you started in no time.
                        </Text>
                        <Button>Create new project?</Button>
                      </Stack>
                    </Card>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack direction="column">
    <Card>
      <Stack direction="column">
        <Heading level={2}>Card component</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur voluptatum nemo sed omnis eligendi illum
          incidunt nostrum excepturi dolorum porro.
        </Text>
        <Stack size="small">
          <Button variant="primary">Get started</Button>
          <Button>See pricing</Button>
        </Stack>
      </Stack>
    </Card>

    <Card block bordered style={{ borderColor: "#ccc" }}>
      <Stack
        direction="column"
        style={{
          alignItems: "center",
          height: 200,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Heading level={2}>Time for a new project?</Heading>
        <Text style={{ maxWidth: 400 }}>
          Time to create a new side project? Just hit the button
          below and we'll get you started in no time.
        </Text>
        <Button>Create new project?</Button>
      </Stack>
    </Card>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>
                      Component properties (<i>extends html input attributes</i>
                      )
                    </Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>icon</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>multiLine</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="avatar" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Avatar</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The avatar is a component that is really useful when you
                      want to display some sort of a profile picture or logo.
                      Just be aware that only square logos with only a icon will
                      look good on the avatar component.
                    </Text>
                  </Stack>

                  <Stack>
                    <Avatar src="https://placehold.it/100x100" />
                    <Avatar>AG</Avatar>
                    <Avatar src="https://i.pravatar.cc/300" />
                    <Avatar
                      style={{ backgroundColor: "skyblue" }}
                      shape="square"
                    >
                      <span role="img" aria-label="emoji">
                        👩🏾
                      </span>
                    </Avatar>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack>
    <Avatar src="https://placehold.it/100x100" />
    <Avatar>AG</Avatar>
    <Avatar src="https://i.pravatar.cc/300" />
    <Avatar style={{ backgroundColor: "skyblue" }} shape="square">
      <span role="img" aria-label="emoji">
        👩🏾
      </span>
    </Avatar>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>src</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>shape</code>
                        </td>
                        <td>
                          <code>'round' | 'square'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'round'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>
              <Card id="tag" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Tag</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The tag components i a useful component to use if you want
                      to list an array of short info points. For example in a
                      instagram post the user might have entered a handful
                      hashtags and you want to display them.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Tag>Default tag</Tag>
                    <Tag variant="primary">Primary tag</Tag>
                    <Tag variant="warning">Warning tag</Tag>
                    <Tag variant="error">Error tag</Tag>
                    <Tag variant="success">Success tag</Tag>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack size="small">
    <Tag>Default tag</Tag>
    <Tag variant="primary">Primary tag</Tag>
    <Tag variant="warning">Warning tag</Tag>
    <Tag variant="error">Error tag</Tag>
    <Tag variant="success">Success tag</Tag>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'error' | 'success'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>
              <Card id="grid" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Grid</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The grid component is quite useful if you want build some
                      sort of layout that has several columns perhaps different
                      sized rows. It can also be helpful if you want several
                      columns to turn into one column on a small screen.
                    </Text>
                  </Stack>

                  <Grid gap="1rem" columns="repeat(2, 1fr)" rows="1fr 2fr 1fr">
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 3</Button>
                    <Button>Button 4</Button>
                    <Button>Button 5</Button>
                    <Button>Button 6</Button>
                  </Grid>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Grid gap="1rem" columns="repeat(2, 1fr)" rows="1fr 2fr 1fr">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
  </Grid>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>columns</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>rows</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>gap</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="stack" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Stack</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The stack component is what mostly replaces flex and
                      margins. This lets you wrap several elements and decide
                      which direction it should list the elements, as well as
                      how much spacing should be added between each element.
                    </Text>
                  </Stack>

                  <Stack direction="column">
                    <Text>Horizontal (default) stack</Text>
                    <Stack>
                      <Button>Button 1</Button>
                      <Button>Button 2</Button>
                      <Button>Button 3</Button>
                    </Stack>
                  </Stack>

                  <Stack direction="column" block>
                    <Text>
                      Horizontal stack (<code>block</code>)
                    </Text>
                    <Stack block>
                      <Button block>Button 1</Button>
                      <Button block>Button 2</Button>
                      <Button block>Button 3</Button>
                    </Stack>
                  </Stack>

                  <Stack direction="column">
                    <Text>Vertical stack</Text>
                    <Stack direction="column">
                      <Button>Button 1</Button>
                      <Button>Button 2</Button>
                      <Button>Button 3</Button>
                    </Stack>
                  </Stack>

                  <Stack direction="column" block>
                    <Text>
                      Vertical stack (<code>block</code>)
                    </Text>
                    <Stack direction="column" block>
                      <Button block>Button 1</Button>
                      <Button block>Button 2</Button>
                      <Button block>Button 3</Button>
                    </Stack>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack direction="column">
    <Text>Horizontal (default) stack</Text>
    <Stack>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  </Stack>

  <Stack direction="column" block>
    <Text>Horizontal stack (<code>block</code>)</Text>
    <Stack block>
      <Button block>Button 1</Button>
      <Button block>Button 2</Button>
      <Button block>Button 3</Button>
    </Stack>
  </Stack>

  <Stack direction="column">
    <Text>Vertical stack</Text>
    <Stack direction="column">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  </Stack>

  <Stack direction="column" block>
    <Text>Vertical stack (<code>block</code>)</Text>
    <Stack direction="column" block>
      <Button block>Button 1</Button>
      <Button block>Button 2</Button>
      <Button block>Button 3</Button>
    </Stack>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>direction</code>
                        </td>
                        <td>
                          <code>'row' | 'column'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'row'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>spacing</code>
                        </td>
                        <td>
                          <code>'small' | 'medium' | 'large'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="progress" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Progress</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The progress component is really useful if you want to
                      display for the user the progress they or some other
                      entity has made over a period of time. For example the
                      progress on a course or the downloading of a file.
                    </Text>
                  </Stack>

                  <Stack direction="column" block>
                    <Text>Default progress bars</Text>
                    <Progress />
                    <Progress value={0.5} />
                    <Progress value={1} />
                  </Stack>

                  <Stack direction="column" block>
                    <Text>With labels</Text>
                    <Progress showLabel />
                    <Progress showLabel value={0.5} />
                    <Progress showLabel value={1} />
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack direction="column" block>
    <Text>Default progress bars</Text>
    <Progress />
    <Progress value={0.5} />
    <Progress value={1} />
  </Stack>

  <Stack direction="column" block>
    <Text>With labels</Text>
    <Progress showLabel />
    <Progress showLabel value={0.5} />
    <Progress showLabel value={1} />
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>value</code>
                        </td>
                        <td>
                          <code>number</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>0</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>showLabel</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="spinner" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Spinner</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The spinner component is a really good component when you
                      want to indicate that some sort of process is in a loading
                      state. For example when you are loading data onto a page
                      or loading the entire page.
                    </Text>
                  </Stack>

                  <Stack>
                    <Stack direction="column">
                      <Spinner size="small" />
                      <Spinner />
                      <Spinner size="large" />
                    </Stack>
                    <Stack direction="column">
                      <Spinner variant="error" size="small" />
                      <Spinner variant="success" />
                      <Spinner variant="primary" size="large" />
                    </Stack>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack>
    <Stack direction="column"> 
      <Spinner size="small" />
      <Spinner />
      <Spinner size="large" />
    </Stack>
    <Stack direction="column">
      <Spinner variant="error" size="small" />
      <Spinner variant="success" />
      <Spinner variant="primary" size="large" />
    </Stack>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>size</code>
                        </td>
                        <td>
                          <code>'small' | 'default' | 'large'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'success' | 'error'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="notification" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Notification</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The notification utility is good if you want to deliver
                      some sort of important message to the user. For example an
                      error that occurs after some sort of user action, or a
                      more complex success message.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Button
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushNotification({
                          title: "Test notification",
                          description: `Id of the notification: ${id}`,
                          id,
                        });
                      }}
                    >
                      Notification
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushNotification({
                          title: "Test notification",
                          description: `Id of the notification: ${id}`,
                          variant: "primary",
                          id,
                        });
                      }}
                    >
                      Primary notification
                    </Button>

                    <Button
                      variant="success"
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushNotification({
                          title: "Test notification",
                          description: `Id of the notification: ${id}`,
                          variant: "success",
                          id,
                        });
                      }}
                    >
                      Success notification
                    </Button>

                    <Button
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushNotification({
                          title: "Test notification",
                          description: `Id of the notification: ${id}`,
                          variant: "warning",
                          id,
                        });
                      }}
                    >
                      Warning notification
                    </Button>

                    <Button
                      variant="error"
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushNotification({
                          title: "Test notification",
                          description: `Id of the notification: ${id}`,
                          variant: "error",
                          id,
                        });
                      }}
                    >
                      Error notification
                    </Button>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`const { pushNotification } = useNotification()

  <Stack size="small">
    <Button
      onClick={() => {
        const id = String(Math.random() * 100);

        pushNotification({
          title: "Test notification",
          description: \`Id of the notification: \${id}\`,
          id,
        });
      }}
    >
      Notification
    </Button>

    <Button
      variant="primary"
      onClick={() => {
        const id = String(Math.random() * 100);

        pushNotification({
          title: "Test notification",
          description: \`Id of the notification: \${id}\`,
          variant: "primary",
          id,
        });
      }}
    >
      Primary notification
    </Button>

    <Button
      variant="success"
      onClick={() => {
        const id = String(Math.random() * 100);

        pushNotification({
          title: "Test notification",
          description: \`Id of the notification: \${id}\`,
          variant: "success",
          id,
        });
      }}
    >
      Success notification
    </Button>

    <Button
      onClick={() => {
        const id = String(Math.random() * 100);

        pushNotification({
          title: "Test notification",
          description: \`Id of the notification: \${id}\`,
          variant: "warning",
          id,
        });
      }}
    >
      Warning notification
    </Button>

    <Button
      variant="error"
      onClick={() => {
        const id = String(Math.random() * 100);

        pushNotification({
          title: "Test notification",
          description: \`Id of the notification: \${id}\`,
          variant: "error",
          id,
        });
      }}
    >
      Error notification
    </Button>
  </Stack>

  // This generates a component that looks like this:
  // <Notification
  //  id={id}
  //  title={title}
  //  description={description}
  //  duration={duration}
  //  autoClose={autoClose}
  // />`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>title</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>description</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>id</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>duration</code>
                        </td>
                        <td>
                          <code>number</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>5000</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>autoClose</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'success' | 'warning' |
                            'error'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>
              <Card id="message" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Message</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The message utility is good if you want to deliver some
                      sort of important message to the user. For example an
                      error that occurs after some sort of user action, or a
                      less complex success message.
                    </Text>
                  </Stack>

                  <Stack size="small">
                    <Button
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushMessage({
                          title: "This is a test message",
                          id,
                        });
                      }}
                    >
                      Trigger message
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushMessage({
                          title: "This is a test message",
                          variant: "primary",
                          id,
                        });
                      }}
                    >
                      Primary message
                    </Button>

                    <Button
                      variant="success"
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushMessage({
                          title: "This is a test message",
                          variant: "success",
                          id,
                        });
                      }}
                    >
                      Success message
                    </Button>

                    <Button
                      onClick={() => {
                        const id = String(Math.random() * 100);

                        pushMessage({
                          title: "This is a test message",
                          variant: "warning",
                          id,
                        });
                      }}
                    >
                      Warning message
                    </Button>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`const { pushMessage } = useMessage()

  <Stack size='small'>
    <Button
      onClick={() => {
        const id = String(Math.random() * 100)

        pushMessage({
          title: 'This is a test message',
          id
        })
      }}
    >
      Trigger message
    </Button>

    <Button
      variant='primary'
      onClick={() => {
        const id = String(Math.random() * 100)

        pushMessage({
          title: 'This is a test message',
          variant: 'primary',
          id
        })
      }}
    >
      Primary message
    </Button>

    <Button
      variant='success'
      onClick={() => {
        const id = String(Math.random() * 100)

        pushMessage({
          title: 'This is a test message',
          variant: 'success',
          id
        })
      }}
    >
      Success message
    </Button>

    <Button
      onClick={() => {
        const id = String(Math.random() * 100)

        pushMessage({
          title: 'This is a test message',
          variant: 'warning',
          id
        })
      }}
    >
      Warning message
    </Button>
  </Stack>

  // This generates a component that looks like this:
  // <Message
  //  id={id}
  //  title={title}
  //  duration={duration}
  // />`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>title</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>id</code>
                        </td>
                        <td>
                          <code>string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>duration</code>
                        </td>
                        <td>
                          <code>number</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>5000</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'success' | 'warning'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="badge" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>Badge</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The badge component is a good component if you want to
                      highlight some sort of activity on a page that the user is
                      not currently on. For example you might have a messages
                      page, and in your header you could have a link to the page
                      where you want to show the amount of new messages.
                    </Text>
                  </Stack>

                  <Stack>
                    <Badge dot>
                      <Button>See inbox</Button>
                    </Badge>
                    <Badge showZero>
                      <Button>See inbox</Button>
                    </Badge>
                    <Badge count={10000}>
                      <Button>See inbox</Button>
                    </Badge>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack>
    <Badge dot>
      <Button>See inbox</Button>
    </Badge>
    <Badge showZero>
      <Button>See inbox</Button>
    </Badge>
    <Badge count={10000}>
      <Button>See inbox</Button>
    </Badge>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>children</code>
                        </td>
                        <td>
                          <code>React.ReactNode | string</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>count</code>
                        </td>
                        <td>
                          <code>number</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>0</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>shape</code>
                        </td>
                        <td>
                          <code>'circle' | 'square'</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'circle'</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>showZero</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>dot</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>block</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>variant</code>
                        </td>
                        <td>
                          <code>
                            'default' | 'primary' | 'success' | 'warning'
                          </code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>'default'</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>

              <Card id="list" block>
                <Stack direction="column" size="large">
                  <Stack direction="column" size="small">
                    <Heading level={2}>List</Heading>
                    <Divider spacing="medium" />
                    <Text style={{ maxWidth: "80ch" }}>
                      The list component is really useful if you want to list to
                      the user a smaller amount of short noted information. For
                      example a list of features or functionalities of a product
                      or similar.
                    </Text>
                  </Stack>

                  <Stack size="large" direction="column">
                    <Stack direction="column">
                      <Text>Default list component</Text>
                      <List
                        items={[
                          {
                            key: 0,
                            title: "List item 1",
                          },
                          {
                            key: 1,
                            title: "List item 2",
                          },
                          {
                            key: 2,
                            title: "List item 3",
                          },
                        ]}
                      />
                    </Stack>

                    <Stack direction="column">
                      <Text>Ordered list component</Text>
                      <List
                        ordered
                        items={[
                          {
                            key: 0,
                            title: "List item 1",
                          },
                          {
                            key: 1,
                            title: "List item 2",
                          },
                          {
                            key: 2,
                            title: "List item 3",
                          },
                        ]}
                      />
                    </Stack>
                  </Stack>

                  <div className="code-block">
                    <CopyBlock
                      text={`<Stack size="large" direction="column">
    <Stack direction="column">
      <Text>Default list component</Text>
      <List
        items={[
          {
            key: 0,
            title: 'List item 1'
          },
          {
            key: 1,
            title: 'List item 2'
          },
          {
            key: 2,
            title: 'List item 3'
          },
        ]}
      />
    </Stack>

    <Stack direction="column">
      <Text>Ordered list component</Text>
      <List
        ordered
        items={[
          {
            key: 0,
            title: 'List item 1'
          },
          {
            key: 1,
            title: 'List item 2'
          },
          {
            key: 2,
            title: 'List item 3'
          },
        ]}
      />
    </Stack>
  </Stack>`}
                      language="jsx"
                      theme={nord}
                    />
                  </div>

                  <Stack direction="column" block>
                    <Heading level={3}>Component properties</Heading>
                    <table className="table">
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default</th>
                      </tr>
                      <tr>
                        <td>
                          <code>items</code>
                        </td>
                        <td>
                          <code>
                            {"{ key: string | number, title: string }["}
                          </code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                        <td>
                          <code>undefined</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>ordered</code>
                        </td>
                        <td>
                          <code>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                    </table>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Stack>

        {toastOpen && (
          <Toast onClose={() => setToastOpen(false)}>Default Toast</Toast>
        )}
        {toastSuccessOpen && (
          <Toast variant="success" onClose={() => setToastSuccessOpen(false)}>
            Success Toast
          </Toast>
        )}
        {toastErrorOpen && (
          <Toast variant="error" onClose={() => setToastErrorOpen(false)}>
            Error Toast
          </Toast>
        )}
      </div>
    </div>
  );
}

export default Docs;
