import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import styles from './ProfileGeneral.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import PersonalInformationEdit from '../PersonalInformationEdit/PersonalInformationEdit';
import PersonalAllConferences from '../PersonalAllConferences/PersonalAllConferences';
import PersonalMyOrders from '../PersonalMyOrders/PersonalMyOrders';
import PersonalConferenceForReport from '../PersonalConferenceForReport/PersonalConferenceForReport';
import PersonalArticles from '../PersonalArticles/PersonalArticles';
import PersonalConferences from '../PersonalConferences/PersonalConferences';

export default function ProfileGeneral() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0)
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
          <div className={styles.profile}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className={styles.profileBtn}
            >
              example@gmail.com
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
              <MenuItem onClick={handleClose}>Шахсий маълумотлар</MenuItem>
              <MenuItem onClick={handleClose}>Махфий сўзни ўзгартириш</MenuItem>
              <MenuItem onClick={handleClose}>Чиқиш</MenuItem>
            </Menu>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.wrapper}>
              <div className={styles.avatar}>
                <div className={styles.img}>
                  <img src="/images/Rectangle 11.jpg" alt="" />
                </div>
              </div>

              <div className={styles.mail}>
                <p>Info@mai.com</p>
              </div>

              <div className={styles.menu}>
                <Accordion style={{ filter: 'none' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.accordion}
                  >
                    <Typography>Шахсий маълумотлар</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(0)}>Маълумотлар</Button>
                  </AccordionDetails>

                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(1)}>Маълумотлар тахрирлаш</Button>
                  </AccordionDetails>
                </Accordion>

                <Accordion style={{ filter: 'none' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.accordion}
                  >
                    <Typography>Коференция маркази</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(2)}>Менинг конференцияларим</Button>
                  </AccordionDetails>

                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(3)}>Барча конференциялар</Button>
                  </AccordionDetails>

                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(4)}>Менинг буюртмам</Button>
                  </AccordionDetails>

                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(5)}>Ҳисоботини тақдим этиш учун конференция</Button>
                  </AccordionDetails>

                  <AccordionDetails className={styles.detail}>
                    <Button className={styles.menuItem} onClick={() => setActiveTab(6)}>Мақолалар</Button>
                  </AccordionDetails>
                </Accordion>

              </div>
            </div>
          </div>


          <div className={styles.right}>
            {
              activeTab === 0 && <PersonalInformation />
            }
            {
              activeTab === 1 && <PersonalInformationEdit />
            }
            {
              activeTab === 2 && <PersonalConferences />
            }
            {
              activeTab === 3 && <PersonalAllConferences />
            }
            {
              activeTab === 4 && <PersonalMyOrders />
            }
            {
              activeTab === 5 && <PersonalConferenceForReport />
            }
            {
              activeTab === 6 && <PersonalArticles />
            }
          </div>
        </div>
      </Container>
    </div>
  )
}
