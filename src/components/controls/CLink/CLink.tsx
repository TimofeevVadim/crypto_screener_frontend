import * as React from 'react';
import Link from '@mui/material/Link';

import './CLink.scss';

export default function CLink({ target, title, href, rel }) {
  return (
    <Link className="c-link" href={href} target={target} rel={rel} underline="hover">
      {title}
    </Link>
  );
}
