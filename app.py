import json
import random
import time
from datetime import datetime
import base64
from flask import Flask, Response, render_template,request


application = Flask(__name__)






@application.route('/',methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        posted_data = request.data
        msg = posted_data.decode('utf-8')
        f = open('datalog.txt','w')
        f.write(msg)
    elif request.method=='GET':
        return render_template('gauge.html')
    return 'sucess'



	

		



#----------------CURRENTLY THIS COMPLETE APP.PY MODULE CONTAINS FUNCTIONS FOR 6 DEVICES ---------------------------------	
#----------------BELOW ARE THE FUNCTION WHIC WILL RETURN DATA TO FRONTEND WHEN IT WILL REQUEST FROM THE SERVER BACKEND-----------------  
@application.route('/device1')
def gauge():
	
	
    def data():
    	
        while True:
        	
            json_data = json.dumps(
                {'value':returnData()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data(),mimetype='text/event-stream')


 #Device-2 code-module


@application.route('/device2',methods = ['GET','POST'])
def gauge2():
	
	
    def data2():
    	
        while True:
        	
            json_data = json.dumps(
                {'value':returnData2()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data2(),mimetype='text/event-stream')

		

	


@application.route('/chart-data',methods=['GET', 'POST'])
def chart_data():

	
    def generate_random_data():
    	
    	

        while True:
        	
            json_data = json.dumps(
                {'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'), 'value':returnData()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
            

    return Response(generate_random_data(), mimetype='text/event-stream')


@application.route('/device3',methods = ['GET','POST'])
def gauge3():
    
    
    def data3():
        
        while True:
            
            json_data = json.dumps(
                {'value':returnData3()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data3(),mimetype='text/event-stream')


@application.route('/device4',methods = ['GET','POST'])
def gauge4():
    
    
    def data4():
        
        while True:
            
            json_data = json.dumps(
                {'value':returnData4()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data4(),mimetype='text/event-stream')


@application.route('/device5',methods = ['GET','POST'])
def gauge5():
    
    
    def data5():
        
        while True:
            
            json_data = json.dumps(
                {'value':returnData5()
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data5(),mimetype='text/event-stream')


@application.route('/device6/<choice>',methods = ['GET','POST'])
def gauge6():
    
    
    def data6(choice):
        
        while True:
            if request.method == 'POST':
                form_data = request.form
            
            json_data = json.dumps(
                {'value':returnData6(),'value1':form_data
                })
            yield f"data:{json_data}\n\n"
            time.sleep(1)
    return Response(data6(),mimetype='text/event-stream')






#------------------------------------------------------RETURN FUNCTION BELOW THIS LINE------------------------------------------

#METHOD TO FETCH VALUE FROM DATALOG.TXT FILE AND RETURN WHEN CALLED
def returnData():
	f = open('datalog.txt','r')
	val = f.read()

	return val

#METHOD TO FETCH VALUE FROM CHANNEL2.TXT FILE AND RETURN WHEN CALLED
def returnData2():
    f = open('channel2.txt','r')
    val2 = f.read()

    return val2

#METHOD TO FETCH VALUE FROM CHANNEL3.TXT FILE AND RETURN WHEN CALLED
def returnData3():
    f = open('channel3.txt','r')
    val3 = f.read()

    return val3

#METHOD TO FETCH VALUE FROM CHANNEL4.TXT FILE AND RETURN WHEN CALLED
def returnData4():
    f = open('channel4.txt','r')
    val4 = f.read()

    return val4

#METHOD TO FETCH VALUE FROM CHANNEL5.TXT FILE AND RETURN WHEN CALLED
def returnData5():
    f = open('channel5.txt','r')
    val5 = f.read()

    return val5

#METHOD TO FETCH VALUE FROM CAHNNEL6.TXT FILE AND RETURN WHEN CALLED
def returnData6():
    f = open('channel6.txt','r')
    val6 = f.read()

    return val6





#-------------------WRITING TO FILE AFTER RECEIVING DATA FROM CONTROLLER------------------------------------------
#method to receive data from second device and write the incoming data in a file channel2.txt
@application.route('/source2',methods=['GET','POST'])
def source2():
    f = open('channel2.txt','w')
    if request.method == 'POST':
        source2_msg = request.data.decode('utf-8')
        f.write(source2_msg)
    elif request.method == 'GET':
        return 'sucess'
    return 'sucess'

#method to receive data from second device and write the incoming data in a file channel3.txt
@application.route('/source3',methods=['GET','POST'])
def source3():
   
    if request.method == 'POST':
        f = open('channel3.txt','w')
        source3_msg = request.data.decode('utf-8')
        f.write(source3_msg)
    elif request.method == 'GET':
        return 'sucess'

    return 'sucess'


#method to receive data from second device and write the incoming data in a file channel4.txt
@application.route('/source4',methods=['GET','POST'])
def source4():
    f = open('channel4.txt','w')
    if request.method == 'POST':
        source4_msg = request.data.decode('utf-8')
        f.write(source4_msg)  
    elif request.method == 'GET':
        return 'sucess'
    return 'sucess'

#method to receive data from second device and write the incoming data in a file channel5.txt
@application.route('/source5',methods=['GET','POST'])
def source5():
    
    if request.method=='POST':
        f = open('channel5.txt','w')
        source5_msg = request.data.decode('utf-8')
        f.write(source5_msg)
    elif request.method == 'GET':
        return 'sucess'

    return 'sucess'


#method to receive data from second device and write the incoming data in a file channel5.txt
@application.route('/source6',methods=['GET','POST'])
def source6():
    f = open('channel6.txt','w')
    if request.method=='POST':
        source6_msg = request.data.decode('utf-8')
        f.write(source6_msg)
    elif request.method == 'GET':
        return 'sucess'

    return 'sucess'




if __name__ == '__main__':
	application.debug = True


	application.run(host ='192.168.43.186',port = 5003, threaded=True)

	
	
    
