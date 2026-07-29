# Pure Nginx Production Image (No Node.js Runtime Required)
FROM nginx:alpine

# Copy pre-built static web files from dist to Nginx html directory
COPY dist /usr/share/nginx/html

# SPA Routing Nginx Configuration
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
