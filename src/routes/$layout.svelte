<main>
	<slot />
</main>

<style>
	:global(body) {
		--background: #edf2f6;

		--primary: #e84545;

		--black-1: #222831;
		--black-2: #595e65;
		--black-3: #919498;

		--gray-1: #393e46;
		--gray-2: #6b6e74;
		--gray-3: #9c9fa3;

		--white-1: #ffffff;
		--white-2: #eeeeee;

		--title: 'Sansita';
		--text: 'Noto Serif';

		--shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
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
