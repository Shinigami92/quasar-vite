import PasswordInput from '@/components/inputs/PasswordInput.vue';
import { mount } from '@vue/test-utils';
import Quasar from 'quasar';
import { describe, expect, it } from 'vitest';

describe('PasswordInput', () => {
  it('should mount the component', async () => {
    expect(PasswordInput).toBeTruthy();

    const wrapper = mount(PasswordInput, {
      props: {
        modelValue: '',
      },
      global: {
        plugins: [Quasar],
        mocks: {
          $t: () => 'some specific text',
        },
      },
    });

    expect(wrapper.text()).toContain('mdi-key-variant');
  });
});
