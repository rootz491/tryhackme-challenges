Last login: Wed Jun  9 13:12:31 on ttys000
➜  ~ ssh tryhackme@10.10.90.185
The authenticity of host '10.10.90.185 (10.10.90.185)' can't be established.
ECDSA key fingerprint is SHA256:FWR4YIqZpBeymFVRyvEM26g/r1O7qZdSgHe415YqfCk.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.10.90.185' (ECDSA) to the list of known hosts.
tryhackme@10.10.90.185's password: 
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-1047-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Jun  9 07:55:11 UTC 2021

  System load:  0.2               Processes:             107
  Usage of /:   26.8% of 7.69GB   Users logged in:       0
  Memory usage: 46%               IPv4 address for eth0: 10.10.90.185
  Swap usage:   0%





The list of available updates is more than a week old.
To check for new updates run: sudo apt update


The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

tryhackme@linux2:~$ man
What manual page do you want?
For example, try 'man man'.
tryhackme@linux2:~$ man l
No manual entry for l
tryhackme@linux2:~$ man ls
tryhackme@linux2:~$ ls -ah
.   .bash_logout  .cache    important  myfolder
..  .bashrc       .profile  myfile     unknown1
tryhackme@linux2:~$ ls -h
important  myfile  myfolder  unknown1
tryhackme@linux2:~$ ls -a -i
518263 .             517520 .cache     518267 myfolder
  1483 ..            518264 .profile   518268 unknown1
518266 .bash_logout  518270 important
518265 .bashrc       518269 myfile
tryhackme@linux2:~$ ls -a -i -h
518263 .             517520 .cache     518267 myfolder
  1483 ..            518264 .profile   518268 unknown1
518266 .bash_logout  518270 important
518265 .bashrc       518269 myfile
tryhackme@linux2:~$ ls -a -h
.   .bash_logout  .cache    important  myfolder
..  .bashrc       .profile  myfile     unknown1
tryhackme@linux2:~$ ls -h
important  myfile  myfolder  unknown1
tryhackme@linux2:~$ ls -s
total 16
4 important  4 myfile  4 myfolder  4 unknown1
tryhackme@linux2:~$ ls -h
important  myfile  myfolder  unknown1
tryhackme@linux2:~$ -l
-l: command not found
tryhackme@linux2:~$ -h
-h: command not found
tryhackme@linux2:~$ -r
-r: command not found
tryhackme@linux2:~$ ls -r
unknown1  myfolder  myfile  important
tryhackme@linux2:~$ ls -sl
total 16
4 -rw-r--r-- 1 user2     user2       14 May  5 10:30 important
4 -rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
4 drwxr-xr-x 2 tryhackme tryhackme 4096 May  4 17:23 myfolder
4 -rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -s
total 16
4 important  4 myfile  4 myfolder  4 unknown1
tryhackme@linux2:~$ ls -l
total 16
-rw-r--r-- 1 user2     user2       14 May  5 10:30 important
-rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
drwxr-xr-x 2 tryhackme tryhackme 4096 May  4 17:23 myfolder
-rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -asl
total 40
4 drwxr-xr-x 4 tryhackme tryhackme 4096 Jun  9 07:55 .
4 drwxr-xr-x 5 root      root      4096 May  4 17:24 ..
4 -rw-r--r-- 1 tryhackme tryhackme  220 May  4 17:22 .bash_logout
4 -rw-r--r-- 1 tryhackme tryhackme 3771 May  4 17:22 .bashrc
4 drwx------ 2 tryhackme tryhackme 4096 Jun  9 07:55 .cache
4 -rw-r--r-- 1 tryhackme tryhackme  807 May  4 17:22 .profile
4 -rw-r--r-- 1 user2     user2       14 May  5 10:30 important
4 -rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
4 drwxr-xr-x 2 tryhackme tryhackme 4096 May  4 17:23 myfolder
4 -rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -aslh
total 40K
4.0K drwxr-xr-x 4 tryhackme tryhackme 4.0K Jun  9 07:55 .
4.0K drwxr-xr-x 5 root      root      4.0K May  4 17:24 ..
4.0K -rw-r--r-- 1 tryhackme tryhackme  220 May  4 17:22 .bash_logout
4.0K -rw-r--r-- 1 tryhackme tryhackme 3.7K May  4 17:22 .bashrc
4.0K drwx------ 2 tryhackme tryhackme 4.0K Jun  9 07:55 .cache
4.0K -rw-r--r-- 1 tryhackme tryhackme  807 May  4 17:22 .profile
4.0K -rw-r--r-- 1 user2     user2       14 May  5 10:30 important
4.0K -rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
4.0K drwxr-xr-x 2 tryhackme tryhackme 4.0K May  4 17:23 myfolder
4.0K -rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -aslh
tryhackme@linux2:~$ ls -aslh
total 40K
4.0K drwxr-xr-x 4 tryhackme tryhackme 4.0K Jun  9 07:55 .
4.0K drwxr-xr-x 5 root      root      4.0K May  4 17:24 ..
4.0K -rw-r--r-- 1 tryhackme tryhackme  220 May  4 17:22 .bash_logout
4.0K -rw-r--r-- 1 tryhackme tryhackme 3.7K May  4 17:22 .bashrc
4.0K drwx------ 2 tryhackme tryhackme 4.0K Jun  9 07:55 .cache
4.0K -rw-r--r-- 1 tryhackme tryhackme  807 May  4 17:22 .profile
4.0K -rw-r--r-- 1 user2     user2       14 May  5 10:30 important
4.0K -rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
4.0K drwxr-xr-x 2 tryhackme tryhackme 4.0K May  4 17:23 myfolder
4.0K -rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -l .
total 16
-rw-r--r-- 1 user2     user2       14 May  5 10:30 important
-rw-r--r-- 1 tryhackme tryhackme   16 May  5 10:47 myfile
drwxr-xr-x 2 tryhackme tryhackme 4096 May  4 17:23 myfolder
-rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ ls -l myfolder
total 0
tryhackme@linux2:~$ touch karan
tryhackme@linux2:~$ mv karan karan_new
tryhackme@linux2:~$ ls
important  karan_new  myfile  myfolder  unknown1
tryhackme@linux2:~$ rm karan_new 
tryhackme@linux2:~$ ls
important  myfile  myfolder  unknown1
tryhackme@linux2:~$ file unknown1 
unknown1: ASCII text
tryhackme@linux2:~$ file important 
important: ASCII text
tryhackme@linux2:~$ file myfile 
myfile: ASCII text
tryhackme@linux2:~$ file myfolder/
myfolder/: directory
tryhackme@linux2:~$ touch newnote
tryhackme@linux2:~$ file unknown1 
unknown1: ASCII text
tryhackme@linux2:~$ mv myfile ./myfolder/
tryhackme@linux2:~$ ls
important  myfolder  newnote  unknown1
tryhackme@linux2:~$ ls myfolder/
myfile
tryhackme@linux2:~$ cat myfolder/myfile 
THM{FILESYSTEM}
tryhackme@linux2:~$ ls -l

















