import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import { useRouter, Href } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import Divider from '@/components/common/Divider';
import BackButton from '@/components/ui/BackButton';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

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
          <Text style={authStyle.welcomeTitle}> Welcome Back </Text>
          <View style={{paddingVertical:10}}>
            <LoginImage/>
          </View>
          <Text style={authStyle.welcomeTitle}> Stay Connected! </Text>
        </View>
        
        {/* Form */}
        <View style={authStyle.form}>
          <Text style={authStyle.formText}>
            Fill Up the Login Form
          </Text>
          
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
            <Text style={authStyle.footerText}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => router.push("/signup" as Href)}>
              <Text 
                style={[authStyle.footerText, {color: theme.colors.primary}]}>
                Sign Up Here
              </Text>
            </Pressable>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login
