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
 //:input ѡ������ input, textarea, select �� button Ԫ��.
//The :input ѡ����������ѡ�����б��ؼ���

