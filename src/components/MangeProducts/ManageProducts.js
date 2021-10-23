import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('successfully deleted.')
                }
                const remainingProducts = products.filter(product => product._id !== id)
                setProducts(remainingProducts)
            })
    }
    return (
        <div>
            <h1>Product quantity:{products?.length}</h1>
            <ul>
                {
                    products?.map(product => <li
                    >Name:{product.name},Price:{product.price},category:{product.category}
                        <Link to={`/product/${product._id}`}><button>Update product</button></Link>
                        <button onClick={() => handleDelete(product._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageProducts;