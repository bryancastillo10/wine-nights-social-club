import {Svg, Circle, Path, SvgProps} from "react-native-svg";

const Music = (props:SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
        <Circle cx="6.5" cy="18.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <Circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <Path d="M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 10C15.8667 10 19.7778 7.66667 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default Music;
