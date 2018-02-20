import { expect } from 'chai';

import { loadNotes } from '../home';

describe('home', ()=> {
  describe('loadNotes', ()=> {
    it('should return LOAD_NOTES as type', () => {
      expect(loadNotes('qwert').type).to.be.equal('LOAD_NOTES');
    });
  });
});
