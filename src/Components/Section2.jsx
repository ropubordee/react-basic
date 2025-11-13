    import React from "react";
    import useStore from "../Store/pubordeeStore";

    const Section2 = () => {    

        const value = useStore((state)=>state.value)
        const incNum = useStore((state)=> state.incNum)
        const decNum = useStore((state)=>state.decNum)


    const handleIncNum = () => {
        incNum();
    };
    const handleDecNum = () => {
        decNum();
    };
    return (
        <div>
        value : {value}
        <p>
            <button onClick={handleIncNum}>+ Num</button>
        </p>
        <p>
            <button onClick={handleDecNum}>- Num</button>
        </p>
        </div>
    );
    };

    export default Section2;
