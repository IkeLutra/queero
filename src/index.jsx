const App = require('./App');
import ReactDOM from 'react-dom'
import React from 'react'

import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/ciwdzgmvr3bxh01717ph7ia0h')
const client = new ApolloClient({ networkInterface })

ReactDOM.render((
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>
    ),
    document.getElementById('root')
);
