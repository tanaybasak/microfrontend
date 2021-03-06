import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

     console.log(onSignIn);

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                // update browser history
                const pathName = history.location;
                if (pathName !== nextPathname)
                    history.push(nextPathname);
            },
            onSignIn
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
}