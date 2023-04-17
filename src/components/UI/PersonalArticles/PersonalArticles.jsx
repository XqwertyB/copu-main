import React from 'react'
import styles from './PersonalArticles.module.scss'
import { Button } from '@mui/material'

export default function PersonalArticles() {
  return (
    <div className={styles.articles}>
      <div className={styles.header}>
        <div className={styles.title}>
          <fieldset>
            <legend>Мақолалар рўйхати</legend>
          </fieldset>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.title}>
            <h3>Saidov A. S., Usmonov Sh. N., Saparov D. V. Structural Studies of the Epitaxial Layer of a Substitutional Solid Solution (GaAs)12x(ZnSe)x with Nanocrystals. // Advances in Materials Science and Engineering. V. 2019, Article ID 3932195. P. 9.</h3>
          </div>

          <div className={styles.btns}>
            <Button className={styles.left}>
              Аннотация
            </Button>

            <Button className={styles.right}>
              Юклаш
            </Button>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.title}>
            <h3>Saidov A. S., Usmonov Sh. N., Saparov D. V. Structural Studies of the Epitaxial Layer of a Substitutional Solid Solution (GaAs)12x(ZnSe)x with Nanocrystals. // Advances in Materials Science and Engineering. V. 2019, Article ID 3932195. P. 9.</h3>
          </div>

          <div className={styles.btns}>
            <Button className={styles.left}>
              Аннотация
            </Button>

            <Button className={styles.right}>
              Юклаш
            </Button>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.title}>
            <h3>Saidov A. S., Usmonov Sh. N., Saparov D. V. Structural Studies of the Epitaxial Layer of a Substitutional Solid Solution (GaAs)12x(ZnSe)x with Nanocrystals. // Advances in Materials Science and Engineering. V. 2019, Article ID 3932195. P. 9.</h3>
          </div>

          <div className={styles.btns}>
            <Button className={styles.left}>
              Аннотация
            </Button>

            <Button className={styles.right}>
              Юклаш
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
