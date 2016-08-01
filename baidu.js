
import $ from 'jquery';

var total=0;
var pageSize=20;
var pageNow=0;
var keyWord='';
var searchType=0;//0 时间排序,1焦点排序
var url='http://m.news.baidu.com/news';
var    params={}

var handleTime;

function baidu(){
  var html=`<div class="component" id="madao-component" style="position:fixed;bottom:0;left:0;right:0;width:100%;height:30px;">
                    <button style="width:50%;border:none;height:30px;float:left;" class="start">Start</button>
                    <button style="width:50%;border:none;height:30px;float:left;" class="end">Stop</button>
                </div>`;


  $("body").append(html);

  $("#madao-component .start").click(function(){
    console.log("start");
      keyWord=$(".search-input input").val();
      searchType=($("#search-order-checked").attr("data-key")=="time")?0:1;
       params={
        tn:'bdapinewsearch',
        word:keyWord,
        pn:pageNow,
        rn:pageSize,
        ct:searchType,
      };
      start();

  });
  $("#madao-component .end").click(function(){
    console.log("end");
    stop();
  });
}




function start(){

  if(total>0 && pageNow>total ){
      clearInterval(handleTime);
  }else{
    handleTime=setInterval(baiduNews,2000);
  }

}

function stop(){

  clearInterval(handleTime);

}







function baiduNews(){
      $.ajax({
        url:url,
        type:"GET",
        data:params,
        dataType:'JSON',
        success:function(data){
            var lists=data.list;
                total=data.total;
                pageNow=pageNow+pageSize;
                params={
                  tn:'bdapinewsearch',
                  word:keyWord,
                  pn:pageNow,
                  rn:pageSize,
                  ct:searchType,
                };
                saveNews(lists);

        },
        error:function(err){
          console.log(err);
        }
      })
}


var saveUrl='http://192.168.0.236:3000/baidu';

  function saveNews(lists){
  var data={
    list:lists
  }
  console.log(data)
  $.ajax({
    url:saveUrl,
    type:"POST",
    data:JSON.stringify(data),
    contentType: "application/json",
    success:function(data){
      console.log(data);
    },
    error:function(err){
      console.log(err);
    }
  })

}





export default baidu;
