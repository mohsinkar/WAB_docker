FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

FROM nginx
EXPOSE 80
COPY --from=builder /app/app /usr/share/nginx/html
