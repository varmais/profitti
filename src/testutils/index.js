import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

global.React = React;
global.renderer = renderer;

export function createNavigationProp (params = {}) {
  return {
    state: {params: params},
    navigate: () => {}
  }
}