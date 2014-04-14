var app = {

	initialize : function(){
		this.bindEvents();
	},

	bindEvents : function(){
		document.addEventListener('deviceready',this.onDeviceReady, false);
	},

	onDeviceReady : function(){
		$('#index').on('tap',app.loadStories());
		$('#new').on('tap',app.bindNewStoryEvent());
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
					$("#stories").append('<li><a class="storyUrl" href="'+story.url+'" target="_blank"><h3>'+story.title+'</h3><p>'+story.description+'</p></a></li>')	
				});
				$('.storyUrl').on('tap',app.openStory);
				$('#stories').listview('refresh');
			},
			error : function(XMLHttpRequest,textStatus, errorThrown) {   
                $.mobile.loading( 'hide',{});  
				alert("Something wrong happended on the server. Try again..");  
			}
		});
	},

	openStory : function(event){
        event.preventDefault();
        var url = $(this).attr("href");
        window.open(url, '_blank', 'location=yes');
    },

	bindNewStoryEvent : function(){
		$('#create-button').bind('tap',app.newStory);
	},

	newStory : function(event){
		event.preventDefault();
        alert('Submitted new story');
        $('#newStoryForm')[0].reset();
    }
};

