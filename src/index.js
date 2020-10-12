import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader/index'

const App = React.lazy(() => import('./App.jsx'))

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
    ,
    document.querySelector('#root')
);
