26 june 2021


## wget

*	to download stuff from internet
```
wget https://assets.tryhackme.com/additional/linux-fundamentals/part3/myfile.txt
```


## SCP (SSH)  

*	transfer files from your host to remote machine
*	you can copy files & directories from your host to remote machine and  vice-versa.
*	you must know the address, name of user and it's passowrd of remote machine and path to store the file.

*	Transfer a file from my machine to remote machine:
	```
	scp myFile.txt tryhackme@10.10.138.229:/home/tryhackme/rootz_file.txt
	```
	*	`myFile.txt`:	file on my machine which i want to transfer.
	*	`tryhackme`:	name of user on remote machine.
	*	`10.10.138.229`:	address of remote machine.
	*	`/home/tryhackme/rootz_file.txt`:	address where you want to store file and `rootz_file.txt` will be name of shared file on remote machine.
	*	hit enter and type the password of remote machine, file transfer will begin.

*	Transfer file from remote machine to my machine:
```
scp rootz@10.17.11.71:/Users/rootz/Documents/infosec/tryhackme-challenges/linux-3/remoteFile.txt task3
```


##	serving files from my host/machine.

i can use my machine as web server using python3 `HTTPServer` module.
```
python3 -m  http.server
```

*	very powerful command, computer can be turned into web server!
*	directory in which command will run will become base of server. 
*	if `important.txt` is in same folder as server, then it can be fetched from any computer using this command:
	```
	wget http://IP_ADDRESS:8000/important.txt
	```
	*	or simply to `http://IP_ADDRESS:8000/important.txt` on any browser, and file will be downloaded!

*	whenever anyone try to access the file, request will be logged in it's shell:
```
tryhackme@linux3:~$ python3 -m  http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
10.10.138.229 - - [25/Jun/2021 19:10:13] code 404, message File not found
10.10.138.229 - - [25/Jun/2021 19:10:13] "GET /file HTTP/1.1" 404 -
10.17.11.71 - - [25/Jun/2021 19:10:32] "GET / HTTP/1.1" 200 -
10.17.11.71 - - [25/Jun/2021 19:10:32] code 404, message File not found
```


###	updog

> Updog is a replacement for Python's SimpleHTTPServer. It allows uploading and downloading via HTTP/S, can set ad hoc SSL certificates and use HTTP basic auth.

*	It's better alternative to HTTPServer.

*	link:	https://github.com/sc0tfree/updog

---


*	flag:	THM{WGET_WEBSERVER}


##	process

Processes are the programs that are running on your machine. They are managed by the kernel, where each process will have an ID associated with it, also known as its PID. The PID increments for the order In which the process starts. I.e. the 60th process will have a PID of 60.

*	list of currently running processes as our user's session:
```
ps
```

*	list of process run by other user and system processes:
```
ps aux
```

###	top

top gives you real-time statistics about the processes running on your system instead of a one-time view. 

```
top
```

*	These statistics will refresh every 10 seconds.
*	will also refresh when you use the arrow keys to browse the various rows.

###	kill

to kill a process, command:
```
kill [PID]
```
*	`PID` is process id, which you can get from `ps` command.

___

##	backgorund and foreground process

there can be two states of process i.e. background & foreground.

###	background

*	a process can run in background if we want, like `cp ./games/myGames.sh ~/collection/. &`
*	here, file will copy in background, doesn't matter how much time will it take! and we can do further tasks.
*	we can use `crtl + z` to __stop__ or __suspend__ the process.

###	foreground

*	commands whose output we can see in out terminal screen are foreground commands.
*	once we background a command, we can also bring them back to foreground using `fg` command.

##	cron & crontab

*	Users may want to schedule a certain action or task to take place after the system has booted.

###	crontab

*	 crontab is simply a special file with formatting that is recognised by the cron process to execute each line step-by-step.

*	Let's use the example of backing up files. You may wish to backup "cmnatic"'s  "Documents" every 12 hours. We would use the following formatting: 
```
0 *12 * * * cp -R /home/cmnatic/Documents /var/backups/
```

*	you can open the crontab file with:
```
crontab -e
```

*	web application to generate cron jobs: 
	*	https://crontab-generator.org
	*	https://crontab.guru

##	system logs

linux keeps logs of each and every activity happens in the OS.
which includes web server, firewall, crashes and other services.

*	logs can be found at `/var/log` directory.

--- THE END ---
