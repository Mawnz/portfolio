<template>
	<div id="app">
		<div id = "main_content">
			<div class = "content md-elevation-12">
				<!-- Navigation -->
				<nav class = "col-lg-4 navbar navigation md-elevation-3">
					<div class = "row w-100">
						<router-link class = "col border-right" to = "/home">
							<md-button class = "md-icon-button">
								<md-icon>person</md-icon>
							</md-button>
						</router-link>
						<router-link class = "col border-right" to = "/skills">
							<md-button class = "md-icon-button">
								<md-icon>create</md-icon>
							</md-button>
						</router-link>
						<router-link class = "col" to = "/portfolio">
							<md-button class = "md-icon-button">
								<md-icon>work</md-icon>
							</md-button>
						</router-link>
					</div>
				</nav>
				<router-view/>
			</div>
		</div>
		<div id = "overlay"></div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		let data = {
			a: '1'
		}
		return data
	}
}
</script>

<style lang = "scss">
$colorSalmon: #ff7373;
$textColor: #7e7e7e;
$colorGrayLight: #F5F5F5;
$colorSilver: #c0c0c0;

@media only screen and (max-width: 992px) {
	nav.navigation {
		right: 0;
		bottom: 0;
		position: absolute;
	}
}
@media only screen and (max-width: 576px) {
	.content {
		margin: 0px !important;
	}
	div.row.page {
		padding-bottom: 50px !important;
	}
}
@media only screen and (max-height: 576px) and (orientation:landscape) {
	.content {
		margin: 0px !important;
	}
}
@media screen and (orientation:landscape) {
	div.page {
		overflow-y: auto !important;
	}
}
body, html{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
div.page {
	height: 100%;
	width: 100%;
	margin: 0;
}
nav.navigation {
	z-index: 10;
	position: absolute;
	height: 50px;
	background-color: $colorGrayLight;
}
nav.navigation .row col:hover {
	background-color: darken($colorSilver, 10%);
}
nav.navigation .row a {
	padding: 0;
}
nav.navigation .row a.router-link-active .md-icon{
	color: $colorSalmon;
}
div#main_content{
	position: relative;
	width: 100%;
	height: 100%;
}
div#overlay {
	-webkit-transition: opacity 0.3s ease-out;
	transition: opacity 0.3s ease-out;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 50;
	visibility: hidden;
	opacity: 0;
	background-color: black;
}
div#overlay.active {
	opacity: 0.5;
	visibility: visible;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $textColor;
	margin-top: 0;
	height: 100%;
	width: 100%;
}
.lightgray {
	background-color: $colorGrayLight;
}
.inner-padding {
	padding-left: 5%;
}
.content {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 50px 50px;
}
.header {
	height: 70px;
}
.unselectable {
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
/* Animations */
@keyframes popin {
	0% {
		transform: scale(0);
	}

	50% {
		transform: scale(0.80);
	}

	100% {
		transform: scale(0.75);
	}
}
@keyframes fadein {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>
