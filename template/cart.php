<div class="cart-page">
    <div class="head-text">
        <h1>ตระกร้าสินค้า</h1>
    </div>

    <div class="cart-box">
        <!-- รายการสินค้าที่เลือกเข้าตระกร้า -->
        <div class="cart-list">
                <div class="list-item">
                    <?php for($i=1;$i<=10;$i++): ?>
                        <div class="box">
                            <div class="logo"><figure><img src="img/logo/Artboard – 13.jpg" alt=""></figure></div>
                            <div class="number">
                                <a href="detail-ber"><span>099999999</span></a>
                                <span class="sum-num">ผลรวม 48</span>
                            </div>
                            <div class="detail">
                                <div class="rank"><figure><img class="grade-A" src="img/grade/Artboard – 24.jpg" alt=""></figure></div>
                                <div class="price"><span>9000000.-</span></div>
                                <div class="icon">
                                    <i id="delete" class="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    <?php endfor; ?>
                    
                </div>
        </div>

        <!-- กล่องแสดงรายละเอียดการชำระเงิน -->
        <div class="checkout-box">
            <div class="checkout-price">
                <div class="amount">
                    <span>จำนวนสินค้า</span
                    ><span>6 ชิ้น</span>
                </div>

                <div class="total-price">
                    <span>รวมราคา</span>
                    <span>9000000 บาท</span>
                </div>

                <div class="ps">
                    <div class="row">
                        <i class="fas fa-truck"></i>
                        <span>จัดส่งรวดเร็ว</span>
                    </div>
                    <div class="row">
                        <i class="fas fa-shield-alt"></i>
                        <span>รับประกันสินค้าเสียหาย</span>
                    </div>
                </div>
            </div>

            <div class="address-box">
                <h2>กรอกข้อมูลเพื่อการจัดส่ง</h2>

                <div class="input-zone">
                    <input type="text" maxlength="32" placeholder="กรุณากรอกชื่อ">
                    <input type="text" maxlength="32" placeholder="กรุณากรอกนามสกุล">
                    <input type="tel" maxlength="10" placeholder="กรุณากรอกเบอร์โทร">
                    <input type="email" maxlength="32" placeholder="กรุณากรอก Email">
                </div>

                <input class="adddress" type="text" placeholder="ที่อยู่">

                <div class="button-checkout">
                    <a href="cate-ber"><button class="add-ber">เลือกเบอร์เพิ่ม</button></a>
                    <button class="buy">สั่งซื้อ</button>
                    <button class="reset">ล้างข้อมูล</button>
                </div>
            </div>
        </div>
    </div>

    <div class="box-loading">
        <div class="loading"></div>
    </div>

    <div class="thank-you">
        <figure><img src="img/thank.png" alt=""></figure>
    </div>

    <div class="howtobuy">
        <div class="head-text">
            <h1>ช่องทางการชำระเงิน</h1>
        </div>

        <!-- ธนาคาร -->
        <div class="payby">
            <div class="paybybank">
                <h3>ชำระผ่านการโอน</h3>
                <div class="box-bank">
                    <div class="item">
                        <figure><img src="img/bank/1-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/2-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/3-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/4-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/5-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/6-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>

                    <div class="item">
                        <figure><img src="img/bank/7-01.jpg" alt=""></figure>
                        <div class="text">
                            <span>บัญชี : ธนาคารกสิกรไทย</span>
                            <span>เลขบัญชี : 7732280256</span>
                            <span>ชื่อบัญชี : บริษัท พีดีเอส พรอสเพอริที จำกัด</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="paybycredit">
                <h3>ชำระผ่านบัตรเครดิต</h3>
                <div class="box-credit">
                    <figure><img src="img/bank/Master-card.jpg" alt=""></figure>
                    <figure><img src="img/bank/american-express.jpg" alt=""></figure>
                    <figure><img src="img/bank/union-pay.jpg" alt=""></figure>
                    <figure><img src="img/bank/visa.jpg" alt=""></figure>
                    <figure><img src="img/bank/JCB-01.jpg" alt=""></figure>
                </div>
            </div>
        </div>

        <!-- เนื้อหาck -->
        <div class="ck">
            <p>
                เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKvเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK
                เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CK เนื้อหาคอนเทนท์ CKเนื้อหาคอนเทนท์ CK
                
            </p>
        </div>
    </div>
</div>