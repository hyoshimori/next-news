import React from 'react'
import { Error404Styles } from '@/components/index'

import Link from 'next/link'

const Error404 = () => {
    return (
        <div className={Error404Styles.container}>
            <h1 className={Error404Styles.header}>404</h1>
            <p className={Error404Styles.message}>Oops! Page not found.</p>
            <Link href="/" className={Error404Styles.homeLink}>Go Home</Link>
        </div>
    )
}

export default Error404
