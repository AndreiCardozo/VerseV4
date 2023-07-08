import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import aereosData from '../../assets/aereo/aereo.json';
import styles from './Aereo.module.css';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Aereo({ carrinho, setCarrinho }) {
    const [aereos, setAereos] = useState([]);
    const [detalhesVisible, setDetalhesVisible] = useState(false);
    const [detalhesAereo, setDetalhesAereo] = useState(null);

    useEffect(() => {
        setAereos(aereosData.aereos);
    }, []);

    const adicionarAoCarrinho = (aereo) => {
        const itemExistente = carrinho.find((item) => item.nome === aereo.NomeAereo);
        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.nome === aereo.NomeAereo) {
                    return {
                        ...item,
                        quantidade: item.quantidade + 1,
                    };
                }
                return item;
            });
            setCarrinho(novoCarrinho);
        } else {
            const novoCarrinho = [
                ...carrinho,
                { id: aereo.NomeAereo, nome: aereo.NomeAereo, preco: aereo.PrecoAereo, quantidade: 1 },
            ];
            setCarrinho(novoCarrinho);
        }
    };

    const exibirDetalhes = (aereo) => {
        setDetalhesAereo(aereo);
        setDetalhesVisible(true);
    };

    const fecharDetalhes = () => {
        setDetalhesVisible(false);
        setDetalhesAereo(null);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.aereosGrid}>
                {aereos.map((aereo) => (
                    <div key={aereo.NomeAereo} className={styles.aereoItem}>
                        <h2>{aereo.NomeAereo}</h2>
                        <img src={aereo.ImgAereo} alt={aereo.NomeAereo} className={styles.aereoImage} />
                        <p>Preço: R${aereo.PrecoAereo}</p>
                        <Button colorScheme='green' className={styles.doarButton} onClick={() => adicionarAoCarrinho(aereo)}>
                            Doar
                        </Button>
                        <Button colorScheme='blue' className={styles.doarButton} onClick={() => exibirDetalhes(aereo)}>
                            ?
                        </Button>
                    </div>
                ))}
            </div>

            <Modal isOpen={detalhesVisible} onClose={fecharDetalhes} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{detalhesAereo?.NomeAereo}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{detalhesAereo?.DescAereo}</p>
                        <p>Preço: R${detalhesAereo?.PrecoAereo}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={fecharDetalhes}>
                            Fechar
                        </Button>
                        <Button colorScheme="green" onClick={() => adicionarAoCarrinho(detalhesAereo)}>
                            Adicionar ao Carrinho
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}
