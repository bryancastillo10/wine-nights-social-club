import { Alert } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import { useAuth } from "@/context/AuthContext";
import { IUserData } from "@/context/auth.interface";

import { updateUserData } from "@/service/user.service";
import { getUserImgSource, uploadFile} from "@/service/image.service";

const initialUserData = {
        username: '',
        phoneNumber: '',
        image: null,
        bio: '',
        address: '',
}

const useUpdateUserProfile = () => {
    const { user, setUserData } = useAuth();
    const router = useRouter();

        if (!user?.id) {
            throw new Error("No User Id Found");
        }
    
    
    const [updateUser, setUpdateUser] = useState<Partial<IUserData>>(initialUserData);
    const [loading, setLoading] = useState<boolean>(false);

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
  const { username, phoneNumber, address, bio, image } = updateUser;
  // Input Validation
  if (!username || !phoneNumber || !address || !bio) {
    Alert.alert("Edit Not Allowed", "Make sure all the fields are filled");
    return;
  }
  
  let updatedImage = image;
  setLoading(true);
  // Upload Image
  if (typeof image === 'object' && image !== null && 'uri' in image) {
    const imageRes = await uploadFile({
      folderName: 'profilePic',
      fileUri: image.uri,
      isImage: true,
    });
    
    updatedImage = imageRes.success ? imageRes.data : null;
  }
  
    const payload = { username, phoneNumber, address, bio, image: updatedImage };
    
    // API Call
    try {
        const res = await updateUserData(user?.id, payload);
        if (res.success) {
        setUserData({ ...user, ...payload });
        Alert.alert("Profile Updated", "Your profile was updated successfully");
        router.back();
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
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.canceled && result.assets) {
        setUpdateUser((prev) => ({
        ...prev,
        image: result.assets[0],
        }));
    }
    };
    const imageSource = getUserImgSource(updateUser.image);
    
        return {
            updateUser,
            loading,
            imageSource,
            handleInputChange,
            handleSubmit,
            handlePickImage              
        }     
}

export default useUpdateUserProfile