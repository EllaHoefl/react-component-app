import React from "react";

import Counter from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

// export const Primary = {
//   args: {
//     primary: true,
//     label: "Button",
//   },
// };

export const Default = Template.bind({});
