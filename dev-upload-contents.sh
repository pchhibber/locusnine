bucketName='betawebsite.locusnine.com'

echo emptying s3 bucket $bucketName
aws s3 rm s3://$bucketName --recursive

echo "uploading png files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.png" --content-type "image/png"

echo "uploading jpg files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.jpg" --content-type "image/jpg"

echo "uploading svg files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.svg" --content-type "image/svg+xml"

echo "uploading ico files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.ico" --content-type "image/x-icon"  

echo "uploading html files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.html" --content-type "text/html"  
  
echo "uploading js files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.js" --content-type "application/javascript"

echo "uploading source map files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.map" --content-type "application/octet-stream"    
  
echo "uploading css files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.css" --content-type "text/css"
  
echo "uploading woff files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.woff" --content-type "font/woff"
  
echo "uploading woff2 files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.woff2" --content-type "font/woff2"

echo "uploading json files to bucket: $bucketName ..."
aws s3 sync . s3://$bucketName --acl public-read --content-disposition inline --exclude '*' --include="*.json" --content-type "application/json"