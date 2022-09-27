import Link from "next/link";
import Container from "./container"

const TopNav = () => {
    return (
        <Container>
            <h2 className="">
                <Link href="">
                    <a className="hover:underline">Division A</a>
                </Link>
                <Link href="">
                    <a className="hover:underline">Division B</a>
                </Link>
            </h2>
        </Container>)
}
export default TopNav