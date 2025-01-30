import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowRight = (props: SvgProps) => (
  <Svg  viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M20.0001 18L20.0001 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M16.0001 11.9995L4.00012 11.9995" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12.0002 8C12.0002 8 16.0001 10.946 16.0001 12C16.0001 13.0541 12.0001 16 12.0001 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowRight;