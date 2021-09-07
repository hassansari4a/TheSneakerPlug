import {useSelector} from "react-redux";


export default function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <div>
            <table className="table">
                <thead>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                    cartItems.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="payment-button">
                <form action="https://uat.esewa.com.np/epay/main" method="POST">
                    <input value={cartItems.reduce((a,c) => a + c.price * c.qty, 0)} name="tAmt" type="hidden"/>
                    <input value={cartItems.reduce((a,c) => a + c.price * c.qty, 0)} name="amt" type="hidden"/>
                    <input value="0" name="txAmt" type="hidden"/>
                    <input value="0" name="psc" type="hidden"/>
                    <input value="0" name="pdc" type="hidden"/>
                    <input value="epay_payment" name="scd" type="hidden"/>
                    <input value={cartItems[0].name} name="pid" type="hidden"/>
                    <input value="http://localhost:3000/" type="hidden" name="su"/>
                    <input value="http://localhost:3000/" type="hidden" name="fu"/>
                    <button className="primary" style={{width: 300}} type="submit">Pay with Esewa</button>
                </form>
            </div>
        </div>
    )
}