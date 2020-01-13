<?php

session_start();
if (isset($_SESSION['cv_image'])) {
	$slika = $_SESSION['cv_image'];
} else {
	$slika = 'img/digital.jpg';
}
?>

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
	<link rel="stylesheet" type="text/css" href="css/digital.css">
	<!-- Font-awesome 5 cdn -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body>

	<div class="container-fluid">
		<div class="col-md-8 border-1" id="digitalCV">
			<div class="row">
				<button class="btn btn-3 active text-uppercase" type="submit" id="cv">cv</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="linkedIn">linkedin</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="laika">wearelaika.com</button>
				<button class="btn btn-4 text-uppercase" type="submit" id="edit">edit</button>
			</div>
			<div class="col-md-12" style="padding-top:3%;">
				<div class="row">
					<div class="col-md-3" style="width:auto;" id="photo">
						<img src="<?php echo $slika; ?>" alt="data" class="img-circle img-responsive dataImg">
						<form action="upload.php" method="post" enctype="multipart/form-data" style="display:none;">
							Select image to upload:
							<input type="file" name="fileToUpload" id="fileToUpload">
							<input type="submit" value="Upload Image" name="submit" class="btn btn-danger">
						</form>
					</div>
					<div class="col-md-8 intro">
						<input type="text" class="name" name="name" id="name" placeholder="Stefanija Tenekedjieva">
						<input type="text" class="profession" name="profession" id="profession" placeholder="Digital Marketer">
						<textarea name="description" class="description sameTextarea" id="description" placeholder="Fascinated by to power of communication and media. Quick learner. Endlessly currious and keen to know&#10; more."></textarea>
					</div>
					<div class="col-md-12 hr">
						<i class="glyphicon glyphicon-envelope" style="margin-right:1%;"></i><input type="email" style="width:200px; margin-right:6%; background-color:#1d909a;" class="email" name="email" id="email" placeholder="aleksandraxx@wearelaika.com">
						<i class="glyphicon glyphicon-phone" style="margin-right:1%;"></i><input type="phone" style="width:auto; background-color:#1d909a;" name="phone" id="phone" class="phone" placeholder="xxxxxx">
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<div class="row" id="workExps">
					<div class="col-md-1 line" style="margin-top:15%"></div>
					<div class="col-md-11 col" style="margin-top:4%;">
						<h3 class="text-uppercase subTitle1" style="margin-top:0%; font-weight:bold;">work exeperience</h3>
						<input type="text" class="founder" id="founder1" placeholder="Digital Marketer">
						<input type="text" class="expl" id="expl1" placeholder="Laika">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" id="date" placeholder="07/2019-Present">
							<input type="text" class="town" id="town" style="margin-left:50%;" placeholder="Skopje, Macedonia">
						</div>
						<input type="text" class="accompl" disabled id="accompl" disabled placeholder="Accomplishments/Tasks">
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:35px;' id="t1" class="wExp sameTextarea" placeholder="Content writing"></textarea>
						</div>
						<div style="display:flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:35px;' id="t2" class="wExp sameTextarea" placeholder="Social media advertising"></textarea>
						</div>
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:35px;' id="t3" class="wExp sameTextarea" placeholder="Lead generation"></textarea>
						</div>
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:35px;' id="t4" class="wExp sameTextarea" placeholder="Conversion rate optimisation"></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="newWorkExp"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn-success pull-right" style="margin-top:-5%;" id="addMoreBtn">Add Job</button>
					</div>
				</div>
				<div class="row" id="founder">
					<div class="col-md-1 line"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="Project Coordinator">
						<input type="text" class="expl" placeholder="Radio MOF">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="12/2017-02/2019">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Skopje, Macedonia">
						</div>
						<input type="text" class="accompl" disabled placeholder="Accomplishments/Tasks">
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:auto;' class="wExp sameTextarea" placeholder="Editing, writing, planning and reporting for the projects of&#10;radio mof"></textarea>
						</div>
						<div style="display:flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:auto;' class="wExp sameTextarea" placeholder="Maintaining social media profiles, web content and statistics&#10;of www.radiomof.mk through Google Analytics"></textarea>
						</div>
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:100%;height:auto;' class="wExp sameTextarea" placeholder="Editing and proofreading of content on www.radiomof.mk"></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="journalist">
					<div class="col-md-1 line"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="Journalist">
						<input type="text" class="expl" placeholder="Radio MOF">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="09/2015-12/2017">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Skopje, Macedonia">
						</div>
						<input type="text" class="accompl" disabled placeholder="Accomplishments/Tasks">
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:550px;height:35px;' class="wExp sameTextarea" placeholder="Content writing and reporting for Radio MOF"></textarea>
						</div>
						<div style="display:flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:550px;height:35px;' class="wExp sameTextarea" placeholder="Reports and articles for radio shows"></textarea>
						</div>
						<div style="display: flex;">
							<li class="li-style"></li>
							<textarea type="text" style='width:550px;height:35px;' class="wExp sameTextarea" placeholder="Hosting trainings for Civil and Digital Journalism"></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="educationtips">
					<div class="col-md-1 line" style="margin-top:18%;"></div>
					<div class="col-md-11">
						<h3 class="text-uppercase subTitle1" style="margin-top:4%; margin-bottom: 6%; font-weight:bold;">education</h3>
						<input type="text" class="founder" id="educ" disabled placeholder="Education">
						<input type="text" class="expl" id="expl3" placeholder="Brainster Digital Marketing Academy">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" id="date3" class="date" placeholder="04/2019-09/2019">
							<input type="text" id="town3" class="town" style="margin-left:50%;" placeholder="Skopje, Macedonia">
						</div>
						<input type="text" class="accompl" disabled placeholder="Courses">
						<div class="col-md-6" style="padding:0;">
							<ul class="cirlce">
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e1">Integrated Marketing&#10;Communication</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e2" style="height:30px;">Unpaid & Paid Social Media</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e3" style="height:30px;">Lead Generation</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e4" style="height:30px;">Google Analytics</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e5" style="height:30px;">Segmentation</textarea>
								</div>
							</ul>
						</div>
						<div class="col-md-6" style="padding:0;">
							<ul class="cirlce">
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e6">Funnel Marketing</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e7" style="height:30px;">Sales</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e8" style="height:30px;">Google Ads</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e9" style="height:30px;">Growth Hacking</textarea>
								</div>
								<div style="display: flex;">
									<li class="li-style"></li>
									<textarea class='spanColor' id="e10" style="height:30px;">SEO</textarea>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div class="row" id="newEducation"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn-success pull-right" style="margin-top:-7%;" id="addEducation">Add Education</button>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<div class="row" id="skillstips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle1" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">skills</h3>
						<button class="btn btn-style">Google Ads</button>
						<button class="btn btn-style">Facebook Ads Manager</button> <br>
						<button class="btn btn-style">Google Analytics</button>
						<button class="btn btn-style">Google Data Studio</button>
						<button class="btn btn-style">Wordpress</button>
						<button class="btn btn-style">Canva</button>
						<button class="btn btn-style">Adobe Premiere</button>
						<button class="btn btn-style">Content Writing</button>
						<div class="tag-container" style="display: none;">
							<div id="app">
								<div class="tagHere">
								</div>
								<input type="text" id="skillsInput" />
							</div>
						</div>
					</div>
				</div>
				<div class="row" id="achievementtips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle1" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">achievements</h3>
						<textarea type="text" class="sameTextarea" id="ach1" name="cert1" placeholder="First Award for Professional reporting of the refugee&#10;crisis in 2017 by UNHCR and MYLA"></textarea><br><br>
						<textarea type="text" class="sameTextarea" id="ach2" name="cert1" placeholder="Third award for Best journalistics story from the&#10;Macedonian Council of Ethics in Media"></textarea>
					</div>
				</div>
				<div class="row" id="addAchievement"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn-success pull-right" style="margin-top:-7%;" id="addAchBtn">Add Achievement</button>
					</div>
				</div>
				<div class="row" id="langtips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle1" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">languages</h3>
						<input type="text" class="sameTextarea" id="lang1" name="cert1" placeholder="English"><br>
						<input type="text" style="font-style: italic;" id="profi" class="cert1" name="cert1" placeholder="Full Professional Proficiency">
					</div>
				</div>
				<div class="row" id="addLanguage"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn-success pull-right" style="margin-top:-7%;" id="addLangBtn">Add Language</button>
					</div>
				</div>
				<div class="row">
					<button type="button" class="btn btn-5 text-uppercase" data-toggle="modal" data-target="#myModal" type="submit">download</button>
				</div>

			</div>
		</div>
		<div class="col-md-4 border-1" id="digitalMCV" style="width:30%; margin-left:3%;">
			<h1 class="explanation">Move or Click with your mouse on the CV to see the tips :)</h1>
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
				<div class="modal-footer">
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
<script src="js/digital.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.session.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
</body>

</html>