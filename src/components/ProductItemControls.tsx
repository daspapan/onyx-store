import React from 'react'

interface ProductItemControlsProps {
    id: string;
    isSignedIn: boolean;
}

const ProductItemControls: React.FC<ProductItemControlsProps> = ({ id, isSignedIn }) => {
    return (
        <div className="flex gap-2">
            <button className="btn btn-blue">Add to Cart</button>
            <button className="btn btn-blue">Add Review</button>
            <button className="btn btn-blue">
                Edit
            </button>
            <button className="btn btn-blue">
                Delete
            </button>
        </div>
    )
}

export default ProductItemControls