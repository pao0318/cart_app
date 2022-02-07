import { Card } from 'react-bootstrap';
import { CartState } from '../context/Valcontext';
import Button from './Button';


function ItemCard() {
    const { data, setData } = CartState()
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div >
                {data.products && data.products.map((item, index) => (

                    <Card style={{ width: '22rem' }} key={index}>

                        <img src={item.img} className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <img src="https://img.icons8.com/fluency-systems-regular/48/000000/used-product.png" />
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text"> Description: {item.desc}</p>
                            <p className="card-text"> {item.currency}{item.price}</p>
                            <Button item={item} />
                        </div>
                    </Card>
                ))
                }
            </div >
        </div>
    );
}
export default ItemCard;

