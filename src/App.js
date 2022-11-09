import React,{useState, useEffect} from 'react'
import { View } from './components/View';


const getDatafromLS=()=>{
  const data = localStorage.getItem('complaint');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  
  const [booking, setBooking]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [reason, setReason]=useState('');
  const [num, setNum]=useState('');


  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    
    let book={
      num,
      title,
      reason,
     
    }
    setBooking([...booking,book]);
    setTitle('');
    setReason('');
    setNum('')
  }

  
  const deleteBook=(num)=>{
   
    const filteredBooks=booking.filter((element,index)=>{
      console.log(element);
      return element.num !== num 
     
    })
    setBooking(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('complaint',JSON.stringify(booking));
  },[booking])

  return (
    <div className='wrapper'>
      <h1>Add Complaint</h1>
      
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label  >No</label>
            <input type="number"  className='form-control' required
            onChange={(e)=>setNum(e.target.value)} value={num}></input>
           
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Reason</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setReason(e.target.value)} value={reason}></input>
            <br></br>
            
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {booking.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Reason</th>

                  
                  </tr>
                </thead>
                <tbody>
                  <View booking={booking} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setBooking([])}>Remove All</button>
          </>}
          {booking.length < 1 && <div>No Complaint are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
