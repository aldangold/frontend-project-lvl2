<h2 align="center"> Frontend-project-lvl2 </h2>

<div align="center">
	<a href="https://github.com/aldangold/frontend-project-lvl2/actions">
		<img src="https://github.com/aldangold/frontend-project-lvl2/workflows/hexlet-check/badge.svg" />
	</a>
    <a href="https://github.com/aldangold/frontend-project-lvl2/actions">
		<img src="https://github.com/aldangold/frontend-project-lvl2/workflows/linter-check/badge.svg" />
	</a>
    <a href="https://codeclimate.com/github/aldangold/frontend-project-lvl2/maintainability">
		<img src="https://api.codeclimate.com/v1/badges/c3437eac888495324b3f/maintainability" />
	</a>
	<a href="https://codeclimate.com/github/aldangold/frontend-project-lvl2/test_coverage">
	<img src="https://api.codeclimate.com/v1/badges/c3437eac888495324b3f/test_coverage" />
	</a>
</div>

<h2>:performing_arts: Gen difference is an application that helps you find the difference. </h2>
	<p>This project is a console application that allows you to merge two files for changes. Supported file types are Json and Yaml. The format of the result of the changes is displayed on the screen and is available in the Json, Plain Text and Classic Cascading formats.</p>


<h2>:package: Installation Guide </h2>
		<ul>
		  <li> 
		  	<p>Installation</p>
		  	</li>
		  	<pre>$git clone https://github.com/aldangold/frontend-project-lvl2.git</br>$make install</pre>
		  <li> <p>Check of launch </p>
		  	</li>
		  	<pre>$npx gendiff</pre>
		</ul>
		<p align="center">
		<a href="https://asciinema.org/a/Xgyp3J0wsRWQOc4m6YhD3udoG" target="_blank"><img src="https://asciinema.org/a/Xgyp3J0wsRWQOc4m6YhD3udoG.svg" width="80%"/></a>
		</p>
	
<h2> :rocket: Launch and demo of gendiff</h2>
<h4> Demonstration of output of comparison results two flat files type of JSON in stylish format.</h4>
    <p>file1.json</p>
		<pre>
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
  		</pre>
  	<p>file2.json</p>
	  	<pre>
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
  	</pre>
	<pre>$gendiff -f stylish file1.json file2.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/eGNE66oh6hmbkeiqkjZ7p7Uyx" target="_blank"><img src="https://asciinema.org/a/eGNE66oh6hmbkeiqkjZ7p7Uyx.svg" width="80%"/></a>
		</p>
<h4> Demonstration of output of comparison results two flat files type of YAML in stylish format.</h4>
	<pre>$gendiff -f stylish file1.yml file2.yml</pre>
		<p align="center">
		<a href="https://asciinema.org/a/mi8E3QWZFV9ZccqrPSKD71UP2" target="_blank"><img src="https://asciinema.org/a/mi8E3QWZFV9ZccqrPSKD71UP2.svg" width="80%"/></a>
		</p>
<h4> Demonstration of the results of comparing two files of a nested structure in accessible formats.	</h4>
	<p>file3.json</p>
		<pre>
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
  		</pre>
  	<p>file4.json</p>
	<pre>
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
  	</pre>
	<h4> Demonstration of the output of the difference in the default format - stylish.</h4>
	<pre>$gendiff file3.json file4.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/jWjllAB1fSCozcpF6TcjfHA0P" target="_blank"><img src="https://asciinema.org/a/jWjllAB1fSCozcpF6TcjfHA0P.svg" width="80%"/></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - plain text.</h4>
	<pre>$gendiff -f plain file3.json file4.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/UUz3ELjOJZH9m4zIUiGFyFdys" target="_blank"><img src="https://asciinema.org/a/UUz3ELjOJZH9m4zIUiGFyFdys.svg" width="80%"/></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - JSON.</h4>
	<pre>$gendiff -f json file3.json file4.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/RroSmR0j0CaJgf85oORAUMhPV" target="_blank"><img src="https://asciinema.org/a/RroSmR0j0CaJgf85oORAUMhPV.svg" width="80%"/></a>
		</p>