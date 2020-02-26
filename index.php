<!DOCTYPE html>
<html lang="en">

<?php
    $url = explode('/',$_SERVER['REQUEST_URI']);
    $slug = urldecode($url[1]);
    //echo $slug;
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
                    case '' :
                        include('template/main.php');
                        echo'<link rel="stylesheet" href="css/main.min.css?v='.date('his').'">';
                        break;
                    case 'home' :
                        include('template/main.php');
                        echo'<link rel="stylesheet" href="css/main.min.css?v='.date('his').'">';
                        break;
                }
             ?>

        </div>

        <!-- รีวิว -->
        <div class="review">
            <div class="review-box container">
                <div class="head-text">
                    <h2>รีวิว</h2>
                    <a href=""><button>ทั้งหมด</button></a>
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