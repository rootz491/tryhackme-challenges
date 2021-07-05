6 june 2021 - Tuesday

#	XXE

An XML External Entity (XXE) attack is a vulnerability that abuses features of XML parsers/data. It often allows an attacker to interact with any backend or external systems that the application itself can access and can allow the attacker to read the file on that system. They can also cause Denial of Service (DoS) attack or could use XXE to perform Server-Side Request Forgery (SSRF) inducing the web application to make requests to other applications. XXE may even enable port scanning and lead to remote code execution.


*	XML is similar to HTML in terms of rules and syntax.

*	first line on XML file should be `xml prolog` & it tells about encoding type and xml version; It's not necessary to include but is a __good practice__.
	```xml
<?xml version="1.0" encoding="UTF-8"?>
	```

##	DTD

*	document type definition
*	DTD defines the structure and the legal elements and attributes of an XML document.
*	XML follows the rules of it's DTD file (if available).


##	XXE

*	payload:
	```
<?xml version="1.0"?>
<!DOCTYPE root [<!ENTITY read SYSTEM 'file:///etc/passwd'>]>
<root>&read;</root>
	```

----

more advanced types of XXE are not covered in this room :(
