import { useState } from 'react';
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

interface UserSignUp {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  
  const [SignUpData, setSignUpData] = useState<UserSignUp>({
    username:"",
    email: "",
    password: ""
  })
  
  const [loading, setLoading] = useState<boolean>(false);
  
  const onChangeText = (field: keyof UserSignUp, val: string) => {
    setSignUpData((prev) => ({
        ...prev,
        [field] : val
    }));
  };
  
    const handleSubmit = async () => {
    if (!SignUpData.email || !SignUpData.password) {
      Alert.alert('SignUp', 'Please fill all the required fields');
      return;
    }

    setLoading(true);
    try {
      // API call logic here
      console.log('Submitting:', SignUpData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <ScreenWrapper bg="#F5F5DC">
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />
        
        {/* Welcome */}
          <View>
            <Text style={styles.welcomeTitle}> Wine Nights </Text>
            <Text style={styles.welcomeTitle}> Social Club </Text>
          </View>

        {/* Form */}
          <View style={styles.form}>
            <Text style={styles.formText}>
               Get Signed Up and Stay Connected!
            </Text>
              <Input
                icon={<Icon name="user" size={26} strokeWidth={1.6} />}
                placeholder="Enter your username"
                value={SignUpData.username}
                onChangeText={(value:string) => onChangeText('username',value)}
              />
              <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                placeholder="Enter your email"
                value={SignUpData.email}
                onChangeText={(value:string) => onChangeText('email',value)}
              />
              
              <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                secureTextEntry
                placeholder="Enter your password"
                value={SignUpData.password}
                onChangeText={(value:string) => onChangeText('password', value)}
              />
            <Text style={styles.forgotPassword}>
              Forgot Password?
            </Text>

            {/* SignUp Button */}
            <CustomButton
              title="SignUp"
              loading={loading}
              onPress={handleSubmit}
            />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>
            <Pressable>
              <Text 
                style={[styles.footerText, {
                  color: theme.colors.primary,
                  fontWeight: theme.fonts.semibold
                }]}>
                Log In Here
              </Text>
            </Pressable>
          </View>
        </View>
    </ScreenWrapper>
  )
}

export default SignUp;

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