$('.ems-trackbox button').click(function(){
    window.open('https://track.thailandpost.co.th/', '_blank');
});

// --------------------กดดูรูปสไลด์รีวิว-------------------- //
$('.review .slide-review figure').click(function(){
    let img = $(this).children().attr('src');
    $('.review .show-review').fadeIn();
    $('.review .show-review .box-show figure img').attr('src',img);
});
$('.review .show-review .box-show .close-button').click(function(){
    $(this).closest('.show-review').fadeOut();
});
// ------------------- กดดูรูปในหน้ารีวิว ------------------- //
$('.review-page .gallery .column figure').click(function(){
    let slug = $(this).find('img').attr('src');
    $('.review-page .show-review').fadeIn();
    $('.review-page .show-review .box-show figure img').attr('src',slug);
});
$('.review-page .show-review .box-show .close-button').click(function(){
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
$('.ber-goodluck .goodluck-box .recomment-num').click(function(){
    $(this).find('div').toggleClass('active');
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
    let score = parseInt($('.result .left .score').attr('data-score'));
    calcGraph(score);
    displayScore(score);
}

// ฟังก์ชั่นคำนวนกราฟ
function calcGraph(score){
    let Class = "";
    let rank = "";
    let ele = $('.graphrate');

    // $.each(ele, function(key,value) {
    //     console.log(value.dataset.min);
    // });

    let aplus_min = ele[0].dataset.min;
    let a_min = ele[1].dataset.min;
    let bplus_min = ele[2].dataset.min;
    let b_min = ele[3].dataset.min;
    let cplus_min = ele[4].dataset.min;
    let c_min = ele[5].dataset.min;
    let d_min = ele[6].dataset.min;
    let f_min = ele[7].dataset.min;

    let aplus_max = ele[0].dataset.max;
    let a_max = ele[1].dataset.max;
    let bplus_max = ele[2].dataset.max;
    let b_max = ele[3].dataset.max;
    let cplus_max = ele[4].dataset.max;
    let c_max = ele[5].dataset.max;
    let d_max = ele[6].dataset.max;
    let f_max = ele[7].dataset.max;
   
    if(score > aplus_min){
        console.log("A+");
        rank = "A+"
        Class = "aplus";
        Min = aplus_min;
        Max = aplus_max;
    }
    else if(score >= a_min){
        console.log("A");
        rank = "A"
        Class = "a";
        Min = a_min;
        Max = a_max;
    }
    else if(score >= bplus_min){
        console.log("B+");
        rank = "B+"
        Class = "bplus";
        Min = bplus_min;
        Max = bplus_max;
    }
    else if(score >= b_min){
        console.log("B");
        rank = "B"
        Class = "b";
        Min = b_min;
        Max = b_max;
    }
    else if(score >= cplus_min){
        console.log("C+");
        rank = "C+"
        Class = "cplus";
        Min = cplus_min;
        Max = cplus_max;
    }
    else if(score >= c_min){
        console.log("C");
        rank = "C"
        Class = "c";
        Min = c_min;
        Max = c_max;
    }
    else if(score >= d_min){
        console.log("D");
        rank = "D"
        Class = "d";
        Min = d_min;
        Max = d_max;
    }
    else{
        console.log("F");
        rank = "F"
        Class = "f";
        Min = f_min;
        Max = f_max;
    }

    let max_lenght = Max-Min;
    score = score-Min;
    let sum = (((score/max_lenght)*100)/100)*75; //สูตรคำนวนความสูงของกราฟ
    // กรณีถ้า sum = 0 ค่าpx จะไม่ขึ้น
    if(sum == 0){
        sum = 5;
    }

    $('.grahp-data .data .gradegraph .candy .'+Class+'').css("height",sum);
    $('.fortube-ber .right .rank span').text(rank); // เปลี่ยนแรงค์
    $('.grahp-data .data .range span:nth-child(1)').text(Max);
    $('.grahp-data .data .range span:nth-child(2)').text(Min);
}

// ------------------ ดึงคะแนนเบอร์ในหน้ากราฟ เข้าตัวแสดงผล ---------------- //
function displayScore(score){
    $('.fortube-ber .result-graph .result .score span:nth-child(1)').text(score);
}

// ----------------------- ล้างข้อมูลความหมายเบอร์ ----------------------- //
$('.box-search .select-data .button-group .reset').click(function(){
    $(this).parent().prev().val("");
    $('.box-magic figure div figure img').attr('src',"");
    $('.box-magic figure div figure label').text("");
    $('.box-magic figure div').removeClass('cast');
    $('.choice div .selector figure').removeClass('select');

    $('.box-magic .magic-mobile div').removeClass('cast');
    $('.box-magic .magic-mobile div img.gem-select').attr('src',"");
    $('.box-magic .magic-mobile div label.gem-select').text("");
});

// ------------------ กดสั่งซื้อแล้วขึ้นขอบคุณ ------------------- //
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

// ทำการเช็คกรองข้อมูลหน้าสั่งซื้อ
$('.checkout-box .address-box .button-checkout .buy').click(function(){
    let tel = $('.input-zone input[type=tel]').val();
    console.log(tel.length);
    // กรอกข้อมูลไม่ครบ
    if(!$('.input-zone input').val() && !$('.adddress').val()){
        Swal.fire({
            icon: 'warning',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
        })
    }
    // เบอร์โทรไม่ได้เป็นเลข
    else if(!$.isNumeric($('.input-zone input[type=tel]').val())){
        Swal.fire({
            icon: 'warning',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณากรอกเบอร์โทรให้เป็นตัวเลข',
        })
    }
    // เบอร์โทรไม่ได้10ตัว
    else if( tel.length =! 10){
        Swal.fire({
            icon: 'warning',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรอกให้ครบ10',
        })
    }
    // กรองอีเมล์เป็นรูปแบบอีเมล์
    else if(!isValidEmailAddress($('.input-zone input[type=email]').val())){
        Swal.fire({
            icon: 'warning',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณากรอกที่อยู่อีเมล์ให้ถูกต้อง',
        })
    }
    else{
        $('.box-loading').fadeIn();
        setTimeout(() => {
            $('.box-loading').fadeOut();
            $('.cart-box').hide();
            $('.thank-you').show();
        }, 2000);
    }
});

// ----------------- กดเบอร์เข้าตระกร้า ------------------- //
var number_item_cart = 0;
// กดเบอร์หน้าแรก
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
        }).then(() => {
            $(this).closest('.detail').prev().children('a').addClass('select');
            $(this).closest('.icon').prev().addClass('select');
            $(this).closest('.detail').prev().prev().find('figure').addClass('select');
            $(this).closest('.icon').prev().prev().find('figure').addClass('select');
            $(this).hide();
            $(this).next().show();
            number_item_cart++;
            num_in_cart(number_item_cart);
    });
});
$('.main-content .grid-content .box .detail .icon .unselect').click(function(){
    $(this).hide();
    $(this).prev().show();
    $(this).closest('.detail').prev().children('a').removeClass('select');
    $(this).closest('.icon').prev().removeClass('select');
    $(this).closest('.detail').prev().prev().find('figure').removeClass('select');
    $(this).closest('.icon').prev().prev().find('figure').removeClass('select');
    number_item_cart--;
    num_in_cart(number_item_cart);
});

