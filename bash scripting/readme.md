26 june 2021 - saturday


# Bash Scripting


*	first line of code in any bash script - shabang!
```
#!/bin/bash
```

*	to run a script, give it executable permissions.
```
chmod +x scriptName
```

*	we can run almost any command in a bash script, check [hello script](./hello.sh)

*	`#` at the start of line will comment it.



####	Variables

*	you can also use variables in our script, check [greeting script](./greeting)




####	Debug

*	to debug bash script, use `set -x` and `set +x`, check [debug script](./debug)

	*	this debug method will run and show output of command on each line seperately.

	*	to run bash script with debugger
		```
		bash +x ./scriptName
		```
	*	or you can just run the script simply too.




####	Parameters for bash script

*	to access first parameter, use `$1` checkout [param1 script](./param1)

	*	run above script with this command: `./param1 karan`

*	get the number of arguments supplied to a script: `$#`

*	filename of current script: `$0`




####	Input from user

*	take values as input from user, instead of passing parameters at runtime, check [inp script](./inp)




####	Arrays

*	array syntax: `arr=('one' 'two' 'three' 'four')`

*	remove third element from an array: `unset arr[2]`

*	add new value to item:	arr[2]='hello world'

*	checkout [array script](./array)




####	conditionals

*	basic structure:
```
if [ some condition ]
then
	echo "do something coz condition is true"
else
	echo "do something else, coz condition is false"
fi
```

#####	conditions

*	checkout [isTrusted script](./isTrusted)

*	check if both sides are equal, use `-eq` or `=`

*	check if unequal, use `-ne`

*	check if __greater than__, use `-gt`

*	check if __less than__, use `lt`

*	check if __greater than or equals to__, use `-ge`

*	check if file is present in a directory, use `-f`
```
if [ -f "$filename" ]
then
	echo "$filename  exists"
else
	echo "$filename  doesnot exist"
fi
```
	*	checkout (doesItExist script)[./doesItExist]

*	check if __you have write permissions on file__, use `-w`

*       check if __you have read permissions on file__, use `-r`

*       check if it's a __directory__, use `-d`
```
if [ -d $dictName ]
then
	echo "$dictName directory exists"
else
	echo "$dictName directory doesn't exists in current folder"
fi
```


---


##	little project

To finish off our little project from the previous task. You can build on your script using an if/else statement. Test to see if the age is under 18, if it is then echo out their name with "You are not eligible for work" or something along these lines, if they are over 18 then ask them for their job, you can do this with read.


>	i'll do it later 😅

