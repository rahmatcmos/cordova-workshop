$(document).on('pagecreate','#index', function(){
	alert('loadStories()...');
	loadStories();
});

function loadStories(){
	$.ajax({
		url :'http://hackerpins.com/api/v1/stories',
		method : 'GET',
		dataType : 'json',
		success : function(data){
			$('#stories').empty();
			$.each(data, function(i , story){
				$("#stories").append('<li><a href="'+story.url+'" target="_blank"><h3>'+story.title+'</h3><p>'+story.description+'</p></a></li>')	
			});
			$('#stories').listview('refresh');
		}
	})
}

