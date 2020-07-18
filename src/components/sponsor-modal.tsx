import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  Divider,
  Stack,
  Button,
  Input,
  Checkbox,
  List,
  Tag,
  Tooltip,
  useMessage,
} from "basikit";

interface ISponsorModalProps {
  onClose: () => void;
}

const SponsorModal: React.FC<ISponsorModalProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const { pushMessage } = useMessage();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!email)
      return pushMessage({
        title: "Email is required!",
        id: "newsletter-email-error",
      });

    axios
      .post(`/.netlify/functions/subscribe-to-newsletter`, { email })
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Modal {...props}>
      <Stack direction="column" block>
        <Stack align="center" style={{ justifyContent: "space-between" }} block>
          <h2>
            Improve your React apps{" "}
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h2>
          <Button
            onClick={() => props.onClose()}
            variant="link"
            style={{ padding: 0 }}
          >
            Close
          </Button>
        </Stack>
        <Divider />
        <p>
          Want to get helpful tips on how to improve your react and react native
          app each week? For example, you will learn:
        </p>
        <List
          items={[
            {
              key: 0,
              title: "Handling large amounts of data.",
            },
            {
              key: 1,
              title: "Animating your components smoothly.",
            },
            {
              key: 2,
              title: "Making effective http network requests.",
            },
            {
              key: 3,
              title: "Working with Context, Sate and Reducers.",
            },
          ]}
        />
        <br />
        <Tooltip content="You will receive a free email each week ❤️">
          <Tag variant="success">Free forever</Tag>
        </Tooltip>
        <h3>Sign up for the weekly newsletter</h3>
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <Stack direction="column" block>
            <Input
              block
              required
              type="email"
              placeholder="john@doe.com..."
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Checkbox label="I allow my email to be used is marketing purposes" />
            <Button variant="success" block>
              Sign up now
            </Button>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
};

export default SponsorModal;
