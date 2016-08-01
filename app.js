import $ from 'jquery';
import _ from'lodash';
import parseWeibo from'./weibo_piece';
import {postWeibo} from './weibo_pc';

window.onload=function () {


  var mainPath=window.location.origin+window.location.path;
  var commentPath=mainPath+'?type=comment';
  var repostPath=mainPath+'?type=repost';




  var weiboDom=$("#Pl_Official_WeiboDetail__88");
  var weibo=parseWeibo(weiboDom);
  console.log(weibo);
  // postWeibo('xxxx',weibo);//将信息发送到后台




  var comment_ajax_url='http://weibo.com/aj/v6/comment/big';

  /*
   PARAMS 参数
   *ajwvr=6
   * id=4003603783687225
   * max_id=4003679273469375
   * page=2
   * __rnd=1470037821265
   *
   * */
  var repost_ajax_url='http://weibo.com/aj/v6/mblog/info/big';








};



















