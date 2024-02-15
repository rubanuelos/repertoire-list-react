import { useState } from 'react'

const AddPiece = ( {onAdd} ) => {
    const [title, setTitle] = useState('')
    const [composer, setComposer] = useState('')
    const [year, setYear] = useState('')
    const [instrumentation, setInstrumentation] = useState ('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !composer || !year || (instrumentation === '')) {
            alert('Please fill all fields.')
            return
        }

        onAdd( {title, composer, year, instrumentation} )
        setTitle('')
        setComposer('')
        setYear('')
    }

    return (
        <form className="add-form bg-gradient-to-r from-slate-400 to-slate-100 justifu-self-center" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='title' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Composer</label>
                <input type='composer' placeholder='Add Composer' value={composer} onChange={(e) => setComposer(e.target.value)}></input>
            </div>  
            <div className='form-control'>
                <label>Year</label>
                <input type='year' placeholder='Add Year' value={year} onChange={(e) => setYear(e.target.value)}></input>
            </div>  
            <div className='form-control'>
                <label>Instrumentation</label>
                <select type={instrumentation} onChange={(e) => setInstrumentation(e.target.value)}>
                    <option value="">Select Instrumentation</option>
                    <option value="Solo">Solo</option>
                    <option value="Chamber music">Chamber music</option>
                </select>
            </div>
            <input type="submit" value="Add to your list" className="btn btn-block"></input>
        </form>
    )
}

export default AddPiece