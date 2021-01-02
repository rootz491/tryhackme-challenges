@rootz491	|	jan. 2, 2021

#web_fundamentals



*	to connect with tryhackme via Opnevpn:  
```bash
sudo openvpn ~/Downloads/rootz491\ \(1\).ovpn
```



TOOLS

>	wireshark	[to inspect requests]
>	



PORTS

>	80:		HTTP
>	443:	HTTP(S)



# REQUEST

*	There are 9 types of requests (GET, POST etc...)

*	GET is used to retrieve data from server.

*	POST is used to send data to the server.

example request:

```
GET /main.js HTTP/1.1
Host: 192.168.170.129:8081
Connection: keep-alive
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36
Accept: */*
Referer: http://192.168.170.129:8081/
Accept-Encoding: gzip, deflate
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
```

*	first line is, path for the server
*	next section, *HEADER* gives more info about request to the server.
*	finally *BODY*
	*	_POST_ request:	it's the content sent to server.  
	*	_GET_ request:	server mostly ignores it.



# RESPONSE

the serve repy with response.

*	the first line describes the status.


	```
	A basic breakdown of the status codes is:

	100-199: Information
	200-299: Successes (200 OK is the "normal" response for a GET)
	300-399: Redirects (the information you want is elsewhere)
	400-499: Client errors (You did something wrong, like asking for something that doesn't exist)
	500-599: Server errors (The server tried, but something went wrong on their side)
	```

*	Response have header, it tells about server and sometimes cookies, that are being used. etc...

*	Response also have a _body_
	
	*	for GET request, It is normally web content (HTML/CSS) or information such as JSON.
	*	for POST request, It may be a *status code* or similar.


example response:

```
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 28
Content-Type: application/javascript; charset=utf-8
Last-Modified: Wed, 12 Feb 2020 12:51:44 GMT
Date: Thu, 27 Feb 2020 21:47:30 GMT

console.log("Hello, World!")
```









# FLAGS:

1.	curl http://10.10.218.233:8081/ctf/get

2.	curl http://10.10.218.233:8081/ctf/post -X POST --data "flag_please"

3.		





