/**
 * Created by Administrator on 2017/8/9.
 */
$("#div1 input:eq(0)").on("click", function () {
    var $height=$("#div1 #txa");
    if(!$height.is(":animated"))
    {
        if($height.height()<=500){
            $height.animate({height: "+=50" },400);
        }
    }
})
$("#div1 input:eq(1)").on("click", function () {
    var $height=$("#div1 #txa");
    if(!$height.is(":animated"))
    {
        if($height.height()>=50){
            $height.animate({height: "-=50" },400);
        }
    }
})