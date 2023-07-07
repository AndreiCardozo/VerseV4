import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import VerseLogo from '../assets/VerseLogo.png';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.container}>
                        <ul>
                            <li>
                                <div className={styles.nav_links}>
                                    <Link to="/" className={styles.hoverEffect}>
                                        INÍCIO
                                    </Link>
                                    <Link to="/carros" className={styles.hoverEffect}>
                                        CARROS
                                    </Link>
                                    <Link to="/motos" className={styles.hoverEffect}>
                                        MOTOS
                                    </Link>
                                    <Link to="/aereo" className={styles.hoverEffect}>
                                        AEREO
                                    </Link>
                                    <Link to="/vips" className={styles.hoverEffect}>
                                        VIP
                                    </Link>
                                    <Link to="/mansoes" className={styles.hoverEffect}>
                                        MANSOES
                                    </Link>
                                    <Link to="/outros" className={styles.hoverEffect}>
                                        OUTROS
                                    </Link>
                                </div>
                                <div className={styles.nav_buttons}>
                                    <Link to="/carrinho" className={styles.carrinho}>
                                        <FontAwesomeIcon
                                            className={styles.cartIcon}
                                            icon={faCartShopping}
                                        />

                                        CARRINHO
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={styles.wrapper}>
                <div className={`${styles.fivem} ${styles.zoomOutEffect}`}>
                    <h1>CONECTAR-SE AO FIVEM</h1>
                    <p>Clique para jogar</p>
                </div>
                <div className={`${styles.logo} ${styles.zoomOutEffect}`}>
                    <img src={VerseLogo} alt="Logo do Verse" />
                </div>
                <div className={`${styles.discord} ${styles.zoomOutEffect}`}>
                    <h1>ENTRAR NO DISCORD</h1>
                    <p>Participe da nossa comunidade</p>
                </div>
            </div>
        </header>
    );
}
