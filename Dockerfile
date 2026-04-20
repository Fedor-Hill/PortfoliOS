
# 1 step
FROM node:22-alpine AS build
WORKDIR /app
COPY portfolio-os/package*.json ./
RUN npm install
COPY portfolio-os/ ./
RUN npm run build


# 2 step 
FROM nginx:alpine
# COPY index.html /usr/share/nginx/html/index.html
# COPY --from=build /app/dist/portfolio-os /usr/share/nginx/html
COPY --from=build /app/dist/portfolio-os/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
