import React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import db from '../config'
export default class SearchScreen extends React.Component{
   constructor(props){
 super(props);
 this.state={
   allTransactions:[],

  }
   }  
   componentDidMount=async()=>{
    const query=await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
      allTransactions:[...this.state.allTransactions,doc.data()]  
      })
    })  
   }
   render(){
        return (
             <ScrollView>
               {this.state.allTransactions.map((transaction)=>{
                return(
                  <View style={{borderWidth:2}}>
                    <Text>
                      {"Book Id:"+transaction.bookId}
                    </Text>
                    <Text>
                      {"Student Id:"+transaction.studentId}
                    </Text>
                    <Text>
                      {"date:"+transaction.date.toDate()}
                    </Text>
                    <Text>
                      {"Transaction Type:"+transaction.transactionType}
                    </Text>
                  </View>
                )
               })}
             </ScrollView>
                  );
    }
  
}