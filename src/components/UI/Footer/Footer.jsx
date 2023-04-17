import styles from './style.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useTranslation from "next-translate/useTranslation";

export function Footer() {
  const { t, lang } = useTranslation('common')
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container>
          <div className={styles.grid}>

            <div className={styles.gridItem}>
              <h3 className={styles.title}>{t('about')}</h3>
              <p>{t('text28')}</p>
            </div>


            <div className={styles.gridItem}>
              <h3 className={styles.title}>Х{t('text29')}</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text30')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text31')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text32')}</a>
                  </Link>
                </li>
              </ul>
            </div>


            <div className={styles.gridItem}>
              <h3 className={styles.title}>{t('text33')}</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text34')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text35')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text36')}</a>
                  </Link>
                </li>
              </ul>
            </div>


            <div className={styles.gridItem}>
              <h3 className={styles.title}>{t('text37')}</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text38')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('about')}</a>
                  </Link>
                </li>

                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.link}>{t('text39')}</a>
                  </Link>
                </li>
              </ul>
            </div>


            <div className={styles.gridItem}>
              <h3 className={styles.title}>{t('text40')}</h3>

              <div className={styles.socials}>
                <div className={styles.phone}>
                  <a className={styles.link} href='tel:+998900424399'>+998 90 042 43 99</a>
                </div>

                <div className={styles.social}>
                  <Link href="/">
                    <a className={styles.socialLink}>
                      <TelegramIcon />
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={styles.socialLink}>
                      <FacebookIcon />
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={styles.socialLink}>
                      <TwitterIcon />
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={styles.socialLink}>
                      <InstagramIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>


      <div className={styles.bottom}>
        <div className={styles.totop}>
          <button>
            <ExpandLessIcon/>
          </button>
        </div>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <p className={styles.text}>{t('text41')}</p>
            </div>

            <div className={styles.right}>
              <a className={styles.link} href='/'>Toshkent sh., Algoritm, Diydor ko'chasi, 71-uy</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
