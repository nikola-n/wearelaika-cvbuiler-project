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
	<link rel="stylesheet" type="text/css" href="css/dataScience.css">
	<!-- Font-awesome 5 cdn -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body>

	<div class="container-fluid">
		<div class="col-md-8 border-1" id="databCV">
			<div class="row">
				<button class="btn btn-3 active text-uppercase" type="submit" id="cv">cv</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="linkedIn">linkedin</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="laika">wearelaika.com</button>
				<button class="btn btn-4 text-uppercase" type="submit" id="edit">edit</button>
			</div>
			<div class="col-md-12" style="padding-top:3%;">
				<div class="row">
					<div class="col-md-3" style="width:auto;" id="photo">
						<img src="img/dataimg.jpg" alt="data" class="img-circle elon">
						<form id="form1" runat="server" style='display:none;'>
							<input type='file' id="imgInp" class="img" />
							<img id="blah" src="#" alt="your image" />
						</form>
					</div>
					<div class="col-md-8">
						<input type="text" class="name" name="name" id="name" placeholder="Aleksandra Janakievska">
						<input type="profession" class="profession" name="profession" id="profession" placeholder="Data Scientist">
						<textarea name="description" class="sameTextarea" id="description" placeholder="Highly accurate and experienced Data Scientist adept at collecting, analyzing, and interpreting large&#10;datasets, developing new forecasting models, and performing data management tasks."></textarea>
					</div>
					<div class="col-md-12 hr">
						<i class="glyphicon glyphicon-envelope" style="margin-right:1%;"></i><input type="email" style="width:200px; margin-right:6%;" name="email" id="email" placeholder="aleksandraxx@wearelaika.com">
						<i class="glyphicon glyphicon-phone" style="margin-right:1%;"></i><input type="phone" style="width:auto;" name="phone" id="phone" placeholder="xxxxxx">
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<div class="row" id="work">
					<div class="col-md-11 col-md-offset-1">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; font-weight:bold;">work exeperience</h3>
						<input type="text" class="founder" id="profession" placeholder="Data Scientist">
						<input type="text" class="expl" id="company" placeholder="Rocket Corp">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" id="date" placeholder="11/2019-Present">
							<input type="text" class="town text-right" id="town" placeholder="Skopje">
						</div>
						<input type="text" class="accompl" disabled placeholder="Accomplishments/Tasks">
						<div style="display: flex;">
							<textarea type="text" id="d1" style='width:100%;height:75px;' class="wExp sameTextarea" placeholder="-Collecting, analyzing, and interpreting raw data from various&#10;websites"></textarea>
						</div>
						<div style="display:flex;">
							<textarea type="text" id="d2" style='width:100%;height:130px;' class="wExp sameTextarea" placeholder="- Colaborating with the Operations and Technology&#10;Department on the development of new automated data&#10; management/analysis software which increases the overall&#10; productivity and cut unnecessary costs"></textarea>
						</div>
						<div style="display: flex;">
							<textarea type="text" id="d3" style='width:550px;height:60px;' class="wExp sameTextarea" placeholder="- Maintaining and managing company's MS SQL server"></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="newWorkExp" style="margin-top:5%;"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="addMoreBtn"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>
				<div class="row" id="dsIntern">
					<div class="col-md-11 col-md-offset-1">
						<input type="text" class="founder" placeholder="Data Science Intern">
						<input type="text" class="expl" placeholder="Random Corp">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="07/2019-10/2019">
							<input type="text" class="town text-right" placeholder="Skopje">
						</div>
						<input type="text" class="accompl" disabled placeholder="Accomplishments/Tasks">
						<div style="display: flex;">
							<textarea type="text" style='width:100%;height:95px;' class="wExp sameTextarea" placeholder="- Reported actionable, statistical, and analytical insights to&#10; executives for effective strategic positioning in the market&#10;place"></textarea>
						</div>
						<div style="display:flex;">
							<textarea type="text" style='width:100%;height:70px;' class="wExp sameTextarea" placeholder="- Shadowed data scientists and assist in developing alorithms&#10;for predictive modeling"></textarea>
						</div>
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:70px;' class="wExp sameTextarea" placeholder="- Analyzed and processed sophisticated data sets using,&#10;MySQL, and Excel"></textarea>
						</div>
						<div style="display: flex;">
							<textarea type="text" style='width:100%;height:70px;' class="wExp sameTextarea" placeholder="- Wrote python scripts to automate everyday tasks"></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="edutips">
					<div class="col-md-11 col-md-offset-1">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; font-weight:bold;">education</h3>
						<input type="text" class="founder" id="eduData" placeholder="Data Science Academy">
						<input type="text" class="expl" id="eduPlace" placeholder="Brainster">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" id="eduDate" placeholder="01/2019-01/2020">
							<input type="text" class="town text-right" id="eduTown" placeholder="Skopje">
						</div>
						<input type="text" class="founder" id="newEdu" placeholder="Financial Management">
						<textarea type="text" class="expl" id="newPlace" placeholder="Faculty of Economy, University &quot;St. Cyril and&#10; Methodius&quot;"></textarea>
					</div>
				</div>
				<div class="row" id="addNewAch" style="margin-top:5%;"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="addAchBtn"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<div class="row" id="skillstips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">skills</h3>

						<div class="python">
							<span class="lang">Python</span> <span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="EmptyDot"></span>
						</div>
						<div class="python">
							<span class="lang" style="margin-right:49%;">MySQL</span> <span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="EmptyDot"></span>
						</div>
						<div class="python">
							<span class="lang" style="margin-right:54%;">PHP</span> <span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="EmptyDot"></span>
							<span class="EmptyDot"></span>
						</div>
						<div class="python">
							<span class="lang" style="margin-right:58%;">R</span> <span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="EmptyDot"></span>
							<span class="EmptyDot"></span>
						</div>
						<div class="python">
							<span class="lang" style="margin-right:58%;">C</span> <span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="EmptyDot"></span>
							<span class="EmptyDot"></span>
						</div>
					</div>
				</div>
				<div class="row" id="skillAdd" style="margin-top:5%;"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="skillBtn"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>
				<div class="row" id="certificatetips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">certificates</h3>
						<input type="text" class="sameTextarea" name="cert1" id="cert1" placeholder="Data Analysis"><br><br>
						<input type="text" class="sameTextarea" name="cert1" id="cert2" placeholder="Machine Learning">
					</div>
				</div>
				<div class="row" id="addAchievement"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn pull-right" style="margin-top:-7%;" id="addBt"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>
				<div class="row" id="languagetips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">languages</h3>
						<input type="text" class="sameTextarea" name="cert1" id="languageOne" placeholder="English"><br>
						<input type="text" style="font-style: italic;" name="cert1" id="profisciency" placeholder="Full Professional Proficiency">
					</div>
				</div>
				<div class="row" id="addLanguage"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn pull-right" style="margin-top:-7%;" id="addLangBtn"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>
				<div class="row" id="informaltips">
					<div class="col-md-12">
						<h3 class="text-uppercase subTitle" style="margin-top:4%; margin-bottom: 5%; font-weight:bold;">informal education</h3>
						<span class="edu1">Artificial Inteligence Webinar</span> <br> <br>
						<span class="edu1">Business Analytics Course</span>
					</div>
				</div>
				<div class="row" id="addInformal"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn pull-right" style="margin-top:-7%;" id="informalBtn"><i class="fas fa-plus-square"></i></button>
					</div>
				</div>

				<div class="row">
					<button type="button" class="btn btn-5 text-uppercase" data-toggle="modal" data-target="#myModal" type="submit">download</button>
				</div>

			</div>
		</div>
		<div class="col-md-4 border-1" id="dataScienceCV" style="width:30%; margin-left:3%;">
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
<script src="js/dataScience.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.session.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
</body>

</html>