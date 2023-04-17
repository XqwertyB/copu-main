import { Container } from '@mui/material'
import React from 'react'
import styles from './ProfileMyResources.module.scss'

export default function ProfileMyResources() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.header}>

            <div className={styles.top}>
              <div className={styles.item}>
                <button className={styles.active}>Диссертациялар (4)</button>
              </div>

              <div className={styles.item}>
                <button>Монографиялар (3)</button>
              </div>

              <div className={styles.item}>
                <button>Дарсликлар (10)</button>
              </div>

              <div className={styles.item}>
                <button>Мақолалар (8)</button>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.item}>
                <button>Ўқув-услубий қўлланмалар (2)</button>
              </div>

              <div className={styles.item}>
                <button>Патент ва гувоҳномалар (2)</button>
              </div>

              <div className={styles.item}>
                <button>Фойдали моделлар (0)</button>
              </div>
            </div>

          </div>


          <div className={styles.content}>
            <div className={styles.head}>
              <p>Ишмухаммедов Ильяс томонидан тақдим этилган диссертациялар рўйхати</p>
              <button>
                Янги маълумот киритиш
              </button>
            </div>

            <div className={styles.body}>
              <table className={styles.tg}>
                <thead>
                  <tr>
                    <th className={styles.tgLax}>№</th>
                    <th className={styles.tgLax}>Ихтисослик шифри ва номи</th>
                    <th className={styles.tgLax}>Диссертация мавзуси</th>
                    <th className={styles.tgLax}>Муаллиф</th>
                    <th className={styles.tgLax}>Амаллар</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.tgLax}>1</td>
                    <td className={styles.tgLax}>01.04.02 Назарий физика</td>
                    <td className={styles.tgLax}>Динамика открытых систем в квантовой теории информации с использованием вероятностного представления квантовых состояний</td>
                    <td className={styles.tgLax}>Аванесов Ашот Сергеевич</td>
                    <td className={styles.tgLax}>Таҳрирлаш  Ўчириш</td>
                  </tr>
                  <tr>
                    <td className={styles.tgLax}>2</td>
                    <td className={styles.tgLax}>01.04.02 Назарий физика</td>
                    <td className={styles.tgLax}>Динамика двухатомных систем в одномерных ангармонических ловушках</td>
                    <td className={styles.tgLax}>Ишмухамедов Ильяс Сапабекович</td>
                    <td className={styles.tgLax}>Таҳрирлаш  Ўчириш</td>
                  </tr>
                  <tr>
                    <td className={styles.tgLax}>3</td>
                    <td className={styles.tgLax}>01.04.02 Назарий физика</td>
                    <td className={styles.tgLax}>Динамика заряженных частиц в геомагнитном поле в процессе его инверсии. Радиационная обстановка Земли и Европы — спутника Юпитера.</td>
                    <td className={styles.tgLax}>Царева Ольга Олеговна </td>
                    <td className={styles.tgLax}>Таҳрирлаш  Ўчириш</td>
                  </tr>
                  <tr>
                    <td className={styles.tgLax}>4</td>
                    <td className={styles.tgLax}>01.04.02 Назарий физика</td>
                    <td className={styles.tgLax}>Электрофизические и рекомбинационные свойства дефектов в кремнии, имплантированном ионами кислорода</td>
                    <td className={styles.tgLax}>Данилов Денис Васильевич</td>
                    <td className={styles.tgLax}>Таҳрирлаш  Ўчириш</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>

          </div>
      </Container>
    </div>
  )
}
