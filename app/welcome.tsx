import { View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, Href } from 'expo-router';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/typography/Paragraph';

import { welcomeStyles } from '@/style/welcome/welcome.style';
import { wp } from '@/utils/dimensions';
import TextHeader from '@/components/typography/TextHeader';

const Welcome = () => {
  const welcomeImg = "../assets/images/welcome.png";
  
  const router = useRouter(); 
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
                <TextHeader variant="h2">Wine Nights Social Club</TextHeader>
                <Paragraph style={{textAlign:'center', paddingHorizontal: wp(6)}}>
                    Sip, Share, Stay Connected - where every glass poured brings friends closer,
                    every story told lingers like fine wine, and every moment is worth savoring
                </Paragraph>
           </View>
        </View>
      
      <View style={welcomeStyles.footer}>
        <Button
          text="Get Started"
          onPress={()=>router.push("/signup" as Href)}
        />
        <View style={welcomeStyles.bottomTextContainer}>
          <Paragraph style={{textAlign:'center'}}>
            Already have an account?
          </Paragraph>
          <Pressable onPress={() => router.push("/login" as Href)}>
            <Paragraph style={welcomeStyles.linkText}>
              Login
            </Paragraph>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome;

