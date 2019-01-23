<nav class="Grid -center -middle {browserWidth <= 800 ? 'mobile' : ''}">
	<div class="Cell {browserWidth <= 800 ? '-fill' : '-3of12'} logo">
		<a href=".">
			<img src="images/logo.jpg" alt="">
		</a>
	</div>

	<ul class="Cell {browserWidth <= 800 ? '-fill' : '-3of12'}">
		<li><a class='{segment === undefined ? "selected" : ""} brand-color-blue' href='.'>Home</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""} brand-color-blue' href='blog'>Blog</a></li>
		<li><a class='{segment === "about" ? "selected" : ""} brand-color-blue' href='about'>Clients</a></li>
		<li><a class='{segment === "faq" ? "selected" : ""} brand-color-blue' href='faq'>Faq</a></li>
	</ul>
</nav>

<style>
	nav {
	  /* border-bottom: 1px solid rgba(114, 135, 155, 1); */
	  border-left: 1px solid red;
	  border-right: 1px solid red;
		font-weight: 300;
		z-index: 100;
	}

	.mobile {
	  position: sticky;
	  top: 0;
	  background: white;
	}

	ul {
	  margin: 0;
	  padding: 0;
	}

	/* clearfix */
	ul::after {
	  content: "";
	  display: block;
	  clear: both;
	}

	li {
	  display: block;
	  float: left;
	}

	.selected {
	  position: relative;
	  display: inline-block;
	}

	.selected::after {
	  position: absolute;
	  content: "";
	  width: calc(100% - 1em);
	  height: 2px;
	  background-color: rgba(114, 135, 155, 1);
	  display: block;
	  bottom: -1px;
	  border-left: 5px solid red;
	  border-right: 5px solid red;
	}

	a {
	  text-decoration: none;
	  padding: 0.4em 0.6em;
	  display: block;
	  font-weight: 700;
	}

	.logo {
	  cursor: pointer;
	}

	.logo img {
	  width: 140px;
	}
</style>