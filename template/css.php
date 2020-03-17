<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BerHoRo</title>

<link href="https://fonts.googleapis.com/css?family=Sarabun:400,500,500i,600,700,800&display=swap&subset=thai" rel="stylesheet">
<link rel="stylesheet" href="css/berstyle.min.css?v=<?=date('Ymdhis'); ?>">

<?php
    switch($slug){
        case '' :
            echo'<link rel="stylesheet" href="css/main.min.css?v='.date('Ymdhis').'">';
            break;
        case 'home' :
            echo'<link rel="stylesheet" href="css/main.min.css?v='.date('Ymdhis').'">';
            break;
        case 'about' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'contact' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'howtobuy' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'article' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'article-detail' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'fortune-ber' :
            echo'<link rel="stylesheet" href="css/product.min.css?v='.date('Ymdhis').'">';
            break;
        case 'detail-ber' :
            echo'<link rel="stylesheet" href="css/product.min.css?v='.date('Ymdhis').'">';
            break;
        case 'sum-ber' :
            echo'<link rel="stylesheet" href="css/main.min.css?v='.date('Ymdhis').'">';
            break;
        case 'cate-ber' :
            echo'<link rel="stylesheet" href="css/main.min.css?v='.date('Ymdhis').'">';
            break;
        case 'last-releast' :
            echo'<link rel="stylesheet" href="css/product.min.css?v='.date('Ymdhis').'">';
            break;
        case 'cart' :
            echo'<link rel="stylesheet" href="css/product.min.css?v='.date('Ymdhis').'">';
            break;
        case 'review' :
            echo'<link rel="stylesheet" href="css/content.min.css?v='.date('Ymdhis').'">';
            break;
        case 'ber-mean' :
            echo'<link rel="stylesheet" href="css/product.min.css?v='.date('Ymdhis').'">';
            break;
    }
?>

<script src="https://kit.fontawesome.com/37e3c13129.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="plugin/owl.carousel.css">
<link rel="stylesheet" href="plugin/owl.theme.default.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>