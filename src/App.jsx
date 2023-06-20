import { useState } from "react";
import ColorList from "./components/ColorsList";
import Form from "./components/Form";
import Values from "values.js"; // npm install Value.js
                                // this will return an array of darker and lighter shade of set color.
                                //const colors = new Values('#f15025').all(10); this 10 is set to result of 10 darker color and 10 lighter color plus set color equals 21 total values in result array.
import { ToastContainer, toast } from 'react-toastify'; // beautify toast
import 'react-toastify/dist/ReactToastify.css';  // must include this to run the toast.

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  // console.log(colors)

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10); //this 10 will be a 10%, total shed is 100% devided by 10%.
      setColors(newColor);
      toast.success('color successfully view');
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message);
    }
    // console.log("color" +color)
  }
    return (
      <main>
        <Form addColor={addColor}/>
        <ColorList colors={colors} />
        <ToastContainer position="top-center"/>
      </main>
    );
};
export default App;
