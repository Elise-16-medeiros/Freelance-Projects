<script setup>
const links = [
	{ url: "#home", label: "Home" },
	{ url: "#sobre", label: "Sobre" },
	{ url: "#massagens", label: "Massagens" },
	{ url: "#detox", label: "Detox" },
	{ url: "#contato", label: "Contato" },
];
</script>

<template>
	<nav class="nav_desktop">
		<a href="/" class="logo">encanto das mãos</a>

		<ul class="list_nav">
			<li v-for="(link, index) in links" :key="index">
				<a :href="link.url" target="_self">{{ link.label }}</a>
			</li>
		</ul>
       
	</nav>
</template>

<style scoped>
.nav_desktop {
	display: flex;
	justify-content: space-between;
	justify-items: center;
	padding: 1.5rem;
}

a {
	text-decoration: none;
	color: var(--text-color);
}

li {
	list-style-type: none;
}

ul {
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
}

.logo {
	font-family: "Corinthia", cursive;
	font-weight: 700;
	text-transform: capitalize;
	font-size: 1.8rem;
}

@media(max-width: 1024px) {
    .list_nav {
        display: none;
    }

    
}
</style>
