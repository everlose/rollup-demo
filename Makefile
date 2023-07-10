clean:
	rm -rf ./dist

pack_test:
	make clean
	npm run emitTypes
	npx cross-env BUILD_ENV=test npm run build:umd
	npx cross-env BUILD_ENV=test npm run build:esm

pack:
	make clean
	npm run emitTypes
	npx cross-env BUILD_ENV=prod npm run build:umd
	npx cross-env BUILD_ENV=prod npm run build:esm

publish_npm:
	npx npm run build
	npm publish --registry https://registry.npmjs.org/
	open https://npm.taobao.org/sync/rollup-utils-demo
	echo "Please visit https://www.npmjs.com/package/rollup-utils-demo"