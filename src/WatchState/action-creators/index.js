
export function addToWatchList({ id, title, price, rate, thumbnail }) {
    return {
        type: "addToWatchList",
        payload: { id, title, price, rate, thumbnail },
    }
}


export function remove(id) {
    return {
        type: 'remove',
        id: id,
    }
}

