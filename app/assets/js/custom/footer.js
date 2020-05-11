document.getElementById("footer").innerHTML = `
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
			
				<!-- About Us -->
				<h5 class="section_footer__heading">
					About Us
				</h5>
				<p>
					At Hungry Panda, we don't just make dimsum. We make people happy. We understand how to best serve our customers. We view food not just as an end product, but as a fine work of art. Every detail matters to us.
				</p>

			</div>
			<div class="col-lg-4">
			
				<!-- Contact info -->
				<h5 class="section_footer__heading">
					Contact info
				</h5>
				<ul class="section_footer__info">
					<li id="footer-whatsapp">
						<!-- populated with JS -->
					</li>
					<li id="footer-instagram">
						<!-- populated with JS -->
					</li>
					<li id="footer-email">
						<!-- populated with JS -->
					</li>
					<li id="footer-address">
						<!-- populated with JS -->
					</li>
				</ul>

			</div>
			<div class="col-lg-4">
			
				<!-- Opening hours -->
				<h5 class="section_footer__heading">
					Opening hours
				</h5>

				<div class="section_footer__open">
					<div class="section_footer__open__days">
						<div class="container">
							<div class="row" id="footer-day-time">
							</div>
						</div>
					</div>
				</div>

			</div>
		</div> <!-- / .row -->
		<div class="row">
			<div class="col-12">
			
				<!-- Copyright -->
				<div class="section_footer__copyright">
					&copy; <span id="js-current-year"></span> Hungry Panda. All rights reserved.<br>
					Crafted by Morningtea Studios.
				</div>

			</div>
		</div> <!-- / .row -->
	</div> <!-- / .container -->
`;
