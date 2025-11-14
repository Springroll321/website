# multi-stage build for a Vite + React TypeScript app
FROM node:18-alpine AS builder
WORKDIR /app

# install dependencies (use package-lock if present)
COPY package.json package-lock.json* ./
RUN sh -c "npm ci --silent || npm install --silent"

# copy source and build
COPY . .
RUN npm run build

# production image
FROM nginx:stable-alpine
# copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# use custom nginx config for SPA fallback (see nginx.conf below)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]