import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import styles from './Carrinho.module.css';

export function Carrinho({ carrinho }) {
    const [carrinhoAtual, setCarrinhoAtual] = useState([]);

    useEffect(() => {
        agruparItensCarrinho(carrinho);
    }, [carrinho]);

    const agruparItensCarrinho = (carrinho) => {
        const carrinhoAgrupado = carrinho.reduce((acumulador, item) => {
            const index = acumulador.findIndex((element) => element.id === item.id);
            if (index !== -1) {
                acumulador[index].quantidade += 1;
            } else {
                acumulador.push({ ...item, quantidade: 1 });
            }
            return acumulador;
        }, []);

        setCarrinhoAtual(carrinhoAgrupado);
    };

    const atualizarQuantidade = (id, quantidade) => {
        const novoCarrinho = carrinhoAtual.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantidade: quantidade,
                };
            }
            return item;
        });

        setCarrinhoAtual(novoCarrinho);
    };

    const removerQuantidade = (id) => {
        const novoCarrinho = carrinhoAtual.map((item) => {
            if (item.id === id && item.quantidade > 1) {
                return {
                    ...item,
                    quantidade: item.quantidade - 1,
                };
            }
            return item;
        });

        setCarrinhoAtual(novoCarrinho);
    };

    const removerItem = (id) => {
        const novoCarrinho = carrinhoAtual.filter((item) => item.id !== id);
        setCarrinhoAtual(novoCarrinho);
    };

    const calcularValorTotal = () => {
        return carrinhoAtual.reduce((total, item) => {
            return total + item.preco * item.quantidade;
        }, 0);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.title}>Carrinho</h1>
            <div className={styles.itemsContainer}>
                {carrinhoAtual.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <h2 className={styles.itemTitle}>{item.nome}</h2>
                        <p className={styles.itemPrice}>Preço: R${item.preco}</p>
                        <p className={styles.itemDesc}>{item.descricao}</p>
                        <div className={styles.quantityContainer}>
                            <button
                                className={styles.quantityButton}
                                onClick={() => removerQuantidade(item.id)}
                            >
                                -
                            </button>
                            <span className={styles.quantity}>{item.quantidade}</span>
                            <button
                                className={styles.quantityButton}
                                onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className={styles.removeButton}
                            onClick={() => removerItem(item.id)}
                        >
                            Remover
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.valorTotal}>
                Valor Total: R${calcularValorTotal().toFixed(2)}
            </div>
        </div>
    );
}
