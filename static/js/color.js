$(function(){
    $(window).on('load',function(){
        $("#pageloading-wrap").fadeOut();
    });
    function loaderClose(){
        $("#pageloading-wrap").fadeOut();
    }
    setTimeout(loaderClose,10000);
});
function randomcolor() {
    switch (Math.floor(Math.random() * 8)) {
        case 0:
            return "blue";
            break;
        case 1:
            return "green";
            break;
        case 2:
            return "indigo";
            break;
        case 3:
            return "orange";
            break;
        case 4:
            return "pink";
            break;
        case 5:
            return "purple";
            break;
        case 6:
            return "red";
            break;
        case 7:
            return "teal";
            break;
        default:
            break;
    }
}
function CSSload() {
    if(localStorage.getItem("DarkMode")==="true"){
        $("#JSChange").attr("href","/css/DarkMode.css");
    }else if(localStorage.getItem("DarkMode")==="false"){
        $("#JSChange").attr("href","/css/LightMode.css");
    }
}
//本処理
function Onload(){
    if(localStorage.getItem("DarkMode") === null){
        //初アクセス
        if(window.matchMedia('(prefers-color-scheme: dark)').matches===true){
            localStorage.setItem("DarkMode", "true");
            Onload();
        }else if(window.matchMedia('(prefers-color-scheme: dark)').matches===false){
            localStorage.setItem("DarkMode", "false");
            Onload();
        }else{
            localStorage.setItem("DarkMode", "true");
            Onload();
        }
    }else{//再アクセス
        if (localStorage.getItem("DarkMode") === "true"){
            //ダークモード(true)
            if($("article.li").length !== 0){
                //ホーム
                CSSload();
                $("article.li").each(function () {
                    $(this).addClass("dark-"+randomcolor());
                });
            }else{
                //記事
                CSSload();
            }
        } else if (localStorage.getItem("DarkMode") === "false") {
            //ダークモード(true)
            if ($("article.li").length !== 0) {
                //ホーム
                CSSload();
                $("article.li").each(function () {
                    $(this).addClass("light-" + randomcolor());
                });
            } else {
                //記事
                CSSload();
            }
        }else{
            console.log(localStorage.getItem("DarkMode"));
            //おめー変な値入れあがったな...
            console.log("おめー変な値入れあがったな...ぜってー許さない...");
            localStorage.setItem("DarkMode", "true");
            Onload();
        }
    }
}
function modeChange() {

    if(localStorage.getItem("DarkMode") === "true"){
        //ダークモード→ライトモード
        localStorage.setItem("DarkMode","false");
        Onload();
        if($("article.sn").length!==0){
            //記事
            const tmp = $("article.sn").attr("class").split("-")[1];
            $("article.sn").removeClass("dark-"+tmp);
            $("article.sn").addClass("light-"+tmp);
        }
        }else if(localStorage.getItem("DarkMode") === "false") {
        //ライトモード→ダークモード
        localStorage.setItem("DarkMode", "true");
        Onload();
        if($("article.sn").length!==0){
            //記事
            const tmp = $("article.sn").attr("class").split("-")[1];
            $("article.sn").removeClass("light-"+tmp);
            $("article.sn").addClass("dark-"+tmp);
        }
    }
}
function OnloadPage() {
    if(sessionStorage.getItem("Home-to-Page")==null){
        //検索エンジンなどから
        Onload();
        if (localStorage.getItem("DarkMode") === "true") {
            $("article.sn").addClass("dark-" + randomcolor());
        } else if (localStorage.getItem("DarkMode") === "false") {
            $("article.sn").addClass("light-" + randomcolor());
        }
    }else{
        //index.htmlから
        Onload();
        $("article.sn").addClass(sessionStorage.getItem("Home-to-Page"));
    }
}
function buttonSetting(){
    $(".l-header").on({
        "click":function (e) {
            if(!$(e.target).is("a")){
                modeChange()
            }
        },
        "mouseenter": function (e) {
                if (localStorage.getItem("DarkMode") === "true") {
                    $(".description").css("color", "var(--Dark-Gray-5)");
                    $(".logo a").css("color", "var(--Dark-Gray-5)");
                    $(this).animate({
                        "backgroundColor":"rgb(209,209,214)",
                    },500);
                } else if (localStorage.getItem("DarkMode") === "false") {
                    $(".description").css("color", "var(--Light-Gray-5)");
                    $(".logo a").css("color", "var(--Light-Gray-5)");
                    $(this).animate({
                        "backgroundColor":"rgb(58,58,60)",
                    },500);
                }
        },
        "mouseleave": function (e) {
            $(this).stop();
            $(this).css("background-color", "");
            $(".description").css("color","");
            $(".logo a").css("color","");
        },
    });
    $("article.li>a").on("click", function () {
        sessionStorage.setItem("Home-to-Page", $(this).parent().attr("class").split(" ")[1]);
    });
}