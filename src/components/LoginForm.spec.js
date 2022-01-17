import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const wraningText = wrapper.find('.warning');
    // console.log(wraningText.html());
    expect(wraningText.exists()).toBeTruthy();
  });
});
