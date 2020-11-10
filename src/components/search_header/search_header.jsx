import styles from './search.module.css';
import React,{useRef } from 'react';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const handelSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onClick= () => {
    handelSearch();
  }
  const onKeyPress= (event) =>{
    if(event.key==='Enter'){
      handelSearch();
    };  
  };
 return(
  <header className={styles.header}>
    <img className={styles.img} src="/images/icon.png" alt="Icon" />
    <input
    ref={inputRef} 
    className={styles.input} 
    type="search" 
    placeholder="Search..." 
    onKeyPress={onKeyPress} />
    <button className={styles.button} type="submit" onClick={onClick}>
      <img src="/images/search.png" alt="search"/>
    </button>
  </header>
 )
      
};

export default SearchHeader;