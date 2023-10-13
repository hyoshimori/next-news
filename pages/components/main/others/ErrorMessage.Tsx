import React from 'react'
import { ErrorMessageStyles } from '@/components/index'

import Link from 'next/link'

const ErrorMessage = () => {
    return (
        <div className={ErrorMessageStyles.container}>
            <h1 className={ErrorMessageStyles.header}>404</h1>
            <p className={ErrorMessageStyles.message}>Oops! Page not found.</p>
            <Link href="/" className={ErrorMessageStyles.homeLink}>Go Home</Link>
        </div>
    )
}

export default ErrorMessage
