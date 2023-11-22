const toget=(state={},action)=>{
    let id=action.id
    let title=action.title
    let price=action.price
    let rate=action.rate
    let thumbnail=action.thumbnail
    let brand=action.brand
    let discountPercentage=action.discountPercentage
    let description=action.description
    let images=action.images
    let cartproduct={
        id:id,
        title:title,
        price:price,
        rate:rate,
        thumbnail:thumbnail,
        discountPercentage:discountPercentage,
        brand:brand,
        description:description,
        images:images,
    }
    if(action.type=='topage'){
        state=cartproduct;
        return state;
    }
    return state;
}
export default toget;