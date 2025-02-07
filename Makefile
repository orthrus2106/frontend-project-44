install:
	@echo "Installing..."
	npm ci
	@echo "Done!"
brain-games:
	@echo "Brain Games"
	node bin/brain-games.js
publish:
	@echo "Publishing..."
	npm publish --dry-run
lint:
	@echo "Linting..."
	npx eslint .