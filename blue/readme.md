ip
	
	10.10.3.86
	10.10.50.60

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


fix - notes

	#1

	when i tried metasploit to find what it's vulnerable to, i found that its vulnerable to microsoft SMB1.0 [port 445] so i tried to search for corresponding exploit and found that exploit name "exploit/windows/smb/ms17_010_eternalblue_win8" ...

	but when i tried to use it, it showed error like this  : 

	msf5 > info exploit/windows/smb/ms17_010_eternalblue_win8
	[-] Invalid module: exploit/windows/smb/ms17_010_eternalblue_win8

	so i figured out that it isn't going to be solved by itself. so i searched on google and find that it's one of the famous problems, occured after new update and soln. was also simple, that is, the above exploit script is using python3 but it needs python2 to get executed sucessfully. 

	Also i'm pasting exploit's old file and new [ FIXED ] file in here.
	and when you'll try to fix same, remember that file must be pasted on directory called "/usr/share/metasploit-framework/modules/exploits/windows/smb/" and before pasting, remove old file and use SUDO to perform operations on the directory (it requires permission).    
	good luck; 