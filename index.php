<?php date_default_timezone_set("America/Los_Angeles"); ?> 

<!DOCTYPE html>
<html lang="en">
  <head>
  	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Play Free Online Casino Games for Fun | No Deposits, No Downloads or Registration | Free Slots, Free Blackjack, Free Video Poker and Free Roulette">
    <title>DoubleDown Chip in for the Cause Promotion</title>
    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"> 
    <!-- Custom styles for this template -->
  	<link href="https://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans" rel="stylesheet">
  	<link href="css/master-css.css" rel="stylesheet">
	<script>
		// Automates Ribbon Fill //
		$(document).ready(function () {

			var d = <?php echo date("d"); ?>;
			var n = <?php echo date("H"); ?>;

			if (d == 05) {

				if (n > 5 && n < 8) {  // 6-7am
					$('#progress_ribbon').css("height", "3%");
					
				} else if (n > 7 && n < 10) { // 8-9:59am
					$('#progress_ribbon').css("height", "5%");
					
				} else if (n > 9 && n < 12) { // 10-11:59am
					$('#progress_ribbon').css("height", "12%");
					
				} else if (n > 11 && n < 14) { // 12-1:59pm or 12-13
					$('#progress_ribbon').css("height", "18%");
					
				} else if (n > 13 && n < 16) { // 2-3:59pm or 14-15
					$('#progress_ribbon').css("height", "22%");
					
				} else if (n > 15 && n < 18) { // 4-5:59pm or 16-17
					$('#progress_ribbon').css("height", "31%");
					
				} else if (n > 17 && n < 20) { // 6-7:59pm or 18-19
					$('#progress_ribbon').css("height", "35%");
					
				} else if (n > 19 && n < 22) { // 8-9:59pm or 20-21
					$('#progress_ribbon').css("height", "40%");
					
				} else if (n > 21 && n < 24) { // 10-11:59pm or 22-23
					$('#progress_ribbon').css("height", "51%");
					
				} else {
					$('#progress_ribbon').css("height", "0%");
				}
			}
			if (d == 18) {

				if (n < 1 && n < 3) {  	// 0-2:59am
					$('#progress_ribbon').css("height", "53%");
					
				} else if (n > 1 && n < 4) {  // 2-3:59am
					$('#progress_ribbon').css("height", "56%");
					
				} else if (n > 3 && n < 6) {  // 4-5:59am
					$('#progress_ribbon').css("height", "60%");
					
				} else if (n > 5 && n < 8) {  // 6-7:59am
					$('#progress_ribbon').css("height", "64%");
					
				} else if (n > 7 && n < 10) { // 8-9:59am
					$('#progress_ribbon').css("height", "68%");
					
				} else if (n > 9 && n < 12) { // 10-11:59am
					$('#progress_ribbon').css("height", "70%");
					
				} else if (n > 11 && n < 14) { // 12-1:59pm (12-13:59)
					$('#progress_ribbon').css("height", "72%");
					
				} else if (n > 13 && n < 16) { // 2-3:59pm (14-15:59)
					$('#progress_ribbon').css("height", "85%");
					$('#progress_ribbon').addClass("complete");
					
				} else if (n > 15 && n < 18) { // 4-5:59pm (16-17:59)
					$('#progress_ribbon').css("height", "90%");
					$('#progress_ribbon').addClass("complete");
					
				} else if (n > 17 && n < 20) { // 6-7:59pm (18-19:59)
					$('#progress_ribbon').css("height", "94%");
					
				} else if (n > 19 && n < 22) { // 8-9:59pm (20-21:59)
					$('#progress_ribbon').css("height", "95%");
					
				} else if (n > 21 && n < 23) { // 10-10:59pm (22-22:59)
					$('#progress_ribbon').css("height", "96%");
					
				} else if (n = 23) { // 11pm (23-23:59)
					$('#progress_ribbon').css("height", "100%");
					$('#progress_ribbon').addClass("complete");
					
				} else {
						$('#progress_ribbon').css("height", "100%");
						$('#progress_ribbon').addClass("complete");
				}
			}
			if (d > 18) {
				$('#progress_ribbon').css("height", "100%");
				$('#progress_ribbon').addClass("complete");
			}
		});

		//Pops Success Dialog at 100% //
		$(document).ready(function () {
			if ($('#progress_ribbon').hasClass("complete")) {
				$('#myModal').css("display", "block");
			}
		});

		//Allows Dialog Close//
		function closeModal() {
			$('#myModal').css("display", "none");
		}  
	</script> 
  </head>
  
  <body>
  	<!-- fixed Header Code Begins ================================================== -->
    <!--<nav class="navbar navbar-default navbar-fixed-top">-->
	  <div class="nav-container">
		<div id="ddc-logo"></div>
		<div id="gold-frame"></div>
		<div id="nav-color-bar"></div>
		<!--<p class="text-muted">Place sticky header content here.</p>-->
	  </div>
    <!--</nav>-->
    <!-- fixed Header Code Ends ================================================== -->
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
     	
      	<div class="container"> 
          <div class="row">
          	   
           	<div class="left col-sm-6 col-md-6 col-lg-6">
           		<img class="center-block img-fluid logo" src="images/logo.png" alt="Chip In the Cause Logo" />
				<h3 class="bold">Helping Women Now<sup>&reg;</sup></h3>
				<p class="lead">In honor of Breast Cancer Awareness Month, we're supporting National Breast Cancer Foundation, Inc.<sup>&reg;</sup>, and you can help! Earlier this month, we donated $15,000 to NBCF in our Spin for the Cause event. But why stop there?</p>
				<p class="lead">October 17-18, 2017, every chip purchase at DoubleDown Casino will increase our donation to NBCF, up to our goal of another $15,000!</p>
				<p class="lead">Visit this page to check on our progress throughout the event. Each purchase will help fill this meter toward our target donation.</p>
				<p class="lead">Plus, when you purchase chips during this event, you will receive an entry to win 50,000,000 chips! On October 19, we'll select 50 winners at random. Winners will be notified via email and announced on Facebook.</p>
				<p class="lead">
				  <a href="http://hyperurl.co/ddc_playnow" target="_blank" class="btn btn-warning btn-lg gold buttontext">COUNT ME IN!</a>
				</p>
				<img class="nbcflogo" src="images/nbcf.png" alt="National Breast Cancer Foundation Logo"/>		
				<p><small>Begins 10/17/17 &amp; ends 10/18/17 at 11:59pm PT. Winners will be notified by email and posted on the Facebook fan page. Open only to players 18+ yrs of age with a valid email address. All purchases will apply toward the donation drive; the sweepstakes is US-only. Void where prohibited. More details <a href="https://doubledowncasino1.zendesk.com/hc/en-us/articles/209987883" target="_blank">here</a>.</small></p>
			</div><!--end of left column-->
       	
        	<div class="right col-sm-6 col-md-6 col-lg-6">
        		<div class="meter1">
					<div class="bow2">
						<div id="progress_ribbon"><img class="img-fluid" src="images/placeholder.png"alt="Progress Meter"/></div>
						<img class="img-fluid" src="images/pink_mask.png"alt="Progress Meter"/>	
					</div>
					<div class="bow3">
						<img class="img-fluid" src="images/pink_mask.png"alt="Progress Meter"/>	
					</div>
					<div class="bow1"><img class="img-fluid" src="images/top_layer.png"alt="Progress Meter"/></div>		
				</div>
			</div><!--end of right column-->
					
		</div><!--end of row-->		
	</div>

          
