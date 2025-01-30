import { View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useRouter } from 'expo-router';

import ScreenWrapper from '@/components/ScreenWrapper';
import CustomButton from '@/components/CustomButton';
import { theme } from '@/constants/theme';
import { wp, hp } from '@/utils/common';

const Welcome = () => {
  const welcomeImg = "../assets/images/welcome.png";
  const router = useRouter();
  
  return (
    <ScreenWrapper bg="#f4f3f2">
          <StatusBar style="dark" />
          <View style={styles.container}>
            {/* Welcome Image */}
            <Image
              style={styles.welcomeImage}
              resizeMode='contain'
              source={require(welcomeImg)}
            />
            {/* Title */}
            <View style={{gap: 20}}>
                <Text style={styles.title}>Wine Nights Social Club</Text>
                  <Text style={styles.caption}>
                      Sip, Share, Stay Connected - where every glass poured brings friends closer,
                      every story told lingers like fine wine, and every moment is worth savoring
                  </Text>
            </View>
            {/* Footer */}
            <View style={styles.footer}>
                  <CustomButton
                    title="Get Started"
                    buttonStyle={{marginHorizontal: wp(3)}}
                    onPress={() => router.push('/signUp')}
                  />
                  <View style={styles.bottomTextContainer}>
                      <Text style={styles.loginText}>
                          Already have an account?
                      </Text>
                      <Pressable onPress={() => router.push('/logIn')}>
                          <Text style={[styles.loginText,
                              {
                                color: theme.colors.primaryDark,
                                fontWeight: theme.fonts.semibold
                              }
                          ]}>
                            Login
                          </Text>
                      </Pressable>
                  </View>
            </View>
          </View>
    </ScreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100)
    },
    title: {
      textAlign:'center',
      color: theme.colors.text,
      fontWeight: theme.fonts.extraBold,
      fontSize: hp(3.5),
      fontFamily:"Oswald"
    },
    caption: {
      textAlign: 'center',
      paddingHorizontal: wp(10),
      fontSize: hp(1.7),
      color: theme.colors.text,
    },
    footer: {
        gap: 30,
        width:'100%'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        gap: 5,        
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.7)
    }
})