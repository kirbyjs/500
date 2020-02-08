#!/usr/bin/env bash

cd ./tf/local
rm -rf terraform.tfstate

terraform init -lock=false
terraform apply -auto-approve -lock=false
