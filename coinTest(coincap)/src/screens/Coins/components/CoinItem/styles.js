import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes';

export const styles = StyleSheet.create({
  coinItemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  coinItemInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteText: {
    color: colors.white,
    fontSize: 14,
  },
  coinItemNameText: {
    color: colors.gray,
    fontSize: 12,
  },
  priceUpChangeText: {
    color: colors.activeGreen,
    fontSize: 12,
  },
  priceDownChangeText: {
    color: colors.red,
    fontSize: 12,
  },
  subInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  coinIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
