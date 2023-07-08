import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import motosData from '../../assets/motos/motos.json';
import styles from './Moto.module.css';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Moto({ carrinho, setCarrinho }) {
    const [motos, setMotos] = useState([]);
    const [detalhesVisible, setDetalhesVisible] = useState(false);
    const [detalhesMoto, setDetalhesMoto] = useState(null);

    useEffect(() => {
        setMotos(motosData.motos);
    }, []);

    const adicionarAoCarrinho = (moto) => {
        const itemExistente = carrinho.find((item) => item.nome === moto.NomeMoto);
        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.nome === moto.NomeMoto) {
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
                { id: moto.NomeMoto, nome: moto.NomeMoto, preco: moto.PrecoMoto, quantidade: 1 },
            ];
            setCarrinho(novoCarrinho);
        }
    };

    const exibirDetalhes = (moto) => {
        setDetalhesMoto(moto);
        setDetalhesVisible(true);
    };

    const fecharDetalhes = () => {
        setDetalhesVisible(false);
        setDetalhesMoto(null);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.motosGrid}>
                {motos.map((moto) => (
                    <div key={moto.NomeMoto} className={styles.motoItem}>
                        <h2>{moto.NomeMoto}</h2>
                        <img src={moto.ImgMoto} alt={moto.NomeMoto} className={styles.motoImage} />
                        <p>Preço: R${moto.PrecoMoto}</p>
                        <div className={styles.buttonsContainer}>
                            <Button colorScheme="green" className={styles.doarButton} onClick={() => adicionarAoCarrinho(moto)}>
                                Adicionar ao carrinho
                            </Button>
                            <Button colorScheme="blue" className={styles.detalhesButton} onClick={() => exibirDetalhes(moto)}>
                                ?
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={detalhesVisible} onClose={fecharDetalhes} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{detalhesMoto?.NomeMoto}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{detalhesMoto?.DescMoto}</p>
                        <p>Preço: R${detalhesMoto?.PrecoMoto}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={fecharDetalhes}>
                            Fechar
                        </Button>
                        <Button colorScheme="green" onClick={() => adicionarAoCarrinho(detalhesMoto)}>
                            Adicionar ao Carrinho
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}
