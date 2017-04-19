require('react-native-mock/mock.js');

const m = require('module');
const originalLoader = m._load;

m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }

  return originalLoader(request, parent, isMain);
};

require("babel-register")({
  ignore: /node_modules\/(?!react-native-vector-icons|react-native-loading-spinner-overlay|react-navigation)/
});

require('./src/testutils');