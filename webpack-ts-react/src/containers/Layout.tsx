import React, { useState } from "react";

import { IntroductionText } from "./IntroductionText";
import { Gemination } from "./Gemination";

export const Layout: React.FC = () => {
    const [verb, setVerb] = useState("");

    return (
        <main className='main-wrapper'>
            <IntroductionText submitVerb={setVerb} />
            {verb && <Gemination letters={verb.split("")} />}
        </main>
    );
};
