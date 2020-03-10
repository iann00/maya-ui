# MayaUI

MayaUI is my effort to create components that are responsive and at the same time look good on smaller devices like smartphones.

While other libs focus on styling basic HTML components, Maya is concerned with providing high level components, for convenience, the simple upload button.

With this proposal, here at Navi Dev, we were able to create components for the web that resemble the components we use on Android, in this case, the avatar upload as exemplified.

## Project setup

To configure MayaUI, you need to install NodeJS. Then open Node and run
```
npm install --save maya-ui
```

In the ``main.js`` from your app add

```
import Vue from 'vue'
import MayaUI from 'maya-ui'
import 'maya-ui/dist/maya-ui.css'

Vue.use(MayaUI)
```

### Customization

The easy mode to do this is 

1. Go to maya-ui/dist/style.scss and copy the file to another folder
2. Open the NodeJS and run ```npm install -g node-sass```
3. Set the values to all variables in style.scss
4. In the same style.scss's folder ```node-sass style.scss maya-ui.css```
5. Replace the file maya-ui.css in maya-ui/dist/maya-ui.css by new file generated
6. Good job! You customized the MayaUI

### Docs

Coming soon =/

### Contributing

As said, MayaUI is a pilot and needs corrections and updates, so if you would like to 
help me improve it I would love to!

### Licence
Code released under MIT license.

Copyright (c) 2020, Navi Dev.
