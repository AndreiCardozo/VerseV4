import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import carrosData from '../../assets/carros/carros.json';
import styles from './Carro.module.css';
import Modal from 'react-modal';
import { Carrinho } from '../Carrinho/Carrinho';
import { Footer } from '../../components/Footer';
import { Button, ButtonGroup } from '@chakra-ui/react';

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
                <p>Preço: R${carro.PrecoCarro}</p>
                <p>{carro.DescCarro}</p>
                <div className={styles.buttonsContainer}>
                    <Button className={styles.doarButton} onClick={() => adicionarAoCarrinho(carro)}>
                        Adicionar no carrinho
                    </Button>
                    <Button className={styles.detalhesButton} onClick={() => exibirDetalhes(carro)}>
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
        const novoCarrinho = [...carrinho, { id: carro.id, nome: carro.NomeCarro, preco: carro.PrecoCarro, quantidade: 1 }];
        setCarrinho(novoCarrinho);
    };

    return (
        <div>
            <Header />

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

            <Modal
                isOpen={detalhesVisible}
                onRequestClose={fecharDetalhes}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                {detalhesCarro && (
                    <div>
                        <h2>{detalhesCarro.NomeCarro}</h2>
                        <p>{detalhesCarro.DescCarro}</p>
                        <p>Preço: R${detalhesCarro.PrecoCarro}</p>
                        <button className={styles.fecharButton} onClick={fecharDetalhes}>
                            Fechar
                        </button>
                        <button className={styles.adicionarCarrinhoButton} onClick={() => adicionarAoCarrinho(detalhesCarro)}>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                )}
            </Modal>
            <Footer />
        </div>

    );
}
