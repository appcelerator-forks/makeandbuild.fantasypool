Welcome to your Appcelerator Titanium Mobile Project

This is a blank project.  Start by editing your application's app.js to 
make your first mobile project using Titanium.



----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.




### to create an app

```
titanium create --name=fantasypool --id=com.ehirelabs.fantasypool --platforms=android,ipad,iphone --workspace-dir=.
cd appname
alloy new
```

### to run an app

```
alloy run --platform=iphone
alloy run --platform=android --target=device
```

### to run tests

```
sudo npm install -g jake
sudo npm install -g colors
sudo npm install -g wrench
sudo npm install -g jsonlint
sudo npm install -g xmldom
git clone git@github.com:appcelerator/alloy.git
cd alloy/test/apps
jake app:run dir=basics/simple
```