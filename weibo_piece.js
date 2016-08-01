/**
 * Created by zhichaoshen on 2016/8/1.
 */


import 'jquery';

/*
*
* 单条微博
* */

/*
 *  username 用户名
 *  userid 用户id
 *  headerLink 头像链接
 *  userLink 用户主页链接
 *  createAt 发博时间
 *  content 微博内容
 *  source 来源
 *  weiboId 微博ID
 *  weiboLink 微博链接
 *  forwardsCount 转发数
 *  commentsCount 评论数
 *  praiseCount 点赞数
 *  comments 评论
 *  reposts 转发
 */




function parseWeibo(dom) {

var userLink=dom.find(".W_face_radius").attr("href");
var headerLink=dom.find(".W_face_radius img").attr("src");
var username=dom.find(".W_face_radius img").attr("alt");
var content=dom.find(".WB_text.W_f14").html();
    content=content.trim();
var createAt=dom.find(".WB_from.S_txt2 a[suda-data]").attr("date");
var weiboLink=dom.find(".WB_from.S_txt2 a[suda-data]").attr("href");
var weiboId=dom.find(".WB_from.S_txt2 a[suda-data]").attr("name");
var source=dom.find(".WB_from.S_txt2 a[suda-uatrack]").text();
var forwardsCount=dom.find(".WB_handle a[action-type='fl_forward'] em:last").text();
    forwardsCount=parseInt(forwardsCount);
var commentsCount =dom.find(".WB_handle a[action-type='fl_comment'] em:last").text();
    commentsCount=parseInt(commentsCount);
var praiseCount=dom.find(".WB_handle a[action-type='fl_like'] span[node-type='like_status'] em ").text();
    praiseCount=parseInt(praiseCount);
var comments=[];
var reposts=[];

    return {
        userLink,
        headerLink,
        username,
        content,
        createAt,
        weiboLink,
        weiboId,
        source,
        forwardsCount,
        commentsCount,
        praiseCount,
        comments,
        reposts
    }
}



export  default  parseWeibo;