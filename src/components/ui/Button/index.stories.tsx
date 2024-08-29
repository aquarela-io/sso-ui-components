import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "SSO UI Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "social-google", "social-apple"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon"],
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Login",
    variant: "default",
    size: "default",
  },
};

export const Link: Story = {
  args: {
    children: (
      <a href="https://aquarela.io" target="_blank">
        Sign Up
      </a>
    ),
    variant: "default",
    size: "default",
    asChild: true,
  },
};

export const SocialGoogleButtons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-center">
      <Button {...args} variant="social-google" size="default">
        Sign in with Google
      </Button>
      <Button {...args} variant="social-google" size="icon" />
    </div>
  ),
};
export const SocialAppleButtons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-center">
      <Button {...args} variant="social-apple" size="default">
        Sign in with Apple
      </Button>
      <Button {...args} variant="social-apple" size="icon" />
    </div>
  ),
};
