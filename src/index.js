import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader'

const App = React.lazy(() => import('./App'))

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
    ,
    document.querySelector('#root')
);
