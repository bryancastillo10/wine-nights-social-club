import { View, Pressable, TouchableOpacity } from 'react-native';
import { useRouter, Href } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import Divider from '@/components/common/Divider';
import BackButton from '@/components/ui/BackButton';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { TextHeader, Paragraph } from '@/components/typography';

import { authStyle } from '@/style/auth/authScreen.style';
import LoginImage from '@/assets/images/LoginImage';
import Icon from '@/assets/icons';
import { theme } from '@/style/theme';


const Login = () => {
  const router = useRouter();
  
  return (
    <ScreenWrapper>
      <BackButton />
      <View style={authStyle.container}>
        {/* Welcome Text */}
        <View>
          <TextHeader
            variant="h1"
            style={{ textAlign: "center", letterSpacing: 1.5 }}>
              Welcome Back
          </TextHeader>
          <View style={{paddingVertical:10}}>
            <LoginImage/>
          </View>
                    <TextHeader
            variant="h1"
            style={{ textAlign: "center", letterSpacing: 1.5 }}>
              Stay Connected!
          </TextHeader>
        </View>
        
        {/* Form */}
        <View style={authStyle.form}>
          <Paragraph>
            Fill Up the Login Form
          </Paragraph>
          
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Registered email"
            value=""
            onChangeText={()=>{}}
          />
          
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Password"
            value=""
            onChangeText={()=>{}}
          />
          
          <Button
            onPress={() => { }}
            text="Log In"
          />
           {/* Biometriics */}
          <Divider/>
          <View style={authStyle.biometrics}>
            <TouchableOpacity>
              <Icon name="fingerprint" strokeWidth={2} size={36} />
            </TouchableOpacity>
          </View>
        </View>
         
        {/* Footer */}
        <View style={authStyle.footer}>
            <Paragraph>
              Don't have an account?
            </Paragraph>
            <Pressable onPress={() => router.push("/signup" as Href)}>
              <Paragraph 
                style={{color: theme.colors.primary}}>
                Sign Up Here
              </Paragraph>
            </Pressable>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login
