import React, {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState ({})
  const {id} = useParams()

  useEffect (() => {

    const db = getFirestore()
    const refDoc = doc(db, 'products', id)


    getDoc (refDoc).then ((item) => {
    const auxProduct =  {
        ...item.data(),
        id:item.id,
    }
    
    setProduct(auxProduct)
    })  

  }, [id], [])


  return (
    <>
      <ItemDetail  sel= {product} />
    </> 
  )
}
