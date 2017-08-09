/**
 * Created by Administrator on 2017/8/9.
 */
$(":input").focusin(
    function(){
        $(this).addClass("focus");
    }
)
$(":input").focusout(
    function(){
       $(this).removeClass("focus");
    }
)
 //:input 选择所有 input, textarea, select 和 button 元素.
//The :input 选择器基本上选择所有表单控件。

