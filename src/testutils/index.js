import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

chai.use(sinonChai);
chai.use(chaiEnzyme());
sinonStubPromise(sinon);

global.React = React;
global.expect = chai.expect;
global.sinon = sinon;
global.shallow = shallow;

export function createNavigationProp (params = {}) {
  return {
    state: {params: params},
    navigate: () => {}
  }
}