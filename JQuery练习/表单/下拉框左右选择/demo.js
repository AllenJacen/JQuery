/**
 * Created by Administrator on 2017/8/10.
 */
/*1.��ѡ��ӹ���
2.ȫѡ��ӹ���
3.˫����ӹ���*/
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
//$('#select1 option:selected').on(��
//ע�⣺������������ҳ��һ����ʱ����ɡ�ҳ�����ʱû���κ�ѡ�С����Իᵼ��һ����û���ϡ�
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