/**
 * Created by Administrator on 2017/8/9.
 */
$(":input").focusin(function(){
    $(this).addClass('focus');
    //$(this).removeAttr("value");
    //$(this).attr("value","2222");
    if($(this).val()==this.defaultValue){
        //$(this).val("");
       this.value="";
    }


}).blur(function(){
            $(this).removeClass("focus").val(this.value==''?this.defaultValue:this.value)
    }
);