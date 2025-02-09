import { StyleSheet, ScrollView, Text, View } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import RichTextEditor from '@/components/RichTextEditor';

import { useAuth } from '@/context/AuthContext';

import { wp, hp } from '@/utils/common';
import { theme } from '@/constants/theme';

import { useRef } from 'react';

const NewPost = () => {
  const { user } = useAuth();
  
  const bodyRef = useRef("");
  const editorRef = useRef(null);
  
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
            <RichTextEditor/>
          </View>
        </ScrollView>
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
  video: {
  
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10
  }
  
})