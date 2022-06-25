import os, sys, time
from threading import Thread
thrs = []

def check(host):
	os.system(f"node bot.js {host}")




def main():
	if len(sys.argv) < 2:
		print(f"Usage: python {sys.argv[0]} <list>")
		exit()
	l1st = open(sys.argv[1]).readlines()
	for line in l1st:
		t = Thread(target=check, args=(line,))
		thrs.append(t)
		t.start()
		time.sleep(0.7)

	for thread in thrs:
		thread.join()
	print("done.")
	exit()



if __name__ == '__main__':
	try:
		main()
	except KeyboardInterrupt:
		exit()