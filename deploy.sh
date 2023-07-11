#place .nojekyll to bypass jekyll processing
echo >.nojekyll
#if you are deploying to a custom domain
# echo 'www.simongideon.tech' > CNAME
git init
git checkout main
git add .
git commit -m "deploy"

#if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:SimonGideon/my-developer-portfolio.github.io.git main

#if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:SimonGideon/my-developer-portfolio.git main:gh-pages

cd -