import React from 'react';

const Screenshots = ({ images }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '16px' }}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    style={{
                        width: '100%',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                    }}
                />
            ))}
        </div>
    );
};

export default Screenshots;