ARG NODE_VERSION=20.12.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies including dev dependencies
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Build the TypeScript files
RUN npm run build

# Create a new stage for the production image
FROM node:${NODE_VERSION}-alpine

# Set environment to production
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy only necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist

# Install production dependencies
RUN npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["node", "dist/index.js"]
