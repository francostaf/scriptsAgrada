//is necessarie edit number whatsApp or email (proof)
$(function () {
  ko.postbox.subscribe("checkout/payment/submit", function (response) {
    setTimeout(() => {
      $(
        ".confirmation .confirmation-wrapper.PIX .info-wrapper .qr-col .scan-info"
      ).html(
        '<div class="qrcode-copy"><p>Copie a nossa chave PIX: <span>10.645.100/0001-29</span></p></div><div><p>Envie o comprovante de pagamento para o <a href="https://api.whatsapp.com/send?phone=5531997438065">WhatsApp (31) 99743-8065</a></p></div>'
      );
      $(".qrcode-copy").on("click", function () {
        copyToClipboard($(".qrcode-copy p span").text());
      });
    }, 100);
  });
});
