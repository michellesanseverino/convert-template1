//Money currency of the day
const USD = 4.87
const EUR = 5.32
const GBP = 6.08
const CAD = 4.15

//Getting the elements in the form
const form = document.querySelector("form")

//Selecting the input by the ID informed in the index.html
const amount = document.getElementById("amount")

//Getting the currency that was selected by the user 
const currency = document.getElementById("currency")

//Selecting the footer inside main
const footer = document.querySelector("main footer")

//Selecting description
const description = document.getElementById("description")

//Selecting the ID result informed in the index.html
const result = document.getElementById("result")

// Manipulating the amount input to only receive numbers. Here we are using the arrow function
amount.addEventListener("input", () => {
    const hasCaracteresRegex = /\D+/g
    amount.value = amount.value.replace(hasCaracteresRegex, "")
})

//Capturing the submit event in the form
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")   
            break    
        case "CAD":
            convertCurrency(amount.value, CAD, "$") 
            break
    }

}

//Converting function
function convertCurrency (amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if (isNaN(total)){
            return alert("Please, use only numbers to be able to convert correctly")
        }

        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais` 

        function formatCurrencyBRL (value) {
            return Number(value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })
        }

        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")
        console.log(error)
    }
}