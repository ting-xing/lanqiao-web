/*TODO：请补充代码*/
var current_form, next_form, previous_form; // 表单域

const form1 = $("#form1");

const form2 = $("#form2");

const form3 = $("#form3");

let index = 1;

function active() {
    $("#progressbar > li").each(function(i, e) {
        if (i < index) {
            $(e).addClass("active")
        } else {
            $(e).removeClass("active")
        }
    })
}

// 点击下一页的按钮
$(".next").click(function() {
    index++;
    current_form = $(this).parent();
    next_form = current_form.next();
    previous_form = current_form.prev();

    current_form.css('display', 'none');
    next_form.css('display', 'block');

    active();
});
// 点击返回按钮
$(".previous").click(function() {
    index--;
    current_form = $(this).parent();

    previous_form = current_form.prev();

    current_form.css('display', 'none');
    previous_form.css('display', 'block');

    active();
});
// 点击提交按钮
$(".submit").click(function() {
    alert("提交成功");
});