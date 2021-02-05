import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    padding: 10,
  },
  mainHeader: {
    backgroundColor: '#191414',
  },
  appTitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 35,
    textAlign: 'left',
    color: 'grey',
    opacity: 0.6,
    textShadowColor: 'indigo',
    paddingBottom: 6,
  },
  card_container: {
    position: 'absolute',
    margin: 5,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 10,
    borderRadius: 8,
  },
  artists: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'black',
  },
  track: {
    fontSize: 25,
    fontFamily: 'Arial',
    color: 'black',
  },
  image: {
    margin: 5,
    resizeMode: 'contain',
  },
  description: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: 'black',
    paddingBottom: 10
  },
  playButton: {
    color: 'grey',
    opacity: 0.6,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
  stopButton: {
    color: 'grey',
    opacity: 0.7,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
  postDescription: {
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
  },
  searchInput: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginButton: {
    color: '#1DB954',
    padding: 12,
    marginRight: 6,
  },
  commentButton: {
    padding: 12,
    marginRight: 6,
    fontFamily: 'Helvetica',
    color: 'dodgerblue',
    alignItems: 'left',
    fontSize: 15,
  },
  loginHitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 50,
  },
  loginSubmit: {
    width: '50%',
    height: 60,
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  linearGradient: {
    paddingLeft: 2,
    borderRadius: 16,
    borderColor: '#013220',
  },
  buttonContent: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textShadowColor: '#013220',
    textShadowRadius: 4,
  },
  loginInput: {
    margin: 20,
    height: 60,
    borderColor: '#778899',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 4,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  loginImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfo: {
    padding: 20,
    alignSelf: 'center',
    fontFamily: 'Cochin-Bold',
    fontWeight: 'bold',
    color: '#604df0',
    fontSize: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f9fa',
  },
  formContent:{
    marginTop:30,
  },
  inputContent: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  // icon:{
  //   width:30,
  //   height:30,
  // },
  // iconBtnSearch:{
  //   alignSelf:'center'
  // },
  // inputs:{
  //     height:45,
  //     marginLeft:16,
  //     borderBottomColor: '#FFFFFF',
  //     flex:1,
  // },
  // inputIcon:{
  //   marginLeft:15,
  //   justifyContent: 'center'
  // },
  // saveButton: {
  //   height:45,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin:10,
  //   width:70,
  //   alignSelf: 'flex-end',
  //   backgroundColor: '#40E0D0',
  //   borderRadius:30,
  // },
  // saveButtonText: {
  //   color: 'white',
  // },
  searchResultList:{
    marginTop:20,
    padding:10,
  },
  searchResultBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
})

export default styles
