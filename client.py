import zmq
import random

context = zmq.Context()

print('Connecting...')
socket = context.socket(zmq.REQ)
socket.connect('tcp://localhost:5555')

print(f"Sending request...")
socket.send_string('Please send name')

message = socket.recv()
message_to_str = str(message)

random_num = str(random.randint(1, 1000))
random_email = message_to_str[slice(2, -1)] + random_num + '@gmail.com'
print(random_email)

