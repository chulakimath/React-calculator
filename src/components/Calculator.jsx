import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState('');
    const buttonChange = (e) => {
        setInput(prev => prev + e.target.value)
    }
    const equaltoHandler = () => {
        if (input !== '') {
            let ans = input;
            ans = eval(ans);
            if (!Number.isInteger(ans)) {
                ans = parseFloat(ans.toFixed(3))
            }
            setInput(prev => ans)
        }
    }
    const operatorChange = (e) => {
        setInput(input => String(input))
        setInput(pre => pre.slice(pre.length - 1) === e.target.value ? pre : pre + e.target.value)
    }
    const backHandler = () => {
        setInput(input => String(input))
        setInput(prev => prev.slice(0, prev.length - 1))
    }
    return (
        <div className='relative w-full h-screen bg-slate-200 p-3 font-semibold'>
            <div className='absolute  left-[50%] -translate-x-[50%] p-5'>
                <div>
                    <input type='text' onChange={() => { }}
                        value={input}
                        className='w-full h-16 focus:outline-none text-right  bg-transparent shadow-inner shadow-white text-3xl' />
                </div>
                <div className='flex flex-col items-center text-2xl '>

                    <div className='flex gap-5 mt-5'>
                        <button
                            onClick={() => {
                                setInput('')
                            }}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full hover:scale-105'
                        >C</button>

                        <button
                            onClick={backHandler}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                        >{'<-'}</button>
                        <button
                            onClick={operatorChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'%'}>%</button>
                        <button
                            onClick={operatorChange}
                            className='bg-yellow-400 w-[50px] h-[50px] shadow-md shadow-black rounded-full '
                            value={'/'}>/</button>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={7}>7</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={8}>8</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={9}>9</button>
                        <button
                            onClick={operatorChange}
                            className='bg-yellow-400 w-[50px] h-[50px] shadow-md shadow-black rounded-full '
                            value={'*'}>X</button>
                    </div>
                    <div className='flex gap-5 mt-2'>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={4}>4</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={5}>5</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={6}>6</button>
                        <button
                            onClick={operatorChange}
                            className='bg-yellow-400 w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'-'}>-</button>
                    </div>
                    <div className='flex gap-5 mt-2'>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={1}>1</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={2}>2</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={3}>3</button>
                        <button
                            onClick={operatorChange}
                            className='bg-yellow-400 w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'+'}>+</button>
                    </div>
                    <div className='flex gap-5 mt-2'>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={0}>0</button>
                        <button
                            onClick={buttonChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'00'}>00</button>
                        <button
                            onClick={operatorChange}
                            className='bg-white w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'.'}>.</button>

                        <button
                            onClick={equaltoHandler}
                            className='bg-orange-600/80 w-[50px] h-[50px] shadow-md shadow-black rounded-full'
                            value={'='}>=</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculator
