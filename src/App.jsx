import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';


function App() {
 
  var state = {
    value: 'this is copied text',
    copied: false,
  };


  return (
    <>
    <div className=''> 
    <div>
        <p>Click below to Participate in the LPU Digital Star Competition </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdB0916NLg141tOpEX0Stp6ZmhaGEWm0YDLBFfjAX3NdIaLyg/viewform' target='_blank'><button>Google form link</button></a>
      </div>

      <div>
        <p>These are the tags you have to use for lpu digital star on Instagram</p>
        <p>#lpudigitalstar #engagement #lpu #lpuuniversity #induction #rapid #fun </p>
      </div>
      <CopyToClipboard text="#lpudigitalstar #engagement #lpu #lpuuniversity #induction #rapid #fun ">
  <button>Copy to clipboard</button>
</CopyToClipboard>
</div>
<a href='https://github.com/raka334' target='_blank'>This is made by RAPID</a>
    </>

  )
}

export default App
