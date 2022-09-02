import React, {useState} from 'react';
import { MessagesContext } from '../context/messages';

import Moment from 'moment';
import 'moment/locale/tr';


const MessagesProvider = ({children}) => {
    const [messages, setMessages] = useState([
        {
            "id":"1",
            "firstName":"Hakan",
            "lastName":"Yılmaz",
            "lastSeen":"2022-08-20T19:06:30.000Z",
            "profilePhoto":"https://picsum.photos/id/5/100/100",
            "messages":[]
        },
        {
            "id":"2",
            "firstName":"Elif",
            "lastName":"Gürses",
            "profilePhoto":"https://picsum.photos/id/85/100/100",
            "lastSeen":"2022-08-20T20:08:30.000Z",
            "messages":[]
        },
        {
            "id":"3",
            "firstName":"Ahmet",
            "lastName":"Kerse",
            "profilePhoto":"https://picsum.photos/id/81/100/100",
            "lastSeen":"2022-08-20T20:07:30.000Z",
            "messages":[]
        },
        {
            "id":"4",
            "firstName":"Barış",
            "lastName":"Kaya",
            "profilePhoto":"https://picsum.photos/id/98/100/100",
            "lastSeen":"2022-08-20T19:08:30.000Z",
            "messages":[]
        },
        {
            "id":"5",
            "firstName":"Deniz",
            "lastName":"Pak",
            "profilePhoto":"https://picsum.photos/id/36/100/100",
            "lastSeen":"2022-08-20T04:08:30.000Z",
            "messages":[]
        },
        {
            "id":"6",
            "firstName":"Azime",
            "lastName":"Yıldırım",
            "profilePhoto":"https://picsum.photos/id/31/100/100",
            "lastSeen":"2022-08-20T09:08:30.000Z",
            "messages":[]
        },
        {
            "id":"7",
            "firstName":"Yeliz",
            "lastName":"Aksoy",
            "profilePhoto":"https://picsum.photos/id/30/100/100",
            "lastSeen":"2022-08-20T20:08:30.000Z",
            "messages":[]
        },
        {
            "id":"8",
            "firstName":"Hakan",
            "lastName":"Mahfi",
            "profilePhoto":"https://picsum.photos/id/29/100/100",
            "lastSeen":"2022-08-20T10:08:30.000Z",
            "messages":[]
        },
        {
            "id":"9",
            "firstName":"Merve",
            "lastName":"Sarı",
            "profilePhoto":"https://picsum.photos/id/27/100/100",
            "lastSeen":"2022-08-20T14:08:30.000Z",
            "messages":[]

        },
        {
            "id":"10",
            "firstName":"Rana",
            "lastName":"Yalçın",
            "profilePhoto":"https://picsum.photos/id/24/100/100",
            "lastSeen":"2022-08-20T16:08:30.000Z",
            "messages":[]
        }, 
        {
            "id":"11",
            "firstName":"Hasan",
            "lastName":"Vasi",
            "profilePhoto":"https://picsum.photos/id/88/100/100",
            "lastSeen":"2022-08-20T18:08:30.000Z",
            "messages":[]
        },
        {
            "id":"12",
            "firstName":"Kübra",
            "lastName":"Serin",
            "profilePhoto":"https://picsum.photos/id/87/100/100",
            "lastSeen":"2022-08-20T17:08:30.000Z",
            "messages":[]
        },
    
    

    
    
    
    
    ])
    const addMessages = (text,id) => { 
        
       const newMessages = messages.map(item=>{

        console.log("prov item",item)
            if(id===item.id){
                item.messages.push({isMine:1,text:text, datetime: Moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSSZZ")})
               
                           
                return {
                    ...item,
                    messages: item.messages
                }
            }
            else{
                return item
            }
          
        })



        setMessages(newMessages)

    }

    return(
        <MessagesContext.Provider value = {{messages, setMessages,addNewMessages:addMessages}}>
           {children}
        </MessagesContext.Provider>

 
    );

};

export default MessagesProvider;