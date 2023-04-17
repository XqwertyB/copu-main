import { Container } from '@mui/material'
import React from 'react'
import styles from './MainQualification.module.scss'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";

export default function MainQualification() {
  const { t, lang } = useTranslation('common')
  return (
    <section className={styles.mainQualification}>
      <div className={styles.container}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h2 className={styles.title}>
                {t('text7')}
              </h2>

              <p className={styles.text}>
                {t('text8')}
              </p>

              <div className={styles.btns}>
                <Link href='/'>
                  <a className={styles.callOrder}>{t('text3')}</a>
                </Link>

                <Link href='/'>
                  <a className={styles.more}>{t('text4')}</a>
                </Link>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.imgs}>
                <div className={styles.leftSide}>
                  <div className={styles.img}>
                    <img src="/images/Rectangle 17.jpg" alt="" />
                  </div>
                  <div className={styles.img}>
                    <img src="/images/Rectangle 19.jpg" alt="" />
                  </div>
                </div>

                <div className={styles.rightSide}>
                  <div className={styles.img}>
                    <img src="/images/Rectangle 21.jpg" alt="" />
                  </div>
                  <div className={styles.img}>
                    <img src="/images/Rectangle 21-2.jpg" alt="" />
                  </div>
                  <div className={styles.img}>
                    <img src="/images/Rectangle 20.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
