# pull official base image
FROM node:22-alpine3.18

RUN apk update
RUN apk add --update --no-cache --virtual .tmp-build-deps \
     libc-dev linux-headers

RUN apk update --no-cache
RUN apk add --no-cache

# set work directory
WORKDIR /usr/src/app


#These line for /start_project.sh
COPY ./geoportal/start_project.sh /start_project.sh
RUN chmod +x /start_project.sh
ENTRYPOINT "/start_project.sh"