export const getFilePath = (folderName: string, isImage: boolean):string => {
    return `/${folderName}/${new Date().getTime()}/${isImage ? ".png" : ".mp4"}`;
};