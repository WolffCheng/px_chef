const preload = () => {
    $(".Vote_Count").hide()
    Get_Vote();
}

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
    preload();
else
    document.addEventListener("DOMContentLoaded", preload);


function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

class Initialization {
    constructor(isMobile) {
        this.isMobile = isMobile;

        // this.particle = particle;


        // this.setup();

        // this.bindEvents();
    }


}

const init = new Initialization(mobileCheck());




function Get_Vote(){
    $.post('https://script.google.com/macros/s/AKfycbysf2PxazM7jSvOrE3aapndPQB0CYzKZR8g7qeLgZ-3HQ8xTIzsQBphFnJ2t8WqEd_JZA/exec', {
        f: "GetVoteCount"
    }, function (json) {
        console.log(json);
        for (a = 0; a < Object.keys(json).length; a++) 
            $(".Vote_Count[chef_data='" + Object.keys(json)[a] + "']").text(Object.values(json)[a] + "票");
        $(".Vote_Count").show();
    });

}












var warping = false; // stop user action on warping
var isMobile = false;
isMobile = mobileCheck();

function JumpContent(destination, target) {
    warping = true;
    $('html, body').animate({ scrollTop: $(destination).offset().top - 54 }, 500, function () {
        warping = false;
    });
    if (target != null)
        $(target).addClass("active").siblings().removeClass("active");
    else
        $("#mobile_menu").hide();
}


