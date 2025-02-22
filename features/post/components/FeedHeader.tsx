import { StyleSheet, Text, View, Image } from 'react-native'

import { theme } from '@/style/theme'
import { hp } from '@/utils/dimensions'
import Icon from '@/assets/icons'


const FeedHeader = () => {

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
            <Text>Icons Here</Text>    
        </View>
    </View>
  )
}

export default FeedHeader

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 10
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
        margin: 8
    }
})