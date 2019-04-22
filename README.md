
![ReactNative App SS](http://oi66.tinypic.com/2z9cwp5.jpg)
![Firebase Storage SS](http://oi65.tinypic.com/15gctvm.jpg)



## 1-React-Native-Image-Picker
**Package => [npm i react-native-image-picker]**(https://www.npmjs.com/package/react-native-image-picker "npm i react-native-image-picker")
## 2-Firebase
**Package => [npm i firebase]**(https://www.npmjs.com/package/firebase "npm i firebase")
## 3-Fetch Blob
**Package => [npm i react-native-fetch-blob]**(https://www.npmjs.com/package/react-native-fetch-blob "npm i react-native-fetch-blob")

## the bugs I caught
Error 1-> _'**:react-native-image-picker'Could not find method testImplementation() for arguments [junit:junit:4.10] on object_**'

#Easy Solution 1-> :'**../node_modules/react-native-image-picker/android/build.gradle**' in dependencies block with start '**testImplementation**' all comment line


Error 2-> _'**undefined is not an object (evaluating 'RNFetchBlob.DocumentDir**'_
#Easy solution 2-> :) npm new package ? :) go to [Fetch-Blob](https://www.npmjs.com/package/react-native-fetch-blob) then use command '**react-native link react-native-fetch-blob**'




## referances site or book
http://nobrok.com/how-to-upload-image-to-firebase-using-react-native/
https://www.youtube.com/watch?v=DKxo3eY8dMw
https://github.com/wkh237/react-native-fetch-blob/issues/454
