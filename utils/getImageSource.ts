import { ImageSourcePropType } from "react-native";

export const getImageSource = (source: string) => {
    if (source.startsWith('http://') || source.startsWith('https://')) {
        return { uri: source };
    }
    
    const staticImages: { [key: string]: ImageSourcePropType } = {
        'preview.nature': require('../assets/preview/nature.jpg'),
        'preview.coffee': require('../assets/preview/coffee.jpg'),
        'preview.surfaceWater': require('../assets/preview/surface_water.jpg')
    }
    
    return staticImages[source];
};