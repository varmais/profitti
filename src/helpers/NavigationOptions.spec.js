import { createHeader } from './NavigationOptions';
import config from '../config';
import AppStyles from './Styles';

describe('helpers:NavigationOptions', () => {
  describe('createHeader', () => {
    describe('when title is given', () => {
      it('returns options with title', () => {
        const title = 'random title';
        expect(createHeader(title)).to.eql({
          style: AppStyles.header,
          tintColor: config.colors.white,
          title
        });
      });
    });

    describe('when title is not given', () => {
      it('returns options with empty title', () => {
        const title = 'random title';
        expect(createHeader()).to.eql({
          style: AppStyles.header,
          tintColor: config.colors.white,
          title: ''
        });
      });
    })
  });
});
