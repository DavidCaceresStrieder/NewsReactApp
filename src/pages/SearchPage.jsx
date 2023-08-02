import React, { useState } from 'react'
import { FormSearch, NewsBundle } from '../components'
import { useFetch } from '../hooks';


export const SearchPage = () => {

  const [ querySearch , changeQuery ] = useState('');
  const { data, isLoading, hasError } = useFetch(querySearch);  

  const onSearch = (formData) => 
  {    
    let query = `https://localhost:7155/api/News/Search?criteria=${formData.searchCriteria}`;

    if(formData.from)
      query += '&from='+ formData.from;

    if(formData.to)
      query += '&to='+ formData.to;

    changeQuery(query);

  }
  
  return (
    <>
      <FormSearch Search={ onSearch } />
      {
        !isLoading && data ? <NewsBundle articles={ data.articles } nameBundle={''} /> : null
      }
    </>
  )
}
