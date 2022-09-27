import Image from "next/image";
import Container from "./container"

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="py-4 flex flex-col lg:flex-row items-center">
                    <h3 className="text-xs font-bold tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
                        Simple Careers MarkdownCareers.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://eosnetwork.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by{' '}
                            <span>
                                <Image src="/footer-logo.gif" alt="ENF Logo" width={72} height={16}/>
                            </span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>)
}
export default Footer