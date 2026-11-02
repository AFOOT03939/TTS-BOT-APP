import '../main_layout/MainLayout.css'
import { TtsPage } from '../tts_page/TtsPage'

export function MainLayout(){
    return (
        <div className="mainLayoutContainer">
            <header className="layoutHeader">
            </header>

            <section className="layoutBody">
                <TtsPage/>
            </section>

            <footer className="layoutFooter">
            </footer>
        </div>
      )
}