# Build on Node 18-alpine
FROM node:18-alpine

# Create app directory
WORKDIR /tuan-user/du-an/simple-nodejs-app

# Bundle app source
COPY . .

## Install app dependencies
RUN npm install

EXPOSE 5173

# Start the app
# npn run dev
CMD ["npm", "run", "dev"]