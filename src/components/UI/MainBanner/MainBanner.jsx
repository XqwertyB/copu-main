import React from 'react'
import styles from './MainBanner.module.scss'
import { Container } from '@mui/material'
import Slider from './Slider'
import useTranslation from "next-translate/useTranslation";

export default function MainBanner() {
  const { t, lang } = useTranslation('common')
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.contentWrap}>
              <h1 className={styles.title}>
                {t('text1')}
              </h1>

              <p className={styles.desc}>
                {t('text2')}
              </p>

              <div className={styles.btns}>
                <button className={styles.callOrder}>
                  {t('text3')}
                </button>

                <button className={styles.more}>
                  {t('text4')}
                </button>
              </div>
            </div>

            <div className={styles.banner}>
              <Slider />
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.info}>
        <Container>
          <div className={styles.content}>
            <h1>{t('text')}</h1>
            <p>{t('text5')}</p>
            <button>
              {t('text6')}
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}