$(function () {
    // For mobile
    $("#mobile_nav_btn").click(function () {
        if ($("#mobile_menu").is(":visible"))
            $("#mobile_menu").hide();
        else
            $("#mobile_menu").show();
    });
    $("#recipe_bot_btn").click(function () {
        $("#recipe_panel").fadeIn(800);
        $("html, body").addClass("recipe_open");
    });
    $("#mobile_menu").click(function () {
        $("#mobile_menu").hide();
    });


    // 回到最上 -------------------------------------- 
    if ($(window).scrollTop() != 0) {
        $("#to_top_btn").fadeIn(); // reset
    }
    $("#to_top_btn").click(function () {
        var page = $("html, body");
        $("#to_top_btn").css("pointer-events", "none");
        page.animate({
            scrollTop: 0
        }, 900, function () {
            // page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            $("#to_top_btn").css("pointer-events", "auto");
        });

        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            page.stop();
            $("#to_top_btn").css("pointer-events", "auto");
        });
        return false;
    });


    // warp to Sec B -------------------------------------- 
    $(".bot_arrow").click(function () {
        $('html, body').animate({ scrollTop: $("#Section_A").outerHeight() }, 500);
    });


    // Sec B -------------------------------------- 
    $("#judge1, .judge1_box").click(function () {
        $(".judge1_descr").show().siblings().hide()
    });
    $("#judge2, .judge2_box").click(function () {
        $(".judge2_descr").show().siblings().hide()
    }).click();
    $("#judge3, .judge3_box").click(function () {
        $(".judge3_descr").show().siblings().hide()
    });
    $("#get_pdf_btn").click(function () {
        window.open("./全聯料理爭霸戰_比賽辦法.pdf");
    });


    // 更多美味資訊 -------------------------------------- 
    $("#recipe_btn").mouseenter(function () {
        var rand = Math.floor(Math.random() * 3 + 1);
        var target = $(this).find("div > img:nth-child(" + rand + ")");
        target.show().siblings(".img_card").hide();
        $(this).find("div > b").text(target.attr("alt"));
    });

    $("#recipe_btn").click(function () {
        // $("#recipe_panel").animate({ width: 'toggle' }, 900);
        $("#recipe_panel").fadeIn(800);
        $("html, body").addClass("recipe_open");
    });
    $("#close_recipe_btn").click(function () {
        // $("#recipe_panel").animate({ width: 'toggle' }, 900);
        $("#recipe_panel").fadeOut();
        $("html, body").removeClass("recipe_open");
    });

    if (!isMobile) {
        $("#bear").hover(
            function () { // init bear anim
                $("#bear").hide();
                $("#bear_anim").show();
            }
        );
    }
    else {
        $(".dispose").remove();
        if (window.orientation == 90) { // landscape
            if (window.innerHeight <= 576) { // Change main topic image
                $("#main_mobile_long").css("display", "block");
                $("#main_mobile").css("display", "none");
                $("#main").css("display", "none");
            }
        }
    }
    $(window).on('orientationchange', function (event) {
        if (isMobile) {  // Change main topic image
            if (window.orientation == 90) { // landscape 
                if (window.innerWidth <= 576) {
                    $("#main_mobile_long").css("display", "block");
                    $("#main_mobile").css("display", "none");
                    $("#main").css("display", "none");
                }
            }
            else if (window.orientation == 0) { // portrait
                $("#main_mobile_long").css("display", "none");
                $("#main_mobile").css("display", "block");
            }
        }
    });


    // switch-tab -------------------------------------- 
    $("#Section_B .switch-tab li").click(function () {
        $("#Section_B .switch-tab li").find("img").removeClass("active");
        $(this).find("img").addClass("active");

        $(this).addClass("active").siblings().removeClass("active");
        $("#Section_B .switch-content > div").eq($(this).index()).fadeIn(300).siblings().hide();
    }).eq(0).click();
    $("#Section_D .switch-tab li").click(function () {
        $("#Section_D .switch-tab li").find("img").removeClass("active");
        $(this).find("img").addClass("active");

        $(this).addClass("active").siblings().removeClass("active");
        $("#Section_D .switch-content > div").eq($(this).index()).fadeIn(300).siblings().hide();
    }).eq(0).click();
    $("#recipe_panel .switch-tab li").click(function () {
        $("#recipe_panel .switch-tab li").find("img").removeClass("active");
        $(this).find("img").addClass("active");

        $(this).addClass("active").siblings().removeClass("active");
        $("#recipe_panel .switch-content > div").eq($(this).index()).fadeIn(300).siblings().hide();
    }).eq(0).click();


    // Sec D 收合展開  -------------------------------------- 
    $("#Expand_Btn").on("click", function () {
        $("#Hide_Content").is(":hidden") ?
            ($("#Hide_Content").slideDown(400), $(this).find(".expand_text").text("收合"), $(this).find(".expand_arrow").css("transform", " rotate(180deg)"))
            : ($("#Hide_Content").slideUp(400), $(this).find(".expand_text").text("展開"), $(this).find(".expand_arrow").css("transform", " rotate(0deg)"))
    });


    // Check Section on Scroll -------------------------------------- 
    var nav_sec = $(".nav li img");
    CheckSection($(window).scrollTop());

    $(window).scroll(function () {
        if (warping) return;
        var pos = $(window).scrollTop();
        CheckSection(pos);
        if (pos > 0) {
            $("#to_top_btn").fadeIn();
        } else {
            $("#to_top_btn").fadeOut();
        }
    })
    function CheckSection(pos) {
        if (pos <= $("#Section_A").outerHeight()) {
            nav_sec.parent().siblings().removeClass("active");
        }
        else if (pos >= $("#Section_A").outerHeight() && pos < $("#Section_A").outerHeight() + $("#Section_B").outerHeight() - 1) {
            nav_sec.parent().eq(0).addClass("active").siblings().removeClass("active"); // + $("#VideoSwiper_Container").outerHeight()
        }
        else if (pos >= $("#Section_C").offset().top - 60 && pos < $("#Section_C").offset().top - 60 + $("#Section_C").outerHeight()) {
            nav_sec.parent().eq(1).addClass("active").siblings().removeClass("active");
        }
        else if (pos >= $("#Chef_Container").offset().top - 60 && pos < $("#Chef_Container").offset().top - 60 + $("#Chef_Container").outerHeight()) {
            nav_sec.parent().eq(1).addClass("active").siblings().removeClass("active");
        }
        else if (pos >= $("#Section_D").offset().top - 60 && pos < $("#Section_D").offset().top - 60 + $("#Section_D").outerHeight()) {
            nav_sec.parent().eq(2).addClass("active").siblings().removeClass("active"); // 2 --> 3
        }
    }


    // Vote Section -------------------------------------- 
    $(".Vote_Btn").click(function () {
        // reset 
        $("#Modal_Status_Text").text("");
        if (!isMobile) {
            $("#bear").show();
            $("#bear_anim").hide();
        }

        var Selected_Chef = $(this).attr("index"); // chef index
        $('#option_list').find("option").eq(Selected_Chef - 1).attr("selected", "selected"); // slected for input

        var target = $(".Vote_Count").eq(Selected_Chef - 1);
        $("#exampleModalLongTitle").text(target.attr("chef_data")); // name
        $("#Modal_Info").text(target.attr("chef_descr")); // info 
        $("#Modal_Img").attr("src", './img/chef/profile/' + Selected_Chef + '.png'); // img
    });

    $("#Modal_Share_Btn").hide();
    $("#Modal_Submit_Btn").click(function () {
        $("#Modal_Status_Text").text("");
        $("#Loader").show();
        checking();
        async function checking() {
            $("#Modal_Submit_Btn").hide();
            if (await CheckForm()) {
                // $("#My_Form").submit();
                setTimeout(function () {
                    Get_Vote();
                    $("#Modal_Status_Text").text("已完成投票，請分享至臉書，感謝您的參與!");
                    $("#Modal_Share_Btn").show();
                    $("#Loader").hide();
                }, 1000);
            }
            else {
                $("#Loader").hide();
            }
        }
    });

    $(".notice-btn").on("click", function () {
        $(this).next(".notice").is(":hidden") ? ($(this).next(".notice").slideDown(400), $(this).text("\u8490\u96c6\u500b\u4eba\u8cc7\u6599\u544a\u77e5\u4e8b\u9805\u53ca\u540c\u610f\u66f8 [\u4e86\u89e3\u66f4\u591a \u25b2]")) : ($(this).next(".notice").slideUp(400), $(this).text("\u8490\u96c6\u500b\u4eba\u8cc7\u6599\u544a\u77e5\u4e8b\u9805\u53ca\u540c\u610f\u66f8 [\u4e86\u89e3\u66f4\u591a \u25bc]"))
    });

});



