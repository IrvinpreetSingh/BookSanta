import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Animated,
  Alert,Image} from 'react-native';
  import {ListItem,Icon} from 'react-native-elements'
  import db from '../config'
export default class SwipeableFlatlist extends Component{
  constructor(props){
    super(props);
    this.state = {
      allNotifications: this.props.allNotifications
    }
  }
  //Updata Mark As Read Function
  updateMarkAsRead=(notification)=>{
    db.collection('allNotifications').doc(notification.doc_Id).update({
      notification_status : 'read'
    })
  }

  //Swipe Value Change Function
  onSwipeValueChange=swipeData=>{
    var allNotifications = this.state.allNotifications
    const {key, value} = swipeData
    if(value < -Dimensions.get('window').width){
      const newData = [...allNotifications]
      this.updateMarkAsRead(allNotifications[key]);
      newData.splice(key, 1);
      this.setState({allNotifications : newData})
    }
  }
  //RenderItem Function
  // renderItem = data=>{
  //   <ListItem 
  //   leftElement={<Icon name='book'/>}/>
  // }
    renderItem = data => (
    <Animated.View>
      <ListItem  bottomDivider>
        <ListItem.Content>
        <Icon name="book" type="font-awesome" color="#696969" />
        <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>{data.item.book_name}</ListItem.Title>
        
        <ListItem.Subtitle>{data.item.message}</ListItem.Subtitle>
       
        </ListItem.Content>
        </ListItem>
    </Animated.View>
  );

    renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Mark as read</Text>
      </View>
    </View>
  );


  render(){
    return(
      <View>
      <Text>SwipeableFlatlist</Text>
      </View>);
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  backTextWhite: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "flex-start"
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100
  },
  backRightBtnRight: {
    backgroundColor: "#ff9933",
    right: 0
  }
});