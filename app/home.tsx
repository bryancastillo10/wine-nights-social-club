import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import ScreenWrapper from '@/components/ScreenWrapper'
import CustomButton from '@/components/CustomButton'
import Icon from '@/assets/icons'

import useLogout from '@/hooks/useLogout'
import { wp, hp } from '@/utils/common'
import { theme } from '@/constants/theme'
import Avatar from '@/components/Avatar'

import { useAuth } from '@/context/AuthContext'

const Home = () => {
  const { user } = useAuth();
  const { handleLogout } = useLogout();
  const router = useRouter();
  
  return (
    <ScreenWrapper bg="#F5F5DC">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Wine Nights</Text>
          <View style={styles.icons}>
          <Pressable onPress={() => router.push("/notifications")}>
              <Icon name="bell" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
          </Pressable>
          <Pressable onPress={() => router.push("/newPost")}>
              <Icon name="share" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
          </Pressable>
          <Pressable onPress={() => router.push("/profile")}>
              <Avatar
                source={user?.image}
              />
          </Pressable>
        </View>
        </View>
      </View>
      <View style={{margin:24, width:wp(30)}}>
        <CustomButton
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: wp(4)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4)
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
    borderWidth: 3
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4)
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text
  },
  pill: {
    position: 'absolute',
    right: -10,
    top: -4,
    height: hp(2.2),
    width: hp(2.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.roseLight
  },
  pillText: {
    color: '#f4f3f2',
    fontSize: hp(1.2),
    fontWeight: theme.fonts.bold
  }
})