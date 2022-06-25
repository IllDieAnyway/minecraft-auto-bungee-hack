import requests

file = open("Vuln.txt").readlines()

def check(host):
	r = requests.get("https://api.mcsrvstat.us/2/" + host)

	if r.status_code != 200:
		check(host)
	else:
		print("")