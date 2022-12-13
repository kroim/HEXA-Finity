import { PageMeta } from "components/Layout/Page";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";

const ReferralPage = styled.div`
    min-height: calc(100vh-64px);
`
const Referral = () => {
    return (
        <>
        <PageMeta />
        <ReferralPage>
            <HeroSection />
        </ReferralPage>
        </>
    )
}
export default Referral;