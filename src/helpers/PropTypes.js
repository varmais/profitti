import { PropTypes } from 'react';

export function navigatorPropTypes (params) {
  return PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape(params).isRequired
    }).isRequired,
    navigate: PropTypes.func.isRequired
  }).isRequired
}