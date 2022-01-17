// 테스트 유틸 라이브러리 로딩
// 컴포넌트 로딩

import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm';

describe('SignupForm', () => {
  test('이메일 유효성 테스트', () => {
    // 내용정의
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test@co.kr',
        };
      },
    });
    console.log(wrapper.vm.isUsernameValid);
  });
});
