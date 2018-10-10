import {Dimensions} from 'react-native';
const screen = Dimensions.get('window');

module.exports = {
  LATITUDE: 37.78825,
  LONGITUDE : -122.4324,
  LATITUDE_DELTA :0.033,//100
  LONGITUDE_DELTA : 0.33 * (screen.width / screen.height),
  KEYS_TO_FILTERS : ['name.last', 'email'],
  nextUserId :0
}
