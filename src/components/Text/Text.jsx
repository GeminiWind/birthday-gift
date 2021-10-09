import React from 'react';
import './styles.css';

const Text = ({ children, styles }) => (
    <p style={styles}>
        {children}
    </p>
)

export default Text;