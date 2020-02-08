provider "aws" {
  access_key                  = "fake"
  secret_key                  = "fake"
  region                      = "us-east-1"
  skip_credentials_validation = true
  skip_metadata_api_check     = true

  endpoints {
    apigateway = "http://localstack:4567"
    dynamodb   = "http://localstack:4569"
    iam        = "http://localstack:4593"
    lambda     = "http://localstack:4574"
  }
}
