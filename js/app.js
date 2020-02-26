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

// เลือกเสริมดวง
$('.improve-luck .luck-box div').click(function(){
    $(this).toggleClass('active');
});