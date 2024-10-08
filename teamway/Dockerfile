# Stage 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app for production (ensure it outputs to /app/dist)
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Remove the default Nginx index.html
RUN rm /usr/share/nginx/html/*

# Copy the build output from the previous stage to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the container will listen on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
