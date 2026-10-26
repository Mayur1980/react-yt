import React,{useActionState, useState} from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    settask(copyTask)

    settitle('')
    setdetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    settask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=> {submitHandler(e)}} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input type='text' placeholder='Enter Notes Heading' className='px-5 font-medium w-full py-2 border-2 outline-none rounded' value={title} onChange={(e) => {settitle(e.target.value)}} />
          <input type='text' placeholder='Write Details' className='px-5 font-medium w-full h-32 flex items-start flex-row py-2 border-2 outline-none rounded' value={details} onChange={(e) => {setdetails(e.target.value)}} />
          <button className='bg-white active:scale-95 text-black px-5 w-full py-2 font-medium outline-none rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start h-[90%] gap-5 mt-5 overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF739z4xHNsg_KRIlzZlY01DaomN8-XxIb2_A8251lg&s=10)]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p classname='mt-2 leading-tight text-xs font-semibold  text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
