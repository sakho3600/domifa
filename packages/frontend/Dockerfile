ARG BASE_IMAGE=socialgouv/domifa:master

FROM ${BASE_IMAGE} as domifa

FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/spa-nginx:4f83f496cd8820b6a961ee062e450c4bff0352c9

COPY  --from=domifa /app/packages/frontend/dist/domifa /usr/share/nginx/html
