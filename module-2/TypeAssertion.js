"use strict";
{
    //
    // type assertion
    let anything;
    anything = 'Next Level developer';
    // ( anything as string).
    const KgToGram = (value) => {
        if (value === "string") {
            const convertNumber = parseInt(value) * 1000;
            return `Kg to gram ${convertNumber}`;
        }
        else if (typeof value === 'number') {
            return (value * 1000);
        }
        else {
            return undefined;
        }
    };
    const result = KgToGram(10);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
