import {StyleSheet} from 'react-native';
import {colors, common} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    ...common.container,
  },
  whiteText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceUpChangeText: {
    color: colors.activeGreen,
    fontSize: 20,
  },
  priceUpChangeSmallText: {
    color: colors.activeGreen,
    fontSize: 15,
  },
  priceDownChangeText: {
    color: colors.red,
    fontSize: 20,
  },
  priceDownChangeSmallText: {
    color: colors.red,
    fontSize: 15,
  },
  chartContainer: {
    marginTop: 30,
  },
  chartLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartActivity: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  greenText: {
    color: colors.activeGreen,
    fontSize: 13,
  },
  whiteSmallText: {
    color: colors.white,
    fontSize: 13,
  },
  chartLabelItem: {},
  chartLabelItemBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 25,
    height: 30,
  },
  selectedChartLabelItemBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: colors.activeGreen,
    borderRadius: 25,
    height: 30,
  },
  subContainer: {
    marginTop: 20,
  },
  whiteBoldText: {
    marginLeft: 10,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemContainer1: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  coinStatisticsSubItem: {
    flexDirection: 'row',
  },
  greenBoldText: {
    fontWeight: 'bold',
    color: colors.activeGreen,
  },
  chartToolTip: {
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 18,
    padding: 4,
  },
});
