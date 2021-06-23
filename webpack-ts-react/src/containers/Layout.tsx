import React, { useState } from "react";

import { IntroductionText } from "./IntroductionText";

export const Layout: React.FC = () => {
    const [verb, setVerb] = useState("");

    return (
        <main className='main-wrapper'>
            <IntroductionText submitVerb={setVerb} />
            <p>{verb}</p>
        </main>
    );
};
