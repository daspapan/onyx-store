import React from 'react';
import {type Schema} from '@/../amplify/data/resource';
import ImageComponent from '@/components/Image';
import ProductItemControls from '@/components/ProductItemControls';

type Product = Schema["Product"]["type"];
interface ProductItemProps {
    product: Product;
    isSignedIn: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({product, isSignedIn}) => {
    return (
        <div className="rounded-lg border-black border my-1 p-2 flex gap-2">
            <div>
                {/* <ImageComponent altText='Product Name' path='' /> */}
            </div>
            <div>
                <h2 className="text-xl font-bold">Product Name</h2>
                <div>Product Description</div>
                <ProductItemControls id="{product.id}" isSignedIn={false} />
            </div>
        </div>
    )
}

export default ProductItem