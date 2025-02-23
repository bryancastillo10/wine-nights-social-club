import MainPageContainer from '@/components/layout/MainPageContainer'
import { Paragraph } from '@/components/typography'

import { BackButton } from '@/components/ui'

const profile = () => {
  return (
      <MainPageContainer withHeader={false}>
        <BackButton/>
            <Paragraph>Your Profile</Paragraph>
      </MainPageContainer>
  )
}

export default profile
