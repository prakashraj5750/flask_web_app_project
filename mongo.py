posted_data = request.data
		message = posted_data.decode('utf-8+')
		f = open('datalog.txt','w')
    	f.write(message)
		

	elif request.method=='GET':
		
		return render_template('gauge.html')

	return 'sucess'