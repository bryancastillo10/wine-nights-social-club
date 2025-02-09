import { useRef, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { RichEditor } from "react-native-pell-rich-editor";
import { getSupabaseFileUrl } from "@/service/image.service";

export type MediaType = "image" | "video" | null;

const useCreatePost = () => {
  const bodyRef = useRef<string>("");
  const editorRef = useRef<null | RichEditor>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset[] | null>(null);

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
      setFile(result.assets); 
    }
    };
    
    const isLocalFile = (files: ImagePicker.ImagePickerAsset[] | null): boolean => {
        return (
            files !== null &&
            files.length > 0 &&
            files[0].uri.startsWith("file://")
        );
    };


    const getFileType = (file: ImagePicker.ImagePickerAsset[] | null): MediaType => {
        if (!file || file.length === 0) return null;
        return file[0].type as MediaType;
        };

        const getFileUri = (files: ImagePicker.ImagePickerAsset[] | null): string | null => {
        if (!files || files.length === 0) return null;

        const asset = files[0];
        if (asset.uri.startsWith("file://")) {
        return asset.uri;
        }
        const remoteFile = getSupabaseFileUrl(asset as never);
            return remoteFile?.uri ?? null;
        };

        const handleRemoveMedia = () => {
            setFile(null);
        };
    
        const handleSubmit = async () => {
        
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
