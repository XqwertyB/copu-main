import React from 'react'
import styles from './MainLife.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useTranslation from "next-translate/useTranslation";

export default function LifeItem({data}) {
  const { t, lang } = useTranslation('common')
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={`/images/${data}.jpg`} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>{t('text9')}</h3>
          <p>{t('text10')}</p>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <p>{t('text11')}</p>
            <ArrowForwardIcon />
          </div>

          <div className={styles.menuItem}>
            <p>{t('text12')}</p>
            <ArrowForwardIcon />
          </div>

          <div className={styles.menuItem}>
            <p>{t('text13')}</p>
            <ArrowForwardIcon />
          </div>

          <div className={styles.menuItem}>
            <p>{t('text14')}</p>
            <ArrowForwardIcon />
          </div>

          <div className={styles.menuItem}>
            <p>{t('text15')}</p>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
