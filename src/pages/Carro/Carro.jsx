import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import carrosData from '../../assets/carros/carros.json';
import styles from './Carro.module.css';
import { Carrinho } from '../Carrinho/Carrinho';
import { Footer } from '../../components/Footer';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Carro({ carrinho, setCarrinho }) {
    const [carros, setCarros] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 9;
    const [detalhesVisible, setDetalhesVisible] = useState(false);
    const [detalhesCarro, setDetalhesCarro] = useState(null);

    useEffect(() => {
        setCarros(carrosData.carros);
    }, []);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = carros.slice(indexOfFirstCar, indexOfLastCar);

    const renderCars = () => {
        return currentCars.map((carro) => (
            <div key={carro.id} className={styles.carroItem}>
                <h2>{carro.NomeCarro}</h2>
                <img src={carro.ImgCarro} alt={carro.NomeCarro} className={styles.carroImage} />
                <p>Preço: R${carro.PrecoCarro}</p>
                <div className={styles.buttonsContainer}>
                    <Button colorScheme='green' className={styles.doarButton} onClick={() => adicionarAoCarrinho(carro)}>
                        Adicionar no carrinho
                    </Button>
                    <Button colorScheme='blue' className={styles.detalhesButton} onClick={() => exibirDetalhes(carro)}>
                        ?
                    </Button>
                </div>
            </div>
        ));
    };

    const totalPages = Math.ceil(carros.length / carsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pagination = [];

        for (let i = 1; i <= totalPages; i++) {
            pagination.push(
                <button
                    key={i}
                    className={currentPage === i ? styles.activePageButton : styles.pageButton}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return pagination;
    };

    const exibirDetalhes = (carro) => {
        setDetalhesCarro(carro);
        setDetalhesVisible(true);
    };

    const fecharDetalhes = () => {
        setDetalhesVisible(false);
        setDetalhesCarro(null);
    };

    const adicionarAoCarrinho = (carro) => {
        const itemExistente = carrinho.find((item) => item.id === carro.id);
        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.id === carro.id) {
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
                { id: carro.id, nome: carro.NomeCarro, preco: carro.PrecoCarro, quantidade: 1 },
            ];
            setCarrinho(novoCarrinho);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.all}>
                <div className={styles.carrosGrid}>{renderCars()}</div>

                <div className={styles.pagination}>
                    {currentPage > 1 && (
                        <button className={styles.pageButton} onClick={() => handlePageChange(currentPage - 1)}>
                            &lt;
                        </button>
                    )}

                    {renderPagination()}

                    {currentPage < totalPages && (
                        <button className={styles.pageButton} onClick={() => handlePageChange(currentPage + 1)}>
                            &gt;
                        </button>
                    )}
                </div>
            </div>

            <Modal isOpen={detalhesVisible} onClose={fecharDetalhes} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{detalhesCarro?.NomeCarro}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{detalhesCarro?.DescCarro}</p>
                        <p>Preço: R${detalhesCarro?.PrecoCarro}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={fecharDetalhes}>
                            Fechar
                        </Button>
                        <Button colorScheme="green" onClick={() => adicionarAoCarrinho(detalhesCarro)}>
                            Adicionar ao Carrinho
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Footer />
        </div>
    );
}
