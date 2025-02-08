import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";
import { getFilePath } from "@/utils/getFilePath";
import { supabase } from "@/lib/supabase";
interface IUploadFile {
    folderName: string;
    fileUri: string;
    isImage: boolean;
};

export const getUserImgSource = (imgPath: string | undefined) => {
    if (imgPath) {
        return { uri: imgPath}
    }
    return require("../assets/images/defaultuser.png");
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
        console.log('data', data.path);
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