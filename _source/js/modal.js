'use strict'

$(function(){
    $('#get').click(function(){
        $('#modal-value').css('display', 'block');
    })
    $('#close-one').click(function(){
        $('#modal-value').css('display', 'none');
    })
    $(document).keydown(function(e){
        if(e.keyCode == 27){
            $('#modal-value').css('display' ,'none');  
        }
    })
});

$(function(){
    $('#price').click(function(){
        $('#cost').css('display', 'block');
    })
    $('#price-one').click(function(){
        $('#cost').css('display', 'block');
    })
    $('#price-two').click(function(){
        $('#cost').css('display', 'block');
    })
    $('#price-three').click(function(){
        $('#cost').css('display', 'block');
    })
    $('#price-four').click(function(){
        $('#cost').css('display', 'block');
    })
    $('#close-two').click(function(){
        $('#cost').css('display', 'none');
    })
    $(document).keydown(function(e){
        if(e.keyCode == 27){
            $('#cost').css('display' ,'none');  
        }
    })
});

$(function(){
    $('#suggestion').click(function(){
        $('#special').css('display', 'block');
    })
    $('#proposal').click(function(){
        $('#special').css('display', 'block');
    })
    $('#close-three').click(function(){
        $('#special').css('display', 'none');
    })
    $(document).keydown(function(e){
        if(e.keyCode == 27){
            $('#special').css('display' ,'none');  
        }
    })
});

$(function(){
    $('#drive').click(function(){
        $('#form-drive').css('display', 'block');
    })
    $('#close').click(function(){
        $('#form-drive').css('display', 'none');
    })
    $(document).keydown(function(e){
        if(e.keyCode == 27){
            $('#form-drive').css('display' ,'none');  
        }
    })
});