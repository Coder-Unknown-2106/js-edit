const box = document.getElementById('box')
const product = document.getElementById('product')
const quantity = document.getElementById('quantity')
const MRP_Price = document.getElementById('mrpprice')
const salePrice = document.getElementById('salePrice')
const form = document.getElementById('form')
const clickBtn = document.getElementById('clickBtn')


const fetchData = [...JSON.parse(localStorage.getItem('products'))]
console.log(fetchData);
let table = `<table class="table table-hover table-bordered"><tr><th>S.no</th><th>Product_Name</th><th>Quantity</th><th>MRP_Price</th><th>Sale_Price</th><th>remove</th><th>action</th></tr>`
for (let i = 0; i < fetchData.length; i++) {
    table += '<tr>'
    table += `<td>${fetchData.indexOf(fetchData[i]) + 1}</td>`
    table += `<td>${fetchData[i].product}</td>`
    table += `<td>${fetchData[i].quantity}</td>`
    table += `<td>${fetchData[i].MRP_Price}</td>`
    table += `<td>${fetchData[i].salePrice}</td>`
    table += `<td><button class="btn btn-danger" onclick="deleteBtn(this)">Delete</button></td>`
    table += `<td><button class="btn btn-primary" onclick="editBtn(this)">edit</button></td>`
    table += `</tr>`

}

table += '</table>'

box.innerHTML = table

function deleteBtn(element) {
    let getParent = element.parentElement.parentElement
    let getData = getParent.children[1];
    console.log(getData);
    getParent.remove()

    fetchData.forEach((item) => {
        if (item.product === getData.innerText) {
            fetchData.splice(fetchData.indexOf(item), 1)
        }
    })
    localStorage.setItem('products', JSON.stringify(fetchData))
}

function editBtn(element) {
    let getParent = element.parentElement.parentElement
    let getData = getParent.children[1];
    form.style.display = "block"
    let findVal = fetchData.find((item) => item.product === getData.innerText)
    if (findVal) {
        product.value = findVal.product
        quantity.value = findVal.quantity
        MRP_Price.value = findVal.MRP_Price
        salePrice.value = findVal.salePrice
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let getParent = element.parentElement.parentElement
        let getData = getParent.children[1];
        let findIndex = fetchData.findIndex((item) => item.product === getData.innerText)
        fetchData[findIndex].product = product.value
        fetchData[findIndex].quantity = quantity.value
        fetchData[findIndex].MRP_Price = MRP_Price.value
        fetchData[findIndex].salePrice = salePrice.value
        localStorage.setItem('products', JSON.stringify(fetchData))
        form.style.display = 'none'
    })
}

function sortItem() {
    let fetchData = [...JSON.parse(localStorage.getItem('products'))]
    let res = fetchData.sort((a, b) => {
        let preVAl = parseFloat(a.MRP_Price)
        let cureentVal = parseFloat(b.MRP_Price)
        if (preVAl > cureentVal) return -1
        if (preVAl < cureentVal) return 1
        return 0
    })
    localStorage.setItem('products', JSON.stringify(fetchData))

}

function sortItem2() {
    let fetchData = [...JSON.parse(localStorage.getItem('products'))]
    let res = fetchData.sort((a, b) => {
        let preVAl = parseFloat(a.MRP_Price)
        let cureentVal = parseFloat(b.MRP_Price)
        if (preVAl > cureentVal) return 1
        if (preVAl < cureentVal) return -1
        return 0
    })
    localStorage.setItem('products', JSON.stringify(fetchData))

}

