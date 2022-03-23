import { shallowMount } from '@vue/test-utils';

import BaseButton from './BaseButton.vue';

describe('BaseButton.vue', () => {
  it('renders Basebutton', () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
