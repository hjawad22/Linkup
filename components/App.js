import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'




const Stack = createNativeStackNavigator()

class AppNavigator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          id: '',
          name: '',
          email: '',
          calendar: [],
          preferences: {}
        },
        events: [
          {
            id: '',
            title: '',
            description: '',
            participants: [],
            date: '',
            time: '',
            location: ''
          }
        ],
        friends: [
          { id: '', name: '', email: '', calendarSynced: false }
        ],
        calendarSynced: false,
        error: '',
        loading: false,
        selectedEvent: null,
        inviteStatus: 'pending'
      };
    }
}