01 july 2021 - Thursday


* do some nmap

* so it's a server running apache in 80 and 22 is also open, hense ssh ofc.

* run directory bruteforce, and see what things did we get

* so there's admin and /etc

* `/etc` contains directory and within that, there's `passwd` 
  * probably for ssh.
  * user is `music_archives` btw
 
  ```
  music_archive:$apr1$BpZ.Q.1m$F0qqPwHSOG50URuOVQTTn.
  ```

* continue later

