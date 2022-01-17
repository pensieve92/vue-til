import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@co.kr',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log('인풋 박스의 값', idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
