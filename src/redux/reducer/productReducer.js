import axios from "axios";
const fetchData = async() => {
    const data = await axios.get('https://api.escuelajs.co/api/v1/products');
    console.log(data);
    return data;
}

const products = fetchData();

function productReducer(state = products, action){
    switch(action.type){
        default: 
            return state;
    }
}

export default productReducer;