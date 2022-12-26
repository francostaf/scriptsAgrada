$(".bt.more").on("click", function(e) {
  const item = $(this).closest('.wd-product-line');
  const quantProduct = $('[name="Products[0].Quantity"]', item);
  const productArrayQtd = Array.from(quantProduct);
  for (let i = 0; i <= productArrayQtd.length - 1; i++) {
    console.log(productArrayQtd[i].getAttribute("value"));
  }
});




