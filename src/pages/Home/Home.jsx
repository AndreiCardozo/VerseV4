import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from './Home.module.css';

export function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={`${styles.content} ${styles.centered}`}>
                <span className={styles.headerText}>Seja recebido(a) com alegria à loja do servidor!</span>

                <p className={styles.largeFont}>Confira as dúvidas frequentes:</p>

                <p>
                    <span className={styles.boldFont}>Após a contribuição, em qual período irei receber os benefícios?</span>
                </p>

                <p>
                    ➥ Os itens são enviados imediatamente após o pagamento, podendo haver um atraso de no máximo 1 minuto para que a ativação ocorra no servidor, sem a necessidade de aguardar por um intervalo.
                </p>

                <p>
                    <span className={styles.boldFont}>É seguro efetuar doações por este meio?</span>
                </p>

                <p>➥ Empregamos as tecnologias mais atualizadas para a criação e proteção da plataforma, assegurando assim a confidencialidade dos seus dados.</p>

                <p>
                    <span className={styles.boldFont}>Como posso verificar quantos dias faltam para o vencimento do meu produto?</span>
                </p>
                <p>
                    ➥ Simplesmente acesse o nosso servidor e digite o comando /vip, que abrirá uma guia com todos os detalhes.
                </p>
                <p>
                    <span className={styles.boldFont}>Quais meios de pagamento a loja aceita?</span>
                </p>
                <p>
                    ➥ Recebemos pagamentos via Mercado Pago, Pix, Paypal e Picpay. Em caso de dúvidas, entre em contato com a nossa equipe através de um ticket!
                </p>
            </div>
            <Footer />
        </div>
    );
}
