import React, {useState}  from 'react'
import Header from './Components/Header' 
import Footer from './Components/Footer' 
import File from './Components/File'
import {Grid} from '@material-ui/core'
/*import { Paper } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {Grid,Paper} from "@material-ui/core" */

import { BrowserRouter as Router, Route} from 'react-router-dom';
import pic1 from './pic1.svg';
import pic3 from './pic3.svg';
import blog from './blog.svg';
import about from './Components/About'
import Svg2 from './Components/Svg2';
import Flexx from './Components/Flexx';
import Flex from './Components/Flex';
/*import Flexbox from './Components/Flex' */
/*<i  className="fas fa-image bug"></i> */
/*<input className= "upload" style={linkstyle1} type="file" name= "file" placeholder="upload" onChange= {uploadImage}/>*/
import './App.css';
/*import classes from '*.module.css'

const useStyles = makeStyles((theme)=>({
  grid: {
    width: '100%',
    margin: '0px'
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'Center',
    color: theme.palette.text.secondary,
    background:theme.palette.success.light,

  }
}


));
*/


function App() {
  const [image,setImage]= useState('')
  const [loading,setLoading ]= useState(false)
  const uploadImage = async(e)=>{
    const files= e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'o6g9suln')
    setLoading(true)
    const res= await fetch('https://api.cloudinary.com/v1_1/dacznxbkg/image/upload',
    {
      method: 'POST',
      body: data
    })

    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }
  return (
    <div>
      <Router>
      <div className="App" >
      
        <Header/>
        <Route exact path= "/" render = { props=>(
        
          <React.Fragment>
          <div className="search">
              <div> <File /> </div> 
              
              
                {/* <div className="post">  */}
              
                {/* <h1 style={upimg}> <img src={pic3} className="svg3" height="150px"/></h1> */}
                
              <div className="secRow">
                <div className="img">
              
                  <input 
                            type="file"
                            name="file"
                          
                            className="upload"
                            onChange= {uploadImage}
                            style={linkstyle1}
                            style= {{flex:1}}
                            />
                        
                
                </div>
              
                
                {loading}<br/>
                {/* <div> */}
                {
                  <img src={image} style= {linkstyle}/>
                }
                {/* </div> */}
              </div>
          </div> 
          {/* </div> */}

          <Svg2/>
          <Flexx/>
        {/* <div className="footer"> */}
          <Footer/>
          {/* </div> */}
          
        </React.Fragment>
        )}/>
        <Route path = "/about" component = {about} />
        
        
       </div>
      </Router>
   </div>

  ); 
  
  
}
export default App;

const linkstyle= {
  width: '300px',
 padding: '10px 20px',
//  marginLeft: '65%',
 paddingTop: '20px',
 BorderRadius: '2px',
 
 //BorderRadius: '20px'
  

}

const linkstyle1={
  width: '85px',
  height:'30px',
  marginRight:'5%',
  padding:'5px',
  BorderRadius:'10px',
  fontsize:'20px'
}
const upimg={
  marginLeft:'75%',
  padding: '0.3em',
  textDecoration: 'underline',
  fontSize: '25px',
  marginTop:'3%',
  fontfamily: 'cursive',
  borderBottom: 'black'
}

/*<img src={text} className="text" height="120px"/>*/