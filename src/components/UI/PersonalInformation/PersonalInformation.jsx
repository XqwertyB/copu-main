import React from 'react'
import styles from './PersonalInformation.module.scss'

export default function PersonalInformation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>
        <div className={styles.title}>
          <h3>Шахсий маълумотлар</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <p>Исми: Paul</p>
            </div>

            <div className={styles.item}>
              <p>Жинси:Еркак</p>
            </div>

            <div className={styles.item}>
              <p>Tелефон Рақами:+998(98)585-58-15</p>
            </div>

            <div className={styles.item}>
              <p>Електрон почта:example@gmail.com </p>
            </div>

            <div className={styles.item}>
              <p>Азолиги: Йук (Бор)</p>
            </div>

            <div className={styles.item}>
              <p>Идентификация рақами:</p>
            </div>

            <div className={styles.item}>
              <p>Қўшимча маълумот:</p>
            </div>

            <div className={styles.item}>
              <p>Қўшимча маълумот:</p>
            </div>
          </div>
        </div>
      </div>



      <div className={styles.second}>
        <div className={styles.title}>
          <h3>Хизмат тури</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <p>Регистрация аризаси</p>
            </div>

            <div className={styles.item}>
              <p>Телефонга боғлаш</p>
            </div>

            <div className={styles.item}>
              <p>Махфий сўзни ўзгартириш</p>
            </div>

            <div className={styles.item}>
              <p>Тўлиқ маълумотлар</p>
            </div>

            <div className={styles.item}>
              <p> Қатнашилган конференциялар</p>
            </div>

            <div className={styles.item}>
              <p>Конференция мақолалари</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.third}>
        <div className={styles.title}>
          <h3>Тўлов ёзуви</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <p>Буюртма рақами</p>
            </div>

            <div className={styles.item}>
              <p>Аъзолиги</p>
            </div>

            <div className={styles.item}>
              <p>Дастур вақти</p>
            </div>

            <div className={styles.item}>
              <p>Тасдиқлаш ҳолати</p>
            </div>

            <div className={styles.item}>
              <p>Тўлов ҳолати</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
