# echo "Removing Previous Build"
# rm -rf dist
# rm -rf .astro
# # curl -X POST -u admin:11c812b9c9c0d4f121460a207b4f1922e3 127.0.0.1:9999/job/LOCAL_ALERTHUB_BUILD/build
# echo "Build Process Started"
# cd /f/NEWALERT/NEW_ALERTHUB
# echo "Generate Static Pages"
# npm run generate
# echo "Transfer Asset Files To Server Host"
# cp -TR ./.output/public/ /c/xampp/htdocs/
# echo "Removing Current Build"
# rm -rf dist
# rm -rf .output
# echo "Build Process ended"

echo "Fetching Updated Git Details"
MYPWD=${PWD}
cd $MYPWD/config/utils
node log.js
