
import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { 
    BRIDE_NAME, 
    GROOM_NAME, 
    WEDDING_DATE_DISPLAY, 
    WEDDING_DATE_TARGET, 
    HERO_IMAGE_URL,
    STORY_YEARS, 
    STORY_MEETING_PLACE,
    RECEPTION_TIME,
    RECEPTION_VENUE,
    RECEPTION_ADDRESS,
    DRESS_CODE,
    DRESS_CODE_DESCRIPTION,
    GALLERY_IMAGES,
    RSVP_DEADLINE,
    RSVP_FORM_URL,
    CURRENT_YEAR
} from './constants';

const App: React.FC = () => {
    return (
        <>
            <Hero
                brideName={BRIDE_NAME}
                groomName={GROOM_NAME}
                weddingDateString={WEDDING_DATE_DISPLAY}
                weddingTargetDate={WEDDING_DATE_TARGET}
                heroImageUrl={HERO_IMAGE_URL}
            />
            <main className="max-w-4xl mx-auto px-5">
                <OurStory
                    yearsTogether={STORY_YEARS}
                    meetingPlace={STORY_MEETING_PLACE}
                />
                <EventDetails
                    receptionTime={RECEPTION_TIME}
                    receptionVenue={RECEPTION_VENUE}
                    receptionAddress={RECEPTION_ADDRESS}
                    dressCode={DRESS_CODE}
                    dressCodeDescription={DRESS_CODE_DESCRIPTION}
                />
                <Gallery images={GALLERY_IMAGES} />
                <RSVP
                    deadline={RSVP_DEADLINE}
                    formUrl={RSVP_FORM_URL}
                />
            </main>
            <Footer
                brideName={BRIDE_NAME}
                groomName={GROOM_NAME}
                year={CURRENT_YEAR}
            />
        </>
    );
};

export default App;
