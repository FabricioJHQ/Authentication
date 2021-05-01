<main>
	<slot />
</main>

<style>
	:global(body) {
		--background: #364f6b;
		--primary: #3fc1c9;
		--secondary: #fc5185;
		--black: #393e46;
		--white: #ffffff;
		--color: #f5f5f5;
		--font: 'Roboto Slab';
		--text: 'Roboto';
		--shadow: 0px 0px 2px 0.5px rgba(0, 0, 0, 0.25);
		--radius: 6px;
	}

	main {
		width: 100%;
		min-height: 100vh;
		background-color: var(--black-1);
		transition: 0.5s;
	}

	@media screen and (min-width: 720px) {
		main {
			background-color: var(--background);
		}
	}
</style>
