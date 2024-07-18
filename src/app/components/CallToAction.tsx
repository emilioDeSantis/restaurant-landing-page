import Link from 'next/link';
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section style={{ paddingInline: '1rem', textAlign: 'center', marginTop: '1rem', paddingBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '2rem', }}>{`Ready to Boost Your Restaurant's Online Presence?`}</h2>
      <Link href={'/contact'} style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer'
      }}>
        Request a Free Consultation
      </Link>
    </section>
  );
};

export default CallToAction;