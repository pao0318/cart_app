import React, { useState, useEffect, createContext } from "react";
function Button({ item }) {
    const [totalVal, setTotalVal] = useState(0)

    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTotalVal(count * parseInt(item.price));
    }, [count, item.price])

    const handlePlus = () => setCount(current => current + 1);
    const handleMinus = () => {
        if (count > 0) {
            setCount(current => current - 1);
        }
    }

    function handleValueChange(e) {
        e.preventDefault();
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            const x = Number(e.target.value);
            setCount(x);
            setError("Qty updated");
        } else {
            setError("Your input is not valid");
        }
    }


    return (
        <>
            <div className="btnWrapper">
                <div className="counterDisplay">
                    <button onClick={handleMinus}>- </button>
                    <input
                        type="text"
                        min="0"
                        value={count}
                        // onClick={() => setCount(0)}
                        onChange={handleValueChange}
                    />
                    <button onClick={handlePlus}>+ </button>
                    <span>
                        {item.currency} {totalVal}
                    </span>
                </div>
                {error}
            </div>
        </>
    );
}

export default Button;
