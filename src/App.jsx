import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { web3Utils } from './libs/web3'

function App() {
  const [wallet, setWallet] = useState({
    loading: false,
    account: null,
  })

  const handleLogin = async () => {
    setWallet({
      loading: true,
      account: null
    })

    const account = await web3Utils.getAccount()

    setWallet({
      loading: false,
      account
    })

  }

  const handleCheckout = async () => {
    setWallet({
      loading: false,
      account: null
    })
  }

  const { loading, account } = wallet;
  
  return (
    <div className="App">
       {account ? account: <button onClick={handleLogin}>connect wallet</button> }
       {account ? <button onClick={handleCheckout}>check out</button> : ''}
    </div>
  )
}

export default App
