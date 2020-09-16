import React from "react";
import { Prompt } from "react-router";
import "./search.css";
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form className='Search' onSubmit={props.handleSubmit}>
    <Prompt when={props.value} message='Are you sure?' />
    <input
      ref={props.setRef}
      type='text'
      placeholder='Busca tu video favorito'
      className='Search-input'
      name='search'
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
