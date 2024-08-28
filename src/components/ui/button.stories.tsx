import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Login Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "social", "google"],
    },
    size: {
      control: { type: "select" },
      options: ["default"],
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};

export const Social: Story = {
  args: {
    children: "Social Button",
    variant: "social",
  },
};

export const Google: Story = {
  args: {
    children: "Sign in with Google",
    variant: "google",
  },
};
