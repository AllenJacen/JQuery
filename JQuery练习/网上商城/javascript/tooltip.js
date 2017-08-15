/**
 * Created by Administrator on 2017/8/15.
 */
function tooltip(selecter){
    $(selecter).hover(function(e){
        this.tempTitle=$(this).attr("title");
        $("<div id='tooltip'></div>").html(this.tempTitle).offset({
            left: e.pageX+10,
            top:  e.pageY+10
        }).appendTo("body").show(500);
        $(this).removeAttr("title");
    },function(){
        $("#tooltip").remove();
        $(this).attr("title",this.tempTitle);

    }).on("mousemove",function(e){
        $("#tooltip").offset({
            left: e.pageX+10,
            top:  e.pageY+10
        })
    })



}