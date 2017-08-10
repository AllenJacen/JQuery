/**
 * Created by Administrator on 2017/8/10.
 */
/*1.单选添加功能
2.全选添加功能
3.双击添加功能*/
var $selected1=$('#select1');
var $selected2=$('#select2');
$("#add").on("click",function(){
    $("#select1 option:selected").appendTo("#select2");
});
$("#remove").on("click",function(){
    $("#select2 option:selected").appendTo("#select1");
});
$("#add_all").on("click",function(){
    $("#select1 option").appendTo("#select2");
})
$("#remove_all").on("click",function(){
    $("#select2 option").appendTo("#select1");
});
//$('#select1 option:selected').on(）
//注意：上面这句语句在页面一加载时绑定完成。页面加载时没有任何选中。所以会导致一个都没绑定上。
 $selected1.on("dblclick",function(e){
     //$(this).appendTo("#select2")
     console.log(this);
     if(this!=e.target){
         $(e.target).appendTo("#select2");
     }

 })
$selected2.on("dblclick",function(e){
    //$(this).appendTo("#select1")
    if(this != e.target) {
        $(e.target).appendTo("#select1");
    }

})