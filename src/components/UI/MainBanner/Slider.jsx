import React from 'react'
import styles from './MainBanner.module.scss'
import SliderItem from './SliderItem'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import useTranslation from "next-translate/useTranslation";

export default function Slider() {
  const { t, lang } = useTranslation('common')
  return (
    <div className={styles.slider}>
      <div className={styles.left}>
        <SliderItem />

        <div className={styles.navigation}>
          <div className={styles.top}>
            <p>{t('next')}</p>
            <ArrowForwardIosOutlinedIcon />
          </div>

          <div className={styles.middle}>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>...</h3>
            <h3>10</h3>
          </div>

          <div className={styles.bottom}>
            <ArrowBackIosOutlinedIcon />
            <p>{t('back')}</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <SliderItem />
        <SliderItem />
      </div>
    </div>
  )
}
