import React from 'react';
import { CartState } from '../context/Valcontext';
import ItemCard from './ItemCard'

export default function Home() {

    const { state, data, setData } = CartState()
    return <div>
        <ItemCard />
    </div >
}
