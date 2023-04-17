import useTranslation from 'next-translate/useTranslation'
import MainBanner from '../MainBanner/MainBanner'
import MainQualification from '../MainQualification/MainQualification'
import MainLife from '../MainLife/MainLife'

export function Main() {
  const { t } = useTranslation('common')

  return (
    <>
      <MainBanner/>
      <MainQualification/>
      <MainLife/>
    </>
  )
}
