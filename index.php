<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BerHoRo</title>

    <link href="https://fonts.googleapis.com/css?family=Sarabun:400,500,500i,600,700,800&display=swap&subset=thai" rel="stylesheet">
    <link rel="stylesheet" href="css/berstyle.min.css?v=<?=date('his'); ?>">

    <script src="https://kit.fontawesome.com/37e3c13129.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="plugin/owl.carousel.css">
    <link rel="stylesheet" href="plugin/owl.theme.default.css">
</head>
<body>

    <nav>
        <div class="topnav">
            <div class="logo-nav"><figure><a href=""><img src="img/logo/logo.png" alt=""></a></figure></div>

            <ul class="nav-menu">
                <li><a href="">ทำนายเบอร์</a></li>
                <li><a href="">ค้นหาเบอร์จากความหมาย</a></li>
                <li><a href="">บทความ</a></li>
                <li><a href="">วิธีการสั่งซื้อ</a></li>
                <li><a href="">เกี่ยวกับเรา</a></li>
                <li><a href="">ติดต่อเรา</a></li>
                <li><a href=""><i class="fas fa-shopping-basket"></i></a></li>
            </ul>
        </div>
    </nav>

    <div class="slider owl-carousel">
        <figure><img src="img/Artboard–30.jpg" alt=""></figure>
    </div>

    <section>
        <div class="search-box">
            <h2>ค้นหาเบอร์</h2>

            <div class="box">
                <div class="left-box">
                    <form action="" class="fortune-box-num">
                        <div class="fortune-num">
                            <input type="number" name="fortune-num">
                            <a href=""><button type="submit">ทำนาย</button></a>
                        </div>
                    </form>

                    <div class="search-num">
                        <label>ค้นหาเบอร์</label>
                        <input type="number" class="search-box-num" value="0">
                        <input type="number" class="search-box-num"">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                        <input type="number" class="search-box-num">
                    </div>

                    <div class="cate-num">
                        <select name="" id="">
                            <option value="">หมวดหมู่ เบอร์</option>
                            <option value="">เบอร์ดี1</option>
                            <option value="">เบอร์ดี2</option>
                            <option value="">เบอร์ดี3</option>
                            <option value="">เบอร์ดี4</option>
                            <option value="">เบอร์ดี5</option>
                            <option value="">เบอร์ดี6</option>
                        </select>
                    </div>

                    <div class="sum-network">
                        <div class="sum-num">
                            <select name="" id="">
                                <option value="">ผลรวม</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>

                        <div class="network">
                            <select name="" id="">
                                <option value="">เครือข่าย</option>
                                <option value="">True</option>
                                <option value="">Dtac</option>
                                <option value="">Cat</option>
                                <option value="">AIS</option>
                            </select>
                        </div>
                    </div>

                    <div class="search-some">
                        <label>ค้นหาบางเลข</label>
                        <input type="number">
                    </div>

                    <div class="range-price">
                        <label>ช่วงราคา</label>
                        <input type="number" class="low" placeholder="9,999,999">
                        <div class="keed"></div>
                        <input type="number" class="high" placeholder="9,999,999">
                        <label>บาท</label>
                    </div>
                </div>

                <div class="right-box">
                    <div class="favorite-num">
                        <div class="favorite">
                            <label>ตัวเลขที่ชอบ</label>
                            <div class="button-num">
                                <button>0</button>
                                <button>1</button>
                                <button class="active-button">2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button class="active-button">7</button>
                                <button>8</button>
                                <button>9</button>
                            </div> 
                        </div>

                        <div class="kirai">
                            <label>ตัวเลขที่ไม่ชอบ</label>
                            <div class="button-num">
                                <button>0</button>
                                <button>1</button>
                                <button class="active-button">2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button class="active-button">7</button>
                                <button>8</button>
                                <button>9</button>
                            </div> 
                        </div>
                    </div>

                    <div class="improve-luck">
                        <span>เสริมดวงด้าน</span>
                        <div class="luck-box">
                            <div class="button1">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>วาจา</label>
                            </div>
                            <div class="button2">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>กาย</label>
                            </div>
                            <div class="button3">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>ใจ</label>
                            </div>
                            <div class="button4">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>สติ</label>
                            </div>
                            <div class="button5">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>เงิน</label>
                            </div>
                            <div class="button6">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>ทอง</label>
                            </div>
                            <div class="button7">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>รัก</label>
                            </div>
                        </div>
                    </div>

                    <div class="ber-goodluck">
                        <span>เบอร์มงคล</span>
                        <div class="goodluck-box">
                            <?php for($i=1;$i<=12;$i++): ?>
                            <div class="button1">
                                <figure><img src="img/icon/lips.svg" alt=""></figure>
                                <label>แมว</label>
                            </div>
                            <?php endfor; ?>

                            <div class="recomment-num">
                                <span>เบอร์แนะนำ</span>
                                <div class="button">
                                    <figure><img src="img/icon/lips.svg" alt=""></figure>
                                    <label>แนะนำ</label>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <div class="button-form">
                <button>ค้นหา</button>
                <button>เริ่มใหม่</button>
            </div>
        </div>
    </section>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="plugin/owl.carousel.js"></script>
    <script src="js/slider.js?v=<?=date('his'); ?>"></script>
</body>
</html>