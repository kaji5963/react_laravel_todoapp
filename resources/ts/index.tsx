import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";

import App from "./App";

// react v17での記載
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )

// react v1８での記載
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);