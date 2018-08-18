<template>
	<div class = "page no-scroll">
		<div class = "page-content container">
			<div id = "v-nav" class = "vertical-navbar">
				<ul>
					<li>
						<md-button
							class = "md-icon-button"
							v-scroll-to = "{
								element: '#personal',
								container: '.pages-container',
								onStart: startScroll
							}">
							<md-icon class = "md-size-2x" :class = "{'md-primary': active === 'personal'}" >info</md-icon>
						</md-button>
						<div class="vertical-line"></div>
					</li>
					<li>
						<md-button
							class = "md-icon-button"
							v-scroll-to = "{
								element: '#work',
								container: '.pages-container',
								onStart: startScroll
							}">
							<md-icon class = "md-size-2x" :class = "{'md-primary': active === 'work'}">work</md-icon>
						</md-button>
						<div class="vertical-line"></div>
					</li>
					<li>
						<md-button
							class = "md-icon-button"
							v-scroll-to = "{
								element: '#education',
								container: '.pages-container',
								onStart: startScroll
							}">
							<md-icon class = "md-size-2x" :class = "{'md-primary': active === 'education'}">school</md-icon>
						</md-button>
						<div class="vertical-line"></div>
					</li>
					<li>
						<md-button
							class = "md-icon-button"
							v-scroll-to = "{
								element: '#skills',
								container: '.pages-container',
								onStart: scrollStartSkills,
								onDone: scrollEndSkills
							}">
							<md-icon class = "md-size-2x" :class = "{'md-primary': active === 'skills'}">star</md-icon>
						</md-button>
					</li>
				</ul>
			</div>
			<div id = "pages" class = "pages-container container">
				<div id = "personal" class = "one-page left pl-5 ">
					<div class = "row cnt align-items-lg-center align-items-md-start">
						<div id = "personal_info_with_icons" class = "col-lg-5 col-12">
							<div class = "row padding-responsive">
								<div class = "col-4 right">
									<md-icon class = "double">assignment_ind</md-icon>
								</div>
								<div class = "col text">{{personal.name}}</div>
							</div>
							<div class = "row padding-responsive">
								<div class = "col-4 right">
								<md-icon class = "double">cake</md-icon>
							</div>
								<div class = "col text">{{personal.age}}</div>
							</div>
							<div class = "row padding-responsive">
								<div class = "col-4 right">
									<md-icon class = "double">location_city</md-icon>
								</div>
								<div class = "col text">{{personal.location}}</div>
							</div>
						</div>
						<div id = "about_me" class = "about_me col-lg-7 col-12 px-5" v-html = "personal.info">
							{{personal.info}}
						</div>
					</div>
				</div>
				<div id = "work" class = "one-page">
					<div class = "row pl-5 cnt align-items-center">
						<ul class="timeline">
							<li v-for = "work in works" v-bind:toSort = "works" :key = "work.employer">
								<div class = "row text-success font-weight-bold align-items-space-between">
									<div class = "float-left">{{work.start}} - {{work.end}}</div>
									<div class = "col rightPadding text-right">{{work.name}}</div>
								</div>
								<div class = "row">
									<div class = "float-left font-italic">{{work.employer}}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id = "education" class = "one-page">
					<div class = "row pl-5 cnt align-items-center">
						<ul class="timeline">
							<li v-on:click = "moreInfo" v-for = "education in educations" :key = "education.school">
								<div class = "row text-success font-weight-bold align-items-space-between">
									<div class = "float-left">{{education.start}} - {{education.end}}</div>
									<div class = "col rightPadding text-right">{{education.school}}</div>
								</div>
								<div class = "row">
									<div class = "float-left font-italic">{{education.program}}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id = "skills" class = "one-page">
					<div class = "row pl-5 cnt align-items-center">
						<div class = "col offset-lg-2 col-lg-8">
							<div class = "skillbar" v-for = "skill in skills" :key = "skill.name">
								<div class = "skill" v-bind:style = "{'background-color': colors[skill.level - 1]}" v-bind:data-value = "skill.level"></div>
								<span>{{skill.name}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'about',
	data () {
		return {
			active: null,
			personal: require('./personal.js'),
			educations: this.sorted(require('./educations.js')),
			works: this.sorted(require('./work.js')),
			skills: require('./skills.js'),
			colors: ['#ffffe0', '#ffe3af', '#ffc58a', '#ffa474', '#fa8266', '#ed645c', '#db4551', '#c52940', '#aa0e27', '#8b0000']
		}
	},
	events: {},
	methods: {
		startScroll (el) {
			this.active = el.id
		},
		scrollStartSkills (el) {
			// Animate after we've scrolled
			let skills = 	document.getElementsByClassName('skill')
			Array.from(skills).map(skill => {
				skill.style.width = '0%'
			})
			this.startScroll(el)
		},
		scrollEndSkills (el) {
			// Animate after we've scrolled
			let skills = 	document.getElementsByClassName('skill')
			Array.from(skills).map(skill => {
				skill.classList.add('fillUp')
				skill.style.width = skill.dataset.value * 10 + '%'
				/* Remove animation class so we don't animate back */
				setTimeout(function () {
					skill.classList.remove('fillUp')
				}, 1000)
			})
		},
		handleResize () {
			let p = this.$el.querySelector('#personal_info_with_icons')
			this.$el.querySelector('#about_me').style.maxHeight = window.clientHeight - p.clientHeight - 50 + 'px'
		},
		sorted (list) {
			return list.sort((b, a) => { return a.end - b.end })
		},
		moreInfo (a) {
		},
		beforeEnter (el) {
			el.style.width = 0
		},
		enter (el) {
			el.style.width = el.dataset.index * 10 + '%'
		}
	},
	computed: {
	},
	mounted () {
		// Correcting the top of navbar
		let el = this.$el.querySelector('.vertical-navbar')
		let top = document.body.clientHeight - this.$el.querySelector('.page-content').clientHeight
		el.style.top = top + 'px'
		// Also set to start on first page
		this.active = 'personal'
		// Add events for responsiveness
		window.addEventListener('resize', this.handleResize)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
	$colorSalmon: #ff7373;
	$colorGray: #B8B8B8;
	$colorGrayLight: #F5F5F5;

	div.about_me a{
		text-decoration: none;
		&:link {
			cursor: pointer;
			color: $colorSalmon;
		};
		&:visited {
			color: $colorSalmon;
		};
	}
	div.about_me {
		text-align: justify;
		display: inline;
		max-height: 100%;
		line-height: 2em;
	}
	div.text {
		line-height: 1.75em;
		font-size: 2em;
		@media (max-width: 1200px){
			font-size: 1.5em;
			line-height: 1.5em;
		}
	}
	div.padding-responsive {
		padding-bottom: 5%;
	}
	div.padding{
		padding-bottom: 20%;
	}
	.cnt {
		height: 100%;
		max-height: inherit;
	}
	.double {
		transform: scale(1.5);
		@media (max-width: 992px) {
			transform: scale(1);
		}
	}
	.left {
		text-align: left;
		margin: auto;
	}
	.right {
		text-align: right;
		margin: auto;
	}
	div.pages-container {
		overflow: hidden;
		position: relative;
		height: 100%;
		margin:auto;
		@media (max-width: 992px) {
			padding-bottom: 50px !important;
		}
		@media (min-height: 1000px) {
			max-height: 720px;
			padding-bottom: 0 !important;
		}
		@media screen and (max-height: 520px) {
			padding-bottom: 50px !important;
		}
	}
	div.no-scroll {
		overflow-y: hidden !important;
	}
	div.one-page {
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
		max-height: inherit;
		height: 100%;
		width: 100%;
	}
	div.page-content {
		height: 100%;
		max-height: 100%;
		position: relative;
		padding-top: 5%;
		display: flex;
		align-items: center;
	}
	div.vertical-navbar {
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;
		@media (max-width: 992px) {
			top: 0 !important;
			bottom: 50px;
		}
	}
	div.vertical-navbar ul {
		position: relative;
		padding: 0;
		list-style: none;
		margin: 0;
	}
	div.vertical-navbar div.vertical-line {
		border-left: solid 2px;
		height: 8vh;
		top: 48px;
		left: calc(50% - 2px);
		position: absolute;
	}
	div.vertical-navbar ul li {
		margin-bottom: 10vh;
		position: relative;
	}
	div.vertical-navbar ul li:last-child{
		margin-bottom:0
	}
	#education.row {
		margin: auto;
	}
	/* Timeline */
	.rightPadding {
		padding: 0 50px 0 0 !important;
	}
	.noPadding {
		padding: 0 !important;
	}
	ul.timeline {
			list-style-type: none;
			position: relative;
			max-width: 250px;
			width: 100%;
			height: 100%;
			display: table;
			padding-left: 20px;
			margin:auto;
	}
	ul.timeline:before {
			content: ' ';
			background: #d4d9df;
			display: inline-block;
			position: absolute;
			right: 29px;
			width: 2px;
			height: 100%;
			z-index: 400;
	}
	ul.timeline > li {
			margin: 40px 0;
			padding-right: 20px;
			&:hover{
				transition: all 0.5s ease;
				transform: scale(1.2);
			};
	}
	ul.timeline > li:before {
			content: ' ';
			background: white;
			display: inline-block;
			position: absolute;
			border-radius: 50%;
			border: 3px solid #22c0e8;
			right: 20px;
			width: 20px;
			height: 20px;
			z-index: 400;
	}
	/* Skillbar */
	div.skillbar {
		margin: 2% 0;
		width: 100%;
		position: relative;
		background-color: $colorGray;
	}
	div.skillbar span {
		font-size: 1em;
		mix-blend-mode: difference;
		font-family: Roboto;
	}
	div.skillbar div.skill {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
	}
	.fillUp {
		transition: all 0.6s ease-in-out;
	}
</style>
