$('.ems-trackbox button').click(function(){
    window.open('https://track.thailandpost.co.th/', '_blank');
});

// --------------------กดดูรูปสไลด์รีวิว----------------- //
$('.slide-review figure').click(function(){
    let img = $(this).children().attr('src');
    $('.show-review').fadeIn();
    $('.show-review .box-show figure img').attr('src',img);
});
$('.show-review .box-show .close-button').click(function(){
    $(this).closest('.show-review').fadeOut();
});

// -----------------กดปุ่มตัวเลขที่ชอบ ไม่ชอบ---------------- //
$('.favorite-num .favorite .button-num button').click(function(){
    $(this).toggleClass('active-button');
});
$('.favorite-num .kirai .button-num button').click(function(){
    $(this).toggleClass('active-button');
});

// ---------------------เลือกเสริมดวง---------------------- //
$('.improve-luck .luck-box div').click(function(){
    $(this).toggleClass('active');
});

// -----------------กดสลับค้นหาอย่างละเอียด---------------- //
$('.open-more-filter').click(function(){
    if($('.more-filter').is(":visible")){
        $('.more-filter').slideUp();
        $(this).text("ค้นหาแบบละเอียด");
    }
    else{
        $('.more-filter').slideDown();
        $(this).text("ย่อลง");
    }
});

// -----------------ปุ่มเมนูขนาดมือถือ ไอแพด---------------- //
$('.hamberger').click(function(){
    $('.nav-menu').slideDown();
});
$('.nav-menu .buttonX').click(function(){
    $(this).parent().slideUp();
});

// ------------------ เลื่อนช่องค้นหาเบอร์ ----------------- //
$('.search-num input').keyup(function(e){
    if(e.keyCode == 8){
        if($(this).attr('data-position') == "1"){
            
        }
        else{
            $(this).prev().focus();
        }  
    }
});
$('.search-num input').keypress(function(){
    $(this).next().focus();
})

// ----------------- ตัวเลขชอบไม่ชอบ ----------------- //
function getFav_hate(Class,num){
    console.log(Class);

    if(Class == "favorite"){
        Class = "kirai";
    }
    else{
        Class = "favorite";
    }
    console.log(Class);

    let data = $('.'+Class+' .button-num button[data-favnum='+ num +']');
    if(data.hasClass('active-button')){
        data.removeClass('active-button');
    }
}
$('.favorite .button-num button').click(function(){
    let data1 = $(this).attr('data-favnum');
    getFav_hate("favorite",data1);
});
$('.kirai .button-num button').click(function(){
    let data1 = $(this).attr('data-favnum');
    getFav_hate("kirai",data1);
});

// $('.favorite .button-num button').click(function(){
//     let data1 = $(this).attr('data-favnum');
//     let data2 = $('.kirai .button-num button[data-favnum='+ data1 +']');

//     if(data2.hasClass('active-button')){
//         data2.removeClass('active-button');
//     }
// });
// $('.kirai .button-num button').click(function(){
//     let data1 = $(this).attr('data-favnum');
//     let data2 = $('.favorite .button-num button[data-favnum='+ data1 +']');
    
//     if(data2.hasClass('active-button')){
//         data2.removeClass('active-button');
//     }
// });