type FontWeight = "500" | "600" | "700" | "800";

export const theme = {
    colors: {
        primary: "#00C26F",
        primaryDark: "#00AC62",
        dark: "#3E3E3e",
        darkLight: "#E1E1E1",
        gray: "#E3E3E3",
        
        text: "#494949",
        textLight: "#7C7C7C",
        textDark: "#1D1D1D",
        
        rose: "#EF4444",
        roseLight:"#F87171"
    },
    fonts: {
        medium: "500" as FontWeight,
        semibold: "600" as FontWeight,
        bold: "700" as FontWeight,
        extraBold: "800" as FontWeight
    },
    fontFamily: {
        primary: "Poppins",
        secondary:"Oswald"
    },
    radius: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
        xxl: 22
    }
}