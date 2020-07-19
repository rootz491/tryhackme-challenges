ip
	10.10.3.86

commands
	nmap -A -T4 -Pn 10.10.3.86
	nmap -vv -sV --script vuln 10.10.3.86
		to check for vuln for this machine
	

ports
	135		msrpc
	139		netbios-ssn
	445		microsoft-ds
	3389	ssl/ms-wbt-server
	49152	msrpc
	49153	msrpc
	49154	msrpc
	49158	msrpc
	49160	msrpc

OS
	Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)