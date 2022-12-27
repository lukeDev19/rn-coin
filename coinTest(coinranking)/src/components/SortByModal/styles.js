import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  sortByContainer: {
    backgroundColor: `${colors.primary}99`,
    flex: 1,
    justifyContent: 'center',
  },
  greenText: {
    color: colors.activeGreen,
    fontSize: 18,
  },
  greenText1: {
    color: colors.activeGreen,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sortByItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortByList: {
    flexGrow: 0,
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
  },
  sortBySubContainer: {
    backgroundColor: colors.black,
  },
  closeSortByIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
