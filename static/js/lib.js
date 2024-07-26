
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=1199 ){
				$('.nav').stop().slideDown("fast");
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=1199 ){
				$('.nav').stop().slideUp("fast");
			}
		}
	});

    // 导航
    function myNav(){
        var _winw = $(window).width();
        if( _winw>1199 ){
            $('.nav').show().addClass('nav-pc').removeClass('nav-m');
            $('body,.menuBtn').removeClass('open');
        }else{
            $('.nav').hide().addClass('nav-m').removeClass('nav-pc');
            // var navLength = $('.nav > li').length;
            // for(var i = 0; i < navLength; i++) {
            //     if( $(".nav li").eq(i).children('.v1').siblings('dl').length ){
            //         $(".nav li").eq(i).children('.v1').addClass('v1-ok');
            //     }
            // };
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });
    // $('.nav-pc li').bind('mouseenter',function() {
    //     $(this).find('.subBox').stop().slideDown("fast");
    //     if( $(this).find('.subBox').length ){
    //         $(this).addClass('ok');
    //     }
    // });
    // $('.nav-pc li').bind('mouseleave',function() {
    //     $(this).removeClass('ok');
    //     $(this).find('.subBox').stop().slideUp("fast");
    // });
    $('.nav-m .v1').click(function(){
        $(this).parents(".nav").find("dl").stop().slideUp("fast");
        if( $(this).siblings('dl').length ){
            $(this).siblings('dl').stop().slideToggle("fast");
            return false;
        }
    });

    // 头部搜索框
    $(".soBox .btn-so").click(function(){
        $(this).parent(".soBox").addClass('ok');
    });
    $(".soBox").click(function(event){
        event.stopPropagation(event);
    });
    $("body").click(function(event){
        $(".soBox").removeClass('ok');
    });

    // 头部滑动变色
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top > 0 ){
            $('.header').addClass('small');
        }else{
            $('.header').removeClass('small');
        }
    });

    

    // 弹出框
    $('.myfancy').click(function(){
        var _id = $(this).attr('href');
        $(_id).animate({"left":"0"}, 500);
        $(_id).find(".pop-bg").fadeIn();
    });
    $('.pop-bg,.close').click(function(){
        $(this).parents('.m-pop').animate({"left":"9999px"}, 500);
        $(".pop-bg").fadeOut();
    });

    // 选项卡 鼠标点击切换
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });

    $(".TAB_CLICK2 li").click(function(){
      var tab=$(this).parent(".TAB_CLICK2");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).removeClass('hide').siblings(con).addClass('hide');
    });

    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function(){
      var tab=$(this).parent(".TAB");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 返回顶部
    $('.go-top').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });


	
	
});