import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from "axios"
export default function Store() {



    const [products, setProducts] = useState([]);
    const c_url = 'http://localhost:4000/products'
    const fetchProducts = () => {
        axios
            .get(c_url).then((response) => { setProducts(response.data); })
    };
    const handleDelete = (_id) => {
        axios.delete(`${c_url}/${_id}`).then(res => {
            const del = products.filter(item => _id !== item._id)
            setProducts(del)
        })
    };
    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <>
            <div className='form-head d-flex mb-3 mb-md-5 align-items-center '>
                <div className='input-group search-area d-inline-flex'>
                    <div className='input-group-append'>
                        <span className='input-group-text'>
                            <i className='flaticon-381-search-2' />
                        </span>
                    </div>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Search here'
                    />
                </div>
                <Link
                    className='ml-auto rounded-0 btn bgl-primary text-primary'
                    to='/AddProduct'
                >
                    Add Product
                </Link>

            </div>
            <div className="row">
                {products && products.map((item) =>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="new-arrival-product">
                                    <div className="new-arrivals-img-contnent">
                                        <img src={item.image} alt="" width="200" height="250" />
                                    </div>
                                    <div className="new-arrival-content text-center mt-3">
                                        <h4>
                                            {item.name}<span className="price" style={{ marginLeft: '5px', fontWeight: '600', fontSize: '16px' }}>{item.price}</span>
                                        </h4>
                                        <span>
                                            <Link to={"/edit-product/" + item.id}>
                                                <a  > <i className="fa fa-pencil" style={{ backgroundColor: "#6418C3", color: "white", width: "25px", height: "25px", padding: "6px", marginRight: "5px" }}></i> </a>
                                            </Link>
                                            <a onClick={() => handleDelete(`${item._id}`)}> <i className="fa fa-trash" style={{ backgroundColor: "red", color: "white", width: "25px", height: "25px", padding: "6px", marginRight: "5px" }}></i> </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
