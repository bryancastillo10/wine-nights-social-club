export const getUserImgSource = (imgPath: string | undefined) => {
    if (imgPath) {
        return { uri: imgPath}
    }
    return require("../assets/images/defaultuser.png");
};