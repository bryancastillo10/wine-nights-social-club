import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Fingerprint = (props: SvgProps) => {
    return (
        <Svg  viewBox="0 0 24 24" width="24" height="24" color="#1D1D1D" fill="none" {...props}>
            <Path d="M7.42857 3.36201C11.3996 0.664089 17.136 2.12432 19.2301 6.41803M10.8571 21.9236C15.5839 22.5822 20 18.8952 20 14.2103V10.3333M7.42857 20.6058C5.35602 19.1977 4 16.8583 4 14.2103V9.75757C4 8.57285 4.27144 7.44988 4.75704 6.44444" stroke="currentColor" stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M16 13.8C16 16.1196 14.2091 18 12 18C9.79086 18 8 16.1196 8 13.8V10.2C8 9.55584 8.13811 8.94555 8.38493 8.4M12 6C14.2091 6 16 7.8804 16 10.2" stroke="currentColor" stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12 10.5L12 13.5" stroke="currentColor" stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
        )
    }

export default Fingerprint;
