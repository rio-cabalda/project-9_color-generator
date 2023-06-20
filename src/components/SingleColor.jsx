
import { ToastContainer, toast } from 'react-toastify'; // beautify toast
import 'react-toastify/dist/ReactToastify.css';  // must include this to run the toast.


const SingleColor = ({color,index}) => {
    const {hex, weight} = color;

    const saveToClipboard = async() => { //use async to check the availabilty of clipboard in the browser.

        if(navigator.clipboard) {//check the availabilty of clipboard in the browser.
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success('Color copied to clipboard');
            } catch (error) {
                toast.error('Failed to copy into the clipboard');
            }
        }
        else{
          toast.error('Clipboard access is not available');
        }
    }
  return (
    <article 
    className={index > 10 ? 'color color-light':'color'} 
    style={{background: `#${hex}`}}
    onClick={saveToClipboard}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor;