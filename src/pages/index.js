import SEO from 'components/SEO'
import { Main } from 'components/UI/Main/Main'

export default function Home() {
  return (
    <>
      <SEO />
      <Main />
    </>
  )
}

Home.layout = "MainLayout"