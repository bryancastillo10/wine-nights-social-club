type FontWeight = "500" | "600" | "700" | "800";

export const theme = {
    colors: {
  // primary: vibrant green
  primary: "#00C26F",
  // primaryDark: darker green
  primaryDark: "#00AC62",
  // dark: dark gray
  dark: "#3E3E3E",
  // darkLight: light gray
  darkLight: "#E1E1E1",
  // gray: neutral gray
  gray: "#E3E3E3",
  
  // text: standard gray for text
  text: "#494949",
  // textLight: lighter text gray
  textLight: "#7C7C7C",
  // textDark: very dark text
  textDark: "#1D1D1D",
  
  // rose: bright red
  rose: "#EF4444",
  // roseLight: lighter red
  roseLight: "#F87171"
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