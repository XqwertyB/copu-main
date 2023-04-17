import React from 'react'
import styles from './MainBanner.module.scss'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Link from 'next/link';

export default function SliderItem() {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src="/images/Rectangle 12.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Meeting in Samarkand
        </h1>
        <p className={styles.desc}>
          Samarqand davlat universitetida O'zbekiston Fiziklar kengashi raisi, akademik Qodir G'ulomov va Lorem, ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, adipisci..
        </p>
        <Link href='/'>
          <a className={styles.more}>
            Ko'proq o'qing
          </a>
        </Link>
        <div className={styles.footer}>
          <div className={styles.date}>
            <CalendarTodayIcon />
            <p>12.12.2021</p>
          </div>

          <div className={styles.comment}>
            <QuestionAnswerOutlinedIcon />
            <p>10ta sharh</p>
          </div>
        </div>
      </div>
    </div>
  )
}
