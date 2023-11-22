export default function addToCart({ id, title, price, rate, thumbnail }) {
    return {
        type: "addToCart",
        payload: { id, title, price, rate, thumbnail }
    }
}
export function addToWatch({ id, title, price, rate, thumbnail }) {
    return {
        type: "addToWatch",
        payload: { id, title, price, rate, thumbnail }
    }
}

export function incre(id) {
    return {
        type: 'increment',
        id: id,
    }
}

export function decre(id) {
    return {
        type: 'decrement',
        id: id,
    }
}
export function remove(id) {
    return {
        type: 'remove',
        id: id,
    }
}

export function page(id, title, description, rate, thumbnail, images, brand, price, discountPercentage) {
    return {
        type: 'topage',
        id: id,
        title: title,
        description: description,
        rate: rate,
        thumbnail: thumbnail,
        discountPercentage: discountPercentage,
        brand: brand,
        price: price,
        images: images
    }
}

// export const depositmoney = (amount) => {
//     return (dispatch) => {
//         dispatch(
//             {

//                 type: 'increment',

//             }
//         )
//     }
// }

// export const withdrawMoney = (amount) => {
//     return (dispatch) => {
//         dispatch(
//             {

//                 type: 'decrement',

//             }
//         )
//     }
// }
// export const addtoCart = (id) => {
//     return (dispatch) => {
//         dispatch(
//             {
//                 type: "addtoCart",
//                 payload: id,
//             }
//         )
//     }
// }
