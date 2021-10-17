import React, { useState, useEffect } from 'react'
import axios from "axios"
import 'rsuite/dist/styles/rsuite-default.min.css'
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'rsuite'
import { useHistory } from "react-router-dom";
export default function AddProduct() {
   
    let history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const updateName = (event) => { setName(event) }
    const updateDescription = (event) => { setDescription(event)}
    const updateImage = (event) => { setImage(event)}
    const updateBrand = (event) => { setBrand(event)}
    const updatePrice = (event) => { setPrice(event)}
    const updateCategory = (event) => { setCategory(event.target.value)}
    const updateCountInStock = (event) => { setCountInStock(event)}

    const handleSubmit = async () => {
            const params = {
              name: name,
              description: description,
              image: image,
              brand: brand,
              price: price,
              category: category,
              countInStock: countInStock,
            }
          let resp = await axios.post('http://localhost:4000/products/', params);
          console.log(resp.status)
          history.push("/store");

  
      }

   
    return (
        <div>
            <center>
                <Form >
                   
                        <FormGroup>
                            <ControlLabel>Product Name</ControlLabel>
                            <FormControl style={{ width: 300 }} name="name"  onChange={(event) => updateName(event)} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Description</ControlLabel>
                            <FormControl style={{ width: 300 }} name="description" onChange={(event) => updateDescription(event)} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Price</ControlLabel>
                            <FormControl style={{ width: 300 }} name="price"  onChange={(event) => updatePrice(event)} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Brand</ControlLabel>
                            <FormControl style={{ width: 300 }} name="brand"  onChange={(event) => updateBrand(event)} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Category</ControlLabel>
                            <select onChange={updateCategory}>
                                <option selected disabled>
                                    Choose one
                                </option>
                                <option value="610b2f15f132d613003a320d">Mobile</option>
                                <option value="6131f0f0a9ca160f3854a0a2">Pc</option>
                                <option value="614e6d2a1c7120821553a22f">Accessory</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Image</ControlLabel>
                            <FormControl style={{ width: 300 }} name="image" onChange={(event) => updateImage(event)} />
                        </FormGroup>
                    
                        <FormGroup>
                            <ControlLabel>Product Count In Stock </ControlLabel>
                            <FormControl style={{ width: 300 }} name="countInStock"  onChange={(event) => updateCountInStock(event)} />
                        </FormGroup>
                        <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                            <Button appearance="default"  >Cancel</Button>
                        </ButtonToolbar>
                    </FormGroup>
                    
                </Form>
            </center>
            </div>
    )
}
