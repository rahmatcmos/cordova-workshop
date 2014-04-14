var app = {

	initialize : function(){
		this.bindEvents();
	},

	bindEvents : function(){
		document.addEventListener('deviceready',this.onDeviceReady, false);
	},

	onDeviceReady : function(){
		app.loadStories();
	},

	loadStories : function(){
		$.mobile.loading( 'show',{});
		$.ajax({
			url :'http://hackerpins.com/api/v1/stories',
			method : 'GET',
			dataType : 'json',
			success : function(data){
				$.mobile.loading( 'hide',{});
				$('#stories').empty();
				$.each(data, function(i , story){
					$("#stories").append('<li><a href="'+story.url+'" target="_blank"><h3>'+story.title+'</h3><p>'+story.description+'</p></a></li>')	
				});
				$('#stories').listview('refresh');
			},
			error : function(XMLHttpRequest,textStatus, errorThrown) {   
                $.mobile.loading( 'hide',{});  
				alert("Something wrong happended on the server. Try again..");  
			}
		});
	}
};

