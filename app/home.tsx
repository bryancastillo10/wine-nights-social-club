import { StyleSheet, Text, View } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import CustomButton from '@/components/CustomButton'

import useLogout from '@/hooks/useLogout'
import { wp } from '@/utils/common'

const Home = () => {
  const { handleLogout } = useLogout();
  
  return (
    <ScreenWrapper bg="#F5F5DC">
      <Text>Home Page is Here</Text>
      <View style={{marginTop:24, width:wp(30)}}>
        <CustomButton
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})