import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLanguageConfig } from '../utills/gptSearchConfigSlice';
import { languageConfigConst } from '../utills/langConfigConstant';
import { supportedLanguage } from '../utills/constants';
const GPTSearchBar = () => {

    const languageConfig = useSelector(state=>state.gptConfig.languageConfig)
    const dispatch = useDispatch();
    const setlanguageConfig = (e)=>{
        
        dispatch(setLanguageConfig(e.target.value))

    }

  return (
    
    <div className= 'pt-[20%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            
            <input className='p-3 m-3 col-span-7' type='text' placeholder={languageConfigConst[languageConfig].searchBarPlaceHolder} />
            <button className='p-3 m-3 col-span-3 rounded-md bg-red-700 hover:bg-red-900 text-black font-bold ' >{languageConfigConst[languageConfig].searchButtonText}</button>
            <select className='rounded-lg col-span-2 bg-black text-white font-bold m-1  p-1' onChange={setlanguageConfig}>
                {supportedLanguage.map(lang => <option className='' key={lang.lang} value={lang.lang}>{lang.value}</option>)}
            </select>
        </form>
        
    </div>
  )
}

export default GPTSearchBar;