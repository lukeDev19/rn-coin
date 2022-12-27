import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchSubContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    borderColor: colors.green,
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    marginRight: 10,
    color: colors.white,
  },
  sortBtn: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  grayText: {
    color: colors.gray,
    fontSize: 13,
  },
});
