import React, { useState } from "react";

const Addtask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmitIn = (e)=>{
        e.preventDefault();

        if(!text||!day){
            alert("please fill the field properly")
            return
        }

        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmitIn}>
      <div className="form-control" >
        <label>To-do</label>
        <input type="text" value={text} placeholder="Add to-do" onChange={e=>setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input type="day"  value={day} placeholder="day and time" onChange={e=>setDay(e.target.value)}  />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input checked={reminder} type="checkbox" onChange={e=>setReminder(e.currentTarget.checked)}  />
      </div>
      <div className="form-control">
            <input type="submit" value="save To-do" className="btn btn-block" />
      </div>
    </form>
  );
};

export default Addtask;
