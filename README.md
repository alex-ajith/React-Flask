## Connecting React with Flask API

>> Create a BackEnd and FrontEnd folder.
>> Install React in FrontEnd folder.
>> In BackEnd folder ->
    To configure things in backend and install packages we need to set virtual env and activate it
        py -m venv <env_name>
        .\env_name\Scripts\Activate

    install python modules using pip (flask,cors)
    pip install Flask
    Flask: This is the main class from the Flask library that you'll use to create the web application.

    pip install flask-cors
    CORS (Cross-Origin Resource Sharing) support, which allows it to handle requests from different domains (like a React frontend running on a different port)

     If you're running your Flask backend on http://localhost:8080 and your React app on http://localhost:3000, the browser treats these as separate origins. By default, browsers block these kinds of cross-origin HTTP requests to protect users from malicious websites. CORS allows you to specify which origins are allowed to make requests to the server. Here, CORS(app) enables the server to accept requests from any origin.

jsonify: This function is used to return data in JSON format. It's a shortcut for converting a Python dictionary into a JSON response that can be sent over HTTP.

## GIT
## create a new repository on the command line
    >> echo "# React_Flask" >> README.md
    >> git init
    >> git add README.md
    >> git commit -m "first commit"
    >> git branch -M main
    >> git remote add origin https://github.com/alex-ajith/React_Flask.git
    >> git push -u origin main


## push an existing repository from the command line
    >> git remote add origin https://github.com/alex-ajith/React_Flask.git
    >> git branch -M main
    >> git push -u origin main