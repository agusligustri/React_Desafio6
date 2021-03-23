import React, { useEffect, useState } from "react"
import ItemList from "../../components/ItemList";
import dataBase from "../../mocks/dataBase";



const ItemListContainer = () => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1);
        } else if (contador == stock) {
            alert("No hay mas stock del producto");
        };
    };

    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } 
    };

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(dataBase), 2000);
    });
        myPromise.then((result) => setProducts(result));
    }, []);

    return (
        <>
            <ItemList products={products} />
        </>
    )
};

export default ItemListContainer;