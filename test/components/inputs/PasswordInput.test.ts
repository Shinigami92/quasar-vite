import PasswordInput from '@/components/inputs/PasswordInput.vue';
import { mount } from '@vue/test-utils';
import { Quasar } from 'quasar';
import { describe, expect, it } from 'vitest';

describe('PasswordInput', () => {
  it('should hide the given password by default', async () => {
    expect(PasswordInput).toBeTruthy();

    const wrapper = mount(PasswordInput, {
      props: {
        modelValue: 'secret',
      },
      global: {
        plugins: [Quasar],
        mocks: {
          $t: () => 'something',
        },
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');
    expect(input.element.value).toEqual('secret');
  });
});
