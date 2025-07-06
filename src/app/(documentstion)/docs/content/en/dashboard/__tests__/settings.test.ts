import settings from '../settings';

describe('dashboard settings', () => {
  it('should be an object', () => {
    expect(typeof settings).toBe('object');
  });
});
