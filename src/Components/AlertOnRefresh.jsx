import React, { useEffect } from 'react';

const AlertOnRefresh = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      alert('hello');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div>This is your React component.</div>;
};

export default AlertOnRefresh;