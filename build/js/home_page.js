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






    //获取href属性的值
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



var pageData = {
    tempPage:1,
    pageSize:10,
    total:0
}
$(function () {
    uploadData();
    $("#pageSizeSelector").change(function () {
        pageData.pageSize = $("#pageSizeSelector").val();
        uploadData();
    })
})


  // 渲染表格

function uploadData() {
    var rows;
    $.ajax({
        url:"http://10.2.130.251:8086/test/pagination",
        type:"get",
        data:{
            page:pageData.tempPage,
            page_size:pageData.pageSize
        },
        dataType:"json",
        async:false,
        success:function (res) {
            console.log(res);
            if (res.code == 0){
                pageData.total = res.data.total;
                $("#totalNum").text(pageData.total);
                rows = res.data.rows;
            } else{
                alert(res.msg);
            }
        },
        error:function (res) {
            alert(res.status);
        }
    })
    renderPagination();
    renderTable(rows);
}


  // 渲染分页器

function renderPagination() {
    if (pageData.pageSize >= pageData.total) {
        $(".pagination").hide();
    }else{
        $(".pagination").show();
        var totalPage = Math.ceil(pageData.total / pageData.pageSize);
        $(".pagination").empty();
        if (pageData.tempPage != 1) {
            $(".pagination").append("<li class=\"page-item\">\n" +
                "                        <a class=\"page-link\" href=\"javascript:switchPage(-1)\" aria-label=\"Previous\">\n" +
                "                            <span aria-hidden=\"true\">&laquo;</span>\n" +
                "                            <span class=\"sr-only\">Previous</span>\n" +
                "                        </a>\n" +
                "                    </li>");
        }
        for (var i = 0; i < totalPage; i++) {
            var active="";
            if ((i + 1) == pageData.tempPage) {
                active = "active";
            }
            $(".pagination").append("<li class=\"page-item "+active+"\"><a class=\"page-link\" href=\"javascript:switchPage("+(i+1)+")\">"+(i+1)+"</a></li>");
        }
        if (pageData.tempPage != totalPage) {
            $(".pagination").append("<li class=\"page-item\">\n" +
                "                        <a class=\"page-link\" href=\"javascript:switchPage(-2)\" aria-label=\"Next\">\n" +
                "                            <span aria-hidden=\"true\">&raquo;</span>\n" +
                "                            <span class=\"sr-only\">Next</span>\n" +
                "                        </a>\n" +
                "                    </li>");
        }
    }
}


  // 渲染表格

function renderTable(rows) {
    $("#pigTableBody").empty();
    for (var i = 0; i < rows.length; i++) {
        $("#pigTableBody").append("<tr>\n" +
            "                    <th scope=\"row\">"+rows[i].earMark+"</th>\n" +
            "                    <td>"+rows[i].position+"</td>\n" +
            "                    <td>"+rows[i].recordType+"</td>\n" +
            "                    <td>"+rows[i].recordTime+"</td>\n" +
            "                    <td>"+rows[i].happenedDayNum+"</td>\n" +
            "                    <td>"+rows[i].daysOverdue+"</td>\n" +
            "<td>" +
            "<input type=checkbox>" +
            "<input type='button' value='登记配种' style='border-radius: 5px;background:#ffe2b6;border:none;outline: none;padding:1px 3px'>" +
            "</td>"+
            "                </tr>");
    }
}


  // 切换页面

function switchPage(page) {
    if (page == -1) {
        if (pageData.tempPage > 1) {
            pageData.tempPage --;
        }
    }else if (page == -2) {
        if(Math.ceil(pageData.total / pageData.pageSize) > pageData.tempPage){
            pageData.tempPage ++;
        }
    }else{
        pageData.tempPage = page;
    }
    uploadData();
}