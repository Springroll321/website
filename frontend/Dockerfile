# Build stage
FROM node:20-alpine@sha256:6c2742bbb86d0992fe13e5a9b2fa7e86e6c330b56c0652e4a1e3a1d8c1d7e9f0

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the production app
RUN npm run build

# Set environment variables
ENV PORT=80

# Expose the port
EXPOSE 80

# Start the production server (vite preview)
CMD ["npm", "start"]