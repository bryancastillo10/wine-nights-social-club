import { StyleSheet } from "react-native";
import { theme } from "@/style/theme";
import { wp, hp } from "@/utils/dimensions";

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100)
    },
    title: {
        textAlign: 'center',
        color: theme.colors.text,
        fontWeight: theme.fonts.extraBold,
        fontSize: hp(3.5),
        fontFamily: "Oswald"
    },
    caption: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,
    },
    footer: {
        gap: 30,
        width: '100%'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hp(6),
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.7)
    }
});