import { mount } from '@cypress/vue';
import { Quasar } from 'quasar';
import PasswordInput from './PasswordInput.vue';

it('should hide the given password by default', () => {
  mount(PasswordInput, {
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

  cy.get('input[type="password"]').should('have.value', 'secret');
});
