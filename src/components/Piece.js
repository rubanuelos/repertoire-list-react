import { FaTimesCircle } from 'react-icons/fa'

const Piece = ( {piece, onDelete} ) => {
    return (
        <div
            className={ `${piece.title} (${piece.year}) by ${piece.composer}` }
            >
            <h3 className="flex justify-between text-lg" >
                {`${piece.title} (${piece.year})`} <FaTimesCircle style={{ color: 'black', cursor: 'pointer' }} onClick={() => onDelete(piece.id)}></FaTimesCircle>
            </h3>
            <p className="mb-6">
                {`by ${piece.composer}`}
            </p>
        </div>
    )
}

export default Piece