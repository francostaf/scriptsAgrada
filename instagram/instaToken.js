try {
	const showAssetInstagram = item => {
		if (item.media_type == 'VIDEO') {
			return item.thumbnail_url;
		}
		return item.media_url;
	};
	
	const token = 'IGQVJVbDh4R0FjclpCQ19GS2hpY1phVkJDRHRHdDRxNzRoZAzVyN3hOdmtZATk1DTkMyaXZAYWmNXak44OUtSNnJIMVAxdEdIREd0OURQclhNMXVzNEljRGFuYkNBTXgyVWZADTjFKejVmM0o3WFVxWXh5SwZDZD';
	
	$.ajax({
		url: 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=' + token
	}).done(response => {
		var html = `
			<ul class="instagram">
				<li class="col-1">
					<a href="${response.data[0].permalink}" class="photo-1" target="_blank"><img src="${showAssetInstagram(response.data[0])}"></a>
				</li>			
				<li class="col-1">
					<a href="${response.data[1].permalink}" class="photo-2" target="_blank"><img src="${showAssetInstagram(response.data[1])}"></a>
				</li>
				<li class="col-1">
					<a href="${response.data[2].permalink}" class="photo-3" target="_blank"><img src="${showAssetInstagram(response.data[2])}"></a>
				</li>
				<li class="col-1">
					<a href="${response.data[3].permalink}" class="photo-4" target="_blank"><img src="${showAssetInstagram(response.data[3])}"></a>
				</li>
				<li class="col-1">
					<a href="${response.data[4].permalink}" class="photo-5" target="_blank"><img src="${showAssetInstagram(response.data[4])}"></a>
				</li>
				
			</ul>`;
		$('#instagram-container').html(html);
	});
} catch (e) {}
