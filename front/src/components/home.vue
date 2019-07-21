<template>
	<div class = "row page">
		<div class = "col-lg-4 col-12 lightgray img">
			<img src="@/assets/mawnz.png" alt = "Avatar" class = "avatar md-elevation-12">
		</div>
		<div id = "personal-info" class = "col-lg-8 col-12 inner-padding">
			<div class = "row row-1 align-items-lg-end">
				<div id = "texts" class = "col-lg-8 col-12 flex-column">
					<div class = "col-lg-12" id = "first-name">
						<span>{{firstname}}</span>
					</div>
					<div class = "col-lg-12" id = "last-name">
						<span>{{lastname}}</span>
					</div>
					<div class = "col-12" id = "catchphrase">
						<span class = "align-text-middle">{{catchphrase}}</span>
					</div>
				</div>
				<div class = "col-lg-3 col-8 offset-2 offset-lg-0">
					<div class = "row justify-content-between" id = "icons">
						<a v-bind:href = "links.linkedin" target = "_blank">
							<md-icon id = "linkedin" :md-src="require('../assets/linkedin.svg')" />
						</a>
						<a v-bind:href = "links.github" target = "_blank">
							<md-icon :md-src="require('../assets/github.svg')" />
						</a>
						<a v-bind:href = "links.facebook" target = "_blank">
							<md-icon :md-src="require('../assets/facebook.svg')" />
						</a>
						<a v-bind:href = "links.instagram" target = "_blank">
							<md-icon :md-src="require('../assets/instagram.svg')" />
						</a>
					</div>
				</div>
			</div>
			<div class = "row dummy"></div>
			<div class = "row align-items-lg-end pb-lg-5 row-2">
				<div class = "col-sm col-12">
					<span class = "bold">Location</span>
					<span>{{location}}</span>
				</div>
				<div class = "col-sm col-12">
					<span class = "bold">Phone</span>
					<span>{{phone}}</span>
				</div>
				<div class = "col-sm col-12 offset-xs-3">
					<span class = "bold">Email</span>
					<span>{{email}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {
			links: {
				linkedin: 'https://www.linkedin.com/in/m%C3%A5ns-%C3%A5berg-752286114/',
				github: 'https://github.com/mawnz',
				facebook: 'https://www.facebook.com/lmawnz',
				instagram: 'https://www.instagram.com/mawnz/'
			},
			personal: [
				'25 years old', 'Cituated in Stockholm, Sweden', 'Studied Media Technology at KTH, Stockholm',
				'Professional trampoline athlete'
			],
			skills: [
				'Javascript', 'AngularJS'
			],
			location: 'Stockholm, Sweden',
			phone: '+4673 570 03 04',
			email: 'mans.aberg@gmail.com',
			catchphrase: 'Developer and Elite gymnast',
			firstname: 'MÅNS',
			lastname: 'ÅBERG'
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
$colorSalmon: #ff7373;
$bold: 850;
@media only screen and (max-width: 992px) {
	div.img {
		height: 35% !important;
		position: relative;
		align-items: center;
		justify-content: center;
		display: inline-block;
	}
	div.img img {
		height: 100% !important;
		position: relative !important;
	}
	div#personal-info {
		height: 65% !important;
	}
	div#texts div{
		height: 1.5em;
		text-align: center !important;
	}
	div#first-name {
		height: auto !important;
		font-size: 1em !important;
		height: 2em !important;
	}
	div#last-name {
		height: auto !important;
		font-size: 2em !important;
		height: 1em !important;
	}
	div#catchphrase span {
		line-height: 1.5em;
		left: 0;
		right: 0;
	}
	.inner-padding {
		padding-left: 5%;
		padding-right: 5%;
		padding-top: 5%;
	}
	.row-2 div span{
		justify-content: center !important;
		text-align: center !important;
	}
	.row-2 {
		height: auto !important;
		overflow-y: auto;
		margin: 0 !important;
	}
	div.dummy {
		height: 0% !important;
	}
	div#icons a{
		margin-bottom: 0px !important;
	}
}
@media only screen and (max-width: 576px) {
	div#personal-info {
		font-size: 1.5em !important;
	}
}
@media screen and (orientation:landscape) {
	div#personal-info {
		height: 100% !important;
	}
	div.dummy {
		height: 20% !important;
	}
}
.row-1 {
	height: 65%;
}
.row-2 {
	height: 15%;
	width: 100%;
	font-size: .5em;
	border-top: 1px solid;
}
.row-2 div span{
	display: block;
	text-align: left;
	padding: 5px;
}
.bold {
	font-weight: $bold;
}
div.dummy {
	height: 20%;
}
div#texts div{
	height: 1.5em;
	text-align: left;
}
div#icons a{
	margin-bottom: 12px;
}
div#icons .md-icon {
	transform: scale(1.5);
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;

	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	-o-filter: grayscale(100%);
	filter: grayscale(100%);
	&:hover {
		-webkit-filter: grayscale(0%);
		-moz-filter: grayscale(0%);
		-o-filter: grayscale(0%);
		filter: grayscale(0%);

		-webkit-transform: scale(1.7);
		-moz-transform: scale(1.7);
		-o-transform: scale(1.7);
		transform: scale(1.7);
	};
}
div#personal-info {
	position: relative;
	font-size: 2em;
	height: auto;
}
div#first-name {
	font-family: Roboto;
	font-size: 2em;
}
div#last-name {
	font-family: Roboto;
	color: $colorSalmon;
	font-size: 3em;
}
div#catchphrase span {
	position: absolute;
	bottom: 0;
	top: 0;
	line-height: 1.5em;
}
div#catchphrase {
	/* Animation */
	-webkit-animation: fadein 1s ease 1.5s forwards;
	-moz-animation: fadein 1s ease 1.5s forwards;
	-o-animation: fadein 1s ease 1.5s forwards;
	animation: fadein 1s ease 1.5s forwards;
	/* End */
	opacity: 0;
}
div#icons {
	/* Animation */
	-webkit-animation: fadein 1s ease 2s forwards;
	-moz-animation: fadein 1s ease 2s forwards;
	-o-animation: fadein 1s ease 2s forwards;
	animation: fadein 1s ease 2s forwards;
	/* End */
	opacity: 0;
}
div#bottom-row {
	height: auto;
	text-align: left;
}
div.img{
	height: 100%;
	position: relative;
}
div.img img {
	position:absolute;
	top:0;
	bottom:0;
	margin:auto;
}
img.avatar {
	/* Animation */
	-webkit-animation: popin 1s ease 1s forwards;
	-moz-animation: popin 1s ease 1s forwards;
	-o-animation: popin 1s ease 1s forwards;
	animation: popin 1s ease 1s forwards;
	/* End */
	transform: scale(0);
	background-size: cover;
	display: block;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
}

</style>
