import { DuxliButtonVariant } from './duxli-button';
import readme from './readme.md';

const variants: DuxliButtonVariant[] = ['outlined', 'filled', 'minimal', 'icon'];

export default {
  title: 'duxli-button',
  parameters: {
    notes: readme,
  },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = args => `
  <div>
    ${variants.map(variant => `<duxli-button variant="${variant}">${args.text}</duxli-button>`).join('')}
  </div>
`;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Foo',
};
