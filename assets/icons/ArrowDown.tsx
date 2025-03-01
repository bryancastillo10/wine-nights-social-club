import { Svg, Path, SvgProps} from "react-native-svg"

const ArrowDown = (props: SvgProps) => {
  return (
  <Svg viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <Path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
  )
}

export default ArrowDown
