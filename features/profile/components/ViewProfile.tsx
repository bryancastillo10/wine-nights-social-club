import {  View, Pressable } from 'react-native'

import { Avatar } from '@/components/ui'
import { Paragraph, TextHeader } from '@/components/typography'
import Icon, {icons} from '@/assets/icons'

import { viewProfileStyle } from '@/style/main/profile.style'
import { theme } from '@/style/theme'
import { hp, wp } from '@/utils/dimensions'

interface UserInfoRowProps {
    icon: keyof typeof icons;
    name: string;
    value: string;
}

const UserInfoRow = ({icon, name, value}:UserInfoRowProps) => {
    return (
    <View style={viewProfileStyle.otherInfoField}>
        <View style={{flexDirection:'row', gap: 6}}>
            <Icon name={icon} size={22} />
            <Paragraph>{name}</Paragraph>   
        </View> 
        <Paragraph
            style={{fontWeight: theme.fontWeight.bold}}
            variant="lg">
                {value}
        </Paragraph>       
    </View>
    )
};

const ViewProfile = () => {
  return (
    <View style={viewProfileStyle.container}>
        <View style={viewProfileStyle.avatarContainer}>
            <Avatar size={hp(12)} rounded={theme.radius.xxl*2} />
            <Pressable
                style={viewProfileStyle.editIcon}
                onPress={() => {}}
                >
                <Icon
                    name="edit"
                    strokeWidth={2.5}
                    size={20}
                    />
            </Pressable>
        </View>
        <View style={viewProfileStyle.nameField}>
            <Icon name="user" size={32} strokeWidth={1} />
            <TextHeader>Bryan</TextHeader>
        </View>
        <View style={{paddingHorizontal: wp(8)}}>
            <UserInfoRow
                icon="mail"
                name="Email"
                value="bryanium.dev@gmail.com"
            />
            <UserInfoRow
                icon="call"
                name="Phone Number"
                value="0912345678"
            />
            <UserInfoRow
                icon="location"
                name="Where Are You At?"
                value="Hsinchu City, Taiwan"
            />
            <UserInfoRow
                icon="drink"
                name="Hobby"
                value="Software development"
              />
            <UserInfoRow
                icon="music"
                name="Fave Song"
                value="Money For Nothing by Dire Straits"
            />              
        </View>
    </View>
  )
}

export default ViewProfile
