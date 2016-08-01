import $ from 'jquery';
import _ from  'lodash';

//  用户微博列表

var noPage=[];
var total=0;
var totalPage=0;
var init_page=0;
function weibo(){

  var config=$("#box + script").html();
  eval(config)

  function getDate(success,error){
    var data={
        containerid:window.$config.stageId,
        page:init_page++
      }
    $.ajax({
      url:'http://m.weibo.cn/page/json',
      data:data,
      dataType:'json',
      success:success,
      error:error
    });
  }



  var handleTime=setInterval(function(d){
      if(init_page>totalPage && init_page!=0){
        clearInterval(handleTime);
        console.log(noPage,init_page,totalPage)
        return;
      }
        getDate(function(data){
          console.log(data)

        if(data.cards[0].mod_type=="mod/pagelist" && data.count!=""){
            if(total==0 || total==data.count){
              total=data.count;
              totalPage=total/10;
            }

           data=data.cards[0].card_group;
           data=_.map(data,function(a){
              return a.mblog
          });



        data=_.map(data,function(e){
            return {
              appid:e.appid,
              attitudes_count:e.attitudes_count,
              attitudes_status:e.attitudes_status,
              created_at:e.created_at,
              created_timestamp:e.created_timestamp,
              mid:e.mid,
              id:e.id,
              text:e.text,
              textLength:e.textLength,
              source:e.source,
              source_type:e.source_type,
              comments_count:e.comments_count,
              pic_ids:e.pic_ids,
              pics:(e.pics?e.pics:[])
            }
        });

          var lists={
            list:data
          };

          $.ajax({
            url:'http://192.168.0.236:3000/weibo',
            type:'POST',
            data:JSON.stringify(lists),
            contentType:'application/json',
            success:function(d){
              console.log(d,"page:",init_page,"now",new　Date());
            },
            error:function(err){
              console.log(err);
            }
          })
        }else{
          init_page--;
          //stop
          // clearInterval(handleTime);
        }
        },function(err){
          console.log(err);
        })
  },8000);

}


export default weibo;
