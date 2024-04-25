import { useState } from "react"
import data from './data'
import './accordian.css'

const Accordian = () => {

  const [selected, setSelected] = useState(null)
  const [enablemultiple, setEnaleMultiple] = useState(false)
  const [multiple, setMultiple] = useState([])


  const handleSingle = (getId) => {
    setSelected(getId === selected ? null : getId)
  }

  const handleMultiple = (getId) => {
    let cpymly = [...multiple]

    const findIndexOfCurrentId = cpymly.indexOf(getId)
    if (findIndexOfCurrentId === -1) cpymly.push(getId)
    else cpymly.splice(findIndexOfCurrentId, 1)
    setMultiple(cpymly)

  }

  return (
    <>
      <div className="accordian">
        <button onClick={() => setEnaleMultiple(!enablemultiple)}>{
          !enablemultiple ? "Enable Multi selection" : "disable Multi selection"}</button>
        {data && data.length > 0 ? data.map((da) => {
          return (
            <div key={da.id}>
              <div onClick={() =>
                enablemultiple ?
                  handleMultiple(da.id) : handleSingle(da.id)} className="wrapper">
                <div >{da.question}</div>
                <span style={{ marginRight: "1rem" }} className="add">+</span>
              </div>
              {
                enablemultiple ?
                  (multiple.indexOf(da.id) !== -1 ?
                    <div className="answer">
                      {da.answer}</div>
                    : null) :
                  (selected === da.id ? <div className="answer">
                    {da.answer}</div>
                    : null)
              }
            </div>
          )
        })
          :
          <span className="accordian">No Records Found</span>
        }


      </div>
    </>
  )
}

export default Accordian
