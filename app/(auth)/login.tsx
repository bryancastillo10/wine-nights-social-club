import { Text, View } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';

import { authStyle } from '@/style/auth/authScreen.style';
import LoginImage from '@/assets/images/LoginImage';

const Login = () => {
  return (
    <ScreenWrapper>
      <BackButton />
      <View style={authStyle.container}>
        {/* Welcome Text */}
        <View>
          <Text style={authStyle.welcomeTitle}> Welcome Back </Text>
          <View style={{paddingVertical:10}}>
            <LoginImage/>
          </View>
          <Text style={authStyle.welcomeTitle}> Stay Connected! </Text>
        </View>
        
        {/* Form */}
        <View style={authStyle.form}>
          <Text style={authStyle.formText}>
            Fill Up the Form or access via Biometrics</Text>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login
