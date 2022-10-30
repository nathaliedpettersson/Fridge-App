import { Fragment } from "react";

const Form = (props) => {

    // Object with all values
    const refrigeratorObject = {
        productName: "",
        productAmount: 0,
        productDate: "",
        productCategory: ""
    }

    // This happens when form is submitted
    const submitForm = (e) => {
        e.preventDefault();
        console.log(refrigeratorObject);

        for (const item of e.target.children) {
            item.value = "";
        }

        props.getRefrigeratorItems(refrigeratorObject);

    }

    return (
        <Fragment>
            <h1>My fridge</h1>
            <div className="form-container">
                <form onSubmit={submitForm}>
                    <input type="text" placeholder="Product name" onChange={(event) => refrigeratorObject.productName = event.target.value} required />
                    <input className="num-input" type="number" placeholder="Amount" min="0" onChange={(event) => refrigeratorObject.productAmount = +(event.target.value)} required />
                    <input className="date-input" type="date" onChange={(event) => refrigeratorObject.productDate = event.target.value} required />
                    <input type="text" placeholder="Product category" onChange={(event) => refrigeratorObject.productCategory = event.target.value} required />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        </Fragment>
    )
}

export default Form;