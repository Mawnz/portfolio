<template>
	<div class="h-100">
		<!-- Next page -->
		<div class = "row page">
			<div class = "portfolio-content">
				<transition-group
					appear
					name = "staggered-fade"
					tag = "div"
					v-bind:css="true"
					v-on:before-enter="beforeEnter"
					v-on:enter="enter"
					class = "row transition-container"
				>
					<div id = "card-column" class = "col-lg-6 col-xl-4 " v-for = "(project, index) in projects" v-bind:key = "project.title" v-bind:data-index = "index">
						<md-card :key = "project.title"  md-with-hover>
							<md-card-header v-bind:style = "{ 'background-color': getColor(index) }">
								<div class = "row">
									<div class = "col">
										<div class = "md-title">{{project.title}}</div>
										<div class = "md-subhead">{{project.subhead}}</div>
									</div>
									<div id = "icons">
										<a v-if = "project.source" v-bind:href = "project.source" target = "_blank">
											<md-icon class = "hover fas fa-code"></md-icon>
										</a>
										<a v-if = "project.link" v-bind:href = "project.link" target = "_blank">
											<md-icon class="fas fa-play-circle" v-bind:class = "{hover: project.link}"></md-icon>
										</a>
										<a v-if = "project.img" v-on:click = "open($event, project.img)" target = "_blank">
											<md-icon class="fas fa-image" v-bind:class = "{hover: project.img}"></md-icon>
										</a>
									</div>
								</div>
							</md-card-header>
							<md-card-content>
								<div id = "status" class = "row">
									<div class = "col"><span>Status</span>: {{project.status}}</div>
									<div class = "col"><span>Time</span>: {{project.time}} weeks</div>
									<div class = "col"><span>Type</span>: {{project.type}}</div>
								</div>
								<div class = "row description">
									{{project.description}}
								</div>
								<div class = "row tech">
									<div class = "col" v-for = "node in project.tech" :key = "node">
										<md-chip :style = "{'background-color': getColorChip(node)}">{{node}}</md-chip>
									</div>
								</div>
							</md-card-content>
						</md-card>
					</div>
				</transition-group>
			</div>
		</div>
		<div id = "image_dialog" class = "dialog">
			<md-content>
				<div class = "md-elevation-12">
					<img v-bind:src = "img"/>
					<md-icon class = "close" @click.native = "close">close</md-icon>
				</div>
			</md-content>
		</div>
	</div>
</template>

<script>
export default {
	name: 'portfolio',
	data () {
		return {
			img: '',
			projects: require('./projects.js'),
			colors: ['#F55D3E', '#0496FF', '#FFBC42', '#D81159', '#8F2D56']
		}
	},
	methods: {
		beforeEnter (el) {
			el.style.opacity = 0
		},
		enter (el, done) {
			let delay = el.dataset.index * 200
			setTimeout(function () {
				el.style.opacity = 1
				el.style.transform = 'translate(0, 0)'
			}, delay)
		},
		close (event) {
			document.getElementById('image_dialog').classList.remove('active')
			document.getElementById('overlay').classList.remove('active')
			setTimeout(function () {
				this.img = ''
			}, 500)
		},
		open (event, img) {
			document.getElementById('image_dialog').classList.add('active')
			document.getElementById('overlay').classList.add('active')
			this.img = img
		},
		getColor (index) {
			return this.colors[index >= this.colors.length ? index % this.colors.length : index]
		},
		getColorChip (name) {
			let colors = {
				'AngularJS': '#EFC7C2',
				'D3.js': '#FFE5D4',
				'Material Design': '#BFD3C1',
				'Bootstrap': '#6D466B',
				'Webpack': '#5A716A',
				'JQuery': '#2F97C1'
			}
			return colors[name]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
	$bold: 850;
	$colorSalmon: #ff7373;
	@media only screen and (max-width: 576px) {
		.md-card {
			border: 1px solid;
		}
	}
	div.transition-container {
		height: 100% auto;
	}
	div.portfolio-content {
		padding: 5%;
		margin-top: 5%;
		height: auto;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		/* Prevent from expanding outside parent */
		max-height: inherit;
	}
	div#card-column {
		margin-bottom: 20px;
		min-height: 100%;
		opacity: 0;
		transform: translate(-10px, -10px);
		transition: all 1s ease;
	}
	.bold {
		font-weight: $bold;
	}
	div#status .col span {
		font-weight: $bold;
	}
	.md-card-header:after{
		mix-blend-mode: difference;
	}
	.md-subhead {
		color: white;
	}
	.md-card {
		position: relative;
		height: 100%;
		font-family: Roboto;
		text-align: left;
	}
	.md-card-content {
		font-size: 1em;
		margin: 5%;
		height: auto;
	}
	div#icons a {
		margin-left: 20px;
		text-decoration: none;
	}
	div#icons .md-icon.hover:hover {
		color: white;
		transform: scale(1.2);
	}
	div#icons {
		height: 100%;
		text-align: right;
		margin: auto;
		margin-right: 10px;
	}
	.md-card-content div.description, .md-card-content div.tech {
		border-top: solid 1px;
		border-color: $colorSalmon;
		margin-top: 5%;
		padding-top: 5%;
	}
	.md-card-content div.description {
		text-align: justify;
	}
	div.tech .col {
		text-align: center;
		margin-bottom: 5px;
	}
	/* Dialog */
	div.dialog {
		transition: all 0.3s ease-out;
		transform: scale(0);
		visibility: hidden;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 100;
		padding: 10%;
	}
	div.dialog.active {
		visibility: visible;
		transform: scale(1);
	}
	div.dialog .md-content {
		position: relative;
		height: 100%;
		width: 100%;
	}
	div .dialog .md-content div {
		position: relative;
		height: 100%;
	}
	.md-icon.close{
		position: absolute;
		top: 10px;
		right: 10px;
	}
</style>
