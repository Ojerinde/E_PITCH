import Card from './components/Card'
import Image from './components/Image'
import classes from './App.module.css'
import About from './components/About'

const App = () => {
    return <Card className={classes.box}>
        <Image />
        <About />
    </Card>
}
export default App