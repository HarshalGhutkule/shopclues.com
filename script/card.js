 function paymentDone(e) {
    e.preventDefault();
    let card_num = document.querySelector(".card_num").value;
    let MM = document.querySelector("#month").value;
    let YY = document.querySelector("#year").value;
    let CVV = document.querySelector("#cvv").value;
    let card_name = document.querySelector(".card_name").value;
    console.log("here");
    if (
      card_num == 123456 &&
      MM == 04 &&
      YY == 2024 &&
      CVV == 123 &&
      card_name == "Vipin awadhiya"
    ) {
      window.alert("Payment successfull");
    } else {
      document.querySelector(".invalid").style.display = "block";
    }
  }