default: dev

dev:
	# https://pnpm.js.org/
	pnpm run dev

serve:
	simple-http-server -i -t=12 -c=html,js,css,json,woff,woff2,png,jpg __sapper__/export