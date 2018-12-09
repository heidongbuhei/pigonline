$(document).ready(function () {
    //切换猪场、信息中心
    $(".border-top2-frist").on('click', function () {
        $(this).children(".border-top2-second").fadeToggle(300);
    });
    //左部菜单显示与隐藏
    $(".left-menu-first").on('click', function () {
        $(this).next().slideToggle();
        // $(this).siblings(".left-menu-first").next().slideUp();
    });
    $(".left-menu-second").on('click', function () {
        $(this).next().slideToggle();
        // $(this).siblings(".left-menu-second").next().slideUp();
    });
    //左部菜单图标转换
    $(".left-menu-first").on('click', function () {
        $(this).children(".fa").toggleClass("fa-angle-up");
        $(this).children(".fa").toggleClass("fa-angle-down")
    });
    $(".left-menu-second").on('click', function () {
        // var  bb=$(this).next(".left-menu-3");
        // var cc=bb[0].attr("display");
        // console.log(cc);
        $(this).children(".fa").toggleClass("fa-minus");
        $(this).children(".fa").toggleClass("fa-plus");
    });
    //左部菜单颜色转换
    // $(".left-menu-third").on('click',function () {
    //     $(this).children("a").css("color","rgb(241,179,63)");
    //     $(this).siblings(".left-menu-third").children("a").css("color","white");
    //     // $(this).parent(".left-menu-3").parent(".left-menu-2").siblings(".left-menu-first").children(".left-menu-2").children(".left-menu-3").children(".left-menu-third").children("a").css("color","white");
    //
    // });
    $("a").on('click',function () {
       $(this).css("text-decoration","none");
    });

    //表格上部页内页面
    $(".title1-drs").on('click', function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-drs").css("display", "block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-ddn,.title1-1-sjyc").css("display", "none");
        $(this).css("border-top", "2px solid red");
        $(this).siblings(".title1").css("border-top", "1px solid #cccccc")
    });
    $(".title1-dpz").on('click', function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz").css("display", "block");
        $(this).css("border-top", "2px solid red");
        $(this).siblings(".title1").css("border-top", "1px solid #cccccc")
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-drs,.title1-1-dfm,.title1-1-ddn,.title1-1-sjyc").css("display", "none");
    });
    $(".title1-dfm").on('click', function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dfm").css("display", "block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-drs,.title1-1-ddn,.title1-1-sjyc").css("display", "none");
        $(this).css("border-top", "2px solid red");
        $(this).siblings(".title1").css("border-top", "1px solid #cccccc")
    });
    $(".title1-ddn").on('click', function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-ddn").css("display", "block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-drs,.title1-1-sjyc").css("display", "none");
        $(this).css("border-top", "2px solid red");
        $(this).siblings(".title1").css("border-top", "1px solid #cccccc")
    });
    $(".title1-sjyc").on('click', function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-sjyc").css("display", "block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-ddn,.title1-1-drs").css("display", "none");
        $(this).css("border-top", "2px solid red");
        $(this).siblings(".title1").css("border-top", "1px solid #cccccc")
    });
    //系统弹窗
    $(".picadd-add").click(function () {
        $(".popup").fadeToggle(200);
    });
    $(".close-pic").click(function () {
        $(".popup").fadeToggle(200);
    });


    window.onload=function (ev) {
        showtable();
    };
    //渲染表格
    function showtable() {
        $.ajax({
            type: "get",
            url: "http://10.2.130.251:8086/test/pagination",
            data: {
                page:1,
                page_size:34
            },
            async: true,
            dataType: "json",

            success: function (res) {
                console.log(res);
                if(res.code==0){
                    var str="",
                        table1=document.getElementById('table1');

                    for(i=0;i<res.data.rows.length;i++){
                        var earMark=res.data.rows[i].earMark,
                            position=res.data.rows[i].position,
                            recordType=res.data.rows[i].recordType,
                            recordTime=res.data.rows[i].recordTime,
                            happenedDayNum=res.data.rows[i].happenedDayNum,
                            daysOverdue=res.data.rows[i].daysOverdue;
                        console.log(daysOverdue);
                        str += "<tr>" +
                            "<td>" + earMark + "</td>" +
                            "<td>" + position + "</td>" +
                            "<td>" + recordType + "</td>" +
                            "<td>" + recordTime + "</td>" +
                            "<td>" + happenedDayNum + "</td>" +
                            "<td>" + daysOverdue + "</td>" +
                            "<td>" +
                            "<input type=checkbox>" +
                            "<input type='button' value='登记配种' style='border-radius: 5px;background:#ffe2b6;border:none;outline: none;padding:1px 3px'>" +
                            "</td>"+
                            "</tr>";
                    }
                    table1.innerHTML=str;

                    //分页
                    $('.table-btn tbody').paginathing({
                        perPage:6,
                        insertAfter:'.table-btn',
                        pageNumbers:true,
                        containerClass:'pagination-container pull-left'
                    });


                }
            },
            error: function (res) {
                console.log(res.status);
            }
        })
        // console.log(showtable());
    }



    //动态加载页面
    var url = location.host;//获得本地端口
    console.log(url);

    //动态获取href属性的值
    var pagrUrl
    $(".left-menu-third").on('click','a',function () {
        $(".change-part").empty();
        pagrUrl = $(this).attr("href").substr(1);
        console.log(pagrUrl);
        uploadPage();
    });

    //返回首页
    $(".home").on('click','a',function () {

       $(".change-part").empty();
        uploadLocalPage();
        console.log("111");
    });

    //动态渲染页面
    function uploadPage() {
        $.ajax({
            url:"https://heidongbuhei.github.io/test/pages/"+pagrUrl,
            type:"get",
            data:{},
            async:true,
            dataType:"html",
            beforeSend:function(){
                $(".loading-box").show();
            },
            complete:function(){
                $(".loading-box").hide();
            },
            success:function (data) {
                console.log(data);
                $(".change-part").html(data);

            },
            error:function (data) {
                console.log(data.status);
            }
        })
    }

    function uploadLocalPage() {
        $.ajax({
            url:"https://heidongbuhei.github.io/test/pages/home_page.html",
            type:"get",
            data:{},
            async:true,
            dataType:"html",
            beforeSend:function(){
                $(".loading-box").show();
            },
            complete:function(){
                $(".loading-box").hide();
            },
            success:function (data) {
                console.log(data);
                var localPage=$(data).find(".home-page-part");
                $(".change-part").html(localPage);

            },
            error:function (data) {
                console.log(data.status);
            }
        })
    }
});