import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";
import { getFilePath } from "@/utils/getFilePath";

import { supabase } from "@/lib/supabase";
import { EXPO_PUBLIC_SUPABASE_URL } from "react-native-dotenv";
interface IUploadFile {
    folderName: string;
    fileUri: string;
    isImage: boolean;
};

export const getUserImgSource = (imgPath: string | null | undefined) => {
  if (imgPath && typeof imgPath == 'string') {
    return getSupabaseFileUrl(imgPath);
  }
  return require('../assets/images/defaultuser.png');
};

export const getSupabaseFileUrl = (filePath: string | null) => {
    const bucket = "uploads";
    if (filePath) {
        return { uri: `${EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${filePath}`}
    }
    return null;
};

export const uploadFile = async (props: IUploadFile) => {
    const { folderName, fileUri, isImage = true } = props;
    try {
        // Image data pre-processing string to base64 to array buffer
        const fileName = getFilePath(folderName, isImage);
        const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64
        });
        const imageData = decode(fileBase64);
        
        // API Call
        const { data, error } = await supabase
            .storage
            .from('uploads')
            .upload(fileName, imageData, {
                contentType: isImage ? "image/*" : "video/*",
                cacheControl: '3600',
                upsert: false
            });
        
        if (error) {
            return {
                success: false,
                message: error?.message || "Failed to upload the file"
            }
        }
        return {
            success: true,
            data: data.path
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: error?.message || "Failed to upload the file"
            }
        } else {
            throw new Error;
        }
    }
};