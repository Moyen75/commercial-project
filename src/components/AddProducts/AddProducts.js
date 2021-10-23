import React, { useRef } from 'react';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    const handleAddedProduct = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const category = categoryRef.current.value;
        const product = { name, price, category }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('product added successfully.')
                }
                nameRef.current.value = '';
                priceRef.current.value = '';
                categoryRef.current.value = '';
            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAddedProduct}>
                <input type="text" ref={nameRef} name="" id="" />
                <input type="text" ref={priceRef} name="" id="" />
                <input type="text" ref={categoryRef} name="" id="" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProducts;