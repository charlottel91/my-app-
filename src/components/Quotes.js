import React from 'react'
import Navbar from './Navbar'
import QuoteForm from './QuoteForm'
import QuoteList from './QuoteList'



const Quotes = () => {
    return(
        <div className='Home'>
            <Navbar />
            <QuoteForm />
            <QuoteList />
        </div>
    )
}

export default Quotes;