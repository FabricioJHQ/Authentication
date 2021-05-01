<div class="content">
	<h1>Boilerplate Svelte-Kit</h1>
	<p>Es responsivo :)</p>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: float 3s infinite ease-in-out;
		transform: translateY(-50px);
	}

	h1 {
		font-family: var(--title);
		font-weight: 400;
		font-size: 48px;
		text-align: center;
		color: var(--primary);
		margin-bottom: 1rem;
	}

	p {
		font-family: var(--text);
		font-weight: 400;
		font-size: 18px;
		color: var(--black-3);
		transition: 0.5s;
	}

	@media screen and (min-width: 720px) {
		p {
			color: var(--black-2);
		}
	}

	@keyframes float {
		0% {
			transform: translateY(0);
			transform: rotateY(30deg);
		}
		50% {
			transform: translateY(50px);
		}
		100% {
			transform: translateY(0);
			transform: rotateY(-30deg);
		}
	}
</style>
