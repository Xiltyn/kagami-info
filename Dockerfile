# Use an official Python runtime as a parent image
FROM node:carbon

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 8080

# # Define environment variable
# ENV NAME World

# Run app.py when the container launches
# RUN until nc -z 127.0.0.1 3306; do sleep 1; echo "Waiting for DB to come up..."; done
# HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://db:3306 || exit 1
# ENTRYPOINT "node ./helpers/create_database.js && npm start"
CMD ["npm", "run", "dev"]

