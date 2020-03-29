resource "aws_lambda_function" "actions" {
  s3_bucket     = "__local__"
  s3_key        = "$PWD_USER"
  function_name = "actions"
  handler       = "lambda-entry.actions"
  role          = aws_iam_role.lambda_role.arn
  runtime       = "nodejs12.x"
  timeout       = 10
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
POLICY
}
