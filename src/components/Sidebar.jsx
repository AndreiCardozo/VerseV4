
import styles from './SideBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons'



export function SideBar() {

    return (
        <div className={styles.sidebarall} >
            <div >
                <ul className={styles.sidebar}>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>INÍCIO</span>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </a>
                    </li>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>VIPS</span>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </a>
                    </li>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>CARROS</span>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </a>
                    </li>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>MOTOS</span>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </a>
                    </li>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>MANSÕES</span>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </a>
                    </li>
                    <li className={styles.lidiv}>
                        <a className={styles.hoverEffect} href="">
                            <FontAwesomeIcon icon={faBars} className={styles.icon} />
                            <span className={styles.sidebarText}>OUTROS

                            </span>

                        </a>
                        <span className={styles.icon1}>
                            <FontAwesomeIcon icon={faCaretRight} className={styles.icon1} />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

