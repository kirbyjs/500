resource "aws_dynamodb_table" "game_details_500" {
  name           = "game_details_500"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "gameId"

  attribute {
    name = "gameId"
    type = "S"
  }

  ttl {
    attribute_name = "expiration"
    enabled        = true
  }
}
