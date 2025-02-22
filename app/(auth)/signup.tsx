import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import { useRouter, Href } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import { authStyle } from '@/style/auth/authScreen.style';

import Icon from '@/assets/icons';
import { theme } from '@/style/theme';
import SignUpImage from '@/assets/images/SignUpImage';


const Signup = () => {
  const router = useRouter();
  
  return (
    <ScreenWrapper>
      <BackButton />
      <View style={authStyle.container}>
        {/* Welcome Text */}
        <View>
          <Text style={authStyle.welcomeTitle}> Cheers! </Text>
          <View style={{paddingVertical:10}}>
            <SignUpImage/>
          </View>
        </View>
        
        {/* Form */}
        <View style={authStyle.form}>
          <Text style={authStyle.formText}>
            Fill Up the Signup Form
            </Text>
                  
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your username"
            value=""
            onChangeText={()=>{}}
          /> 
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            value=""
            onChangeText={()=>{}}
          />
          
        <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter a password"
            value=""
            onChangeText={()=>{}}
          />
          
        <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Confirm password"
            value=""
            onChangeText={()=>{}}
        />
                  
        <Button
            onPress={() => { }}
            text="Sign Up"
          />
        </View> 
        {/* Footer */}
        <View style={authStyle.footer}>
            <Text style={authStyle.footerText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push("/login" as Href)}>
              <Text 
                style={[authStyle.footerText, {color: theme.colors.primary}]}>
                Log In
              </Text>
            </Pressable>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Signup;
