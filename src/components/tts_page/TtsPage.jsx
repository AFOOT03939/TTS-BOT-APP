import '../tts_page/TtsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { getAudio } from './TtsPage.Service';

export function TtsPage(){
    const [text, setText] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);

    //console.log(text);

    const handlePlay = async () => {
        try{
            setIsPlaying(true);

            var audioBlob = await getAudio(text);

            const audioUrl = URL.createObjectURL(audioBlob);

            const audio = new Audio(audioUrl);

            audio.onended = () => {
                setIsPlaying(false);
                URL.revokeObjectURL(audioUrl);
            };

            audio.onerror = () => {
                setIsPlaying(false);
                URL.revokeObjectURL(audioUrl);
            };

            await audio.play();

        } catch (error) {
            console.error("Error reproduciendo audio:", error);
            setIsPlaying(false);
        }
    }

    return (
        <div className='mainTtsContainer'>
            <section className='avatarContainer'>
                {isPlaying ?
                    <video
                        className="avatar"
                        src="/assets/Victor2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    /> : 
                    <img className='avatar' src="/assets/Victor.png" alt="Lord AFOOT himself" />
                }
            </section>

            <section className='dividerContainer'>
                <div className='divider'>

                </div>
            </section>

            <section className='ttsContainer'>
                <div className='centerTtsContainer'>
                    <div className='titleContainer'>
                        <h1 id="victor">VICTOR</h1>
                        <h1 id="tts">TTS</h1>
                    </div>
                    <div className='inputsContainer'>
                        <input 
                            onChange={(e) => setText(e.target.value)} 
                            value={text} 
                            className='input' 
                            type="text" 
                            placeholder='Introduce un texto...'
                        />
                        <button onClick={handlePlay} className='playBtn'><FontAwesomeIcon icon={faPlay} /></button>
                    </div>
                </div>
            </section>
        </div>
      )
}