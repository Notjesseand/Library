import React from 'react'
import Interests from '@/components/interests';
export default function page() {
  return (
    <div className="min-h-screen  text-4xl font-custom pb-20">
      <p className="px-8 sm:px-16   pt-10">Choose Interests</p>
      <Interests/>
      {/* <Interests/> */}
    </div>
  );
}
