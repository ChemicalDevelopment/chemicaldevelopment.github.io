---
layout: homepage
---

<!-- Header -->
<header id="header">
	<div class="content">
		<h1><a href="#">{{ site.title }}</a></h1>
		<ul class="actions">
		<!-- <li><a href="{{ site.download_button_url }}" class="button special icon fa-download">Download</a></li> -->
		Creating new technology... &nbsp;&nbsp;&nbsp;
		<li><a href="#one" class="button icon fa-chevron-down scrolly">Learn More</a></li>
		</ul>
	</div>
	<div class="image mainlogo"><div class="inner"><img src="assets/sleeklogo.svg" alt="" /></div></div>
	<br/>
	{% include navbar.html style="position: absolute; bottom: 0px; background-color: transparent !important;" %}
</header>



<!-- One -->
<section id="one" class="wrapper style2 special">
	<header class="major">
		<h2>We are hard at work on some new technologies! Stay tuned for Summer 2020!</h2>
	</header>
	<p>
		Check out our <a href="{{ 'about' }}">About</a> page for information about us!
		Or, continue scrolling to see our featured projects!
	</p>
</section>

<!-- Two -->
<section id="two" class="wrapper">
	<div class="inner alt">
		<!-- TODO: add featuring projects here -->
		<section class="spotlight">
			<div class="image"><img src="assets/images/pic01.jpg" alt="" /></div>
			<div class="content">
				<h3>Magna sed ultrices</h3>
				<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
			</div>
		</section>

		<!--
		<section class="spotlight">
			<div class="image"><img src="assets/images/pic02.jpg" alt="" /></div>
			<div class="content">
				<h3>Ultrices nullam aliquam</h3>
				<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
			</div>
		</section>
		<section class="spotlight">
			<div class="image"><img src="assets/images/pic03.jpg" alt="" /></div>
			<div class="content">
				<h3>Aliquam sed magna</h3>
				<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
			</div>
		</section>
		-->

		<!-- TODO: add disclaimers here maybe -->
		<section class="special">
			<ul class="icons labeled">
				<li><span class="icon fa-cloud"><span class="label">Cloud-enabled</span></span></li>
				<li><span class="icon fa-code"><span class="label">Blockchain-positive</span></span></li>
				<li><span class="icon fa-desktop"><span class="label">Cross-platform</span></span></li>
			</ul>
		</section>
	</div>
</section>
