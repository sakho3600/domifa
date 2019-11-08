ARG BASE_IMAGE=socialgouv/domifa:master

FROM ${BASE_IMAGE} as domifa

FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/spa-nginx:2e8388264aaf2cf54e7df59648dc92838fb970f04076014b84dc19bed758e29c

COPY  --from=domifa /app/packages/frontend/dist/domifa /usr/share/nginx/html
