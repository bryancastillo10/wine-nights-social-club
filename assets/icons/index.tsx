import { theme } from '@/style/theme'

import Home from './Home'
import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'
import Call from './Call'
import Comment from './Comment'
import Camera from './Camera'
import Edit from './Edit'
import Delete from './Delete'
import Heart from './Heart'
import Image from './Image'
import Location from './Location'
import Lock from './Lock'
import Logout from './Logout'
import Mail from './Mail'
import Plus from './Plus'
import Search from './Search'
import Send from './Send'
import ThreeDotHorizontal from './ThreeDotHorizontal'
import ThreeDotVertical from './ThreeDotVertical'
import Video from './Video'
import User from './User'
import Share from './Share'
import Bell from './Bell'
import Drink from './Drink'
import Fingerprint from './Fingerprint'
import AllUsers from './AllUsers'

export const icons = {
  home: Home,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  call: Call,
  comment: Comment,
  camera: Camera,
  edit: Edit,
  delete: Delete,
  drink: Drink,
  heart: Heart,
  image: Image,
  location: Location,
  lock: Lock,
  logout: Logout,
  threeDotHorizontal: ThreeDotHorizontal,
  threeDotVertical: ThreeDotVertical,
  mail: Mail,
  plus: Plus,
  search: Search,
  send: Send,
  share: Share,
  user: User,
  video: Video,
  bell: Bell,
  fingerprint: Fingerprint,
  allusers: AllUsers 
}

interface IIcon {
  name: keyof typeof icons
  size?: number;
  strokeWidth?: number
  color?: string
}

const Icon = ({ name, ...props }: IIcon) => {
  const IconComponent = icons[name]
  
  return (
      <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 2}
        color={theme.colors.text}
        {...props}
      />
  )
}

export default Icon