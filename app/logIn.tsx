import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import ScreenWrapper from '@/components/ScreenWrapper';
import BackButton from '@/components/BackButton';
import Input from '@/components/Input';

import Icon from '@/assets/icons';
import { theme } from '@/constants/theme';
import { wp, hp } from '@/utils/common';
import CustomButton from '@/components/CustomButton';

const LogIn = () => {
  const router = useRouter();
  
  const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSubmit = async () => {
    if (!emailRef || !passwordRef) {
      Alert.alert("Login", "Please fill all the required fields")
    }
    
    // setLoading(true);
    // API call here
  };
  
  return (
    <ScreenWrapper bg="#F5F5DC">
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />
        
        {/* Welcome */}
          <View>
            <Text style={styles.welcomeTitle}> Hello Amigo, </Text>
            <Text style={styles.welcomeTitle}> Welcome Back </Text>
          </View>

        {/* Form */}
          <View style={styles.form}>
            <Text style={styles.formText}>
              Log In Here to Continue
            </Text>
              <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                placeholder="Enter your email"
                onChangeText={(value:string) => emailRef.current = value}
              />
              
              <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                secureTextEntry
                placeholder="Enter your password"
                onChangeText={(value:string) => passwordRef.current = value}
              />
            <Text style={styles.forgotPassword}>
              Forgot Password?
            </Text>

            {/* Login Button */}
            <CustomButton
              title="Login"
              loading={loading}
              onPress={handleSubmit}
            />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>
            <Pressable>
              <Text 
                style={[styles.footerText, {
                  color: theme.colors.primary,
                  fontWeight: theme.fonts.semibold
                }]}>
                Sign Up Here
              </Text>
            </Pressable>
          </View>
        </View>
    </ScreenWrapper>
  )
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5) 
  },
  welcomeTitle: {
    fontSize: hp(5),
    fontFamily: theme.fontFamily.secondary,
    fontWeight: theme.fonts.bold,
    color: theme.colors.text
  },
  form: {
    gap: 25
  },
  formText: {
    fontSize: hp(1.75),
    color: theme.colors.text
  },
  forgotPassword: {
    textAlign: 'right',
    color: theme.colors.text,
    fontWeight: theme.fonts.bold
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})