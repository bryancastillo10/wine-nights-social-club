import { theme } from '@/style/theme';
import { View, Text, StyleSheet } from 'react-native';

interface DividerProps {
    text?: string;
}

const Divider = ({text="or"}: DividerProps) => (
  <View style={styles.container}>
    <View style={styles.line} />
        <Text style={styles.dividerText}>{text}</Text>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.dark ,
  },
  dividerText: {
    marginHorizontal: 10,
    color: theme.colors.text,
    fontWeight: theme.fontWeight.medium,
    fontSize: 18,
  },
});

export default Divider;
