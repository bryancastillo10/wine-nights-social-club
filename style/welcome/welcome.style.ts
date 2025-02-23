import { StyleSheet } from "react-native";
import { theme } from "@/style/theme";
import { wp, hp } from "@/utils/dimensions";

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100)
    },
    title: {
        textAlign: 'center',
        color: theme.colors.text,
        fontWeight: theme.fontWeight.medium,
        fontSize: theme.fontSize.h1,
        letterSpacing:1.5,
        fontFamily: theme.fontFamily.secondary
    },
    footer: {
        gap: 30,
        width: '100%'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: theme.fontFamily.primary,
        paddingBottom: hp(6),
        gap: 6
    },
    linkText: {
        textAlign: 'center',
        color: theme.colors.primary,
        letterSpacing: 1
    }
});