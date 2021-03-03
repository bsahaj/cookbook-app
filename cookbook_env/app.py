# from flask import Flask
# import urllib3

# app = Flask(__name__)
# @app.route('/')
# def index():
#     return "Hello, World!"

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=8080, debug=True)
import urllib3
import json

tastyurl = "https://tasty.co/recipe/cauliflower-gnocchi"

http = urllib3.PoolManager()
req = http.request('GET', tastyurl)
print (req.data)