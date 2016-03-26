/**
 * Created by Administrator on 2016/1/28.
 */


$(function(){
    <!--topbar的二维码显示隐藏-->
    (function(){
        $('.topbar-left li').mouseover(function(){
            $(this).children('div').css('display','block');
        })
        $('.topbar-left li').mouseout(function(){
            $(this).children('div').css('display','none');
        });
    })();

    /*轮播图代码*/
    (function(){
        var index = 0,
            timer = null;
        $('.slider-img li:gt(0)').hide();
        $('.point li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var i = $('.point li').index(this);
            //console.log(i);
            $('.slider-img li:eq('+i+')').fadeIn().siblings('li').hide();
            index = i;
        });


        timer = setInterval(fn,2000)
        function fn(){
            index++;
            if(index>6){
                index=0
            }
            play(index);
        }
        function play(index){
            $('.slider-img li:eq('+index+')').fadeIn('slow').siblings('li').hide();
            $('.point li:eq('+index+')').addClass('active').siblings('li').removeClass('active');
        }
        /*鼠标滑过banner 停止*/
        $('.slider').mouseover(function(){
            clearInterval(timer);
        }).mouseout(function(){
            timer = setInterval(fn,2000)
        })
    })();

    /*左右箭头*/
    (function(){
        var Btnindex=0;
        $('.price .pro-item:gt(0)').hide();
        $('.price .rightBtn').click(function(){
            Btnindex++;
            //console.log(Btnindex);
            Btnindex%=3;
            $('.price .pro-item').eq(Btnindex).fadeIn().siblings('.pro-item').hide();

        })
        $('.price .leftBtn').click(function(){
            Btnindex--;
            //console.log(Btnindex);
            Btnindex%=3;
            $('.price .pro-item').eq(Btnindex).fadeIn().siblings('.pro-item').hide();
        })
    })();

/*list遮罩层*/
    (function(){
        var arry = ['10元','20元','30元','40元','50元','60-70元','80-190元','200元以上']
        $('.date-list li').each(function(i,e){
            var str='';
            str +='<p>派发中</p>';
            str +='<p>'+arry[i]+'区大厅</p>';
            str +='<p>奖品总数量：件</p>';
            str +='<p><a href="#">点击抢奖品</a></p>';
            $(this).prepend("<div class='maskceng'></div>").children('.maskceng').html(str);
            //console.log(arry[i]);
        })

        $('.date-list li').mouseenter(function(){
            $(this).children('.maskceng').stop().slideDown();
        })
        $('.date-list li').mouseleave(function(){
            $(this).children('.maskceng').stop().slideUp();
        })
    })();

/*小三角*/
    $('.topline span').mouseover(function(){
        $(this).children('i').addClass('active2');
        $(this).siblings().children('i').removeClass('active2');
        $(this).children('ul').css('display','block');
        $(this).siblings().children('ul').css('display','none');
    });

    $('.hot-item').mouseenter(function(){
        var flag = $(this).attr('class').toString().split(" ");
        //console.log(flag.length );
        if(flag.length==1){
            $(this).children('.hot-bg-mask').css('display','block').stop().animate({
                'height':'264px',
                'width':'215px'
            });
            $(this).siblings().children('.hot-bg-mask').css('display','none').stop().animate({
                'height':'0px',
                'width':'0px'
            });
        }else{
            $(this).children('.hot-bg-mask').css('display','block').stop().animate({
                'width':'150px',
                'height':'161px'
            });
            $(this).siblings().children('.hot-bg-mask').css('display','none').stop().animate({
                'width':'0px',
                'height':'0px'
            });
        }
    });
    /*回到顶部*/
    (function(window){
        $(window).scroll(function() {
            var scrollHeight= $(window).scrollTop();
            if (scrollHeight >=200){
                $(".scroll").fadeIn(200);
            }else{
                $('.scroll').fadeOut(200);
            }
            });
        $('.scroll').click(function(){
            var speed=200;//滑动的速度
            $('body,html').animate({ scrollTop: 0 }, speed);
            return false;
        })
    })(window)

    /*tab切换栏*/
    $('.listbox_title li').click(function(e){
        e.preventDefault();
        $(this).addClass('listbox_active').siblings('li').removeClass('listbox_active');
        var className = $(this).attr('class').split(' ')[0];
        if(className=='item1'){
            $('.spxq').css('display','block');
            $('.zjjl').css('display','block');
            $('.sjxq').css('display','block');
        }else if(className=='item2'){
            $('.spxq').css('display','none');
            $('.zjjl').css('display','block');
            $('.sjxq').css('display','none');
        }else {
            $('.spxq').css('display','none');
            $('.zjjl').css('display','none');
            $('.sjxq').css('display','block');
        }
    });
    $('.jiazai').click(function(e){
        e.preventDefault();
        setTimeout(function(){
            $('.jiazai').children('a').html('已经没有记录了...');
        },500);
    })

})
/*瀑布流*/

window.onload = function () {
    $('.hot-lists').waterFall();
}








