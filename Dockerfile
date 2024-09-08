# Base image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Production Image
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy built Next.js files
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Set environment variables for production
ENV NODE_ENV production

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
