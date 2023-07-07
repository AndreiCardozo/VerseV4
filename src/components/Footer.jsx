import VerseLogo from '../assets/VerseLogo.png';

import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerAll}>
                <div className={styles.footerContent}>
                    <img src={VerseLogo} alt="Logo do Verse" />
                    <div>
                        <p>Verse Roleplay © 2023</p>
                        <p>Não somos afiliados a Rockstar Games</p>
                    </div>

                </div>
                <p>Desenvolvido por: cardozo1</p>
            </div>

        </footer>
    );
}