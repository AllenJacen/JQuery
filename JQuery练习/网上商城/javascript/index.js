/**
 * Created by Administrator on 2017/8/14.
 */
$(function(){



   //搜索框
    $('#search input').on("focus",function(){
        //console.log(this.placeholder);
        this.placeholder="";

    }).on('blur',function(){
        this.placeholder="请输入商品名称";
    });

//hot
    $(".sole").append('<span class="hot"></span>');



//导航栏
    $("#mainnav li").hover(function(){
        $(this).children(".jnNav").show();
    }, function(){
        $(this).children(".jnNav").hide();
    });


//轮播图1
    $('#main-carousel div a').on("mouseover",function(){
       $(this).css("opacity","1").addClass("chosa").siblings().removeClass("chosa").css("opacity","0.7");
        $("#img img").eq($(this).index()).addClass("choose").siblings().removeClass("choose");
        //$("#img img").eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        //这里用动画是图片定位在这里的。
    })


//轮播图2
    $('#jnBrandTab li').on("click",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        console.log($("#jnBrandList li").innerWidth()*4*$(this).index());
        $("#jnBrandList").stop().animate({
             left: -$("#jnBrandList li").innerWidth()*4*$(this).index()
            },1000);

    })


//换肤
if($.cookie("skin")){
    //var skin= $.cookie("skin");
    changeSkin($.cookie("skin"));
}

 $('#skin li').on("click",function(){
    var skin=$(this).attr("id");
    $.cookie("skin",skin,{expires:30})
             changeSkin(skin);
         });

  function changeSkin(skin){
      $('#cssfile').attr("href","css/skin/"+skin+".css");
      $("#"+skin).addClass("selected").siblings().removeClass("selected");
  }




//tooltip
 tooltip("#jnNoticeInfo .tooltip");



})
