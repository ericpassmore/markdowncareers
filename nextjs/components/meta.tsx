import Head from 'next/head'
import { SITE_TITLE, FAVICON } from '../lib/constants'

const Meta = () => {
    return (
        <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content="JDs for ME" />
                <link rel="icon" href={FAVICON} />
            <meta property="og:image" content={FAVICON} />
        </Head>
    )
}
export default Meta