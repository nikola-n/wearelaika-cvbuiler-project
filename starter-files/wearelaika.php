<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ultimate CV and Portfolio</title>
    <!-- Latest compiled and minified BOOTSTRAP CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Local CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/linkedInAndLaika.css">
    <!-- Font-awesome 5 cdn -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body>

    <div class="container-fluid">
        <div class="col-md-8" style="margin-top:3%;" id="laikaProfile">
            <div class="row">
                <button class="btn btn-3 text-uppercase" type="submit" id="cv">cv</button>
                <button class="btn btn-3 text-uppercase" type="submit" id="linkedIn">linkedin</button>
                <button class="btn btn-3 text-uppercase active" type="submit" id="laika">wearelaika.com</button>
            </div>
            <div class="col-md-11 border-1" style="margin-top:5%;">
                <div class="row">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators" style="display:none;">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner" role="listbox">
                            <div class="item active" id="imgLaika1">
                                <img src="img/Laika/Laika1.png" alt="pic1" class="img-responsive imgEdit">
                            </div>
                            <div class="item" id="imgLaika2">
                                <img src="img/Laika/Laika2.png" alt="pic2" class="img-responsive imgEdit">
                            </div>
                            <div class="item" id="imgLaika3">
                                <img src="img/Laika/laika3.png" alt="pic3" class="img-responsive imgEdit">
                            </div>
                            <div class="item"id="imgLaika4">
                                <img src="img/Laika/Laika4.png" alt="pic4" class="img-responsive imgEdit">
                            </div>
                            <div class="item"id="imgLaika5">
                                <img src="img/Laika/Laika5.png" alt="pic4" class="img-responsive imgEdit">
                            </div>
                        </div>

                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"></a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"></a>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-md-4 border-1" id="laik" style="width:30%; margin-top:11%; margin-left:3%;">
            <h1 class="explanation">Move the mouse on the picture to see the tips :)</h1>
            <div class="tips col-md-12"></div>

        </div>
    </div>
</body>
<footer>
    <div class="row col-md-12 text-center">
        <p>Created with <span>
                <3</span> by the <a href="http://codepreneurs.co/" class="purple">Brainster Coding Academy</a>
                    students and <a href="https://www.wearelaika.com/" class="purple">werelaika.com
            </span></p>
    </div>
    <div class="container-fluid col-md-12">
        <div class="row">
            <div class="col-md-6 footerBrain">
                <p class="text-center">Do you want to learn hands-on digital skills?
                    <button type="btn submit "><a href="​​https://brainster.co/" class="text-uppercase">visit
                            brainster</a></button></p>
            </div>
            <div class="col-md-6 footerLaika">
                <p class="text-center">Do you want to recieve job offers by IT Companies?
                    <button type="btn submit"><a href="https://www.wearelaika.com/" class="text-uppercase">visit
                            laika</a></button></p>
            </div>
        </div>
    </div>
</footer>
<!-- jQuery library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/laika.js"></script>
</body>

</html>