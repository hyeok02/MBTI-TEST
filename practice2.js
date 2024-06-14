$("#question").hide();
$("#result").hide();

var num = 0;

var q = {
    0:{"title":"여행 갈 기회가 생긴 당신, 당신이 떠나고 싶은 휴양지는?","type":"EI","A":"삐까뻔쩍한 건물들 속에서 휘황찬란하게 쇼핑할 수 있는 휴양지","B":"자연을 보면서 여유롭게 휴식을 취할 수 있는 휴양지"},
    1:{"title":"여행을 하다 동전을 던져서 접시에 들어가면 소원이 이뤄진다는 호수에 간 당신, 당신의 행동은?","type":"SN","A":"장난삼아 던져볼까?","B":"내 소원을 가득 담아 던져야지!"},
    2:{"title":"여행을 마치고 피곤에 쩔어 숙소 침대에 뻗어있는 당신, 근데 여행 동반자가 계속 말을 걸 떄 당신의 반응은?","type":"TF","A":"나 너무 힘들어, 좀만 쉬자","B":"힘들지만 같이 조금만 떠들까?"},
    3:{"title":"다음날 우천으로 완전히 변경된 일정, 당신의 심리 상태는?","type":"JP","A":"멘붕..","B":"오 이것도 재밌겠다"},
}

var result = {
    "ESFJ":{"image":"ESFJ.png","choice":"활발하며 정이 많고 안정적인 사업가","explain":"(인간 집사)"},
    "ESFP":{"image":"ESFP.png","choice":"활발하며 정이 많고 안정적인 탐험가","explain":"(분위기 메이커🎶)"},
    "ESTJ":{"image":"ESTJ.png","choice":"활발하며 안정적이게 일 잘하는 사업가","explain":"(무서운 학원 선생님 느낌..)"},
    "ESTP":{"image":"ESTP.png","choice":"활발하며 안정적이게 일 잘하는 탐험가","explain":"(플러팅 장인🥰)"},
    "ENFJ":{"image":"ENFJ.png","choice":"활발하며 모험적이고 정이 많은 사업가","explain":"(연설 대회 우승자🎙️)"},
    "ENFP":{"image":"ENFP.jpg","choice":"활발하며 모험적이고 정이 많은 탐험가","explain":"(보부상👜)"},
    "ENTJ":{"image":"ENTJ.png","choice":"활발하며 모험적이고 일 잘하는 사업가","explain":"(지도자(성격 나쁘면 독재자..))"},
    "ENTP":{"image":"ENTP.png","choice":"활발하며 모험적이고 일 잘하는 탐험가","explain":"(자존감 끝판왕👍)"},
    "ISFJ":{"image":"ISFJ.png","choice":"조용하며 정이 많고 안정적인 사업가","explain":"(지친 천사나 엄마 느낌..)"},
    "ISFP":{"image":"ISFP.png","choice":"조용하며 정이 많고 안정적인 탐험가","explain":"(감성충인 아티스트👨‍🎨)"},
    "ISTJ":{"image":"ISTJ.png","choice":"조용하며 안정적이게 일 잘하는 사업가","explain":"(그냥 꼰대🤨)"},
    "ISTP":{"image":"ISTP.png","choice":"조용하며 안정적이게 일 잘하는 탐험가","explain":"(4번은 개인주의야!)"},
    "INFJ":{"image":"INFJ.png","choice":"조용하며 정이 많고 모험적인 사업가","explain":"(몽상가💭)"},
    "INFP":{"image":"INFP.png","choice":"조용하며 정이 많고 모험적인 탐험가","explain":"(자유로운 영혼..)"},
    "INTJ":{"image":"INTJ.png","choice":"조용하며 모험적이고 일 잘하는 사업가","explain":"(비밀 가득한 현자🧐)"},
    "INTP":{"image":"INTP.png","choice":"조용하며 모험적이고 일 잘하는 탐험가","explain":"(괴짜😱)"},
}

function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

function next() {
    if(num==4){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="N" : str+="S";
        ($("#TF").val()<1) ? str+="F" : str+="T";
        ($("#JP").val()<1) ? str+="P" : str+="J";

        $("#choice").html(result[str]["choice"]);
        $("#image").attr("src",result[str]["image"]);
        $("#explain").html(result[str]["explain"]);
    }
    else{
        $(".progress-bar").attr("style","width:calc(100/4*"+num+"%)");
        $("#pgrNum").html(num+"/4");
        $('#title').html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++
    }
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue=$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){
    next();
});

// 링크 복사 태그
function copy(){
    var url='';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.");
}