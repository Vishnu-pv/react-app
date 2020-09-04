import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Product() {

    const { id } = useParams()
    const url = `https://5f51d1a65e98480016123f19.mockapi.io/products/${id}`

    const [product, setProduct] = useState(null)
    let content = null
    useEffect(() => {
        
    axios.get(url).then(response =>{
        setProduct(response.data)
    })

    }, [url])        

    if(product){
        content =     
        <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
           <div>
                <img src={product.images[0].imageURL}
                alt={product.name}/>
            </div> 
            <div className="font-bold text-xl mb-3">
                ${product.price}
            </div>
                <div>
                    {product.description}
                </div>

            </div>
    }
    return (
        <div>
                {content}
        </div>
    )
}
