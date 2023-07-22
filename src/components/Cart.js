import React from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import {remove} from '../store/cartSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.cart);
    const removeFromCart = (id) =>{
        //dispatch a remove action
        dispatch(remove(id));
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
                    <Button variant="danger" onClick={()=> removeFromCart(product.id)}>Remove</Button>

                </Card.Footer>
            </Card>

        </div>
    ))

  return (
    <div>
        {/* <h2>Cart</h2> */}
        {/* {JSON.stringify(productCart)} */}
        <div className='row'>
            {cards}

        </div>

    </div>
  )
}

export default Cart