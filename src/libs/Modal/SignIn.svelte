<script>
	import { auth } from './auth';
	let image =
		'https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
</script>

<div class="user signinBox" class:active={!$auth}>
	<div class="imgBox">
		<img src={image} alt="SignIn" />
	</div>
	<div class="formBox">
		<form action="">
			<h2>Sign In</h2>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="submit" value="Sign In" />
			<p>don´t have an account? <span on:click={auth.toggle}>Sign Up.</span></p>
		</form>
	</div>
</div>

<style>
	.signinBox {
		pointer-events: none;
	}
	.signinBox.active .imgBox {
		transform: translateY(100%);
	}
	.signinBox.active .formBox {
		transform: translateY(100%);
	}
	.imgBox {
		top: -100%;
	}
	.formBox {
		top: -100%;
	}
	.formBox form h2 {
		color: var(--primary);
	}
	.formBox form input[type='submit'] {
		background-color: var(--primary);
	}
	.formBox form p {
		position: relative;
		margin-top: 1.25rem;
		font-family: var(--text);
		font-weight: 300;
		font-size: 12px;
		color: #555;
		text-transform: uppercase;
	}
	.formBox form p span {
		font-weight: 600;
		color: var(--primary);
		cursor: pointer;
	}
	@media screen and (min-width: 991px) {
		.signinBox.active .formBox {
			transform: translateY(-100%);
		}
		.formBox {
			top: 100%;
		}
	}
</style>
