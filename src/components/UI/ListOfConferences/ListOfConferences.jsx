import { Button, Container } from '@mui/material'
import React from 'react'
import styles from './ListOfConferences.module.scss'
import useTranslation from "next-translate/useTranslation";

export default function ListOfConferences() {
  const { t, lang } = useTranslation('common')
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Конференциялар рýйхати</h2>

            <div className={styles.dates}>
              <div className={styles.date}>
                <Button>10 noyabr</Button>
              </div>

              <div className={styles.date}>
                <Button>11 noyabr</Button>
              </div>

              <div className={styles.date}>
                <Button>12 noyabr</Button>
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.conferences}>
              <div className={styles.title}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.right}>
                  <h3>Тошкент давлат шарқшунослик институтига университет мақоми берилганлиги муносабати.</h3>
                </div>
              </div>

              <div className={styles.scheduleConference}>
                <div className={styles.schedule}>
                  <div className={styles.left}>
                    <p>10:30 - 11:00</p>
                  </div>

                  <div className={styles.middle}>
                    <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                  </div>

                  <div className={styles.right}>
                    <div className={styles.avatar}>
                      <div className={styles.img}>
                        <img src="/images/Rectangle 11.jpg" alt="" />
                      </div>
                    </div>

                    <div className={styles.name}>
                      <p>Абдуллаев Абдулла Абдуллаевич</p>
                    </div>
                  </div>
                </div>

                <div className={styles.schedule}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.middle}>
                  <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                </div>

                <div className={styles.right}>
                  <div className={styles.avatar}>
                    <div className={styles.img}>
                      <img src="/images/Rectangle 11.jpg" alt="" />
                    </div>
                  </div>

                  <div className={styles.name}>
                    <p>Абдуллаев Абдулла Абдуллаевич</p>
                  </div>
                </div>
              </div>

              <div className={styles.schedule}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.middle}>
                  <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                </div>

                <div className={styles.right}>
                  <div className={styles.avatar}>
                    <div className={styles.img}>
                      <img src="/images/Rectangle 11.jpg" alt="" />
                    </div>
                  </div>

                  <div className={styles.name}>
                    <p>Абдуллаев Абдулла Абдуллаевич</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className={styles.conferences}>
              <div className={styles.title}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.right}>
                  <h3>Тошкент давлат шарқшунослик институтига университет мақоми берилганлиги муносабати.</h3>
                </div>
              </div>

              <div className={styles.scheduleConference}>
                <div className={styles.schedule}>
                  <div className={styles.left}>
                    <p>10:30 - 11:00</p>
                  </div>

                  <div className={styles.middle}>
                    <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                  </div>

                  <div className={styles.right}>
                    <div className={styles.avatar}>
                      <div className={styles.img}>
                        <img src="/images/Rectangle 11.jpg" alt="" />
                      </div>
                    </div>

                    <div className={styles.name}>
                      <p>Абдуллаев Абдулла Абдуллаевич</p>
                    </div>
                  </div>
                </div>

                <div className={styles.schedule}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.middle}>
                  <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                </div>

                <div className={styles.right}>
                  <div className={styles.avatar}>
                    <div className={styles.img}>
                      <img src="/images/Rectangle 11.jpg" alt="" />
                    </div>
                  </div>

                  <div className={styles.name}>
                    <p>Абдуллаев Абдулла Абдуллаевич</p>
                  </div>
                </div>
              </div>

              <div className={styles.schedule}>
                <div className={styles.left}>
                  <p>10:30 - 11:00</p>
                </div>

                <div className={styles.middle}>
                  <p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p>
                </div>

                <div className={styles.right}>
                  <div className={styles.avatar}>
                    <div className={styles.img}>
                      <img src="/images/Rectangle 11.jpg" alt="" />
                    </div>
                  </div>

                  <div className={styles.name}>
                    <p>Абдуллаев Абдулла Абдуллаевич</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
