import Avatar from './Avatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar { ...args } />;

export const Default = Template.bind({});
Default.args = {};

export const SquareAvatar = Template.bind({});
SquareAvatar.args = {
  rounded: false
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
