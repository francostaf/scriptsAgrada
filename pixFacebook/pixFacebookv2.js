<!-- Facebook Pixel Code -->
<script>
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	 n.queue=[];t=b.createElement(e);t.async=!0;
	 t.src=v;s=b.getElementsByTagName(e)[0];
	 s.parentNode.insertBefore(t,s)}(window, document,'script',
									 'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '297437088531173');
	fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=297437088531173&ev=PageView&noscript=1"/></noscript>
<!-- End Facebook Pixel Code -->


{%if Product %}
<!-- VIEW CONTENT > SOMENTE NA PÁGINA DE PRODUTO  -->
<script>
	fbq('track', 'ViewContent');
</script>
{% elsif Urls.CurrentUrl == Urls.Shopping.Basket.Index %}
<!-- ADD TO CART > SOMENTE NA PÁGINA DO CARRINHO -->
<script>
	fbq('track', 'AddToCart');
</script>
{% elsif Urls.CurrentUrl contains Urls.Shopping.Checkout.Start%}
<!-- PURCHASE - EASY CHECKOUT > SOMENTE ETAPA 4 - CONFIRMAÇÃO -->
<script>
	fbq('track', 'InitiateCheckout');

        $(document).ready(function(){
      
			ko.postbox.subscribe('checkout/payment/submit', function(response) {

				if (response.Response.IsValid) {

					var products = [];
					var contentIds = [];
					var basketTotal = EasyCheckout.ModelData.Basket.Total;

					EasyCheckout.ModelData.Basket.Items.forEach(function (item) {
						products.push(item.Name);
						contentIds.push(item.SKU);
					});

					fbq('track', 'Purchase', {
						contents: products,
						content_ids: contentIds,
						content_type: 'product',
						value: basketTotal,
						currency: 'BRL'
					});
				}

			});

        });
</script>
{%endif%}
