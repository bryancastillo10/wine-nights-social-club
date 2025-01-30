import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const Plus = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M12 8V16M16 12H8" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={props.strokeWidth} />
  </Svg>
);

export default Plus;