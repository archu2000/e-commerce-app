# Instructions to run this repo:
## After cloning the git repo:
run ```npm i node-modules```

-- that installs the packages required to run the application.

## To use bootstrap:
run ```npm install jquery --save```\
run ```npm install popper.js --save```\
run ```npm install bootstrap --save```

-- install of these packages help react use it by importing.


## React.Fragment
Without rendering any html tags in the DOM, it acts as a container for both of these tags. So it satisfies the rule
of jsx that must contain only single tag.
At the same time, this fragment tag doesn't render any html code in the output. It actually renders only the content inside it.