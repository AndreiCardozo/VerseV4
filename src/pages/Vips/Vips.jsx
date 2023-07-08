import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import vipsData from '../../assets/vip/vips.json';
import styles from './Vips.module.css';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Vips({ carrinho, setCarrinho }) {
    const [vips, setVips] = useState([]);
    const [detalhesVisible, setDetalhesVisible] = useState(false);
    const [detalhesVip, setDetalhesVip] = useState(null);

    useEffect(() => {
        setVips(vipsData.vips);
    }, []);

    const adicionarAoCarrinho = (vip) => {
        const itemExistente = carrinho.find((item) => item.nome === vip.NomeVip);
        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.nome === vip.NomeVip) {
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
                { id: vip.NomeVip, nome: vip.NomeVip, preco: vip.PrecoVip, quantidade: 1 },
            ];
            setCarrinho(novoCarrinho);
        }
    };

    const exibirDetalhes = (vip) => {
        setDetalhesVip(vip);
        setDetalhesVisible(true);
    };

    const fecharDetalhes = () => {
        setDetalhesVisible(false);
        setDetalhesVip(null);
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.vipsGrid}>
                {vips.map((vip) => (
                    <div key={vip.NomeVip} className={styles.vipItem}>
                        <h2>{vip.NomeVip}</h2>
                        <p>Preço: R${vip.PrecoVip}</p>
                        <Button colorScheme='green' className={styles.doarButton} onClick={() => adicionarAoCarrinho(vip)}>
                            Doar
                        </Button>
                        <Button colorScheme='blue' className={styles.doarButton} onClick={() => exibirDetalhes(vip)}>
                            ?
                        </Button>
                    </div>
                ))}
            </div>

            <Modal isOpen={detalhesVisible} onClose={fecharDetalhes} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{detalhesVip?.NomeVip}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{detalhesVip?.DescVip}</p>
                        <p>Preço: R${detalhesVip?.PrecoVip}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={fecharDetalhes}>
                            Fechar
                        </Button>
                        <Button colorScheme="green" onClick={() => adicionarAoCarrinho(detalhesVip)}>
                            Adicionar ao Carrinho
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}
