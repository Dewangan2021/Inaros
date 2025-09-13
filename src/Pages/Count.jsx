

import countStore from "../store/counter";

const Count = () => {
    const count = countStore((state) => state.count);
    const increaseCount = countStore((state) => state.increaseCount);
    const updateCount = countStore((state) => state.updateCount );
return(
    <center>
    <p>Count from store : {count} </p>
    <button onClick={() => {
        increaseCount();
    }}>Increase Count </button>
    <button 
    style={{
        marginLeft:"10px",
    }}
     onClick={() => {
        updateCount(5);
    }}>Update Count </button>
    </center>
)
}

export default Count;