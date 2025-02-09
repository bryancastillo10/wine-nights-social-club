import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native'
import { Video, ResizeMode } from "expo-av";

import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import RichTextEditor from '@/components/RichTextEditor';

import { useAuth } from '@/context/AuthContext';
import useCreatePost from '@/hooks/posts/useCreatePost';

import { wp, hp } from '@/utils/common';
import { theme } from '@/constants/theme';
import Icon from '@/assets/icons';
import CustomButton from '@/components/CustomButton';


const NewPost = () => {
  const { user } = useAuth();
  
  const {
    file,
    loading,
    editorRef,
    onChangeBodyText,
    handleMediaPick,
    handleRemoveMedia,
    handleSubmit,
    getFileType,
    getFileUri
  } = useCreatePost();
  

  return (
    <ScreenWrapper bg="#F5F5DC">
      <View style={styles.container}>
        <Header
          title="Create A Post"
          showBackButton
          />
        <ScrollView contentContainerStyle={{gap:20}}>
          {/* Avatar */}
          <View
            style={styles.header}
          >
            <Avatar
              source={user?.image || undefined}
              size={hp(6.5)}
              rounded={theme.radius.xl}
            />
            <View style={{gap: 2}}>
              <Text style={styles.username}>{user?.username}</Text>
              <Text style={styles.publicText}>Public</Text>
            </View>
          </View>
          <View style={styles.textEditor}>
            <RichTextEditor
              editorRef={editorRef}
              onChangeBodyText={onChangeBodyText}
            />
          </View>
           {file && file.length > 0 && (
           <View style={styles.file}>
              {getFileType(file) === "video" ? (
                <Video
                  source={{uri: getFileUri(file) ?? ""}}
                  style={{ flex: 1 }}
                  resizeMode={"cover" as ResizeMode}
                  useNativeControls
                />
              ) : getFileUri(file) ? (
                <Image
                  source={{ uri: getFileUri(file) ?? undefined }}
                  style={{ flex: 1 }}
                  resizeMode="cover"
                />
              ) : (
                  <Text style={[styles.publicText, { textAlign: 'center' }]}>
                    Cannot Read the File
                  </Text> 
              )}
              <Pressable
                style={styles.closeIcon}
                onPress={handleRemoveMedia}
              >
                <Icon
                  name="delete"
                  size={25}
                  strokeWidth={2}
                  color={theme.colors.darkLight}
                />
              </Pressable>
            </View>
          )}
          <View style={styles.media}>
            <Text style={styles.addImageText}>Attach Image or Video</Text>
            <View style={styles.mediaIcon}>
              <TouchableOpacity onPress={()=> handleMediaPick("image")}>
                <Icon
                  name="image"
                  size={30}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleMediaPick("video")}>
                <Icon
                  name="video"
                  size={33}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <CustomButton
          title="Post"
          loading={loading}
          hasShadow={false}
          buttonStyle={{ height: hp(6.2) }}
          onPress={handleSubmit}
        />
      </View>
    </ScreenWrapper>
  )
}

export default NewPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap:15
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
    textAlign: 'center'
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  username: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  avatar: {
    height: hp(6.5),
    width: hp(6.5),
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'    
  },
  publicText: {
    fontSize: hp(1.7),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textLight,
    marginTop: 2,
  },
  textEditor: {
    marginTop: 10
  },
  imageIcon: {
    borderRadius: theme.radius.md,
    padding: 6
  },
  file: {
    height: hp(30),
    width: '100%',
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    borderCurve: 'continuous'
  },
  media: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray
  },
  mediaIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  addImageText: {
    fontSize: hp(1.9),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  video: {
  
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: theme.colors.rose,
    opacity:0.8,
    padding: 4,
    borderRadius: theme.radius.md
  }
  
})