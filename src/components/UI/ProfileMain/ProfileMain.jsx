import { Button, Container } from '@mui/material'
import React, { useMemo, useState } from 'react'
import styles from './ProfileMain.module.scss'
import ProfileGeneral from '../ProfileGeneral/ProfileGeneral'
import ProfileMyResources from '../ProfileMyResources/ProfileMyResources'
import ProfileConference from '../ProfileConference/ProfileConference'
import ProfileOnlineJournals from '../ProfileOnlineJournals/ProfileOnlineJournals'
import ProfileNews from '../ProfileNews/ProfileNews'
import ProfileOnlineResources from '../ProfileOnlineResources/ProfileOnlineResources'

export default function ProfileMain() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      number: 0,
      title: 'Асосий маълумотлар',
      component: ProfileGeneral 
    },
    {
      number: 1,
      title: 'Менинг ресурсларим',
      component: ProfileMyResources 
    },
    {
      number: 2,
      title: 'Конференциялар',
      component: ProfileConference
    },
    {
      number: 3,
      title: 'Онлайн журналлар',
      component: ProfileOnlineJournals
    },
    {
      number: 4,
      title: 'Янгиликлар',
      component: ProfileNews 
    },
    {
      number: 5,
      title: 'Онлайн ресурслар',
      component: ProfileOnlineResources
    }
  ]

  const activeStep = useMemo(() => {
    return tabs.find((tab) => tab.number === activeTab)
  }, [activeTab])

  return (
    <main>
      <div className={styles.head}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>Шарипов Илёс</h2>
              <h3>Ўзбекистон Республикаси Физиклар Кенгаши аъзоси</h3>
            </div>

            <div className={styles.navigation}>
              {
                tabs.map((tab, index) => (
                  <Button className={activeTab === index && styles.active} onClick={() => setActiveTab(index)}>{tab.title}</Button>
                ))
              }
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.tabContainer}>
        <activeStep.component />
      </div>
    </main>
  )
}
