import {  Text, Button } from 'react-native'
import { Href, useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper';

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Get Started Here!</Text>
      <Button 
        title="Welcome" onPress={() => router.push('welcome' as Href)} />
    </ScreenWrapper>
  )
}

export default index