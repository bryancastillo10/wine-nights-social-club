import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import ScreenWrapper from '@/components/ScreenWrapper';
import BackButton from '@/components/BackButton';
import Input from '@/components/Input';

import Icon from '@/assets/icons';
import { theme } from '@/constants/theme';
import { wp, hp } from '@/utils/common';
import CustomButton from '@/components/CustomButton';
import useSignUp from '@/hooks/auth/useSignUp';


const SignUp = () => {
  const router = useRouter();
  
  const {
    signUpData,
    loading,
    onChangeText,
    handleSubmit
  } = useSignUp();

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
                value={signUpData.username}
                onChangeText={(value:string) => onChangeText('username',value)}
              />
              <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                placeholder="Enter your email"
                value={signUpData.email}
                onChangeText={(value:string) => onChangeText('email',value)}
              />
              
              <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                secureTextEntry
                placeholder="Enter your password"
                value={signUpData.password}
                onChangeText={(value:string) => onChangeText('password', value)}
              />
            {/* SignUp Button */}
            <CustomButton
              title="Sign Up"
              loading={loading}
              onPress={handleSubmit}
            />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push("/logIn")}>
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