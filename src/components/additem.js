import '../css/additem.css'

function AddItem (){
    return(
        <div>
            <input placeholder="Enter item"/>
            <input pattern="Enter amount"/>

            <select>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>

            <button>Add</button>
        </div>
    )
}

export default AddItem;