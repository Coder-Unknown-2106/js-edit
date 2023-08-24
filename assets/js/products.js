const product = document.getElementById('name')
const quantity = document.getElementById('quantity')
const MRP_Price = document.getElementById('mrpprice')
const Sale_Price = document.getElementById('salePrice')
const form = document.getElementById('form')

String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            //Error
            errorInput(input, `${input.id} is Required`);
        } else {
            //Success
            successInput(input);
        }
    });
}

function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}
function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
}
function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
        errorInput(input, `${getName(input)}  Must be Alphabets`);
    }
}




form.addEventListener('submit', (e) => {
    e.preventDefault()
    Sale_Price.value = parseFloat(Sale_Price.value).toFixed(2)
    MRP_Price.value = parseFloat(MRP_Price.value).toFixed(2)

    // radio button value add
    localStorage.setItem('products', JSON.stringify([...JSON.parse(localStorage.getItem('products')) || [],
    {
        product: product.value,
        quantity: quantity.value,
        MRP_Price: MRP_Price.value,
        salePrice: Sale_Price.value
    }
    ]))
})