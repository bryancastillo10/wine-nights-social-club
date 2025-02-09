import { StyleSheet, Text, Alert, TouchableOpacity, View, Pressable } from 'react-native'
import { Router, useRouter } from 'expo-router'

import { useAuth } from '@/context/AuthContext'
import { IUserData } from '@/context/auth.interface'
import useLogout from '@/hooks/useLogout'

import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'

import { theme } from '@/constants/theme'
import { wp, hp} from '@/utils/common'
import Icon from '@/assets/icons'
import Avatar from '@/components/Avatar'

interface IUserHeader {
  user: IUserData | null;
  router: Router
}


const Profile = () => {
  const { user } = useAuth();
  const router = useRouter();
  
  return (
    <ScreenWrapper bg="#F5F5DC">
      <View>
        <UserHeader
          user={user}
          router={router}
        />
      </View>
    </ScreenWrapper>
  )
}

const UserHeader = ({ user, router }: IUserHeader) => {
  const { handleLogout } = useLogout();
  
  const handleConfirmLogout = () => {
    Alert.alert("Logout Confirmation", "Are you sure you want to logout?", [
      {
        text: 'Cancel',
        onPress: () => console.log('clicked cancel'),
        style:'cancel'
      },
      {
        text: 'Logout',
        onPress: () => handleLogout(),
        style:'destructive'
      }
    ]) 
  };

  return (
    <View style={styles.userHeader}>
      <View>
        <Header
          showBackButton
          title="Profile"
          mb={50}
        />
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleConfirmLogout}
        >
          <Icon name="logout" color={theme.colors.rose} />
          </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ gap: 15 }}>
          {/* Profile Picture */}
          <View style={styles.avatarContainer}>
            <Avatar
              source={user?.image!}
              size={hp(12)}
              rounded={theme.radius.xxl*1.6}
            />
            <Pressable
              style={styles.editIcon}
              onPress={() => router.push("/editProfile")}
            >
              <Icon name="edit" strokeWidth={2.5} size={20} />
            </Pressable>
          </View>
          
          {/* Username And Address */}
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{user?.username || "No Name"}</Text>
            <Text style={styles.infoText}>{user?.address || "Address Not Provided"}</Text>
          </View>
          
          {/* Email, Phone, & Bio */}
          <View style={{marginTop:20, gap: 10}}>
            <View style={styles.info}>
              <Icon name="mail" size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>{user?.email || "Email Not Provided"}</Text>
            </View>
            
            <View style={styles.info}>
              <Icon name="call" size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>{user?.phoneNumber || "Phone Number Not Provided"}</Text>
            </View>
            
            <View style={styles.info}>
              <Icon name="drink" size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>{user?.bio || "Bio Not Provided"}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
};

export default Profile

const styles = StyleSheet.create({
  container: {
      flexDirection:'column'
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20
  },
  headerShape: {
    width: wp(100),
    height: hp(20)
  },
  userHeader: {
    paddingHorizontal: wp(4)
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf:'center'
  },
  userInfoContainer: {
    alignItems: 'center',
    gap: 4
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: '#F4F3F2',
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7
  },
  userName: {
    fontSize: hp(3),
    fontWeight: '500',
    color: theme.colors.textDark
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal:40,
    alignItems: 'center',
    gap: 14,
    marginVertical:4,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: 500,
    color: theme.colors.textLight
  },
  logoutBtn: {
    position: 'absolute',
    right: 0,
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor:'#FEE2E2'
  },
  listStyle: {
    paddingHorizontal: wp(4),
    paddingBottom: 30
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text
  }
})