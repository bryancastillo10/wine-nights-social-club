import {
    ActivityIndicator,
    ColorValue,
    StyleSheet,
    View
} from 'react-native';

import { theme } from '@/style/theme';

interface LoadingProps {
    size?: number | "small" | "large";
    color?: ColorValue;
}

const Loading = ({
    size = "large",
    color = theme.colors.primary
}: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:
        {
            justifyContent: 'center', 
            alignItems: 'center'
        }
    });