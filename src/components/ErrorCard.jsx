// import React from 'react';
// import css from 'App.module.css';

// const ErrorCard = ({ children }) => {
//   return (
//     <div className={css.errorBadge}>
//       <h2>Error</h2>
//       <p>{children}</p>
//     </div>
//   );
// };

// export default ErrorCard;

import React from 'react';
import css from './ErrorCard.module.css';

const ErrorCard = ({ children }) => {
  return (
    <div className={css.errorBadge}>
      <h2>Error</h2>
      <p>{children}</p>
    </div>
  );
};

export default ErrorCard;
