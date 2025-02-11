import { useRef, useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

import * as ImagePicker from 'expo-image-picker';
import { RichEditor } from "react-native-pell-rich-editor";

import { useAuth } from "@/context/AuthContext";
import { getSupabaseFileUrl } from "@/service/image.service";
import { createOrUpdatePost } from "@/service/post.service";

export type MediaType = "image" | "video" | null;

const useCreatePost = () => {
  const { user } = useAuth();
  const router = useRouter();
  
  const bodyRef = useRef<string>("");
  const editorRef = useRef<null | RichEditor>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const onChangeBodyText = (body: string) => {
        bodyRef.current = body;
   };
    
  const handleMediaPick = async (mediaType: MediaType) => {
    const mediaConfig: ImagePicker.ImagePickerOptions = {
      mediaTypes:
        mediaType === "video"
          ? ["videos"]
          : ["images"],
      aspect: [4, 3],
      quality: 1,
    };

    const result = await ImagePicker.launchImageLibraryAsync(mediaConfig);

    if (!result.canceled) {
      setFile(result.assets[0]); 
    }
  };
    
  const isLocalFile = (file: ImagePicker.ImagePickerAsset | null):boolean | null => {
    if (!file) return null;
    if (typeof file == 'object') return true;
    return false;
  };

  const getFileType = (file: ImagePicker.ImagePickerAsset | null) => {
      if (!file) return null;
      if (isLocalFile(file)) {
        return file.type
      }
       
  };

  const getFileUri = (files: ImagePicker.ImagePickerAsset | null): string | null => {
    if (!files) return null;   
    if (files.uri.startsWith("file://")) {
        return files.uri;
    }
          
    const remoteFile = getSupabaseFileUrl(file as never);
      return remoteFile?.uri ?? null;
  };

  const handleRemoveMedia = () => {
            setFile(null);
  };
  
  const clearPayload = () => {
    setFile(null);
    bodyRef.current = '';
    editorRef.current?.setContentHTML('');
  };
    
  const handleSubmit = async () => {
      if (!bodyRef.current && !file) {
        Alert.alert("Post Warning", "Please add a media or text input to post");
        return;
      }
          
      setLoading(true);
      const payload = {
        file,
        body: bodyRef.current,
        userId: user?.id ?? ""
      }
          
      // Create Post API 
      const res = await createOrUpdatePost(payload);
      setLoading(false);
    if (res.success) {
      clearPayload();
      router.back();
    }
    else { Alert.alert("Error Posting", res.data) };
    };

    return {
        loading,
        file,      
        bodyRef,
        editorRef,
        onChangeBodyText,
        handleMediaPick,
        handleRemoveMedia,
        handleSubmit,
        getFileType,
        getFileUri
        }
}

export default useCreatePost;
