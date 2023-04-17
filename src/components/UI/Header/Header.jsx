import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/Search'
import { Container, Menu, MenuItem } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ItemMenu from './ItemMenu'
import styles from './style.module.scss'
import { useState } from 'react'



export function Header() {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const langs = [
    {
      key: 'ru',
      label: 'Russian',
      icon: '/images/ru.jpg'
    },
    {
      key: 'uz',
      label: 'O`zbek',
      icon: '/images/uz.jpg'
    },
    {
      key: 'en',
      label: 'English',
      icon: '/images/en.jpg'
    }
  ]
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    {
      title: t('councilofphysicists'),
      children: [
        {
          title: 'Keнгаш ҳақида',
          link: '/about'
        },
        {
          title: 'Кенгаш бошқаруви аъзолари',
          link: '/about'
        },
        {
          title: 'Кенгаш ташкилий тузилмаси',
          link: '/about'
        },
        {
          title: 'Ҳудудий бýлинмалар',
          link: '/about'
        },
        {
          title: 'Кенгаш аъзолари',
          link: '/about'
        },
        {
          title: 'Кенгаш Низоми',
          link: '/about'
        },
        {
          title: 'Кенгаш онлайн аъзо бýлиш',
          link: '/about'
        },
      ]
    },
    {
      title: t('videocourses'),
      children: [
        {
          title: 'Барача видеокурслар',
          link: '/about'
        },
        {
          title: 'Мактаб ýқувчилари учун',
          link: '/about'
        },
        {
          title: 'Бакалавр учун',
          link: '/about'
        },
        {
          title: 'Магистрлар учун',
          link: '/about'
        },
        {
          title: 'Топ видеокурслар',
          link: '/about'
        },
        {
          title: 'Муаллифлар',
          link: '/about'
        },
      ]
    },
    {
      title: t('conferences'),
      children: [
        {
          title: 'Конференциялар рýйхати',
          link: '/list-of-conferences'
        },
        {
          title: 'Янги конференция уаратиш',
          link: '/about'
        },
        {
          title: 'Конференция материаллари',
          link: '/proceedings-of-the-conference'
        },
        {
          title: 'Конференция материаллари (Архив)',
          link: '/proceedings-of-the-conference-archive'
        },
        {
          title: 'Конференциялар тугрисида эьлонлар',
          link: '/about'
        },
      ]
    },
    {
      title: t('news'),
      children: [
        {
          title: 'Эйлонлар',
          link: '/about'
        },
        {
          title: 'Янгиликлар',
          link: '/about'
        },
        {
          title: 'Ярмаркалар',
          link: '/about'
        },
        {
          title: 'Олимпиадалар ва танловлар',
          link: '/about'
        }
      ]
    },
    {
      title: t('magazines'),
      children: [
        {
          title: 'Онлайн журналлар',
          link: '/about'
        },
        {
          title: 'Соҳалар бýйича мақолалар',
          link: '/about'
        },
        {
          title: 'Журнал рýйхатдан ýтказиш',
          link: '/about'
        }
      ]
    },
    {
      title: t('resources'),
      children: [
        {
          title: 'Диссертациялар',
          link: '/about'
        },
        {
          title: 'Монографиялар',
          link: '/about'
        },
        {
          title: 'Ýқув-услубий қýлланмалар',
          link: '/about'
        },
        {
          title: 'Дарсликалар',
          link: '/about'
        },
        {
          title: 'Фойдали моделлар',
          link: '/about'
        },
        {
          title: 'Патентлар ва гувоҳномалар',
          link: '/about'
        },
        {
          title: 'Мақолалар',
          link: '/about'
        }
      ]
    },
    {
      title: t('documents'),
      children: [
        {
          title: 'Қонунчилик ҳужжатлари',
          link: '/about'
        },
        {
          title: 'Лойиҳалар',
          link: '/about'
        },
        {
          title: 'Илмий муаммолар',
          link: '/about'
        },
        {
          title: 'Илмий-техник ишланмалар',
          link: '/about'
        },
        {
          title: 'Лицензион шартномалар',
          link: '/about'
        },
      ]
    },
    {
      title: t('text40')
    }
  ]
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Container>
            <div className={styles.container}>
              <div className={styles.left}>
                <div className={styles.logo}>
                  <Link href="/">
                    <a>
                      <img src="/images/image 2.png" alt="logo" />
                      <p>
                        Council <br />
                        of Physicists <br />
                        of Uzbekistan
                      </p>
                    </a>
                  </Link>
                </div>
              </div>

              <div className={styles.middle}>
                <div className={styles.search}>
                  <div className={styles.wrap}>
                    <input type="text" placeholder={t("search")} />
                    <button>
                      <SearchIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.right}>
                <div className={styles.container}>

                  <div
                    className={styles.lang}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <div className={styles.lang__current}>
                      <div className={styles.img}>
                        <img src={`/images/${lang === "ru" ? "ru" : lang === "en" ? "en" : "uz"}.jpg`} alt="uz" />
                      </div>
                      <p>{lang === "ru" ? "Русский" : lang === "en" ? "English" : "O'zbek"}</p>
                    </div>
                  </div>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {
                      langs.map((item, index) => (
                        <Link
                          key={item.label}
                          href={router.asPath}
                          locale={item.key}
                        >
                          <MenuItem onClick={handleClose}>
                            <div className={`${styles.lang__menu}`}>
                              <div className={styles.img}>
                                <img src={item.icon} alt="uz" />
                              </div>
                              <p>{item.label}</p>
                            </div>
                          </MenuItem>
                        </Link>
                      ))
                    }
                  </Menu>

                  <Link href="/profile">
                    <div className={styles.account}>
                      <div className={styles.avatar}>
                        <div className={styles.img}>
                          <PersonOutlineIcon />
                        </div>
                        <p>{t("profile")}</p>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </Container>
        </div>




        <div className={styles.bottom}>
          <Container>
            <div className={styles.wrap}>
              {
                menuItems.map((item, index) => (
                  <ItemMenu key={item.title} options={item.children} item={item} index={item.title} />
                ))
              }
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
