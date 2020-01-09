import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './index.css'

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import {ApolloProvider} from '@apollo/react-hooks'
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
      }
  });

ReactDOM.render(<ApolloProvider client={client}><Router><App /></Router></ApolloProvider>, document.getElementById('root'));