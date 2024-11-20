<h2 align="center"> Gen difference </h2>

<div align="center">
	<a href="https://github.com/meloshnikov/qa-auto-engineer-javascript-project-87/actions">
		<img src="https://github.com/meloshnikov/qa-auto-engineer-javascript-project-87/workflows/hexlet-check/badge.svg" />
	</a>
  <a href="https://github.com/meloshnikov/qa-auto-engineer-javascript-project-87/actions">
		<img src="https://github.com/meloshnikov/qa-auto-engineer-javascript-project-87/workflows/project-check/badge.svg" />
	</a>
  <a href="https://codeclimate.com/github/meloshnikov/qa-auto-engineer-javascript-project-87/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/2247c6948adc4c239b3d/maintainability" />
	</a>
	<a href="https://codeclimate.com/github/meloshnikov/qa-auto-engineer-javascript-project-87/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/2247c6948adc4c239b3d/test_coverage" />
	</a>
</div>

<h2>:performing_arts: Gen difference is an application that helps you find the difference. </h2>
	<p>This project is a console application that allows you to merge two files for changes. Supported file types are Json and Yaml. The format of the result of the changes is displayed on the screen and is available in the Json, Plain Text and Classic Cascading formats.</p>


<h2>:package: Installation Guide </h2>
		<ul>
		  <li> 
		  	<p>Installation</p>
		  	</li>
		  	<pre>$git clone https://github.com/meloshnikov/qa-auto-engineer-javascript-project-87.git</br>$make install</pre>
		  <li> <p>Check of launch </p>
		  	</li>
		  	<pre>$npx gendiff</pre>
		</ul>
		<p align="center">
		<a href="https://asciinema.org/a/Xgyp3J0wsRWQOc4m6YhD3udoG" target="_blank"><img src="https://asciinema.org/a/Xgyp3J0wsRWQOc4m6YhD3udoG.svg" width="80%"/></a>
		</p>
	
<h2> :rocket: Launch and demo of gendiff</h2>
<h4> Demonstration of the results of comparing two files of a nested structure in accessible formats.	</h4>
	<p>before.json</p>
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
  	<p>after.json</p>
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
	<pre>$gendiff before.json after.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/q7Jq8eNFVlDY8RUARmYy4d6FR" target="_blank"><img src="https://asciinema.org/a/q7Jq8eNFVlDY8RUARmYy4d6FR.svg" width="80%"/></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - plain text.</h4>
	<pre>$gendiff -f plain before.json after.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/JfMlbe8AGQhWATPNspIZLDtE9" target="_blank"><img src="https://asciinema.org/a/JfMlbe8AGQhWATPNspIZLDtE9.svg" width="80%"/></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - JSON.</h4>
	<pre>$gendiff -f json before.json after.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/PpElM277lVTky8VD1ynwx9y0i" target="_blank"><img src="https://asciinema.org/a/PpElM277lVTky8VD1ynwx9y0i.svg" width="80%"/></a>
		</p>
