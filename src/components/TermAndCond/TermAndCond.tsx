import React from 'react'
import InputForTerms from '../InputForTerms/InputForTerms'
import TextForTerms from '../TextForTerms/TextForTerms'

function TermAndCond() {
  return (
    <div className='flex gap-2 py-4'>
      <InputForTerms/>
      <TextForTerms/>
    </div>
  )
}

export default TermAndCond;
