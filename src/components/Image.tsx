import React from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';

interface ImageComponentProps {
    path: string;
    altText: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({path, altText}) => {
    return (
        <StorageImage alt={altText} path={path}/>
    )
}

export default ImageComponent