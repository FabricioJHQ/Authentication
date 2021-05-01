<script>
	import { auth } from './auth';

	let image =
		'https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
</script>

<div class="user signupBox" class:active={$auth}>
	<div class="formBox">
		<form action="">
			<h2>Sign Up</h2>
			<input type="text" placeholder="Username" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="password" placeholder="Re-Password" />
			<input type="submit" value="Sign Up" />
			<p>already have an account? <span on:click={auth.toggle}>Sign In.</span></p>
		</form>
	</div>
	<div class="imgBox">
		<img src={image} alt="SignUp" />
	</div>
</div>

<style>
	.signupBox {
		pointer-events: none;
	}
	.signupBox.active .imgBox {
		transform: translateY(100%);
	}
	.signupBox.active .formBox {
		transform: translateY(-100%);
	}
	.imgBox {
		top: -100%;
	}
	.formBox {
		top: 100%;
	}
	form h2 {
		color: var(--secondary);
	}
	form input[type='submit'] {
		background-color: var(--secondary);
	}
	form p {
		position: relative;
		margin-top: 1.25rem;
		font-family: var(--text);
		font-weight: 300;
		font-size: 12px;
		color: #555;
		text-transform: uppercase;
	}
	form p span {
		font-weight: 600;
		color: var(--secondary);
		cursor: pointer;
	}
</style>
