import React from 'react'
import styles from './PersonalInformationEdit.module.scss'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function PersonalInformationEdit() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>Profilni tahrirlash</h3>
        </div>

        <div className={styles.btn}>
          <button><SettingsOutlinedIcon /></button>
          <button><NotificationsNoneOutlinedIcon /></button>
          <button><EmailOutlinedIcon /></button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.label}>
              <label htmlFor="">Ф.И.О</label>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Akbarov Akobir Akbarovich'/>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>
              <label htmlFor="">Телефон рақам:</label>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='+998(90)000-00-00'/>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>
              <label htmlFor="">Электрон почта:</label>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='example@gmail.com'/>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>
              <label htmlFor="">Иш жойи:</label>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Физика-Технияческий Инстетути'/>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>
              <label htmlFor="">Маълумот:</label>
            </div>
            <div className={styles.input}>
              <textarea type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
