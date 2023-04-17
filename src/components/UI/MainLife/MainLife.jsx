import React from 'react'
import LifeItem from './LifeItem'
import { Container } from '@mui/material'
import styles from './MainLife.module.scss'
import useTranslation from "next-translate/useTranslation";

export default function MainLife() {
  const { t, lang } = useTranslation('common')
  return (
    <section className={styles.mainLife}>
      <div className={styles.container}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>{t('life')}</h2>
            </div>

            <div className={styles.content}>
              <div className={styles.items}>
                <LifeItem data={'1'}/>
                <LifeItem data={'2'}/>
                <LifeItem data={'3'}/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
