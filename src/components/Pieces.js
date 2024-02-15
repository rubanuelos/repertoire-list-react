import Piece from './Piece'

const Pieces = ({ pieces, onDelete }) => {
    const soloPieces = pieces.filter(piece => piece.instrumentation === 'Solo');
    const chamberPieces = pieces.filter(piece => piece.instrumentation === 'Chamber music');

    return (
        <>
            <div>
                {soloPieces.length > 0 && (<h1 className="text-lg text-center underline underline-offset-8">Solo Pieces</h1>) }
                {soloPieces.map((piece, index) => (
                    <Piece
                        key={index}
                        piece={piece}
                        onDelete={onDelete} />
                ))}
            </div>

            <div>
                {chamberPieces.length > 0 && (<h1 className="text-lg text-center underline underline-offset-8">Chamber Pieces</h1>)}
                {chamberPieces.map((piece, index) => (
                    <Piece
                        key={index}
                        piece={piece}
                        onDelete={onDelete} />
                ))}
            </div>
        </>
    )
}

export default Pieces