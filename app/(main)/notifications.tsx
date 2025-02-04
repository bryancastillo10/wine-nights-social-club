import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton';


const Notifications = () => {
  const router = useRouter();
  
  return (
    <ScreenWrapper bg="#F5F5DC">
      <View>
        <Text>Notifications</Text>
        <BackButton router={router} />
      </View>
    </ScreenWrapper>
  )
}

export default Notifications

const styles = StyleSheet.create({})