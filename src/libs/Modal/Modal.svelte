<script>
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';
</script>

<div class="modal">
	<SignIn />
	<SignUp />
</div>

<style global>
	.modal {
		position: relative;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 8px;
		background-color: var(--color);
		overflow: hidden;
	}
	.user {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
	}
	.user .imgBox {
		position: relative;
		top: 0;
		width: 50%;
		height: 100%;
		transition: 0.5s;
		pointer-events: initial;
		display: none;
	}
	.user .imgBox img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.user .formBox {
		position: relative;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 3rem;
		display: flex;
		align-items: center;
		background-color: var(--white);
		transition: 0.5s;
		pointer-events: initial;
	}
	.user .formBox form h2 {
		font-family: var(--font);
		font-weight: 700;
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
		width: 100%;
		margin-bottom: 1rem;
	}
	.user .formBox form input {
		width: 100%;
		padding: 0.75rem;
		background-color: #f2f2f2;
		border: none;
		outline: none;
		border-radius: 6px;
		box-shadow: none;
		font-family: var(--text);
		font-weight: 500;
		font-size: 13px;
		margin: 0.5rem 0;
		letter-spacing: 1px;
	}
	.user .formBox form input[type='submit'] {
		max-width: 125px;
		align-self: flex-end;
		font-family: var(--font);
		font-weight: 400;
		font-size: 13px;
		color: var(--color);
		letter-spacing: 1px;
		transition: 0.5s;
		cursor: pointer;
	}
	@media screen and (min-width: 420px) {
		.modal {
			max-width: 400px;
			height: 500px;
		}
	}
	@media screen and (min-width: 991px) {
		.modal {
			max-width: 800px;
		}
		.modal .imgBox {
			display: block;
		}
		.modal .formBox {
			width: 50%;
		}
	}
</style>
