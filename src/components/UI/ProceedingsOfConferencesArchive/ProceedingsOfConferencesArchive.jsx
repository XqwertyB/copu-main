import React from 'react'
import styles from './ProceedingsOfConferencesArchive.module.scss'
import { Button, Container, Menu, MenuItem } from '@mui/material';

export default function ProceedingsOfConferencesArchive() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h2>Конференция материаллари (Архив)</h2>

          <div className={styles.buttons}>
            <Button>
              Foto
            </Button>

            <Button>
              Video
            </Button>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              2019
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>2020</MenuItem>
              <MenuItem onClick={handleClose}>2021</MenuItem>
              <MenuItem onClick={handleClose}>2022</MenuItem>
              <MenuItem onClick={handleClose}>2023</MenuItem>
            </Menu>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.items}>
            <div className={styles.div1}>
              <div className={styles.img}>
                <img src="/images/Rectangle 21.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.img}>
                <img src="/images/Rectangle 43.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.img}>
                <img src="/images/Rectangle 21-2.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.img}>
                <img src="/images/фото (1).jpg" alt="" />
              </div>
            </div>
            <div className={styles.div5}>
              <div className={styles.img}>
                <img src="/images/Rectangle 43.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div6}>
              <div className={styles.img}>
                <img src="/images/Rectangle 19.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div7}>
              <div className={styles.img}>
                <img src="/images/фото — копия.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div8}>
              <div className={styles.img}>
                <img src="/images/Rectangle 20.jpg" alt="" />
              </div>
            </div>
            <div className={styles.div9}>
              <div className={styles.img}>
                <img src="/images/Rectangle 17.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
