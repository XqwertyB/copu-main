import { Container } from '@mui/material'
import React from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import styles from './ProceedingsOfConferences.module.scss'

export default function ProceedingsOfConferences() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h2>Конференция материаллари</h2>

          <div className={styles.buttons}>
            <button className={styles.button}>
              <ArrowBackIosOutlinedIcon />
            </button>
            <button className={styles.button}>
              <ArrowForwardIosOutlinedIcon />
            </button>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.img}>
              <img src="/images/Rectangle 12.jpg" alt="" />
            </div>

            <div className={styles.title}>
              <h4>Максим Вересов </h4>
            </div>

            <div className={styles.text}>
              <p>Озбекистон Физиклар кенгаши раиси, Фанлар академиуаси академиги, уадро физикаси сошасидаги</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.img}>
              <img src="/images/Rectangle 12.jpg" alt="" />
            </div>

            <div className={styles.title}>
              <h4>Максим Вересов </h4>
            </div>

            <div className={styles.text}>
              <p>Озбекистон Физиклар кенгаши раиси, Фанлар академиуаси академиги, уадро физикаси сошасидаги</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.img}>
              <img src="/images/Rectangle 12.jpg" alt="" />
            </div>

            <div className={styles.title}>
              <h4>Максим Вересов </h4>
            </div>

            <div className={styles.text}>
              <p>Озбекистон Физиклар кенгаши раиси, Фанлар академиуаси академиги, уадро физикаси сошасидаги</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
