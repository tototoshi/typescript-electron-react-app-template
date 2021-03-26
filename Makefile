.PHONY:\
	all \
	build \
	clean \
	fmt \
	install \
	run \
	watch

.DEFAULT_GOAL := build

all: install fmt build run

run:
	@npx electron .
build:
	@npx tsc --project tsconfig.main.json
	@npx webpack
watch:
	(npx tsc --project tsconfig.main.json -w &) &&\
	(npx webpack -w)
fmt:
	@npx prettier . --write
install:
	@npm install

test:
	@npx jest

clean:
	rm -rf dist/

ci: install fmt build test
