import {StyleSheet} from 'react-native';
import {colors, common} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    ...common.container,
  },
  mainContainer: {
    flex: 1,
    marginTop: 5,
  },
  separatorItem: {
    height: 1,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