function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(num) {
    var mobile = /^09[0-9]{8}$/;
    var housephone = /^0[1-8]{1}\d{7,8}$/;
    if (mobile.test(num) || housephone.test(num)) {
        console.log("Correct");
        return true;
    }
    else {
        console.log("Failed");
        return false;
    }
}

function CheckForm() {
    return new Promise(resolve => {
        var input_name = $('input[name="entry.329448032"]');
        var input_phone = $('input[name="entry.707783088"]');
        var input_email = $('input[name="entry.1170141712"]');

        var failed_text = "";
        if (input_name.val() == "") {
            failed_text = "請填寫姓名!";
            input_name.focus();
        } else if (input_phone.val() == "") {
            failed_text = "請填寫聯絡電話!";
            input_phone.focus();
        } else if (!validatePhone(input_phone.val())) {
            failed_text = "電話格式錯誤!";
            input_phone.focus();
        } else if (input_email.val() == "") {
            failed_text = "請填寫 email!";
            input_email.focus();
        } else if (!validateEmail(input_email.val())) {
            failed_text = "email 格式錯誤!";
            input_email.focus();
        }

        if (failed_text != "") {
            $("#Modal_Status_Text").text(failed_text);
            $("#Modal_Submit_Btn").show();
            resolve(false);
            return;
        }
        
        $.post('https://script.google.com/macros/s/AKfycbysf2PxazM7jSvOrE3aapndPQB0CYzKZR8g7qeLgZ-3HQ8xTIzsQBphFnJ2t8WqEd_JZA/exec', {
            f: "add",
            name: input_name.val(),
            cell: input_phone.val(),
            email: input_email.val(),
            chef: $('#option_list').val()
        }, function (e) {
            console.log(e);
            if (e == "false") {
                $("#Modal_Status_Text").text("此電話號碼已投過票! 請勿重複投票");
                $("#Modal_Submit_Btn").show();
                resolve(false);
            }
            else {
                resolve(true);
            }
        });

    });

}

