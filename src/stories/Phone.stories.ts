import type { Meta, StoryObj } from "@storybook/react";
import Phone from "../components/Phone";

const meta: Meta<typeof Phone> = {
  title: "Example/First/Phone",
  component: Phone,
  // ...
};

export default meta;
type Story = StoryObj<Phone>;

export const Primary: Story = {
  args: {
    imgSrc: "/horse_phone.jpg",
    dark: false,
  },
};
