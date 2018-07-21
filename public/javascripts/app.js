$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky');
        }

    });

});

// JavaScript for label effects only
$(window).load(function(){
    $(".col-3 input").val("");

    $(".input-effect input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    });
});
