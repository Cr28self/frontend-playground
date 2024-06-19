import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Example/First/Button",
  component: Button,
  // ...
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    label: "Click",
    size: "large",
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red",
  },
};
