install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test-coverage:
	npx jest --coverage
test:
	npx jest