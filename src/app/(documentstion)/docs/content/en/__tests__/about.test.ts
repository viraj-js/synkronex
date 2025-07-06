import aboutContent from '../about';

describe('aboutContent', () => {
  it('should have correct structure', () => {
    expect(aboutContent).toHaveProperty('title');
    expect(aboutContent).toHaveProperty('description');
    expect(aboutContent).toHaveProperty('mission');
    expect(Array.isArray(aboutContent.team)).toBe(true);
    expect(aboutContent.team[0]).toHaveProperty('name');
    expect(aboutContent.team[0]).toHaveProperty('role');
  });
});
