
const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    let billAmt =Number(document.getElementById("bill-amt").value);
    let tipPer = Number(document.getElementById("tip-per").value);

    const result = document.querySelector("#result span");

    const tip = (billAmt * tipPer) / 100;
    const totalAmt = billAmt + tip;

    result.innerHTML = totalAmt;
})

