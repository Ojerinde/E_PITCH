import Card from './components/Card'
import Image from './components/Image'
import classes from './App.module.css'
import About from './components/About'
import Auth from './components/Auth'
import { useState } from 'react'

const App = () => {
    const [signData, setSignData] = useState('')
    const getSignData = (data) => {
        console.log(data)
        setSignData(data)
    }
    return <Card className={classes.box}>
        { signData && <Image />}
        { signData && <About onSign={getSignData}/>}
        { !signData && <Auth onSign={getSignData}/>}
    </Card>
}
export default App