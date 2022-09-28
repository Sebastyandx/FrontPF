import React, { useState} from 'react'
// import {useDispatch} from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {

    const [search,setSearch] = useState('');
    // const dispatch = useDispatch();
    
    // SEARCH FUNCTION
    function handlerSearch(e){
        e.preventDefault();
        const onlyAlfa = /^[A-Za-z ]+$/
        if(!search) return alert('Campo vacío!, porfavor ingresa alguna ciudad');
        if(!onlyAlfa.test(search)) return alert('Debe ingresar un valor valido')
        //   dispatch(algo(search));
          setSearch('');
      }


  return (
    <div className='flex justify-center align-center mt-40'>
        <form className='flex w-1/4 h-14 bg-slate-400' onSubmit={(e) => handlerSearch(e)}>
            <input 
             className='w-full border-0 rounded-r-none rounded text-lg' 
             placeholder='Buscar...'
             value={ search } 
             name= 'search'
             onChange={e => setSearch(e.target.value.toLowerCase())}
            />
            <button 
             className='w-12 h-14 bg-white grid place-items-center rounded-r-sm cursor-pointer' 
             type={'submit'}><SearchIcon />
            </button>
        </form> 
    </div>
  )
}
