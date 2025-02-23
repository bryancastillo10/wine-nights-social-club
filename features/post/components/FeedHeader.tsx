import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useRouter, Href } from 'expo-router';

import Avatar from '@/components/ui/Avatar'
import { navmenu } from '@/features/post/constants/navmenu';

import { theme } from '@/style/theme'
import { hp } from '@/utils/dimensions'
import Icon from '@/assets/icons'

const FeedHeader = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.headerTitle}>
            <View style={styles.logo}>
                <Image
                    style={styles.icon}
                    resizeMode='contain'
                    source={require("../../../assets/images/icon.png")}
                />
                <Text style={styles.headerText}>Wine Nights Social Club</Text>
            </View>  
            <View style={{marginRight: 8}}>
                <Icon
                    name="plus"
                    strokeWidth={2}
                    color={theme.colors.text}
                  />
            </View>
        </View>
        <View style={styles.navContainer}>
            <Avatar/>
              {navmenu.map((nav) => (
                <Pressable key={nav.id} onPress={() => router.push(nav.link as Href)}>
                    <Icon
                        name={nav.icon}
                        size={hp(3.2)}
                        strokeWidth={1.5}
                        color={theme.colors.text}
                    />
          </Pressable>
        ))}
        </View>
    </View>
  )
}

export default FeedHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#F5F5DC50",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.gray
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        gap: 4
    },
    logo: {
        flexDirection:'row',
        alignItems: 'center',
        gap: 8
    },
    headerText: {
        fontSize: hp(2.5),
        fontWeight: theme.fonts.medium,
        fontFamily: theme.fontFamily.secondary
    },
    icon: {
        width: 32,
        height: 32,
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        margin: 8,
        marginTop: 14
    }
})