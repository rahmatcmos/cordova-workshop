var app = {
    initialize: function() {
    	this.bindEvents();
    },
    
    bindEvents: function() {
    	document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        $('.hot').on('tap', app.loadHotStories);   
        $('.upcoming').on('tap', app.upcomingStories); 
        $('.new').on('tap', app.newStoryForm); 
        app.loadHotStories();
    },

    openStory : function(event){
        event.preventDefault();
        var url = $(this).attr("href");
        window.open(url, '_blank', 'location=yes');
    },

    loadHotStories: function(event){
        if(event){
            event.preventDefault();
        }
        $("#main").empty();
        $('.hot').addClass("ui-btn-active");
        $('.upcoming').removeClass("ui-btn-active");
        $('.new').removeClass("ui-btn-active");
        $('#main').html(app.template("story-listing"));
        $.mobile.loading( 'show',{});
        $.ajax({
                url: 'http://www.hackerpins.com/api/v1/stories',
                dataType: 'json',
                success: function(data) {
                    $.mobile.loading( 'hide',{});
                    $.each(data, function(i, story){
                        var storyTemplate = $("#story-template").html();
                        $("#stories").append(Mustache.to_html(storyTemplate,story));
                    });
                    $("#stories").listview().listview("refresh");
                    $('.storyUrl').on('tap',app.openStory);
                    
                },
                error : function(XMLHttpRequest,textStatus, errorThrown) {   
                    $.mobile.loading( 'hide',{});  
                    alert("Something wrong happended on the server. Try again..");  
                }
            });
    },

    upcomingStories : function(event){
        if(event){
            event.preventDefault();
        }
        $("#main").empty();
        $('.hot').removeClass("ui-btn-active");
        $('.upcoming').addClass("ui-btn-active");
        $('.new').removeClass("ui-btn-active");
        $('#main').html(app.template("story-listing"));
        $.mobile.loading( 'show',{});
        $.ajax({
                url: 'http://www.hackerpins.com/api/v1/stories/upcoming',
                dataType: 'json',
                success: function(data) {
                    $.mobile.loading( 'hide',{});
                    $.each(data, function(i, story){
                        var storyTemplate = $("#story-template").html();
                        $("#stories").append(Mustache.to_html(storyTemplate,story));
                    });
                    $("#stories").listview().listview("refresh");
                    $('.storyUrl').on('tap',app.openStory);
                    
                },
                error : function(XMLHttpRequest,textStatus, errorThrown) {   
                    $.mobile.loading( 'hide',{});  
                    alert("Something wrong happended on the server. Try again..");  
                }
            });
    },

    newStoryForm : function(event){
        event.preventDefault();
        $('.hot').removeClass("ui-btn-active");
        $('.upcoming').removeClass("ui-btn-active");
        $('.new').addClass("ui-btn-active");

        $('#main').empty();
        $('#main').html(app.template("new-story"));
        $('#main').trigger('create');
        $('#create-button').bind('tap',app.newStory);
    },

    newStory : function(event){
        event.preventDefault();
        var url = $('#newStoryForm').find("input[name='url']").val();
        var title = $('#newStoryForm').find("input[name='title']").val();
        var description = $('textarea#description').val();
        var data = {
            url : url,
            title : title,
            description : description
        }
        $.ajax({
            url :'http://www.hackerpins.com/api/v1/stories',
            type : 'POST',
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(data),
            success: function(data){
                $('#newStoryForm')[0].reset();
                app.showNotification('Submitted story', 'Info');
                app.upcomingStories();

            }
        });
    },

    template : function(name) {
        return Mustache.compile($('#'+name+'-template').html());
    },

    showNotification : function(message, title){
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }

    }
    
};