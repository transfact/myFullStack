import ClassStateCompo from '../component_230920/ClassStateCompo';
import ClassColorStateCompo from '../component_230920/ClassColorStateCompo';
import ClassButtonStateCompo from '../component_230920/ClassButtonStateCompo';
import ClassFormStateCompo from '../component_230920/ClassFormStateCompo';
import FuncCounter from '../component_230920/FuncCounter';
import React from 'react';

function App230920() {
    return (
        <>
            {/* <ClassStateCompo></ClassStateCompo>
            <ClassColorStateCompo></ClassColorStateCompo>
            <ClassButtonStateCompo></ClassButtonStateCompo> */}
            <ClassFormStateCompo></ClassFormStateCompo>
            {/* <FuncCounter></FuncCounter> */}
        </>
    );
}

export default React.memo(App230920);
