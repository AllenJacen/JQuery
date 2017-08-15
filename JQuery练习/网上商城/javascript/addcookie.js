/**
 * Created by Administrator on 2017/8/15.
 */
/*
* key: 变量
* val:值
* expires: 周期
* */

function addCookie(key,val,expires){
  var str= key + "=" + val;
  if(expires!=undefined){
      var date=new Date();
      date.setDate(date.getDate() + expires);
      str +=";expires="+date.toUTCString();
  }
    document.cookie=str;
};

function getCookie(key){
    var  cookie=document.cookie;
    var aCookie= cookie.split(";");
    for(var i=0;i<aCookie.length;i++){
        var arr=aCookie[i].split("=");
        if(arr[0]==key){
            return arr[1];
        }
    }
};
  function delCookie(){
      addCookie(key,'',-100);
  }