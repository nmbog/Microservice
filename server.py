import time
import zmq

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind('tcp://*:5555')

while True:
    message = socket.recv()
    print(f'Received request: {message}')

    time.sleep(1)

    # replace 'Fred' with generated name
    socket.send_string('Fred')
