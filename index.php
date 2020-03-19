<?php
session_start();
require_once 'config/config.php';
require_once 'classes/FrontEnd.php';
require_once 'classes/helper.php';
$Helper = new Helper();
#ฟังก์ชั่นดึงข้อมูล Slug
$SLUG = $Helper->get_slug();  
?> 
<!DOCTYPE html>
<html lang="en"> 
<?php

    /**
     *  อ่านค่า URI จาก URL และ ทำการ Explode / ให้เป็น Array
     */
    $uri_full = urldecode($_SERVER['REQUEST_URI']);
    $uri_array = explode("/", $uri_full);
    $pageView = "";
    $head['title'] = "";  

    /**
     * เช็คดู Uri Level 1 จะเก็บไว้ในตัวแปร $pageView
     */
    $uri_level_1 = trim($uri_array[1]);
    if ($uri_level_1 == "" || $uri_level_1 == "home" || $uri_level_1 == "หน้าหลัก") {
    $pageView = "home";
    $head['title'] = $pageView;
    } else {
    $match = preg_match("/\?+/", $uri_level_1);
    if ($match > 0) { #ถ้ามี Query String
        $src_page = $_GET['page'];
        $param_slug = explode('?', $uri_level_1);
        $pageView = $param_slug[0];
    } else {
        $pageView = $uri_level_1;
    }
    $head['title'] = $uri_level_1;
    }
    /**
     * เช็คดู Uri Level 2 ว่ามีหรือไม่ ถ้ามีก็จะเก็บไว้ในตัวแปร $uri_array[2]
     */
    if (isset($uri_array[2]) && !empty($uri_array[2])) {
    $match = preg_match("/\?+/", $uri_array[2]);
    if ($match > 0) { //ถ้ามี Query String
        // $uri_level_2 = explode("/", $_GET['url'])[1];
        $uri_level_2 = explode('?', $uri_array[2])[0];
    } else {
        $uri_level_2 = trim($uri_array[2]);
    }
    $head['title'] = $uri_level_2;
    }
    /**
     * เช็คดู Uri Level 3 ว่ามีหรือไม่ ถ้ามีก็จะเก็บไว้ในตัวแปร $uri_array[3]
     */
    if (isset($uri_array[3]) && !empty($uri_array[3])) {
    $match = preg_match("/\?+/", $uri_array[3]);
    if ($match > 0) { //ถ้ามี Query String
        // $uri_level_3 = explode("/", $_GET['url'])[1];
        $uri_level_3 = explode('?', $uri_array[3])[0];
    } else {
        $uri_level_3 = trim($uri_array[3]);
    }
    $head['title'] = $uri_level_3;
    }
    /**
     * เช็คดู Uri Level 4 ว่ามีหรือไม่ ถ้ามีก็จะเก็บไว้ในตัวแปร $uri_array[4]
     */
    if (isset($uri_array[4]) && !empty($uri_array[4])) {
    $match = preg_match("/\?+/", $uri_array[4]);
    if ($match > 0) { //ถ้ามี Query String
        // $uri_level_4 = explode("/", $_GET['url'])[1];
        $uri_level_4 = explode('?', $uri_array[4])[0];
    } else {
        $uri_level_4 = trim($uri_array[4]);
    }
        $head['title'] = $uri_level_4;
    } 
    $iconweb = $Helper->get_icon_fab_logo(14);
    $catePage = $Helper->getCateIdByURL($pageView); 
    
    $header['category'] = $Helper->get_header_all_category();  
    $header['sumber'] = $Helper->get_header_all_sumber(); 
?> 
<head>
    <?php include('template/css.php') ?>
</head>
<body> 
    <?php include('template/header.php'); ?> 
    <section>
        <div class="container content">
            <!-- เมนูข้าง -->
            <?php include('template/sidebar.php'); ?> 
            <!-- ส่วนเนื้อหา -->
             <?php
                switch($slug){
                    case '2' :
                    default:  
                        #home      
                      
                        include('template/main.php'); 
                        break; 
                    case 'about' :
                        include('template/about.php');
                        break;
                    case 'contact' :
                        include('template/contact.php');
                        break;
                    case 'howtobuy' :
                        include('template/howtobuy.php');
                        break;
                    case 'article' :
                        include('template/article.php');
                        break;
                    case 'article-detail' :
                        include('template/article-detail.php');
                        break;
                    case 'fortune-ber' :
                        include('template/fortune-ber.php');
                        break;
                    case 'detail-ber' :
                        include('template/detail-ber.php');
                        break;
                    case 'sum-ber' :
                        include('template/sum-ber.php');
                        break;
                    case 'cate-ber' :
                        include('template/cate-ber.php');
                        break;
                    case 'last-releast' :
                        include('template/last-releast.php');
                        break;
                    case 'cart' :
                        include('template/cart.php');
                        break;
                    case 'review' :
                        include('template/review.php');
                        break;
                    case 'ber-mean' :
                        include('template/number-no-imi.php');
                        break;
                }
             ?>

        </div>

        <!-- รีวิว -->
        <div class="review">
            <div class="review-box container">
                <div class="head-text">
                    <h2>รีวิว</h2>
                    <a href="review"><button>ทั้งหมด</button></a>
                </div>

                <div class="slide-review owl-carousel">
                    <figure>
                        <img src="img/review1.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review2.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review3.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review4.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review5.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review6.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                    <figure>
                        <img src="img/review7.jpg" alt="">
                        <div class="hover-img">
                            <i class="fas fa-eye"></i>
                            <span>view</span>
                        </div>
                    </figure>
                </div>
            </div>

            <div class="show-review">
                <div class="box-show">
                    <figure><img src="" alt=""></figure>
                    <div class="close-button"><i class="fas fa-times-circle"></i></div>
                </div>
            </div>
        </div>
 

    </section>

    <?php include('template/footer.php') ?>
</body>
</html>