import React from "react";
import { useState, useEffect } from "react";

function Robotwalk(){

    const [inputValue, setInputValue] = useState('');
    const [myArray, setMyArray] = useState(0);
    const [newArray , setNewArray] = useState([]);
    const [componentKey, setComponentKey] = useState(0);
    const [result,setResult] = useState('')

    //รับค่า input สำหรับการเดิน
    const handleInputChange = (event) => {
      setInputValue(event.target.value.toUpperCase());
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setResult(`${inputValue.toUpperCase()}`)
        moveto();
        setInputValue("");
        handleRenderNewComponent()
    }
    const handleRenderNewComponent = () => {
        setComponentKey(prevKey => prevKey + 1);
      }

    // function เดินไปตำแหน่งต่างๆ
    let robot = 'up';
    let xPoint = 0;
    let yPoint = 0;
    let arrWalk = []
    const arrLetter = inputValue.split("");
    
    const moveto=()=>{
    
    arrWalk.push([xPoint,yPoint]);

    for(let i=0;i<arrLetter.length;i++){
        switch (arrLetter[i]) {
            case 'W':
            if (robot === 'up') yPoint++;
            else if (robot === 'down') yPoint--;
            else if (robot === 'left') xPoint--;
            else if (robot === 'right') xPoint++;
            arrWalk.push([xPoint,yPoint]);
            break;

            case 'R':
            if (robot === 'up') robot = 'right';
            else if (robot === 'down') robot = 'left';
            else if (robot === 'left') robot = 'up';
            else if (robot === 'right') robot = 'down';
            break;

            case 'L':
            if (robot === 'up') robot = 'left';
            else if (robot === 'down') robot = 'right';
            else if (robot === 'left') robot = 'down';
            else if (robot === 'right') robot = 'up';
            break;
            }
        }

        const plusArray = arrWalk.flat();
        const newPlus = plusArray.map(Math.abs);
        const maxNumber2 = Math.max(...newPlus);
        
        setMyArray(maxNumber2);
        setNewArray(arrWalk);

    }

    //บอกตำแหน่ง เริ่ม ทางผ่าน และ จุดสิ้นสุด
    useEffect(() => {
       for(let a=0; a<newArray.length; a++){
        
        if(a === 0){
        const startWalk = newArray[a];
        let Starts = startWalk.toString();
        const elementStart = document.getElementById(Starts);
        elementStart.classList.add('active');
        elementStart.classList.remove('endactive');
        }

        else if(a === newArray.length-1){
            const endWalk = newArray[a];
            let Ends = endWalk.toString();
            const elementEnd = document.getElementById(Ends);
            elementEnd.classList.add('endactive');           
        }

        else{
            const passWalk = newArray[a];
            let Pass = passWalk.toString();
            const elementPass = document.getElementById(Pass);
            elementPass.classList.add('passactive');
            elementPass.classList.remove('endactive');
        }
        }
      },);
    
    //สร้างตาราง
    let size = ((myArray*2)+1); 
    function renderTable() {
        const mathY = Math.floor(size/2);
        const mathX = Math.floor(size/2);
        const table = [];
        for (let y = 0 ; y < size; y++) {
          const row = [];
          for (let x = size; x > 0; x--) {
            row.push(
                <div
                  key={`${x},${y}`}
                  className={`cell ${y-mathY}${x-mathX-1}`}
                  id={`${y-mathY},${x-mathX-1}`}
                  >
              </div>
              );
          }
          table.push(<div key={y} className="row">{row}</div>);
        }
        return table;
    }
    
    const LastPosition = newArray.flat();

    return(
        <>
        <p className="robot-text">คำสั่ง :{result}</p>
        <br></br>
        <p className="robot-text">ตำแหน่งปัจจุบัน : ({LastPosition[LastPosition.length-2]},{LastPosition[LastPosition.length-1]})</p>
        <br></br>
        <div className="table-walk" key={componentKey}>
            {renderTable()}
        </div>
        <br></br>
        <form onSubmit={handleSubmit}>
        <label className="robot-text">
        คำสั่ง Robot Walk W,L,R : 
        <input 
        className="class-input"
        type="text" 
        value={inputValue} 
        pattern='[W,R,L]{0,}' 
        title="ใส่ค่าผิดจ้า ต้อง `W,L,R` เท่านั้น"
        onChange={handleInputChange} 
        />
        </label>
        <button type="submit" className="btn-submit">คำนวณ</button>
        </form>
        </>
    )
}

export default Robotwalk;