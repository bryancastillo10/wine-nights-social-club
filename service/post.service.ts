import * as ImagePicker from 'expo-image-picker';

import { supabase } from '@/lib/supabase';
import { uploadFile } from '@/service/image.service';

interface IPostData {
    file?: ImagePicker.ImagePickerAsset | string | null;
    body: string;
    userId: string;
};

export const createOrUpdatePost = async (post: IPostData) => {
    try {
        if (post.file && typeof post.file == 'object') {
            const fileUri = post.file.uri;
            const isImage = post.file.type == 'image';
            const folderName = isImage ? "postImages" : "postVideos";
            
            const fileResult = await uploadFile({ folderName, fileUri, isImage });
            if (fileResult.success) post.file = fileResult.data;
            else {
                return fileResult;
            }
        }
        
        const { data, error } = await supabase
        .from('posts')
        .upsert(post)
        .select()
        .single()
        
        if (error) {
            return {
                success: false,
                message: error?.message || "Failed to add the post"
            }
        }
        return {
            success: true,
            data
        }        
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: error?.message || "Failed to add the post"
            }
        } else {
            throw new Error;
        }
    }
};