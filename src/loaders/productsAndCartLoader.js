import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {

    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart data
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log('saved cart', savedCart);
    // console.log(products);

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            // console.log(id, quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
            //ekhane kono state declare kora hoynai.tai ekahne array declare kore push kora jabe.normal array. jodi state declare kora hoito tahole notun array ready kore spread kore kaj kora lagto as state mutable

        }
    }

    return { products, initialCart };
    // ekhane amader duita jinish lagto.cart er data ar products er data. JS e duita jinish eksathe pathate gele object / array te pathate hoy. amra ekhane obj akare pathacchi. tai curly bracket use hoyeche. pore function theke destructure kore eder niye nite hobe 
}