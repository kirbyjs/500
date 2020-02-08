resource "aws_api_gateway_rest_api" "default" {
  name = "five_hundred_local_api"
}

resource "aws_api_gateway_stage" "default" {
  stage_name    = "local"
  rest_api_id   = aws_api_gateway_rest_api.default.id
  deployment_id = aws_api_gateway_deployment.default.id
}

resource "aws_api_gateway_deployment" "default" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  stage_name  = "local"
  depends_on  = [aws_api_gateway_integration.game_action_put]
}

resource "aws_api_gateway_resource" "game_action" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  parent_id   = aws_api_gateway_rest_api.default.root_resource_id
  path_part   = "action"
}

resource "aws_api_gateway_method" "game_action_put" {
  rest_api_id   = aws_api_gateway_rest_api.default.id
  resource_id   = aws_api_gateway_resource.game_action.id
  http_method   = "PUT"
  authorization = "NONE"
}

resource "aws_api_gateway_method_settings" "s" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  stage_name  = aws_api_gateway_stage.default.stage_name
  method_path = "${aws_api_gateway_resource.game_action.path_part}/${aws_api_gateway_method.game_action_put.http_method}"

  settings {
    metrics_enabled = true
    logging_level   = "INFO"
  }
}

resource "aws_api_gateway_integration" "game_action_put" {
  rest_api_id             = aws_api_gateway_rest_api.default.id
  resource_id             = aws_api_gateway_resource.game_action.id
  http_method             = aws_api_gateway_method.game_action_put.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.actions.invoke_arn
}

output "rest_api_id" {
  value = aws_api_gateway_rest_api.default.id
}
