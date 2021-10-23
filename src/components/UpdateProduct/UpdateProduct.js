import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const handleName = e => {
        const name = e.target.value;
        const updatedName = { name: name, price: product.price, category: product.category }
        setProduct(updatedName)
    }
    const handlePrice = e => {
        const price = e.target.value;
        const updatedPrice = { name: product.name, price: price, category: product.category }
        setProduct(updatedPrice)
    }
    const handleCategory = e => {
        const category = e.target.value;
        const updatedCategory = { name: product.name, price: product.price, category: category }
        setProduct(updatedCategory)
    }
    const updateProduct = e => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('product updated successfully.')
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Name:{product?.name}</h1>
            <form onSubmit={updateProduct}>
                <input type="text" onChange={handleName} value={product.name || ''} />
                <input type="text" onChange={handlePrice} value={product.price || ''} />
                <input type="text" onChange={handleCategory} value={product.category || ''} />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateProduct;