ARG BASE_IMAGE=socialgouv/domifa:master

FROM ${BASE_IMAGE} as domifa

FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/spa-nginx:2aa29cc43d519b6769e5be436613bfe7248434ea

COPY  --from=domifa /app/packages/frontend/dist/domifa /usr/share/nginx/html
