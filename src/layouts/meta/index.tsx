import Head from 'next/head'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { icons } from '@/assests'
import { AppConfig } from '@/utils'

type IMetaProps = {
    title?: string
    description?: string
    canonical?: string
    keyword?: string
    website?: string
    twitter_site?: string
    twitter_id?: string
    twitter_creator?: string
    twitter_image?: string
}

export function Meta(props: IMetaProps): JSX.Element {
    const { basePath }: NextRouter = useRouter()
    const meta: IMetaProps = {
        title: props.title || AppConfig.title,
        description: props.description || AppConfig.description,
        canonical: props.canonical || icons.siteLogo.src,
        keyword: props.keyword,
        website: props.website,
        twitter_site: props.twitter_site,
        twitter_id: props.twitter_id,
        twitter_creator: props.twitter_creator,
        twitter_image: props.twitter_image,
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                    key="viewport"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="keyword"
                    property="og:keyword"
                    itemProp="keyword"
                    content={meta.keyword}
                />
                <meta
                    name="website"
                    property="og:website"
                    itemProp="website"
                    content={meta.website}
                />
                <meta name="twitter:site" content={meta.twitter_site} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:id" content={meta.twitter_id} />
                <meta name="twitter:creator" content={meta.twitter_creator} />
                <meta name="twitter:image" content={meta.twitter_image} />
                <link
                    rel="icon"
                    href={`${basePath}/android-chrome-192x192.png`}
                    key="favicon"
                />
                <link
                    rel="icon"
                    href={`${basePath}/android-chrome-512x512.png`}
                    key="favicon"
                />
                <link
                    rel="apple-touch-icon"
                    href={`${basePath}/apple-touch-icon.png`}
                    key="apple"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${basePath}/favicon-16x16.png`}
                    key="icon16"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={`${basePath}/favicon-32x32.png`}
                    key="icon32"
                />
                <link
                    rel="icon"
                    href={`${basePath}/favicon.ico`}
                    key="favicon"
                />
                <title>{meta.title}</title>{' '}
            </Head>
            <NextSeo
                title={meta.title}
                description={meta.description}
                canonical={meta.canonical}
                openGraph={{
                    title: meta.title,
                    description: meta.description,
                    url: meta.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    )
}
