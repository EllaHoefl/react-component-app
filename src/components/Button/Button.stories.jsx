import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Red = Template.bind({});
Red.args = {
  label: "Red",
  backgroundColor: "#ffb6b6",
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: "Button",
//   },
// };

// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
