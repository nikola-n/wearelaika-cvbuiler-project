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
    <link rel="stylesheet" type="text/css" href="css/design.css">
    <!-- Font-awesome 5 cdn -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body>

    <div class="container-fluid">
        <div class="col-md-8 border-1" id="designCV">
            <div class="row">
                <button class="btn btn-3 active text-uppercase" type="submit" id="cv">cv</button>
                <button class="btn btn-3 text-uppercase" type="submit" id="linkedIn">linkedin</button>
                <button class="btn btn-3 text-uppercase" type="submit" id="laika">wearelaika.com</button>
                <button class="btn btn-4 text-uppercase" type="submit" id="edit">edit</button>
            </div>
            <div class="col-md-8 col-md-offset-1 design">
                <div class="col-md-7" style="padding:0;">
                    <div class="designer">
                        <div class="justName">
                            <textarea name="designer" style="width:100%;height:250px;" class="name" id="designer" placeholder="Kiril&#10;Nikolovski"></textarea>
                        </div>
                        <div class="professiontip">
                            <textarea name="profession" class="profession" id="profession" placeholder="Graphic Designer"></textarea>
                        </div>
                    </div>
                    <div class="row" id="descriptiontips">
                        <div class=" col-md-11 col-md-offset-1 description">
                            <textarea name="description" class="expl" style="width:100%; height:200px;font-size:1.4em;" id="description" placeholder="Graphic Designer with expertise in branding&#10;and logo design, packaging design,typography, creative&#10;direction and illustration. Oriented into helping small&#10;businesses realize their unique vision."></textarea>
                        </div>
                    </div>
                    <div class="row" id="workExp">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <h3 class="text-uppercase" style="margin-top:0%; font-weight:bold;">work exeperience</h3>
                            <input type="text" class="founder" id="workDate" placeholder="02.2019 -">
                            <input type="text" class="expl" id="company" placeholder="Brainster.co, Skopje">
                            <input type="text" class="expl" id="prof" placeholder="Junior Graphic Designer">
                            <textarea name="descr" class="expl" id="descr" style="height: 140px;" placeholder="Creating visual concepts to communicate ideas that&#10; inspire, inform and captivate consumers. Developing overall layout&#10; and production design for ads, brochures, magazines&#10;and corporate digital marketing content."></textarea>
                        </div>
                    </div>
                    <div class="row" id="newWorkExp"></div>
                    <div class="row">
                        <div class="col-md-12 displayBtn" style="display:none;">
                            <button class="btn pull-right" style="margin-top:-7%;" id="addMoreBtn"><i class="fas fa-plus-square"></i></button>
                        </div>
                    </div>
                    <div class="row" id="upwork">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <input type="text" class="founder" placeholder="2016 - 2019">
                            <input type="text" class="expl" placeholder="Upwork">
                            <input type="text" class="expl" placeholder="Freelance Graphic Designer">
                            <textarea name="descr" class="expl" id="descr" style="height:165px;" placeholder="Working with international clients and helping&#10;them get their ideas out in a workable way.&#10;Conceptualizing visuals based on their requirements.&#10;Shaping the visual aspects of brand identities,&#10;product packaging, book covers, magazines,&#10;brochures, posters and many more."></textarea>
                        </div>
                    </div>
                    <div class="row" id="contact">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <h3 class="text-uppercase" style="margin-top:0%; font-weight:bold;">contact</h3>
                            <input type="text" class="expl" placeholder="" disabled>
                            <input type="text" class="expl" id="designerPhone" placeholder="xxxxxx">
                            <input type="text" class="expl" id="designerEmail" placeholder="kiril.nikolovskixx@gmail.com">
                            <input type="text" class="expl" id="designerLinkedIn" placeholder="linkedin.com/in/kiril-nikolovski">
                            <input type="text" class="expl" id="designerLocation" placeholder="Skopje,Macedonia">
                        </div>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="row" id="educationtips">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <h3 class="text-uppercase subTitle1" style="margin-top:175%; font-weight:bold;">education</h3>
                            <input type="text" class="expl" id="educationDate" placeholder="2018 - 2019">
                            <input type="text" class="expl" id="academy" placeholder="Brainster Academy of Design">
                        </div>
                    </div> <br> <br>
                    <div class="row" id="newEducation"></div>
                    <div class="row">
                        <div class="col-md-12 displayBtn" style="display:none;">
                            <button class="btn pull-right" style="margin-top:-12%;" id="addEducation"><i class="fas fa-plus-square"></i></button>
                        </div>
                    </div>
                    <div class="row" id="faculty">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <input type="text" class="expl" placeholder="2016 - 2019">
                            <textarea type="text" class="expl" style="height:110px;" placeholder="Ss. Cyril and Methodius University&#10;Faculty of Mechanical Engineering&#10;Industrial Design"></textarea>
                        </div>
                    </div>
                    <div class="row" id="skilltips">
                        <div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
                            <h3 class="text-uppercase subTitle1" style="margin-top:0%; font-weight:bold;">skills</h3>
                            <input type="text" class="expl new" id="designerSkill" placeholder="Adobe Photoshop"><br>
                            <div class="hideSkill">
                                <input type="text" class="expl" placeholder="Adobe Illustrator"><br>
                                <input type="text" class="expl" placeholder="Adobe InDesign"><br>
                                <input type="text" class="expl" placeholder="Adobe Premiere Pro"><br>
                                <input type="text" class="expl" placeholder="Adobe After Effects"><br>
                                <input type="text" class="expl" placeholder="Adobe Xd"><br>
                                <input type="text" class="expl" placeholder="MS Office"><br>
                                <input type="text" class="expl" placeholder="SolidWorks"><br>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="newSkill"></div>
                    <div class="row">
                        <div class="col-md-12 displayBtn" style="display:none;">
                            <button class="btn pull-right" style="margin-top:-12%;" id="addSkill"><i class="fas fa-plus-square"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <button type="button" class="btn btn-5 text-uppercase" data-toggle="modal" data-target="#myModal" type="submit">download</button>
            </div>
        </div>
        <div class="col-md-4 border-1" id="dataScienceCV" style="width:30%; margin-left:3%;">
            <h1 class="explanation">Move and Click with your mouse on the CV to see the tips :)</h1>
            <div class="tips col-md-12"></div>
        </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modalWidth" role="document">
            <div class="modal-content">
                <div class="modal-body col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="modalHeading">Did you finish all<br> three? Way to go!</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="paragraph">Good luck on your next job! If <br> you need help, counseling or <br> just want to leave suggestion,<br> contact us at <br> <a href="#">hello@wearelaika.com.</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 modalImg">
                            <img src="img/popupback.png" class="img-responsive" alt="popup">
                        </div>
                    </div>
                </div>
                <div class="row col-md-12 text-center">
                    <p style="padding-top:15%;">Created with <span>
                            <3</span> by the <a href="http://codepreneurs.co/" class="purple">Brainster Coding Academy</a>
                                students and <a href="#" class="purple">werelaika.com
                        </span></p>
                </div>

                <div class="modalBtns">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-backward"></i> Go Back</button>
                    <button type="button" id="pdfDownloader" class="btn btn-default"><i class="fas fa-forward"></i>Submit</button>
                </div>

            </div>
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
                    <button type="btn submit "><a href="​​ https://brainster.co/" class="text-uppercase">visit
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
<script src="js/design.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.session.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>

</body>

</html>