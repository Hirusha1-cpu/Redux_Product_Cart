import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from 'react-redux'
import {add} from '../store/cartSlice'
import { getProducts } from '../store/productSlice';
import Alert from 'react-bootstrap/Alert'

const Product = () => {
    const dispatch = useDispatch()
    const {data:products,status} = useSelector(state=> state.products)
    // const [products, getProducts] = useState([]);
    useEffect(() => {
        //call the api
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
        dispatch(getProducts());
    }, [dispatch])

    if(status === 'fetching'){
        return <p>Loading....</p>
    }
    if(status === 'error'){
        return <Alert keys="danger" variant='danger'>Something went wrong....</Alert>
    }



    const addToCart = (product) =>{
        //dispatch an add action
        dispatch(add(product))

    }

    const cards = products.map(product => (
        <div className='col-md-3' style={{marginBottom:"10px"}}>
            <Card className='h-100' key={product.id}>
                <div className='text-center'>

                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {/* {product.description} */}
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="primary" onClick={()=> addToCart(product)}>Add to cart</Button>

                </Card.Footer>
            </Card>

        </div>
    ))
    return (
        <div className='container-fluid'>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}
            </div>
            {/* {JSON.stringify(products)} */}
        </div>
    )
}

export default Product