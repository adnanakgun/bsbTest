
var accordionData;

function getData(data){
	accordionData = data;
}

$(document).ready(function() {	

	for(var itemCluster in accordionData.items){
		var itemList = '';
		
		for(var item in accordionData.items[itemCluster]){
			itemList += '<li>'
						+ '<img src="' + accordionData.items[itemCluster][item].image + '"/>'
						+ '<div>' + accordionData.items[itemCluster][item].text + '</div>'
						+ '</li>';
		}
		$('#accordion section').eq(itemCluster).find('ul').eq(0).html(itemList);
	}

	$('#accordion section a').click(function(event){
		event.preventDefault();
		if (!$(this).parent().hasClass('active')){
			$(this).parent().siblings().find('a span').text('Closed panel state');
			$(this).parent().siblings().removeClass('active');
			$(this).find('span').text('Open panel state');
			$(this).parent().addClass('active');
		}else{
			$(this).parent().removeClass('active');
			$(this).find('span').text('Closed panel state');
		}
	});
	

});