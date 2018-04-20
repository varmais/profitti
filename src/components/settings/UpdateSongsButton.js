import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import config from '../../config';
import { fetchSongs } from '../../redux/songs';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: config.colors.white,
    borderWidth: 0,
    justifyContent: 'center'
  },
  text: {
    color: config.colors.blackLight,
    fontSize: 18
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 27 / PixelRatio.get(),
    width: 70
  }
});

export class UpdateSongsButton extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    fetchSongs: PropTypes.func.isRequired
  };

  render () {
    const { loading, fetchSongs } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Päivitä laulut</Text>
        <View style={styles.button}>
          <Button
            disabled={loading}
            onPress={fetchSongs}
            title="Päivitä"
            color={config.colors.green}
            accessibilityLabel="Päivitä laulut"
          />
        </View>
        <Spinner visible={loading} />
      </View>
    );
  }
}

export default connect((state) => ({
  loading: state.songs.loading
}), {
  fetchSongs
})(UpdateSongsButton);