import { ImageSourcePropType } from "react-native";

export const getImageSource = (source: string) => {
    if (source.startsWith('http://') || source.startsWith('https://')) {
        return { uri: source };
    }
    
    const staticImages: { [key: string]: ImageSourcePropType } = {
        'preview.defaultprofpic': require('../assets/images/defaultuser.png'),
        'preview.nature': require('../assets/preview/nature.jpg'),
        'preview.coffee': require('../assets/preview/coffee.jpg'),
        'preview.surfaceWater': require('../assets/preview/surface_water.jpg'),
        'preview.male': require('../assets/preview/male.png'),
        'preview.female':require('../assets/preview/female.png')
    }
    
    return staticImages[source];
};