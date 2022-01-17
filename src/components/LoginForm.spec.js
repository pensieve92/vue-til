import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log(idInput.element.value);
  });
});
