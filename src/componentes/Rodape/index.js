import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/felipe-emanuel-b417591aa/" target="_blank" rel='noreferrer'>
                    <img src="/imagens/LinkedIn.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/FelipeEmanuel" target="_blank" rel='noreferrer'>
                    <img src="/imagens/GitHub.png" alt="" />
                </a>
            </li>
        </ul>
        </section>
        <section className='middle'>
            <img src="/imagens/logo.png" alt="" />
            <h3>NBA Rosters</h3>
        </section>
        <section>
        <p>
            Desenvolvido por Felipe Emanuel
        </p>
        </section>
    </footer>)
}

export default Rodape