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
// ---------------------เลือกเบอร์มงคล---------------------- //
$('.ber-goodluck .goodluck-box div').click(function(){
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

// ----------------- ปุ่มหมวดหมู่เบอร์มือถือ ----------------- //
$('.nav-menu .cate-mobile a').click(function(){
    $('.cateMobile').css("left","0");
});
$('.nav-menu .cate-mobile .cateMobile .hide-button').click(function(){
    $(this).parent().css("left","-100%");
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

// ----------------- ตัวเลขชอบไม่ชอบ ------------------ //
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

// ------------------ ล้างข้อมูลช่องค้นหาเบอร์ -------------- //
$('.search-box .button-form .reset').click(function(){
    $('.search-box .box .left-box form input').val("");
    $('.search-box .box .left-box .search-num input[type=tel]').val("");
    $('.search-box .box .left-box .more-filter .search-some input').val("");
    $('.search-box .box .left-box .more-filter .cate-num select').val("");
    $('.search-box .box .left-box .more-filter .sum-network select').val("");
    $('.search-box .box .left-box .more-filter .range-price input').val("");
    $('.search-box .box .right-box .favorite-num button').removeClass('active-button');
});

// ----------------- เลือกข้อมูลในกราฟ ------------------ //
$('.graph .select-data button').click(function(){
    $('.graph .select-data button').removeClass("active-select-data");
    $(this).addClass("active-select-data");
    if($(this).text() == "เครือข่าย"){
        $('.graph .network').fadeIn(function(){
            $(this).css("display","flex");
        });
        $('.graph .grahp-data').fadeOut();
    }
    else{
        $('.graph .network').fadeOut();
        $('.graph .grahp-data').fadeIn();
    }
});

// ------------ แปลงคะแนนเบอร์มาเป็นความสูงกราฟ ---------- //
if($('.graph .grahp-data').is(":visible")){
    let score = $('.grahp-data .data .gradegraph .candy .aplus').attr('data-grade');
    console.log(score);
    let sum = (75/1000)*score;
    console.log(sum);
    $('.grahp-data .data .gradegraph .candy .aplus').css("height",sum);
}

// ------------------ กดสั่งซื้อแล้วขึ้นขอบคุณ ------------------- //
$('.checkout-box .address-box .button-checkout .buy').click(function(){
    if($('.input-zone input').val() && $('.adddress').val()){
        $('.box-loading').fadeIn();
        setTimeout(() => {
            $('.box-loading').fadeOut();
            $('.cart-box').hide();
            $('.thank-you').show();
        }, 2000);
    }
    else{
        Swal.fire({
            icon: 'warning',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
          })
    }
});

// ----------------- กดเบอร์เข้าตระกร้า ------------------- //
var number_item_cart = 0;
$('.main-content .grid-content .box .detail .icon .shop').click(function(){

    let timerInterval
    Swal.fire({
        title: '<i class="fas fa-shopping-basket shop"></i>',
        html: 'กำลังนำเข้าสู่ตระกร้า',
        timer: 800,
        timerProgressBar: false,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                b.textContent = Swal.getTimerLeft()
                }
            }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
            $(this).closest('.detail').prev().children('a').addClass('select');
            $(this).closest('.icon').prev().addClass('select');
            $(this).hide();
            $(this).next().show();
            number_item_cart++;
            num_in_cart(number_item_cart);
    });
});
$('.main-content .grid-content .box .detail .icon .unselect').click(function(){
    $(this).hide();
    $(this).prev().show();
    number_item_cart--;
    num_in_cart(number_item_cart);
});
// เพิ่มลดเลขตระกร้า
function num_in_cart(number_item_cart){
    $('.num-shop-cart span').text(number_item_cart);
}