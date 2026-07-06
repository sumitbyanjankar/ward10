import React, { useState } from "react";
export default function Bmiform() {
    function handleChangeHeight() {

        setHeight(height + 1);

    }
    function handleChangeWeight() {
        setWeight(weight - 1);
    }

    function handleCalculate(event){
 alert ("the result is:"+(weight/(height^2)));
 

    }

    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    return (<>

        <form onSubmit={handleCalculate} style={{
            maxWidth: '400px',
            margin: '40px auto',
            padding: '24px',
            border: '1px solid #146e23',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(35, 160, 52, 0.05)',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#949353'
        }}>
            <label> Height:</label><br />
            <input onChange={handleChangeHeight} id="heightInput"
                name="fname" defaultValue={height} /><br />
            <label> Weight:</label><br />
            <input onChange={handleChangeWeight} id="weightInput"
                name="fname" defaultValue={weight} /><br />
            <br></br>
            <button type="submit">calculate</button>

        </form>







    </>)
}