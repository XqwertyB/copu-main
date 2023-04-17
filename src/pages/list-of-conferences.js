import SEO from 'components/SEO'
import ListOfConferences from 'components/UI/ListOfConferences/ListOfConferences'

export default function ListOfConference() {
  return (
    <>
      <SEO />
      <ListOfConferences />
    </>
  )
}

ListOfConference.layout = "MainLayout"