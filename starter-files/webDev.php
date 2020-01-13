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
	<link rel="stylesheet" type="text/css" href="css/webDev.css">
	<!-- Font-awesome 5 cdn -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

</head>

<body>
	<div class="container-fluid">
		<div class="col-md-8 border-1" id="webCV">
			<div class="row">
				<button class="btn btn-3 text-uppercase active" type="submit" id="cv">cv</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="linkedIn">linkedin</button>
				<button class="btn btn-3 text-uppercase" type="submit" id="laika">wearelaika.com</button>
				<button class="btn btn-4 text-uppercase" type="submit" id="edit">edit</button>
			</div>
			<div class="col-md-12" style="padding-top:3%;">
				<div class="row">
					<div class="col-md-1 square"></div>
					<div class="col-md-4" id="elontips">
						<input type="text" class="name" name="name" id="name" style="height: 42px;" placeholder="Elon Musk">
						<textarea style='width:400px;height:60px;' type="text" name="profession" id="profession" placeholder="Enterepreneur,Engineer,Inventor,&#10;and Investor"></textarea>
						<textarea style='width:400px;height:160px' class="sameTextarea" name='paragraph' id='paragraph' placeholder='Aiming to reduceglobal warming through sustain-&#10;able energy production and consumption.&#10;Planning to reduce the risk of human extincion by&#10;making life multi-planetary and setting up a human&#10;colony on Mars.'></textarea>
					</div>
					<div class="col-md-3" id="photo">
						<img src="img/elonM.jpeg" alt="elon" class="img-circle elon">
						<form id="form1" runat="server" style='display:none;'>
							<input type='file' id="imgInp" class="img" />
							<img id="blah" src="#" alt="your image" />
						</form>
					</div>
					<div class="col-md-2  col-md-offset-1" id="emailtips">
						<input type="email" class="sameInputs" style="width:90%;" name="email" id="email" placeholder="elon@teslamotors.com"><i class="glyphicon glyphicon-envelope"></i>
						<input type="phone" class="sameInputs" style="width:90%;" name="phone" id="phone" placeholder="620-681-5000"><i class="glyphicon glyphicon-phone"></i>
						<input type="text" class="sameInputs" style="width:90%;" name="location" id="location" placeholder="Los Angeles, USA"><i class="fas fa-map-marker-alt"></i>
						<input type="text" class="sameInputs" style="width:90%;" name="twitter" id="twitter" placeholder="@elonmusk"><i class="fab fa-twitter"></i>
					</div>
				</div>
				<div class="row col-md-11">
					<hr style="border:1px solid #00d2c3;">
				</div>
			</div>
			<div class="col-md-6">
				<div class="row" id="work">
					<div class="col-md-1 square-2" style="margin-top:8%"></div>
					<div class="col-md-11">
						<h3 class="text-uppercase" style="margin-top:0%; font-weight:bold;">work exeperience</h3>
						<input type="text" class="founder" id="founders" placeholder="Founder, CEO & Lead Designer">
						<input type="text" class="expl" id="space" placeholder="Space X - Space Exploration Technologies">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" id="date" placeholder="06/2002-Present">
							<input type="text" class="town" id="town" style="margin-left:50%;" placeholder="Howthrone, USA">
						</div>
						<input type="text" class="accompl" placeholder="Accomplishments" disabled>
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:137px;' id="text1" class="wExp sameTextarea" placeholder="Successfully launched Falcon Heavy, the most powerful operational&#10;rocket in the world by a factor of two, with the ability to lift into&#10;orbit nearly 64 metric tons (141,000 lb) -- a mass greater than a&#10;737 jetliner loaded with passengers, crew, luggage and fuel."></textarea>
						</div>
						<div style="display:flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:74px;' id="text2" class="wExp sameTextarea" placeholder="Plans to reduce space transportation costs to enable people to&#10;colonize Mars."></textarea>
						</div>
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:80px;' id="text3" class="wExp sameTextarea" placeholder="Developed the Falcon 9 spacecraft which replaced the space&#10;shuttle when it retired in 2011."></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="newWorkExp" style="margin-top:5%;"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="addMoreBtn"><i class="fas fa-plus-circle"></i></button>
					</div>
				</div>
				<div class="row" id="founder">
					<div class="col-md-1 square-2"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="Founder">
						<input type="text" class="expl" placeholder="The Boring Company">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="06/2002-Present">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Howthrone, USA">
						</div>
						<input type="text" class="accompl" placeholder="Accomplishments">
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:45px;' class="wExp sameTextarea" placeholder="Raised &dollar;10m by selling 200.000 flamethrowers in 4 days"></textarea>
						</div>
						<div style="display:flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:45px;' class="wExp sameTextarea" placeholder="Raised &dollar;1m by selling 50.000 baseball caps."></textarea>
						</div>
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:125px;' class="wExp sameTextarea" placeholder="Hyperloop -- an ultra high-speed underground public&#10;transportation system in which passengers are transported on&#10;autonomous electric pods traveling at 600+ miles per hour in a&#10;pressurized cabin."></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="CEO">
					<div class="col-md-1 square-2"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="CEO and Product Architect">
						<input type="text" class="expl" placeholder="Tesla Inc.">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="06/2002-Present">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Howthrone, USA">
						</div>
						<input type="text" class="accompl" placeholder="Accomplishments">
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:45px;' class="wExp sameTextarea" placeholder="Global sales passed 250,000 units in September 2017."></textarea>
						</div>
						<div style="display:flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:71px;' class="wExp sameTextarea" placeholder="Consumer Reports named Tesla as the top American car brand and ranked in 8th among global carmakers in February 2017."></textarea>
						</div>
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:75px;' class="wExp" placeholder="Topped Consumer Reports Annual Owner Satisfaction Survey at 91% in 2016."></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="COF">
					<div class="col-md-1 square-2"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="Co-founder and Former Chairman">
						<input type="text" class="expl" placeholder="SolarCity (subsidiary of Tesla Inc.">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="06/2002-Present">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Howthrone, USA">
						</div>
						<input type="text" class="accompl" placeholder="Accomplishments">
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:98px;' class="wExp sameTextarea" placeholder="Merged the company with Tesla Inc. and now offers energy&#10;storage services through Tesla, including a turnkey residential&#10; battery backup service that incorporates Tesla's Powerwall."></textarea>
						</div>
						<div style="display:flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:75px;' class="wExp sameTextarea" placeholder="In 2015, installed 870MW of solar power, approximately 28% of non-utility solar installation in the U.S. that year."></textarea>
						</div>
					</div>
				</div>
				<div class="row" id="founderAndCEO">
					<div class="col-md-1 square-2"></div>
					<div class="col-md-11">
						<input type="text" class="founder" placeholder="Founder & CEO">
						<input type="text" class="expl" placeholder="Neurolink">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" placeholder="06/2002-Present">
							<input type="text" class="town" style="margin-left:50%;" placeholder="Howthrone, USA">
						</div>
						<input type="text" class="accompl" placeholder="Accomplishments">
						<div style="display: flex;">
							<div class="square-1"></div>
							<textarea type="text" style='width:550px;height:120px;' class="wExp sameTextarea" placeholder="A company aims to make devices to treat serious brain&#10;diseases in the short-term, with the eventual goal of human&#10;enhancement."></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-5" id="skillstips">
				<div class="row">
					<div class="col-md-12">
						<h3 class="text-uppercase" style="margin-top:0%; margin-bottom: 5%; font-weight:bold;">skills
							&amp; competencies
						</h3>
						<button class="btn btn-style">Thinking through first principles</button>
						<button class="btn btn-style">Marketing</button>
						<button class="btn btn-style">Micromanagement</button>
						<button class="btn btn-style">Goal oriented</button>
						<button class="btn btn-style">Resiliency</button>
						<button class="btn btn-style">Future focused</button>
						<button class="btn btn-style">Leadership</button>
						<button class="btn btn-style">Creativity</button>
						<button class="btn btn-style">Time Management</button>
						<button class="btn btn-style">Persistence</button>
						<button class="btn btn-style">Turning ideas into companies</button>
						<button class="btn btn-style">Long-term thinking</button>
						<div class="tag-container">
							<div id="app">
								<div class="tagHere">
								</div>
								<input type="text" id="skillsInput" />
							</div>
						</div>
					</div>
				</div>
				<div class="row" id="achievementstips">
					<div class="col-md-12">
						<h3 class="text-uppercase" style="margin-top:4%; margin-bottom:5%;font-weight:bold;">
							achievements &amp;
							certificates
						</h3>
						<div class="static">
							<input type="text" class="achievement1" id="ach1" name="achievement1" placeholder="53rd Richest person in the world - Forbes (2018)">
							<textarea type="text" class="achievement1" id="ach2" name="achievement1" style="height: 60px;" placeholder="21st on the Forbes list of The World's Most&#10; Powerful People (2016)"></textarea>
							<input type="text" class="achievement1" id="ach3" name="achievement1" placeholder="IEE Honorary Membership (2015)">
							<textarea name="comment" class="comment" id="ach4" style="height: 60px;" placeholder="Given to people who have rendered meritorious service to&#10;humanity in the IEEE's designoted fields of interest."></textarea>
							<div class="hideAch">
								<input type="text" class="achievement1" name="achievement1" placeholder="Businessperson of The Year by Fortune Magazine (2013)"><i class="fas fa-external-link-alt" style="color: #2fbdad;"></i>
								<input type="text" class="achievement1" name="achievement1" placeholder="FAI Gold Space Medal (2010)">
								<textarea name="comment" class="comment" style="height: 80px;" placeholder="One of the highest honors in the aerospace industry shared with prominent personalities like Neil Armstrong and John Glenn."></textarea>
								<textarea type="text" class="achievement1" name="achievement1" style="height: 60px;" placeholder="Honorary Doctorate in Design from the Art&#10; Center College of Design"></textarea>
								<textarea type="text" class="achievement1" name="achievement1" style="height: 60px;" placeholder="Honorary Doctorate (DUniv) in Aerospace&#10; Engineering from the University of Surrey."></textarea>
								<textarea type="text" class="achievement1" name="achievement1" style="height: 60px;" placeholder="Honorary Doctorate of Engineering and&#10; Technology from Yale University"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="row" id="addNewAch" style="margin-top:5%;"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="addAchBtn"><i class="fas fa-plus-circle"></i></button>
					</div>
				</div>
				<div class="row" id="intereststips">
					<div class="col-md-12">
						<h3 class="text-uppercase" style="margin-top:4%; margin-bottom: 6%; font-weight:bold;">interests
						</h3>
						<div class="col-md-6 hideInterest">
							<div class="fonts">
								<i class="fas fa-atom icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Physics</span>
							</div>
							<div class="fonts">
								<i class="fas fa-mountain icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Sustainability</span>
							</div>
							<div class="fonts">
								<i class="fas fa-baby icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Philanthropy</span>
							</div>
							<div class="fonts">
								<i class="fab fa-twitter icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Twitter</span>
							</div>
							<div class="fonts">
								<i class="fab fa-reddit-alien icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Extraterrestrial Life</span>
							</div>
						</div>
						<div class="col-md-6 hideInterest">
							<div class="fonts">
								<i class="fas fa-asterisk icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Alternative Energy</span>
							</div>
							<div class="fonts">
								<i class="fas fa-rocket icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Space Engineering</span>
							</div>
							<div class="fonts">
								<i class="fas fa-book icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Reading</span>
							</div>
							<div class="fonts">
								<i class="fas fa-gamepad icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">Video Games</span>
							</div>
							<div class="fonts">
								<i class="fab fa-android icon-color"></i> <span style="font-size: 15px; margin-left: 7%;">AI</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row" id="addInterests"></div>
				<div class="row">
					<div class="col-md-12 displayBtn" style="display:none;">
						<button class="btn btn pull-right" id="addInterest"><i class="fas fa-plus-circle"></i></button>
					</div>
				</div>

				<div class="row">
					<button type="button" class="btn btn-5 text-uppercase" data-toggle="modal" data-target="#myModal" type="submit">download</button>
				</div>
			</div>
		</div>

		<div class="col-md-4 border-1" id="webCv" style="width:30%; margin-left:3%;">
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
	</div>
	<!-- jQuery library -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/webDev.js"></script>
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/jquery.session.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>

</body>

</html>