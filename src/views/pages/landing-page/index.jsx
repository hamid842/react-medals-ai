import LandingPageWrapper from "./LandingPageWrapper";
import Header from "./Header";
import LandingContent from './LandingContent'

// ==============================|| LANDING PAGE ||============================== //

const LandingPage = ()=>{
    return (
        <LandingPageWrapper>
            <Header/>
            <LandingContent />
        </LandingPageWrapper>
    )
}

export default LandingPage;