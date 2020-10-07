.PHONY: test

test:
	npm run test

dev:
	npm run dev

clean:
	rm -rf storybook-static
	rm -rf node_modules

build: clean
	./node_modules/.bin/webpack -p
