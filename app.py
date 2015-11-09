import MySQLdb as mdb
from flask import Flask,request,jsonify
from flask import render_template
from flask.ext.socketio import SocketIO, emit
app = Flask(__name__)
app.debug = True
socketio = SocketIO(app)

class MainObject():
	def __init__(self):
		self.app = Flask(__name__)
		self.socketio = SocketIO(self.app)
		
	@app.route('/')	
	@app.route('/index')
	def hello_world():
		return render_template('index.html')
	
	
	@app.route('/options', methods=['POST'])
	def options():
		list_of_names,list_of_folder = generate_selectlist()
		return jsonify(value = list_of_folder,name = list_of_names)

if __name__ == '__main__':
    mainObject = MainObject()
    mainObject.socketio.run(app)
