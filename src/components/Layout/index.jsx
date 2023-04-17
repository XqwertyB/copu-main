import { Footer } from 'components/UI/Footer/Footer'
import { Header } from 'components/UI/Header/Header'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
