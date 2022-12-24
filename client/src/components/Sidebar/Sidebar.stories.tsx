import Sidebar from './Sidebar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Admin Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar />;

export const AdminSidebar = Template.bind({});
AdminSidebar.args = {};
