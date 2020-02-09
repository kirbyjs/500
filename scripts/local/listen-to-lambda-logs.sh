#!/usr/bin/env bash

lambda_function_name=$1
force_rebuild=$2

IMAGE_NAME="500_lambda_logs:local"
CONTAINER_NAME="500_lambda_logs_${lambda_function_name}"

if [[ "${force_rebuild}" == "y" || "$(docker images -q 500_lambda_logs:local 2> /dev/null)" == "" ]]; then
  docker image build -t 500_lambda_logs:local -f ./docker/Dockerfile.awscli .
fi

if [ !"$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=${CONTAINER_NAME})" ]; then
        # cleanup
        docker rm ${CONTAINER_NAME}
    fi
    docker container run --name ${CONTAINER_NAME} --network 500_app -it "${IMAGE_NAME}" \
              /app/bin/aws --endpoint-url=http://localstack:4586 logs tail "/aws/lambda/${lambda_function_name}" --follow
else
  echo "The conatiner ${CONTAINER_NAME} is already running!"
fi
