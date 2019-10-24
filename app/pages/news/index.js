import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    Alert,StyleSheet,
    Icon,TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux'

import {Card, Tile, ListItem} from 'react-native-elements';

import ActionType from '../../config/actionType'
import Swiper from 'react-native-swiper'
import { MarqueeVertical } from 'react-native-marquee-ab'
class News extends Component {
    static navigationOptions = {
        title: '绿地新闻'
    };
    state = {
        data: ''
    }
    componentDidMount() {
        // this.props.dispatch({type:ActionType.common.loading}) if
        // (!this.props.newsList) alert(ActionType.news.getList)
        this
            .props
            .dispatch({
                type: ActionType.news.getList,
                
                    options: {
                        itemType: 2,
                        userType: 1,
                        showType: 2,
                        pageIndex: 2,
                        pageSize: 10
                    },
                    extra: {
                        //timeout: 20000, 
                        //hideLoading: true
                    }
                
            })
        // this.props.dispatch({type:ActionType.common.loaded})
    }
    showNewsContent = detailUrl => {
        this
            .props
            .navigation
            .navigate('Content', {detailUrl: detailUrl})
    }
    render() {
        let {newsList} = this.props

        return (
            <View style={{flex:1}}>
            <View style={{height:200}}>
           
        
                  <Swiper  height={200} dotStyle={{marginBottom:50}} activeDotStyle={{marginBottom:50}}/* paginationStyle={{top:-20}} */ showsButtons={true} >
       
        <Image
                            source={{ uri: 'http://118.31.73.141:8081/Images/RZLC/636921545782560203.png' }}
                            style={{marginLeft:10,marginRight:10,height:200 }}
                        />
        <Image
                            source={{ uri: 'http://118.31.73.141:8081/Images/RZLC/636930117610577734.jpg' }}
                            style={{marginLeft:10,marginRight:10,height:200 }}
                        />
        <Image
                            source={{ uri: 'http://118.31.73.141:8081/Images/RZLC/636754734786456351.jpg' }}
                            style={{marginLeft:10,marginRight:10,height:200 }}
                        />
      </Swiper>
      </View>
      <MarqueeVertical
                    textList = {[
                        {label : '1',value : 'item1:一闪一闪亮晶晶，满天都是小星星'},
                        {label : '2',value : 'item2:两只老虎跑的快'},
                        {label : '3',value : 'item3:蓝蓝的天上白云飘，白云下面小肥羊儿跑'},
                    ]}
                    width = {500}
                    height = {50}
                    headViews = {[
                        <Image 
                            source = {require('../../res/images/avatar1.jpg')}
                            style = {{width : 46,height : 28}}
                        />,
                        <View/>,
                        <View/>,
                    ]}
                    delay = {2000}
                    direction = {'up'}
                    numberOfLines = {1}
                    bgContainerStyle = {{backgroundColor : '#FFFF00'}}
                    textStyle = {{fontSize : 16,color : '#FF0000'}}
                    onTextClick = {(item) => {
                        alert(''+JSON.stringify(item));
                    }}
                />
     {/*  {newsList && newsList.content && newsList
                    .content
                    .map((l, i) => (
                        <View key={i}>
                            <Card>
                                <Tile
                                    imageSrc={{
                                    uri: l.ListUrl
                                }}
                                    title={l.Title}
                                    titleNumberOfLines={1}
                                    activeOpacity={1}
                                    width={300}
                                    contentContainerStyle={{
                                    height: 90
                                }}
                                    onPress={this
                                    .showNewsContent
                                    .bind(this, l.DetailUrl)}>
                                    <View>
                                        <Text
                                            numberOfLines={2}
                                            style={{
                                            color: '#000',
                                            fontSize: 10,
                                            marginVertical: 5
                                        }}>{l.Content}</Text>
                                        <Text
                                            style={{
                                            color: '#b5b5b5',
                                            fontSize: 10
                                        }}>{l.CreateTime}</Text>
                                    </View>
                                </Tile>
                            </Card>
                        </View>
                    ))
}  */}
       
       </View>
        )  
               
          
        
    }
}
const mapStateToProps = (state) => {
    let newsList = state.newsList
    let loading = state.loading
    return {loading, newsList}
}

News = connect(mapStateToProps)(News)
export default News;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
     justifyContent: 'center',
      alignItems: 'center',
     /*   backgroundColor: '#9DD6EB' */
    },
    slide2: {
      flex: 1,
     justifyContent: 'center',
        alignItems: 'center',
     /* backgroundColor: '#97CAE5' */
    },
    slide3: {
      flex: 1,
     justifyContent: 'center',
        alignItems: 'center',
     /* backgroundColor: '#92BBD9' */
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })