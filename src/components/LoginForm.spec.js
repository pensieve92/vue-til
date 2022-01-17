import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야한다. ', () => {
    // const instance = new Vue(LoginForm).$mount();
    //   console.log(instance.username);
    //   expect(instance.username).toBe('');

    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });
});
