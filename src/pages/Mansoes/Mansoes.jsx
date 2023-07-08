import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Mansoes.module.css';
import VerseLogo from '../../assets/VerseLogo.png';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../../components/Header';
import mansoesData from '../../assets/mansoes/mansoes.json';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Mansoes({ carrinho, setCarrinho }) {
    const [mansoes, setMansoes] = useState([]);
    const [detalhesVisible, setDetalhesVisible] = useState(false);
    const [detalhesMansao, setDetalhesMansao] = useState(null);

    useEffect(() => {
        setMansoes(mansoesData.mansoes);
    }, []);

    const adicionarAoCarrinho = (mansao) => {
        const itemExistente = carrinho.find((item) => item.nome === mansao.NomeMansoes);
        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.nome === mansao.NomeMansoes) {
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
                { id: mansao.NomeMansoes, nome: mansao.NomeMansoes, preco: mansao.PrecoMansoes, quantidade: 1 },
            ];
            setCarrinho(novoCarrinho);
        }
    };

    const exibirDetalhes = (mansao) => {
        setDetalhesMansao(mansao);
        setDetalhesVisible(true);
    };

    const fecharDetalhes = () => {
        setDetalhesVisible(false);
        setDetalhesMansao(null);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mansoesGrid}>
                {mansoes.map((mansao) => (
                    <div key={mansao.NomeMansoes} className={styles.mansaoItem}>
                        <h2>{mansao.NomeMansoes}</h2>
                        <img src={mansao.ImgMansoes} alt={mansao.NomeMansoes} />
                        <p>Preço: R${mansao.PrecoMansoes}</p>


                        <Button colorScheme='green' className={styles.doarButton} onClick={() => adicionarAoCarrinho(mansao)}>
                            Adicionar ao carrinho
                        </Button>
                        <Button colorScheme='blue' className={styles.doarButton} onClick={() => exibirDetalhes(mansao)}>
                            ?
                        </Button>
                    </div>
                ))}
            </div>

            <Modal isOpen={detalhesVisible} onClose={fecharDetalhes} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{detalhesMansao?.NomeMansoes}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{detalhesMansao?.DescMansoes}</p>
                        <p>Preço: R${detalhesMansao?.PrecoMansoes}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={fecharDetalhes}>
                            Fechar
                        </Button>
                        <Button colorScheme="green" onClick={() => adicionarAoCarrinho(detalhesMansao)}>
                            Adicionar ao Carrinho
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}