<!-- Dialog-One Code Begins (Using Modal) ================================================== -->
			<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  	<div class="modal-header">
			 			<h4 class="modal-title" id="myModalLabel">Thank You!</h4>
				  	</div>
					<div class="modal-body">
						<p>You've helped us reach our goal, sending $15,000 to National Breast Cancer Foundation, Inc.<sup>&reg;!</sup></p> 
					</div>
					<div class="modal-footer">
						<button onClick="closeModal()" type="button" class="btn pink">Close</button>
					</div>
				 </div>
			  </div>
			</div>
<!-- Dialog-One Code Ends (Using Modal) ================================================== -->

        </div><!--end of site wrapper inner--->
      </div><!--end of site wrapper--->

    
<!-- Footer Code Begins ================================================== -->
	<footer class="footer">
		<ul class="text-muted">
			<li><a href="http://www.doubledowninteractive.com/privacy/index.html" target="_blank">Privacy Policy</a></li>
			<li><a href="http://www.doubledowninteractive.com/terms/index.html" target="_blank">Terms of Use</a></li>
			<li><a href="https://doubledowncasino1.zendesk.com/hc/en-us/articles/115001446606" target="_blank">Help Desk</a></li>
		</ul>
	</footer>
<!-- Footer Code Ends ================================================== -->


<!-- Optional JavaScript -->
<!-- Popper.js, then Bootstrap JS -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
