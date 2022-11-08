import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({booking,deleteBook}) => {
    
    return booking.map((book)=>(
        
        <tr key={book.num}>
            
            <td >{book.num}</td>
            <td>{book.title}</td>
            <td>{book.reason}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.num)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
