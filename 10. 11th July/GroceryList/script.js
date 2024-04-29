function calcTotal() {
    const prices = document.querySelectorAll("td[data-ns-test='price']");
    const priceArray = Array.from(prices);
    const total = priceArray.reduce((previousValue, currentValue) => {
        return Number.parseInt(currentValue.innerText) + previousValue;
    }, 0);
    const grandTotalAttribute = document.querySelector("td[data-ns-test='grandTotal']");
    if (!grandTotalAttribute) {
        grandTotal(total);
    } else {
        grandTotalAttribute.innerText = total;
    }
}

function grandTotal(total) {
    const tr = document.createElement("tr");
    const tdInfo = document.createElement("td");

    tdInfo.innerText = "Grand Total:";
    const tdTotal = document.createElement("td");
    tdTotal.innerText = total;
    tdTotal.setAttribute("data-ns-test", "grandTotal");
    tr.appendChild(tdInfo);
    tr.appendChild(tdTotal);

    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
}