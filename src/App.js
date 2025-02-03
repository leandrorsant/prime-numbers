import React, { useState } from 'react';
import './App.css';
import { FaHeart } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const isPrime = (num) => {
  if (num < 2) 
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const factors = num => [...Array(num + 1).keys()].filter(i=>num % i === 0);

function App() {
  
  const [number, setNumber] = useState('')
  const [score, setScore] = useState(0)
  const [tries, setTries] = useState(5)
  const [message, setMessage] = useState('Se o número for primo, seus pontos aumentam, caso contrário, suas tentativas restantes diminuem.')

  const resetGame = () => {
    setNumber('')
    setScore(0)
    setTries(5)
    setMessage('Se o número for primo, seus pontos aumentam, caso contrário, suas tentativas restantes diminuem.')
  }
  
  const addNumber = (num) => {
    num = number + num
    setNumber(num)

    if(isPrime(num)){
      setScore(score+50)
      setMessage('Muito bem, o numero ' + num + ' é primo!')
    } else {
      const remainingTries = tries-1
      
      setMessage(num + ' não é um numero primo, pois é divisível por: ['+ factors(Number(num))+']')
      setTries(remainingTries)
      if(remainingTries == 0){
        alert("Fim de jogo, tente novamente")
        resetGame()
      } 
    }

  };


  return (
    <div className='container'>
      <span className='left'>Pontos: {score} <FaTrophy size={'0.7rem'}/></span>
        <span className='right'> Tentativas: {tries} <FaHeart size={'0.7rem'}/></span>
        <div className='display center'>
          <p className='center'>{ 
            number? number : '0'}
          </p>
        </div>
        
        <table className='center'>
          <tr><td><button className='btn' onClick={() => addNumber('7')}>7</button></td>
              <td><button className='btn' onClick={() => addNumber('8')}>8</button></td>
              <td><button className='btn' onClick={() => addNumber('9')}>9</button></td></tr>
          <tr>
            <td><button className='btn' onClick={() => addNumber('4')}>4</button></td>
            <td><button className='btn' onClick={() => addNumber('5')}>5</button></td>
            <td><button className='btn' onClick={() => addNumber('6')}>6</button></td>
          </tr>
          <tr>
            <td><button className='btn' onClick={() => addNumber('1')}>1</button></td>
            <td><button className='btn' onClick={() => addNumber('2')}>2</button></td>
            <td><button className='btn' onClick={() => addNumber('3')}>3</button></td></tr>
          <tr>
            <td></td>
            <td><button className='btn' onClick={() => addNumber('0')}>0</button></td>
            <td></td></tr>
        </table>
        <p className='center'>Use o teclado para construir o maior número primo.</p>
        <p className='center'>{message}</p>
    </div>
  );
}

export default App;
