
import styles from './Body.module.css';



export function Body() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.SideBar}>
                <SideBar />
            </div>
            
        </div>
    );
}