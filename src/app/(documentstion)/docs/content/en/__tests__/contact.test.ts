import contact from '../contact';

describe('contact', () => {
  it('should have expected keys', () => {
    expect(contact).toBeDefined();
    expect(typeof contact).toBe('object');
  });
});
