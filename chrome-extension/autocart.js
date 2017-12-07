function addToCart() {
	var list = document.getElementsByName("add")[0];
    function toCheckout() {
        var out = document.getElementsByName("checkout")[0];
        console.log(out);
        if (out !== undefined) {
            document.getElementById("paypal-express-button").click();
            console.log("work");
        } else {setTimeout(toCheckout, 10);}
    }
	if (list !== undefined) {
       document.getElementById("addToCart").click();
       toCheckout();
	} else {
      setTimeout(addToCart(), 250);
  }
} setTimeout(addToCart(), 250);