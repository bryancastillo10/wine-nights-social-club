import { StyleSheet, Text, View } from 'react-native'
import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper';

const NewPost = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#F5F5DC">
      <Text>Add a Post Here</Text>
      <BackButton router={router} />
    </ScreenWrapper>
  )
}

export default NewPost

const styles = StyleSheet.create({})