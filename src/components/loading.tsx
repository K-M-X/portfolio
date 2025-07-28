"use client";

import React from 'react';

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 dark:bg-dark0">
      <div className="w-12 h-12 bg-green-600 rounded-full animate-heartbeat"/>
    </div>
  );
}