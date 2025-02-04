import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'

const Profile = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#F5F5DC">
      <View>
        <Text>Profile</Text>
        <BackButton router={router} />
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({})