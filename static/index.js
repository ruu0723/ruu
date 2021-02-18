

// 問題集
const quiz = [{
    question: '初めてるうくんと出会った日はいつでしょうか?',
    answer: [
        '10/9',
        '9/7',
        '8/12'
    ]
}, {
    question: '',
    answer: [
        '',
        '',
        ''
    ]    
}]


$(function () {
    // top
    let death = 0
    // 救出に向かうアクション
    $(".go").on("click", function () {
        $(this).css({ "box-shadow": "none", "position": "relative", "top": "5px" });
        setTimeout(function () {
            location.href = "./name.html"
        }, 500)
    })
    // 救出を諦めるアクション
    $(".give_up").on("click", function () {
        $(this).css({ "box-shadow": "none", "position": "relative", "top": "5px" });
        $(".main").fadeOut(1000);
        setTimeout(function () {
            $(".death").fadeIn(0)
            $(".death-reason").fadeIn(2000)
        }, 1500)
    })



    // name
    let name = ""
    // input入力
    $(".name_submit").on("click", function () {
        name = $(".name_input").val();
        sessionStorage.setItem("playerName", name)
        if (name == "") {
            $(".caution").html("ちゃんと名前入力してよ～")
            return false
        } else {
            $(".black").fadeIn(200);
            $(".your-name").html("「" + name + "」")
        }
    });
    $(".name_input").keypress(function (e) {
        if (e.which == 13) {
            name = $(".name_input").val();
            if (name == "") {
                $(".caution").html("ちゃんと名前入力してよ～")
                return false
            } else {
                $(".name_input").blur();
                $(".black").fadeIn(200);
                $(".your-name").html("「" + name + "」")
               
                return false
            }  
        }
    })

    // はい選択
    $(".yes-btn").on("click", function () {
        let i = 0
        
        $(".black").off()
        $(".name-select-box").fadeOut(1500);
        setTimeout(function () {
            if (name != "えーこ" && name != "えいこ" && name != "えこ" && name != "瑛子" && name != "藤田瑛子" && name != "ふじたえいこ" && name != "ふじた" && name != "えっこ") {
                $(".death").fadeIn(0)
            } else {
                setInterval(function () {
                    
                    if (i === 10) {
                        $(".skip").html("次へ")
                        return false
                    } else if (i === 1) {
                        $(".story .skip").fadeIn()
                    }
                    $(".story p").eq(i).fadeIn(200)
                    i += 1
                }, 300)
            }
        }, 1500)
    })
    
    // スキップor次へ
    // $(".skip").on("click", functino(){

    // })

    // いいえ、その他画面、選択
    $(".black").on("click", function () {
        $(".black").fadeOut(300);
    })


    // story
    // $(".story").on("click", function () {
        $(".eiko").text(sessionStorage.getItem("playerName"))
    // })



    
    // index

    // i = 問題を格納するための変数
    let i = 0
    // t = 正解数を格納する変数
    let t = 0

    $(".question").html(quiz[0].question)

    $(".answer-button").each(function (index, element) {
        $(element).html(quiz[0].answer[index])
    })

    $(".answer-button").on("click", function () {
    
        if ($(this).html() === quiz[i].corrent) {
            t += 1
            alert("true")
        } else {
            alert("false")
        }

        i += 1

        if (i === quiz.length) {
            $(".question").html("終わったよ")
            $(".answer-button").css("display", "none")
            $(".result").css("display", "block")
        }
        
        $(".question").html(quiz[i].question)
        
        $(".answer-button").each(function (index, element) {
            $(element).html(quiz[i].answer[index])
        })    
    })

    // game_over

    $(".retry").on("click", function () {
        $("body").fadeOut(1000);
        setTimeout(function () {
            location.href = "./index.html"
        })
    })

})
    