// กดเบอร์หน้าหมวดหมู่
$('.sumber-content .grid-content .box .detail .icon .shop').click(function(){

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
        }).then(() => {
            $(this).closest('.detail').prev().children('a').addClass('select');
            $(this).closest('.icon').prev().addClass('select');
            $(this).closest('.detail').prev().prev().find('figure').addClass('select');
            $(this).closest('.icon').prev().prev().find('figure').addClass('select');
            $(this).hide();
            $(this).next().show();
            number_item_cart++;
            num_in_cart(number_item_cart);
    });
});
$('.sumber-content .grid-content .box .detail .icon .unselect').click(function(){
    $(this).hide();
    $(this).prev().show();
    $(this).closest('.detail').prev().children('a').removeClass('select');
    $(this).closest('.icon').prev().removeClass('select');
    $(this).closest('.detail').prev().prev().find('figure').removeClass('select');
    $(this).closest('.icon').prev().prev().find('figure').removeClass('select');
    number_item_cart--;
    num_in_cart(number_item_cart);
});
// Testเพิ่มลดเลขตระกร้า
function num_in_cart(number_item_cart){
    $('.num-shop-cart span').text(number_item_cart);
}

// ----------------------------- กดดูหน้าจอย่อยสินค้ามือถือ -------------------------- //
$('.group-mobile-menu .cart-mobile').click(function(){
    $(this).children('.cart-hover').toggle();
});

