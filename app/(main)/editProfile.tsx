import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert
} from 'react-native';
import { useEffect, useState } from 'react';

import { useAuth } from '@/context/AuthContext';

import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import Input from '@/components/Input';

import { getUserImgSource } from '@/service/image.service';
import { updateUserData } from '@/service/user.service';

import Icon from '@/assets/icons';
import { hp, wp } from '@/utils/common';
import { theme } from '@/constants/theme';
import { IUserData } from '@/context/auth.interface';
import CustomButton from '@/components/CustomButton';

const EditProfile = () => {
    const { user, setUserData } = useAuth();
    
    if (!user?.id) {
        throw new Error("No User Id Found");
    }

  const [updateUser, setUpdateUser] = useState<Partial<IUserData>>({
    username: '',
    phoneNumber: '',
    image: '',
    bio: '',
    address: '',
  });
    
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      setUpdateUser({
        username: user.username || '',
        phoneNumber: user.phoneNumber || '',
        image: user.image || '',
        address: user.address || '',
        bio: user.bio || '',
      });
    }
  }, [user]);

  const handleInputChange = (field: keyof IUserData, value: string) => {
    setUpdateUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
    
    const handleSubmit = async () => {
    const { username, phoneNumber, address, bio } = updateUser;

    // Input Validation
    if (!username || !phoneNumber || !address || !bio) {
        Alert.alert("Edit Not Allowed", "Make sure all the fields are filled");
        return;
    }
    
    // API Call
    setLoading(true);
    try {
        const res = await updateUserData(user?.id, updateUser);
        if (res.success) {
            setUserData({ ...user, ...updateUser });
        Alert.alert("Success", "Profile updated successfully");
        } else {
        Alert.alert("Update Failed", res.message || "An error occurred while updating your profile");
        }
    } catch (error) {
        console.error("Error updating user data: ", error);
        Alert.alert("Update Failed", "An unexpected error occurred");
    } finally {
        setLoading(false);
    }
    };


    const handlePickImage = async () => {
      
    };

  const imageSource = getUserImgSource(updateUser.image);

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
