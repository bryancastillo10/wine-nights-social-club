import { StyleSheet, ScrollView, ImageBackground } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';
import FeedHeader from '@/components/layout/FeedHeader';


interface MainPageProps {
    children: React.ReactNode;
    withHeader: boolean;
}

const MainPageContainer = ({children, withHeader}: MainPageProps) => {
    const feedBg = "../../assets/images/feed-bg.png";
    return (
    <ScreenWrapper>
        {withHeader && (<FeedHeader />)}
            <ImageBackground
                style={styles.mainContainer}
                source={require(feedBg)}
                resizeMethod="resize"
            >
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </ImageBackground>
    </ScreenWrapper>
  )
}

export default MainPageContainer

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        flex: 1,
    }
});