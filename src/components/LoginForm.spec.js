import { sum } from '@/components/math';

sum(10, 20); //30

describe('math.js', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    // expect(result).toBe(12);
    expect(result).not.toBe(30);
  }); // 하나의 테스트 케이스를 검증하는 API
});
