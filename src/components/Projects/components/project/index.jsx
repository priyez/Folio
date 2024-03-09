'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, link, cat, manageModal}) {

    return (
        <a href={link} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{cat}</p>
        </a>
    )
}
