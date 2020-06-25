// $(".action--container--button").click(function(){
//     $(this).fadeOut(1);
// })
var mainTagName;
var amount;
var result = 0;

var d = new Date();
var day = d.getDate();
var month = d.getMonth()+1;
var year = d.getFullYear();
$(".main--date").append(day+"-"+month+"-"+year);

for(let i=1; i<=6; i++){
    var d1 = new Date(d.setDate(d.getDate() - 1))
    var day = d1.getDate();
    var month = d1.getMonth() + 1;
    var year = d1.getFullYear();
    $(".date-"+i).append(day + "-" + month + "-" + year +" &rarr;");
}
var d1 = new Date(d.setDate(d.getDate() - 1))
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

$(".action--container--button").on("click", function(){
    $(this).removeClass("d-flex").addClass("d-none");
    $(this).siblings().fadeIn(500).removeClass("d-none").addClass("d-flex").removeAttr("style");
})

$(".cross").on("click", function () {
    $(this).parent().removeClass("d-flex").addClass("d-none");
    $(this).parent().siblings().fadeIn(500).removeClass("d-none").addClass("d-flex").removeAttr("style");
})

$(".form-min").submit( function (event) {
    // console.log($(this).siblings(".form-min--text-input").val());
    var description = $(this).children(".form-min--text-input").val();
    amount = $(this).children(".form-min--amount").val();
    var tag = $(this).children(".form-min--dropdown").val();
    var mainTag = $(this).attr("name");
    if (mainTag === '+') {
        mainTagName = "plus";
        result += parseInt(amount);
    }else{
        mainTagName = "minus";
        result -= parseInt(amount);
    }

    var prepend = '<div class="show--box"><div class="show--box--tag" >' + tag + '</div><div class="show--box--description d-flex justify-content-between">' + description +'<span><img class="del-icon" src="/trash.png"><img class="edit-icon" src="/edit.png"></span>'+'</div><div value="'+amount+'" class="show--box--amount '+mainTagName+'">'+mainTag+' '+amount+'</div></div >';
    $(".show").prepend(prepend);

    $(".show--balance").empty();
    $(".show--balance").append('Balance: ' + result);
    
    $(this).children().val("");

    $(".del-icon").unbind().on("click",function () {
        if (confirm("are you sure?")){
            let pVal = $(this).parent().parent().siblings(".plus").attr("value");
            let nVal = $(this).parent().parent().siblings(".minus").attr("value");
            if(nVal === undefined){
                result -= parseInt(pVal);
            }else{
                result += parseInt(nVal);
            }
            $(".show--balance").empty();
            $(".show--balance").append('Balance: ' + result);
            $(this).parent().parent().parent().remove();
        }
        
    })
    event.preventDefault();
})

$(".form-min--submit").click(function () {
    $(this).parent().parent().removeClass("d-flex").addClass("d-none");
    $(this).parent().parent().siblings().fadeIn(500).removeClass("d-none").addClass("d-flex").removeAttr("style");
    
})
$(".previous-adds--list").click(function(){
    alert("this will take you to the data you have added on "+$(this).text());
})