// ----------------------------- กดเลือกความหมายเบอร์ ------------------------ //
// ฟังก์ชั่นกดความหมายขึ้นวงแหวนเวท
function choice_ber(that){
    //let className = $(that).parent().parent().attr('class'); // เก็บชื่อ class
    let img_slug = $(that).find('img').attr('src'); // เก็บลิ้งกรอบพื้นหลัง
    let text = $(that).find('label').text(); // เก็บข้อความในกรอบที่กด
    

    if($(that).hasClass('select')){
        $(that).removeClass('select');
        $('.box-magic figure div:contains('+text+')').removeClass('cast');
        $('.box-magic figure div:contains('+text+')').find('figure img').attr('src',"");
        $('.box-magic figure div:contains('+text+')').find('figure label').text("");
    }
    else{

        if(!$('.gem-1').hasClass('cast')){
            $('.gem-1').find('img').attr('src',img_slug);
            $('.gem-1').find('label').text(text);
            $('.gem-1').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem-2').hasClass('cast')){
            $('.gem-2').find('img').attr('src',img_slug);
            $('.gem-2').find('label').text(text);
            $('.gem-2').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem-3').hasClass('cast')){
            $('.gem-3').find('img').attr('src',img_slug);
            $('.gem-3').find('label').text(text);
            $('.gem-3').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem-4').hasClass('cast')){
            $('.gem-4').find('img').attr('src',img_slug);
            $('.gem-4').find('label').text(text);
            $('.gem-4').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem-5').hasClass('cast')){
            $('.gem-5').find('img').attr('src',img_slug);
            $('.gem-5').find('label').text(text);
            $('.gem-5').addClass('cast');
            $(that).addClass('select');
        }
        else{
            Swal.fire(
                'เกิดข้อผิดพลาด',
                'ท่านได้เลือกความหมายครบทั้ง 5 จำนวนแล้ว',
                'warning'
              )
        }
    }
}
// ฟังก์ชั่นเลือกความหมายขึ้นวงแหวนเวทแบบมือถือ
function choice_mobile(that){
    let img_slug = $(that).find('img').attr('src'); // เก็บลิ้งกรอบพื้นหลัง
    let text = $(that).find('label').text(); // เก็บข้อความในกรอบที่กด
    

    // เช็คสำหรับกดความหมายซ้ำ
    if($(that).hasClass('select')){
        $(that).removeClass('select');
        $('.magic-mobile div:contains('+text+')').removeClass('cast');
        $('.magic-mobile div:contains('+text+')').find('img.gem-select').attr('src',""); // ลบรูปด้านบน
        $('.magic-mobile div:contains('+text+')').find('label.gem-select').text(""); // ลบข้อความด้านบน
    }
    else{

        if(!$('.gem1-mobile').hasClass('cast')){
            $('.gem1-mobile').find('img.gem-select').attr('src',img_slug);
            $('.gem1-mobile').find('label.gem-select').text(text);
            $('.gem1-mobile').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem2-mobile').hasClass('cast')){
            $('.gem2-mobile').find('img.gem-select').attr('src',img_slug);
            $('.gem2-mobile').find('label.gem-select').text(text);
            $('.gem2-mobile').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem3-mobile').hasClass('cast')){
            $('.gem3-mobile').find('img.gem-select').attr('src',img_slug);
            $('.gem3-mobile').find('label.gem-select').text(text);
            $('.gem3-mobile').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem4-mobile').hasClass('cast')){
            $('.gem4-mobile').find('img.gem-select').attr('src',img_slug);
            $('.gem4-mobile').find('label.gem-select').text(text);
            $('.gem4-mobile').addClass('cast');
            $(that).addClass('select');
        }
        else if(!$('.gem5-mobile').hasClass('cast')){
            $('.gem5-mobile').find('img.gem-select').attr('src',img_slug);
            $('.gem5-mobile').find('label.gem-select').text(text);
            $('.gem5-mobile').addClass('cast');
            $(that).addClass('select');
        }
        else{
            Swal.fire(
                'เกิดข้อผิดพลาด',
                'ท่านได้เลือกความหมายครบทั้ง 5 จำนวนแล้ว',
                'warning'
              )
        }
    }
}

$('.ber-mean-page .choice .selector figure').click(function(){
    if($(window).width() < 1366){
        choice_mobile(this);
    }
    else{
        choice_ber(this);
    }
});

// กดเอาความหมายเบอร์ออก
$('.box-search .box-magic figure div').click(function(){
    let ele = $(this).find('figure label').text();
    let ele_choice = $('.choice .selector').find('figure[data-name="'+ele+'"]');
    $(ele_choice).removeClass('select');

    $(this).removeClass('cast');
    $(this).find('figure img').attr('src',"");
    $(this).find('figure label').text("");
});
$('.box-search .box-magic .magic-mobile div').click(function(){
    let ele = $(this).find('label.gem-select').text();
    let ele_choice = $('.choice .selector').find('figure[data-name="'+ele+'"]');
    $(ele_choice).removeClass('select');

    $(this).find('img.gem-select').attr('src',"");
    $(this).find('label.gem-select').text("");
    $(this).removeClass('cast'); 
});

// -------------------- ล้างข้อมูลหน้าสั่งซื้อ -------------------- //
$('.checkout-box .address-box .button-checkout .reset').click(function(){
    $('.address-box input').val("");
});

// -------------------- ลบสินค้าในหน้าสั่งซื้อ ------------------- //
$('.cart-page .cart-box .cart-list .list-item .box .detail .icon i').click(function(){
    $(this).closest('.box').fadeOut();
});

// ----------------- ลบรายการในหน้าตระกร้าเล็ก ----------------- //
$('.menu-cart .cart-hover .list-item li .top i').click(function(){
    $(this).closest('li').fadeOut();
});

// -------------------- เปิดดูคู่มือเบอร์ ------------------------ //
// เปิดคู่มือ
$('.fortube-ber .head-text-fortune .manual').click(function(){
    $(this).next().fadeIn();
});
// ปิดคู่มือ
$('.manual-box .box .close-button').click(function(){
    $(this).closest('.manual-box').fadeOut();
});