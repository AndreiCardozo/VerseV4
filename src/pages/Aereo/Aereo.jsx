import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import aereosData from '../../assets/Aereo/aereo.json';
import styles from './Aereo.module.css';

import { Button } from '@chakra-ui/react';

export function Aereo({ carrinho, setCarrinho }) {
    const [aereos, setAereos] = useState([]);

    useEffect(() => {
        setAereos(aereosData.aereos);
    }, []);

    const adicionarAoCarrinho = (aereo) => {
        const novoCarrinho = [...carrinho, { nome: aereo.NomeAereo, preco: aereo.PrecoAereo, quantidade: 1 }];
        setCarrinho(novoCarrinho);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.aereosGrid}>
                {aereos.map((aereo) => (
                    <div key={aereo.NomeAereo} className={styles.aereoItem}>
                        <h2>{aereo.NomeAereo}</h2>
                        <p>Preço: R${aereo.PrecoAereo}</p>
                        <p>{aereo.DescAereo}</p>
                        <Button className={styles.doarButton} onClick={() => adicionarAoCarrinho(aereo)}>
                            Doar
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
