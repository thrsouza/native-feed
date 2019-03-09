import { Platform, StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
