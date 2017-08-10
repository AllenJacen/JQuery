/**
 * Created by Administrator on 2017/8/9.
 */
$("#div1 input:eq(0)").on("click", function () {
    var $height=$("#div1 #txa");
    $height.height($height.height()<=500?$height.height()+50:$height.height())
})
$("#div1 input:eq(1)").on("click", function () {
    var $height=$("#div1 #txa");
    $height.height($height.height()>=50?$height.height()-50:$height.height().hide())
})