import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowLeft = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M4 6L4 18" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" />
    <Path d="M8.00012 12.0005L20.0001 12.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 8C12 8 8.00001 10.946 8 12C7.99999 13.0541 12 16 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowLeft;