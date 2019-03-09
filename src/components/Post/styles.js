import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  body: {
    padding: metrics.basePadding,
  },
  bodyText: {
    lineHeight: 20,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin,
    marginLeft: 20,
    marginRight: 20,
    marginTop: metrics.baseMargin,
    padding: 5,
  },
  header: {
    borderBottomColor: colors.light,
    borderBottomWidth: 0.9,
    padding: 10,
    paddingBottom: 15,
  },
  headerSubTitle: {
    color: colors.regular,
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: colors.secundary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
