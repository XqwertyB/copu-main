import SEO from 'components/SEO'
import { Main } from 'components/UI/Main/Main'
import ProfileMain from 'components/UI/ProfileMain/ProfileMain'

export default function Profile() {
  return (
    <>
      <SEO />
      <ProfileMain />
    </>
  )
}

Profile.layout = "MainLayout"