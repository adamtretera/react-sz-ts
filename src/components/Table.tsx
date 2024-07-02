import { useEffect } from "react";

const data = [
    {
        name: "Adam",
        isAdmin: true,
    },
    {
        name: "Adam",
        isAdmin: true,
    }
];
 
function ProductPriceCell({price}: {price :number }) {
    if (price < 10) {
        return "Moc malo"
    } else  if (price === 15) {
        return "Střední"
    } else {
        return "Moc hodně"
    }
}




function AddToCartCell() {
    function handleAddToCart() {
        fetch("api/addToCart")
    }

    return <button onClick={handleAddToCart}></button>
} 

function TableItem(item) {
    return (<tr>

        {item.map((field)=> {
            return (<td>

                {
                 field === "productPrice" ? <ProductPriceCell price={field}/> : null
                }




            </td>)
        })}

        <AddToCartCell/>
    </tr>)
}


function Table() {

    return (
        <table>
            

        </table>
    )
}



