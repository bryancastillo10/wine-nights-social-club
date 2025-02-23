import { View, Pressable } from 'react-native';
import { useRouter, Href } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Paragraph, TextHeader } from '@/components/typography';

import { authStyle } from '@/style/auth/authScreen.style';

import Icon from '@/assets/icons';
import { theme } from '@/style/theme';
import SignUpImage from '@/assets/images/SignUpImage';

const Signup = () => {
  const router = useRouter();
  
  const handleSubmit = () => {
    router.push("/home" as Href);
  };
  
  return (
    <ScreenWrapper>
      <BackButton />
      <View style={authStyle.container}>
        {/* Welcome Text */}
        <View>
           <TextHeader
            variant="h1"
            style={{ textAlign: "center", letterSpacing: 1.5 }}>
              Cheers!
          </TextHeader>
          <View style={{paddingVertical:10}}>
            <SignUpImage/>
          </View>
        </View>
        
        {/* Form */}
        <View style={authStyle.form}>
          <Paragraph> Fill Up the Signup Form </Paragraph>                  
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
            onPress={handleSubmit}
            text="Sign Up"
          />
        </View> 
        {/* Footer */}
        <View style={authStyle.footer}>
            <Paragraph>
              Already have an account?
            </Paragraph>
            <Pressable onPress={() => router.push("/login" as Href)}>
              <Paragraph 
                style={{color: theme.colors.primary}}>
                Log In
              </Paragraph>
            </Pressable>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Signup;
