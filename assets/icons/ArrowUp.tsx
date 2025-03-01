import {Svg, Path, SvgProps} from "react-native-svg"

const ArrowUp = (props: SvgProps) => {
  return (
  <Svg viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <Path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
  )
}

export default ArrowUp;