const coupons = [
    {
        name: "NoCoupon",
        discount: 0,
    },
    {
        name: "Coupon1",
        discount: 15,
    },
    {
        name: "Coupon2",
        discount: 30,
    },
    {
        name: "Coupon3",
        discount: 25,
    },
];

calcularPrecioConDescuento = (precio, descuento, coupon) =>{
    const precioConDescuento = precio - (precio * descuento)/ 100 - (precio * coupon)/100;
    return precioConDescuento
}


onClickButtonPriceDiscount = () =>{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const resultP = document.getElementById("ResultP");

    const couponChoose = document.getElementById("Coupons").value;
    const valueCoupon = coupons.find(e => e.name === couponChoose).discount;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, valueCoupon);
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

