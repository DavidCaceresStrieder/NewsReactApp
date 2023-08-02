import React from 'react'
import { useFetch } from '../hooks'
import { NewsBundle } from '../components/NewsBundle';


export const TopHeadlines = () => 
{  
  const { data, isLoading, hasError } = useFetch('https://localhost:7155/api/News/GetTopHeadLines');    
  
  return (
    <>
    {
      !isLoading ? <NewsBundle articles={ data.articles } nameBundle={'Top Headlines'} /> : null
    }
    </>
  )
}
