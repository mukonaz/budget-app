import React from "react";
import '../css/displaytransaction.css'

function DisplayTransaction (props) {

    return(
        <div>
        {props.list.map((item) => (
            <div>
                <div className="transction-item">
                    <div>
                        <h1>{item.amount}</h1>
                    </div>
                    <div>
                        <h1>{item.item}</h1>
                    </div>
                    
                    <h1>{item.transactionType}</h1>
                </div>
            </div>
        )) }
        </div>
    );

}

export default DisplayTransaction;