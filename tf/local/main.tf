provider "aws" {
  skip_credentials_validation = true
  skip_metadata_api_check     = true

  endpoints {
    dynamodb   = "http://localstack:4569"
    iam        = "http://localstack:4593"
    lambda     = "http://localstack:4574"
  }
}
