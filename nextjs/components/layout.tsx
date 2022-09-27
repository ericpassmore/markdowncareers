import Footer from './footer'
import Meta from './meta'
import TopNav from './topnav'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props ) => {
    return (
        <>
            <Meta />
            <TopNav />
            <div className="">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
export default Layout