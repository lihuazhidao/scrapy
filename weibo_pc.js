/**
 * Created by zhichaoshen on 2016/8/1.
 */
/*
*
* PC端微博列表
*
* */




import $ from 'jquery';



function postWeibo(url,data){

    $.post(url,data,function(message){
        console.log(message);
    });
}


export default postWeibo;
export default  postRepost;






