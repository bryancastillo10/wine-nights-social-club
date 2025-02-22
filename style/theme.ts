type FontWeight = "500" | "600" | "700" | "800";

export const theme = {
    colors: {
  // primary: light brown
  primary: "#9b7874",
  // primaryDark: red
  primaryDark: "#471323",
  // dark: dark gray
  dark: "#3E3E3E",
  // snow: light gray
  snow: "#E1E1E1",
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