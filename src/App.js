import { useState,useEffect } from "react";
import ReactConfetti from "react-confetti";

function App() {
  const [showConfetti,setShowConfetti] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    setShowConfetti(false);
   }, 4000);  //4000ms => 4s
  }, [])
  

  return (
    <div>
      {/* numberOfPieces props to set the number of elements in the Confetti */}
      { showConfetti && <ReactConfetti numberOfPieces={400} tweenDuration={1000} /> }
      
      Rishabh Singh <br />
      This is a Confetti
      
    </div>
  );
}

export default App;
