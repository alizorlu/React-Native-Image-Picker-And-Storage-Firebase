/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Platform, Button, StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import  RNFetchBlob  from "react-native-fetch-blob";
import firebase from "firebase";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      _takedPhotoUri:null
    }

  }
  handleTakePhoto = async() => {
    const options = {};
    
    await ImagePicker.launchCamera(options,sa=>{
      // this.setState({takePhotoResponse:sa});
      if(!sa.didCancel)
      {
       this.handleUploadImage(sa.uri,'deneme-resim');
      }
      
      
    });
    

  }
  handleUploadImage = (uri, imagename) => {
    console.warn("Yüklemeye giren:"+uri);
    
    const image=uri;
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

   
    let uploadBlob = null;

    const imageRef = firebase.storage().ref('posts').child("test.jpg")
    let mime = 'image/jpg'
    fs.readFile(image, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
    })
    .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        // URL of the image uploaded on Firebase storage
        console.warn(url);   
        this.setState({_takedPhotoUri:uri})     
      })
      .catch((error) => {
        console.log(error);

      })  
    // const response = fetch(uri);
    // const blob = response.blob();

    // var ref = firebase.storage().ref().child('images/' + imagename)
    // return ref.put(blob);
   
  }
  handleChoosePhoto = () => {

    const options = {};

    ImagePicker.launchImageLibrary(options, resp => {

      if (resp.uri) {

        this.setState({ photo: resp });

      }
    });
  }
  componentWillMount() {
    const firebaseConfig = {
      apiKey: '',
      authDomain: '',
      projectId: "",
      storageBucket: "",
      }

    firebase.initializeApp(firebaseConfig);
    console.warn("Firebase yapılandırıldı");
    
  }


  render() {
    const { photo,_takedPhotoUri } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo||_takedPhotoUri && (

          <Image

            source={{ uri: _takedPhotoUri }}
            style={{ width: 300, height: 300 }}
          />

        )}
        <Button title="Resim seç"
          onPress={this.handleChoosePhoto}
        >

        </Button>
        <Button title="Fotoğraf çek"
          onPress={this.handleTakePhoto}
        ></Button>
      </View>
    );
  }
}

