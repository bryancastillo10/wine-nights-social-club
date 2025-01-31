import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'
import { Router } from 'expo-router';
import { StyleSheet,Pressable } from 'react-native'

interface IBackButton {
  size?: number;
  router: Router;  
}

const BackButton = ({
  size = 28,
  router
}: IBackButton) => {
  return (
    <Pressable
      onPress={() => router.back()}
      style={styles.button}
    >
      <Icon
        name="arrowLeft"
        strokeWidth={2.5}
        size={size}
        color={theme.colors.text}
      />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 5,
    borderRadius: theme.radius.sm
  }
})