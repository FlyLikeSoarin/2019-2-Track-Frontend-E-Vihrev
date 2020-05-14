FROM node:current-alpine as static-builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build


FROM nginx:stable-alpine
EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx

RUN mkdir /usr/share/nginx/html/2019-2-Track-Frontend-E-Vihrev
# COPY ./build/ /usr/share/nginx/html/2019-2-Track-Frontend-E-Vihrev/
COPY --from=static-builder /app/build/ /usr/share/nginx/html/2019-2-Track-Frontend-E-Vihrev/
COPY --from=static-builder /app/build/index.html /usr/share/nginx/html/index.html
