export default function Login() {
	return (
		<div className="grid h-screen w-full place-content-center">
			<form
				className="flex bg-slate-100 p-4"
				action="/auth/login"
				method="post"
			>
				<label htmlFor="email">Email</label>
				<input name="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" />
				<button>Sign In</button>
				<button formAction="/auth/sign-up">Sign Up</button>
				<button formAction="/auth/logout">Sign Out</button>
			</form>
		</div>
	)
}
