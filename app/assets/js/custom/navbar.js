let indexdothtmlActive = '';
let menudothtmlActive = '';
let frozen_dimsumdothtmlActive = '';

const analyzeHtmlFileName = () => {
	const path = window.location.pathname;
	const page = path.split("/").pop();	
	
	switch (page) {
	  case 'index.html':
	    indexdothtmlActive = 'active';
	    break;
	  case 'menu.html':
	    menudothtmlActive = 'active';
	    break;
	   case 'frozen_dimsum.html':
	    frozen_dimsumdothtmlActive = 'active';
	    break;
	}	
}

analyzeHtmlFileName();

document.getElementById("navbar-outerlayer").innerHTML = `
	<div class="container">
	
		<!-- Navbar: Brand -->
		<a class="navbar-brand" href="index.html">Hungry Panda</a>

		<!-- Navbar: Toggler -->
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		
		<!-- Navbar: Collapse -->
		<div class="collapse navbar-collapse" id="navbarSupportedContent">

			<!-- Navbar navigation: Right -->
			<ul class="navbar-nav ml-auto">
				<li class="nav-item ${indexdothtmlActive}">
					<a class="nav-link" href="index.html">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="index.html#index_event_1">Private Event</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="index.html#index_catering_1">Catering</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="index.html#index_delivery_1">Delivery</a>
				</li>
				<li class="nav-item ${menudothtmlActive}">
					<a class="nav-link" href="menu.html">Menu</a>
				</li>
				<li class="nav-item ${frozen_dimsumdothtmlActive}">
					<a class="nav-link" href="frozen_dimsum.html">Frozen Dimsum</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#footer">Contact Us</a>
				</li>
			</ul>

		</div> <!-- / .navbar-collapse -->

	</div> <!-- / .container -->
`;
