.PHONY: test

test:
	esbuild app.js --bundle --platform=node --target=node10.4
	npm run test

dev:
	npm run dev

clean:
	rm -rf storybook-static
	rm -rf node_modules

build: ./node_modules/.bin/webpack
	npm run build
