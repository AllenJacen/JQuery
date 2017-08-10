/**
 * Created by Administrator on 2017/8/10.
 */
var $comment=$("#comment");
$(".msg .msg_caption .down").on("click",function(){
  if(!$comment.is(":animated"))
  {
      console.log($comment.scrollTop(50));
      $comment.animate({
          scrollTop:"+=50"
      },400);
  }
})
$(".msg .msg_caption .up").on("click",function(){

    if(!$comment.is(":animated"))
    {
        $comment.animate({
            scrollTop:"-=50"
        },400);
    }

})