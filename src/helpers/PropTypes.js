import PropTypes from 'prop-types';

export function navigatorPropTypes (params) {
  return PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape(params)
    }).isRequired,
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export function categoryPropTypes () {
  return PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  });
}

export function songPropTypes () {
  return PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    lyrics: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired
  });
}