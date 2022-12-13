import React from 'react'
import style from './Information.module.css'
import { useNavigate } from "react-router-dom";


const Information = () => {

  const Navigation = useNavigate()

  const handleOnClick = () => {
    Navigation('/quiz')
  }

  const backOnClick = () => {
    Navigation('/')
  }

  return (
    <>
        <div className={style.info}>
            <h1>Examination Guidelines</h1>

            <div className={style.guide_info}>
              <p>Hello EveryOne This is Quiz</p>
              <p>10 Questions are given in this quiz</p>
              <p>And Each Questions is given one minute</p>
            </div>
            <div className={style.btns}>
              <button type="button" className="btn btn-primary" onClick={backOnClick} >Back</button>
              <button type="button" className="btn btn-primary" onClick={handleOnClick} >Next</button>
            </div>



          </div>   
    </>
  )
}

export default Information