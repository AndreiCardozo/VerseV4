import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import motosData from '../../assets/motos/motos.json';
import styles from './Moto.module.css';
import { Button } from '@chakra-ui/react';

export function Moto({ carrinho, setCarrinho }) {
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        setMotos(motosData.motos);
    }, []);

    const adicionarAoCarrinho = (moto) => {
        const novoCarrinho = [...carrinho, { nome: moto.NomeMoto, preco: moto.PrecoMoto, quantidade: 1 }];
        setCarrinho(novoCarrinho);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.motosGrid}>
                {motos.map((moto) => (
                    <div key={moto.NomeMoto} className={styles.motoItem}>
                        <h2>{moto.NomeMoto}</h2>
                        <p>Preço: R${moto.PrecoMoto}</p>
                        <p>{moto.DescMoto}</p>
                        <Button className={styles.doarButton} onClick={() => adicionarAoCarrinho(moto)}>
                            Doar
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