tryhackme@linux2:~$ ls -l
total 12
-rw-r--r-- 1 user2     user2       14 May  5 10:30 important
drwxr-xr-x 2 tryhackme tryhackme 4096 Jun  9 08:07 myfolder
-rw-rw-r-- 1 tryhackme tryhackme    0 Jun  9 08:06 newnote
-rw-r--r-- 1 tryhackme tryhackme   17 May  4 17:22 unknown1
tryhackme@linux2:~$ su -l
Password: 
su: Authentication failure
tryhackme@linux2:~$ pwd
/home/tryhackme
tryhackme@linux2:~$ su -l linux2
su: user linux2 does not exist
tryhackme@linux2:~$ su -l linux1
su: user linux1 does not exist
tryhackme@linux2:~$ su -l user
su: user user does not exist
tryhackme@linux2:~$ su -l user2
Password: 
su: Authentication failure
tryhackme@linux2:~$ ls
important  myfolder  newnote  unknown1
tryhackme@linux2:~$ ls -l important 
-rw-r--r-- 1 user2 user2 14 May  5 10:30 important
tryhackme@linux2:~$ su user2
Password: 
user2@linux2:/home/tryhackme$ cat important 
THM{SU_USER2}
user2@linux2:/home/tryhackme$ cd /
user2@linux2:/$ ls
bin   dev  home  lib32  libx32      media  opt   root  sbin  srv  tmp  var
boot  etc  lib   lib64  lost+found  mnt    proc  run   snap  sys  usr
user2@linux2:/$ cd tmp
user2@linux2:/tmp$ ls
snap.lxd
systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-apache2.service-7lSuQh
systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-logind.service-nm62Yh
systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-resolved.service-mMLexj
systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-timesyncd.service-5Elzof
user2@linux2:/tmp$ ls -asl
total 48
4 drwxrwxrwt 12 root root 4096 Jun  9 08:26 .
4 drwxr-xr-x 19 root root 4096 Jun  9 07:49 ..
4 drwxrwxrwt  2 root root 4096 Jun  9 07:48 .ICE-unix
4 drwxrwxrwt  2 root root 4096 Jun  9 07:48 .Test-unix
4 drwxrwxrwt  2 root root 4096 Jun  9 07:48 .X11-unix
4 drwxrwxrwt  2 root root 4096 Jun  9 07:48 .XIM-unix
4 drwxrwxrwt  2 root root 4096 Jun  9 07:48 .font-unix
4 drwx------  3 root root 4096 Jun  9 07:50 snap.lxd
4 drwx------  3 root root 4096 Jun  9 07:49 systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-apache2.service-7lSuQh
4 drwx------  3 root root 4096 Jun  9 07:49 systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-logind.service-nm62Yh
4 drwx------  3 root root 4096 Jun  9 07:48 systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-resolved.service-mMLexj
4 drwx------  3 root root 4096 Jun  9 07:48 systemd-private-d026d4e024aa4bb2a8a0e86e2701b9e8-systemd-timesyncd.service-5Elzof
user2@linux2:/tmp$ code ,

Command 'code' not found, but can be installed with:

snap install code
Please ask your administrator.

user2@linux2:/tmp$ uname -a
Linux linux2 5.4.0-1047-aws #49-Ubuntu SMP Wed Apr 28 22:47:04 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
user2@linux2:/tmp$ 
