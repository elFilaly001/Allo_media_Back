FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application
COPY . .

# Expose the port your Vite app uses
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
