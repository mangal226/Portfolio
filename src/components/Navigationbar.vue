<template>
    <header>
				<div id="logo_hamed">
					 <img src="../assets/certifications/logo.png"/>
				</div>
				<nav>
					<ul>
						<li><router-link :to="{name:'acceuil'}">Accueil</router-link></li>
						<li><router-link to="/portfolio">Portfolio</router-link></li>
						<li><router-link :to="{name:'certifications'}">Certifications</router-link></li>
						<li><router-link :to="{name:'contact'}">Contact</router-link></li>
					</ul>
				</nav>
			</header>
</template>
