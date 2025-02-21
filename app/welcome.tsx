import { Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { welcomeStyles } from '@/style/welcome/welcome.style';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import Button from '@/components/ui/Button';
import { theme } from '@/style/theme';

const Welcome = () => {
  const welcomeImg = "../assets/images/welcome.png";
  
  return (
    <ScreenWrapper>
      <StatusBar style="dark"/>
      <View style={welcomeStyles.container}>
        
        <Image
          style={welcomeStyles.welcomeImage}
          resizeMode='contain'
          source={require(welcomeImg)}
        />
        
        <View style={{ gap: 20 }}>
                <Text style={welcomeStyles.title}>Wine Nights Social Club</Text>
                  <Text style={welcomeStyles.caption}>
                      Sip, Share, Stay Connected - where every glass poured brings friends closer,
                      every story told lingers like fine wine, and every moment is worth savoring
                  </Text>
           </View>
      </View>
      
      <View style={welcomeStyles.footer}>
        <Button
          
          text="Get Started"
          onPress={()=>{}}
        />
        <View style={welcomeStyles.bottomTextContainer}>
          <Text style={welcomeStyles.loginText}>
            Already have an account?
          </Text>
          <Pressable onPress={() => {}}>
            <Text style={[welcomeStyles.loginText,
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
    </ScreenWrapper>
  )
}

export default Welcome;

