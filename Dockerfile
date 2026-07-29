# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project source code
COPY . .

# Build Vite production bundle
RUN npm run build

# Production Stage with Nginx
FROM nginx:alpine

# Copy custom nginx configuration if needed or use default static serving
COPY --from=build /app/dist /usr/share/nginx/html

# Copy SPA routing Nginx config
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
