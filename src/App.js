
// import './App.css';
// import FullWidthGrid from './components/FullWidthGrid';
// import ComboTree from './components/ComboTreeTest';
// import CustomizedInputBase from './components/CustomizedInputBase';
// import Select from 'react-select';
// import SimpleDialogDemo from './components/SimpleDialogDemo';
// import TestHidden from './components/TestHidden';
// import TestVideo from './components/TestVideo';
// import MixChart from './components/MixChart';
// import TestPDF from './components/TestPDF';
// import StackedColumnChart from './components/StackedColumnChart';
// import LoginTemplate from './components/LoginTemplate1';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]
// function App() {
//   return (
//     <div className="App">
//       {/* <FullWidthGrid /> */}
//       {/* <ComboTree />  */}
//       {/* <h3>Test material-ui </h3> */}
//       {/* <Select options={options} /> */}
//       {/* <CustomizedInputBase />
//       <SimpleDialogDemo />
//       <TestHidden /> */}
//       {/* <TestVideo /> */}
//       <TestPDF />
//       {/* <div className = "chart-goldsun">
//         <MixChart />
//         <StackedColumnChart />
        
//       </div> */}
//       {/* <LoginTemplate /> */}
      
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TableOfContentsFullPage from './components/TableOfContentsFullPage';

function App(){
  const [content,setContent] = useState('');
  const onCashange  = data => { 
    console.log( "Called" );
    setContent(data.getData());
    console.log(content);
 }
  return (
    <div className="App">
        {/* <script src="//cdn.ckeditor.com/4.6.1/basic/ckeditor.js"></script>
        <link rel="stylesheet" href="./assets/content-styles.css" type="text/css"/>
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
            editor={ ClassicEditor }
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                onCashange(editor);
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        /> */}
        <TableOfContentsFullPage />
    </div>
);
}

export default App;