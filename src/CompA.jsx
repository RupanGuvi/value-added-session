import React from 'react';

const CompA = ({setVal,val}) => {
    const handleInc = () =>{
        setVal((ele)=> ele+1)
    }

    return (
        <div>
          <h1>Child:- {val}</h1>
          <button onClick={handleInc}>Add</button>
        </div>
    );
};

export default CompA;