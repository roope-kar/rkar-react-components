.PHONY: test

test: ./node_modules/.bin/jest
	npm run test

dev:
	npm run dev

clean:
	rm -rf storybook-static
	rm -rf node_modules
	rm -rf lib/*

build: ./node_modules/.bin/esbuild
	npm run build
