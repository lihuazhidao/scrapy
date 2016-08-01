/**
 * Created by zhichaoshen on 2016/8/1.
 */

/*
*
* 微博转发
* */


/*
*
*  username 用户名
*  headerLink 头像链接
*  userId 用户id
*  comment 评论内容
*  repostTime 转发时间
*  commentsCount 评论数
*  forwardsCount 转发数
*  praiseCount 点赞数
* */


import $ from 'jquery';
import _ from 'lodash';



/*
 * PARAMS 参数
 *ajwvr:6
 *id:4003603783687225
 *max_id:4003711740980405  // 翻页信息
 *page:5
 *__rnd:1470044054014  请求的时间戳
 *
 * */

var options;

function init(weiboId,url) {

    var count=0;
    var totalPage=0;
    var pageNum=1;

    options={
        ajwvr:6,
        id:4003603783687225,
        max_id:4003711740980405 ,
        page:5,
        __rnd:Date.now()
    }
}




function parseRepost(html) {

    var reposts=[];
    var dom=$(html);
    var  repostsDom=dom.find(".list_li.S_line1.clearfix");


/*  username 用户名
    *  headerLink 头像链接
    *  userId 用户id
    *  comment 评论内容
    *  repostTime 转发时间
    *  forwardsCount 转发数
    *  praiseCount 点赞数
    *
    *  */


    _.each(repostsDom,function(e){
        var repost={};
        repost.username=$(e).find(".WB_face.W_fl img").attr("alt");
        repost.headerLink=$(e).find(".WB_face.W_fl img").attr("src");
        repost.userId=$(e).find(".WB_text a[node-type]='name'").text();
        repost.comment=$(e).find(".WB_text span[node-type='text']").html();
        repost.comment=repost.comment.trim();
        repost.forwardsCount =$(e).find("a[action-type='feed_list_forward']").text().replace("转发").trim();
        if(repost.forwardsCount==""){
            repost.forwardsCount=0;
        }
        repost.forwardsCount=parseInt(forwardsCount);
        repost.praiseCount =$(e).find("a[node-type='like_status'] em").text();
        reposts.push(repost);
    });





}

export  default init;