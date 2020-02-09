#!/usr/bin/env bash

cd ./tf/local
rm -f terraform.tfstate

# Wait for aws services to be up
aws --endpoint-url=http://localstack:4569 dynamodb list-tables > /dev/null
aws --endpoint-url=http://localstack:4574 lambda list-functions > /dev/null

terraform init -lock=false
terraform apply -auto-approve -lock=false

# Terraform uses lambda cache, that doesn't work with localstack
# So, it forces me to create the lambda in another process
aws --endpoint-url=http://localstack:4574 lambda create-function --function-name websocketDisconnection \
    --code S3Bucket="__local__",S3Key="\$PWD_USER" \
    --handler lambda-entry.websocketDisconnection \
    --runtime nodejs12.x \
    --role lambda_role
