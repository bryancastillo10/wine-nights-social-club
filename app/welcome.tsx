import { View, Text, Image, Pressable } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useRouter } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import Button from '@/components/ui/Button';
import { welcomeStyles } from '@/styles/welcome.style';

const Welcome = () => {
  const welcomeImg = "../assets/images/welcome.png";
  const router = useRouter();
  
  return (
    <ScreenWrapper bg="#F4F3F2">
          <StatusBar style="dark"/>
          <View style={welcomeStyles.container}>
            {/* Welcome Image */}
            <Image
              style={welcomeStyles.welcomeImage}
              resizeMode='contain'
              source={require(welcomeImg)}
            />
            {/* Title */}
            <View style={{gap: 20}}>
                <Text style={welcomeStyles.title}>Wine Nights Social Club</Text>
                  <Text style={welcomeStyles.caption}>
                      Sip, Share, Stay Connected - where every glass poured brings friends closer,
                      every story told lingers like fine wine, and every moment is worth savoring
                  </Text>
            </View>
            {/* Footer */}
            <View style={welcomeStyles.footer}>
                  <Button
                    title="Get Started"
                    buttonStyle={welcomeStyles.button}
                    onPress={() => {}}
                  />
                  <View style={welcomeStyles.bottomTextContainer}>
                      <Text style={welcomeStyles.loginText}>
                          Already have an account?
                      </Text>
                      <Pressable onPress={() => router.push('/logIn')}>
                          <Text style={welcomeStyles.loginText}>
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
