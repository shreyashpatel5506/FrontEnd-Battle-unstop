@echo off
echo Building Shreyash Landing Page...
npm run build

echo Deploying to Vercel...
vercel --prod

echo Deployment complete!
echo Your site is now live on Vercel.

pause
