import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContextProvider';
import { Puff } from 'svg-loaders-react';
function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState([]);
	const { dispatch } = useAuth();
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		setLoading(true);
		console.log('clicked');
		const res = await login(email, password);
		if (res.errors.length > 0) {
			setError(...res.errors);
			setLoading(false);
		} else {
			dispatch({
				type: 'LOGIN',
				payload: {
					id: res.data.id,
					user: res.data,
					headers: res.headers,
				},
			});
			setLoading(false);
		}
	};

	return (
		<div className='h-screen background cover'>
			<div className='login-card card flex flex-col gap-3'>
				<div className='h-10 mt-2'>
					<svg
						id='logo'
						width='301'
						height='66'
						viewBox='0 0 301 66'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='h-full w-full'
					>
						<g filter='url(#filter0_d_0_1)'>
							<mask
								id='path-1-outside-1_0_1'
								maskUnits='userSpaceOnUse'
								x='3.933'
								y='0.285995'
								width='294'
								height='58'
								fill='black'
							>
								<rect
									fill='white'
									x='3.933'
									y='0.285995'
									width='294'
									height='58'
								/>
								<path d='M25.562 53.483C22.388 53.483 19.536 52.931 17.006 51.827C14.522 50.677 12.567 49.113 11.141 47.135C9.715 45.111 8.979 42.788 8.933 40.166H15.626C15.856 42.42 16.776 44.329 18.386 45.893C20.042 47.411 22.434 48.17 25.562 48.17C28.552 48.17 30.898 47.434 32.6 45.962C34.348 44.444 35.222 42.512 35.222 40.166C35.222 38.326 34.716 36.831 33.704 35.681C32.692 34.531 31.427 33.657 29.909 33.059C28.391 32.461 26.344 31.817 23.768 31.127C20.594 30.299 18.041 29.471 16.109 28.643C14.223 27.815 12.59 26.527 11.21 24.779C9.876 22.985 9.209 20.593 9.209 17.603C9.209 14.981 9.876 12.658 11.21 10.634C12.544 8.60999 14.407 7.04599 16.799 5.94199C19.237 4.83799 22.02 4.286 25.148 4.286C29.656 4.286 33.336 5.41299 36.188 7.667C39.086 9.92099 40.719 12.911 41.087 16.637H34.187C33.957 14.797 32.991 13.187 31.289 11.807C29.587 10.381 27.333 9.668 24.527 9.668C21.905 9.668 19.766 10.358 18.11 11.738C16.454 13.072 15.626 14.958 15.626 17.396C15.626 19.144 16.109 20.57 17.075 21.674C18.087 22.778 19.306 23.629 20.732 24.227C22.204 24.779 24.251 25.423 26.873 26.159C30.047 27.033 32.6 27.907 34.532 28.781C36.464 29.609 38.12 30.92 39.5 32.714C40.88 34.462 41.57 36.854 41.57 39.89C41.57 42.236 40.949 44.444 39.707 46.514C38.465 48.584 36.625 50.263 34.187 51.551C31.749 52.839 28.874 53.483 25.562 53.483Z' />
								<path d='M57.0891 47.894H73.9251V53H50.8101V4.90699H57.0891V47.894Z' />
								<path d='M109.021 42.305H88.0453L84.1813 53H77.5573L94.9453 5.18299H102.19L119.509 53H112.885L109.021 42.305ZM107.227 37.199L98.5333 12.911L89.8393 37.199H107.227Z' />
								<path d='M124.741 28.919C124.741 24.227 125.799 20.018 127.915 16.292C130.031 12.52 132.906 9.576 136.54 7.46C140.22 5.344 144.291 4.286 148.753 4.286C153.997 4.286 158.574 5.55099 162.484 8.08099C166.394 10.611 169.246 14.199 171.04 18.845H163.519C162.185 15.947 160.253 13.716 157.723 12.152C155.239 10.588 152.249 9.80599 148.753 9.80599C145.395 9.80599 142.382 10.588 139.714 12.152C137.046 13.716 134.953 15.947 133.435 18.845C131.917 21.697 131.158 25.055 131.158 28.919C131.158 32.737 131.917 36.095 133.435 38.993C134.953 41.845 137.046 44.053 139.714 45.617C142.382 47.181 145.395 47.963 148.753 47.963C152.249 47.963 155.239 47.204 157.723 45.686C160.253 44.122 162.185 41.891 163.519 38.993H171.04C169.246 43.593 166.394 47.158 162.484 49.688C158.574 52.172 153.997 53.414 148.753 53.414C144.291 53.414 140.22 52.379 136.54 50.309C132.906 48.193 130.031 45.272 127.915 41.546C125.799 37.82 124.741 33.611 124.741 28.919Z' />
								<path d='M206.469 53L186.666 31.058V53H180.387V4.90699H186.666V27.194L206.538 4.90699H214.473L192.669 28.988L214.68 53H206.469Z' />
								<path d='M227.972 10.013V26.09H245.498V31.265H227.972V47.825H247.568V53H221.693V4.83799H247.568V10.013H227.972Z' />
								<path d='M282.392 53L270.938 33.335H263.348V53H257.069V4.90699H272.594C276.228 4.90699 279.287 5.528 281.771 6.77C284.301 8.012 286.187 9.691 287.429 11.807C288.671 13.923 289.292 16.338 289.292 19.052C289.292 22.364 288.326 25.285 286.394 27.815C284.508 30.345 281.656 32.024 277.838 32.852L289.913 53H282.392ZM263.348 28.298H272.594C275.998 28.298 278.551 27.47 280.253 25.814C281.955 24.112 282.806 21.858 282.806 19.052C282.806 16.2 281.955 13.992 280.253 12.428C278.597 10.864 276.044 10.082 272.594 10.082H263.348V28.298Z' />
							</mask>
							<path
								id='path-1'
								d='M25.562 53.483C22.388 53.483 19.536 52.931 17.006 51.827C14.522 50.677 12.567 49.113 11.141 47.135C9.715 45.111 8.979 42.788 8.933 40.166H15.626C15.856 42.42 16.776 44.329 18.386 45.893C20.042 47.411 22.434 48.17 25.562 48.17C28.552 48.17 30.898 47.434 32.6 45.962C34.348 44.444 35.222 42.512 35.222 40.166C35.222 38.326 34.716 36.831 33.704 35.681C32.692 34.531 31.427 33.657 29.909 33.059C28.391 32.461 26.344 31.817 23.768 31.127C20.594 30.299 18.041 29.471 16.109 28.643C14.223 27.815 12.59 26.527 11.21 24.779C9.876 22.985 9.209 20.593 9.209 17.603C9.209 14.981 9.876 12.658 11.21 10.634C12.544 8.60999 14.407 7.04599 16.799 5.94199C19.237 4.83799 22.02 4.286 25.148 4.286C29.656 4.286 33.336 5.41299 36.188 7.667C39.086 9.92099 40.719 12.911 41.087 16.637H34.187C33.957 14.797 32.991 13.187 31.289 11.807C29.587 10.381 27.333 9.668 24.527 9.668C21.905 9.668 19.766 10.358 18.11 11.738C16.454 13.072 15.626 14.958 15.626 17.396C15.626 19.144 16.109 20.57 17.075 21.674C18.087 22.778 19.306 23.629 20.732 24.227C22.204 24.779 24.251 25.423 26.873 26.159C30.047 27.033 32.6 27.907 34.532 28.781C36.464 29.609 38.12 30.92 39.5 32.714C40.88 34.462 41.57 36.854 41.57 39.89C41.57 42.236 40.949 44.444 39.707 46.514C38.465 48.584 36.625 50.263 34.187 51.551C31.749 52.839 28.874 53.483 25.562 53.483Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-2'
								d='M57.0891 47.894H73.9251V53H50.8101V4.90699H57.0891V47.894Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-3'
								d='M109.021 42.305H88.0453L84.1813 53H77.5573L94.9453 5.18299H102.19L119.509 53H112.885L109.021 42.305ZM107.227 37.199L98.5333 12.911L89.8393 37.199H107.227Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-4'
								d='M124.741 28.919C124.741 24.227 125.799 20.018 127.915 16.292C130.031 12.52 132.906 9.576 136.54 7.46C140.22 5.344 144.291 4.286 148.753 4.286C153.997 4.286 158.574 5.55099 162.484 8.08099C166.394 10.611 169.246 14.199 171.04 18.845H163.519C162.185 15.947 160.253 13.716 157.723 12.152C155.239 10.588 152.249 9.80599 148.753 9.80599C145.395 9.80599 142.382 10.588 139.714 12.152C137.046 13.716 134.953 15.947 133.435 18.845C131.917 21.697 131.158 25.055 131.158 28.919C131.158 32.737 131.917 36.095 133.435 38.993C134.953 41.845 137.046 44.053 139.714 45.617C142.382 47.181 145.395 47.963 148.753 47.963C152.249 47.963 155.239 47.204 157.723 45.686C160.253 44.122 162.185 41.891 163.519 38.993H171.04C169.246 43.593 166.394 47.158 162.484 49.688C158.574 52.172 153.997 53.414 148.753 53.414C144.291 53.414 140.22 52.379 136.54 50.309C132.906 48.193 130.031 45.272 127.915 41.546C125.799 37.82 124.741 33.611 124.741 28.919Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-5'
								d='M206.469 53L186.666 31.058V53H180.387V4.90699H186.666V27.194L206.538 4.90699H214.473L192.669 28.988L214.68 53H206.469Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-6'
								d='M227.972 10.013V26.09H245.498V31.265H227.972V47.825H247.568V53H221.693V4.83799H247.568V10.013H227.972Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
							<path
								id='path-7'
								d='M282.392 53L270.938 33.335H263.348V53H257.069V4.90699H272.594C276.228 4.90699 279.287 5.528 281.771 6.77C284.301 8.012 286.187 9.691 287.429 11.807C288.671 13.923 289.292 16.338 289.292 19.052C289.292 22.364 288.326 25.285 286.394 27.815C284.508 30.345 281.656 32.024 277.838 32.852L289.913 53H282.392ZM263.348 28.298H272.594C275.998 28.298 278.551 27.47 280.253 25.814C281.955 24.112 282.806 21.858 282.806 19.052C282.806 16.2 281.955 13.992 280.253 12.428C278.597 10.864 276.044 10.082 272.594 10.082H263.348V28.298Z'
								stroke='white'
								strokeWidth='8'
								shapeRendering='crispEdges'
								mask='url(#path-1-outside-1_0_1)'
							/>
						</g>
						<defs>
							<filter
								id='filter0_d_0_1'
								x='0.862206'
								y='0.285995'
								width='300.111'
								height='65.197'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'
							>
								<feFlood
									floodOpacity='0'
									result='BackgroundImageFix'
								/>
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feOffset dy='4' />
								<feGaussianBlur stdDeviation='2' />
								<feComposite
									in2='hardAlpha'
									operator='out'
								/>
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
								/>
								<feBlend
									mode='normal'
									in2='BackgroundImageFix'
									result='effect1_dropShadow_0_1'
								/>
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='effect1_dropShadow_0_1'
									result='shape'
								/>
							</filter>
						</defs>
					</svg>
				</div>

				<div>
					<label htmlFor='email' className='label'>
						Email
					</label>
					<input
						type='email'
						value={email}
						className='input'
						onChange={(e) => setEmail((t) => e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						value={password}
						onChange={(e) =>
							setPassword((p) => e.target.value)
						}
						className='input'
					/>
				</div>
				{error &&
					error.map((e, i) => (
						<span key={i} className='error'>
							{e}
						</span>
					))}
				<button
					onClick={handleLogin}
					disabled={loading}
					className={`btn btn-primary flex items-center justify-around ${
						loading ? 'hover: cursor-wait' : ''
					}`}
				>
					{loading ? (
						<div className='flex justify-around items-center gap-2 h-6'>
							<Puff />
							Logging in
						</div>
					) : (
						<span>Login</span>
					)}
				</button>
				<div className='flex justify-center'>
					<Link
						to='/register'
						className='btn btn-primary text-hyperlink-blue hover:text-white'
					>
						Don't have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
