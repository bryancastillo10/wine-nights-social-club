import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';


import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import Input from '@/components/Input';

import Icon from '@/assets/icons';
import { hp, wp } from '@/utils/common';
import { theme } from '@/constants/theme';

import CustomButton from '@/components/CustomButton';
import useUpdateUserProfile from '@/hooks/user/useUpdateUserProfile';

const EditProfile = () => {
    const {
        updateUser,
        loading,
        imageSource,
        handleInputChange,
        handleSubmit,
        handlePickImage
    } = useUpdateUserProfile();
    
  return (
    <ScreenWrapper bg="#F5F5DC">
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header 
                title="Edit Your Profile" 
                showBackButton
           />
          {/* Form */}
          <View style={styles.form}>
            <View style={styles.avatarContainer}>
              <Image source={imageSource} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={handlePickImage}>
                <Icon name="camera" size={20} strokeWidth={2.5} />
              </Pressable>
            </View>
            <Text style={styles.textLabel}>Fill up your profile details</Text>
            <Input
              icon={<Icon name="user" />}
              placeholder="Enter your name"
              value={updateUser.username || ''}
              onChangeText={(value) => handleInputChange('username', value)}
            />
            <Input
              icon={<Icon name="call" />}
              placeholder="Enter your phone number"
              value={updateUser.phoneNumber || ''}
              onChangeText={(value) => handleInputChange('phoneNumber', value)}
            />
            <Input
              icon={<Icon name="location" />}
              placeholder="Enter your address"
              value={updateUser.address || ''}
              onChangeText={(value) => handleInputChange('address', value)}
            />
            <Input
              icon={<Icon name="drink" />}
              placeholder="Enter your bio"
              multiline
              containerStyle={styles.bio}
              value={updateUser.bio || ''}
              onChangeText={(value) => handleInputChange('bio', value)}
            />

            <CustomButton 
                title="Save Changes" 
                loading={loading} 
                onPress={handleSubmit} 
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl * 1.8,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#F4F3F2',
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    elevation: 7,
  },
  form: {
    gap: 18,
    marginTop: 20,
  },
  textLabel: {
    fontSize: hp(1.5),
    color: theme.colors.text,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    padding: 17,
    paddingHorizontal: 20,
    gap: 15,
  },
  bio: {
    flexDirection: 'row',
    height: hp(15),
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
});
