import { StyleSheet, Text, View } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';
const Login = () => {
  return (
    <ScreenWrapper>
      <BackButton />
      <View>
        <Text>Hello</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})