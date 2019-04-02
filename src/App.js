import React from 'react'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
// Router
import { RouterContainer } from './route'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RouterContainer />
      </Provider>
    )
  }

}

export default App
