/*
BogoPricing.jsx
Single-file React component using Tailwind CSS to replicate the provided pricing UI.

How to use:
1. Ensure Tailwind CSS is configured in your React project (create-react-app + Tailwind or Vite + Tailwind).
2. Save this file as src/components/BogoPricing.jsx
3. Import and render <BogoPricing /> in your App.jsx or page.

This component is self-contained and uses Tailwind utility classes. Tweak colors, spacing, or fonts in your Tailwind config to match the original precisely.
*/

import React, { useState } from 'react';

export default function BogoPricing() {
  const [selected, setSelected] = useState('2');

  // Shared options for every unit (same selectors for all units)
  const [sharedOptions, setSharedOptions] = useState({
    one: { size: 'S', colour: 'Black' },
    two: { size: 'S', colour: 'Colour' }
  });

  const updateShared = (which, key, value) => {
    setSharedOptions((prev) => ({ ...prev, [which]: { ...prev[which], [key]: value } }));
  };

  const CardHeader = ({ id, title, badge, price, oldPrice, compact }) => (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name="unit"
          checked={selected === id}
          onChange={() => setSelected(id)}
          className="mt-1 text-[#FF6B82] accent-pink-500"
          aria-labelledby={`title-${id}`}
        />
        <div>
          <div className="flex items-center gap-3">
            <div id={`title-${id}`} className="text-lg font-semibold text-gray-800">{title}</div>
            {badge && (
              <span className="text-xs bg-[#FF6B82] text-white px-2 py-1 rounded">{badge}</span>
            )}
          </div>
          {!compact && <div className="text-sm text-gray-500">Standard Price</div>}
        </div>
      </div>

      <div className="text-right">
        <div className={`text-lg ${id === '2' ? 'font-bold' : 'font-semibold'} text-gray-800`}>{price}</div>
        {oldPrice && <div className="text-sm text-gray-400 line-through">{oldPrice}</div>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-start justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl">
        <h2 className="text-center text-2xl font-bold text-[#FF6B82] mb-6">YAY! It's BOGO</h2>
        <div className="h-px w-full bg-gray-200 mb-6" />

        {/* 1 Unit */}
        <div
          onClick={() => setSelected('1')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected('1'); }}
          className={`border rounded-md mb-5 transition-shadow duration-200 ${selected === '1' ? 'ring-2 ring-[#FF6B82] shadow' : ''}`}
        >
          <div className="p-4">
            <CardHeader id="1" title="1 Unit" badge="10% Off" price="$10.00 USD" oldPrice="$24.00 USD" />
          </div>

          {/* Shared selectors visible when expanded */}
          <div
            className={`px-4 overflow-hidden transition-all duration-300 ${selected === '1' ? 'max-h-[220px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            aria-hidden={selected !== '1'}
          >
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Size</label>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#1</span>
                    <select
                      value={sharedOptions.one.size}
                      onChange={(e) => updateShared('one', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#2</span>
                    <select
                      value={sharedOptions.two.size}
                      onChange={(e) => updateShared('two', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">Colour</label>
                <div className="grid grid-cols-1 gap-3">
                  <select
                    value={sharedOptions.one.colour}
                    onChange={(e) => updateShared('one', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                  </select>

                  <select
                    value={sharedOptions.two.colour}
                    onChange={(e) => updateShared('two', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Colour</option>
                    <option>Black</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Unit (Most Popular) */}
        <div
          onClick={() => setSelected('2')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected('2'); }}
          className={`relative border-2 rounded-lg p-5 mb-5 transition-shadow duration-200 ${selected === '2' ? 'border-[#FF6B82] shadow' : 'border-gray-200 bg-white'}`}
        >
          {/* ribbon */}
          <div className="absolute -top-3 right-4 pointer-events-none">
            <div className="bg-[#FF6B82] text-white text-xs font-semibold px-3 py-1 rounded-t-lg">MOST POPULAR</div>
          </div>

          <CardHeader id="2" title="2 Unit" badge="20% Off" price="$18.00 USD" oldPrice="$24.00 USD" compact />

          {/* Shared selectors visible when expanded */}
          <div
            className={`mt-6 px-5 overflow-hidden transition-all duration-300 ${selected === '2' ? 'max-h-[320px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            aria-hidden={selected !== '2'}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Size</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#1</span>
                    <select
                      value={sharedOptions.one.size}
                      onChange={(e) => updateShared('one', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#2</span>
                    <select
                      value={sharedOptions.two.size}
                      onChange={(e) => updateShared('two', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">Colour</label>
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={sharedOptions.one.colour}
                    onChange={(e) => updateShared('one', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                  </select>

                  <select
                    value={sharedOptions.two.colour}
                    onChange={(e) => updateShared('two', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Colour</option>
                    <option>Black</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Unit */}
        <div
          onClick={() => setSelected('3')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected('3'); }}
          className={`border rounded-md mb-5 transition-shadow duration-200 ${selected === '3' ? 'ring-2 ring-[#FF6B82] shadow' : ''}`}
        >
          <div className="p-4">
            <CardHeader id="3" title="3 Unit" badge="30% Off" price="$24.00 USD" oldPrice="$24.00 USD" />
          </div>

          {/* Shared selectors visible when expanded */}
          <div
            className={`px-4 overflow-hidden transition-all duration-300 ${selected === '3' ? 'max-h-[220px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            aria-hidden={selected !== '3'}
          >
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Size</label>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#1</span>
                    <select
                      value={sharedOptions.one.size}
                      onChange={(e) => updateShared('one', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">#2</span>
                    <select
                      value={sharedOptions.two.size}
                      onChange={(e) => updateShared('two', 'size', e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">Colour</label>
                <div className="grid grid-cols-1 gap-3">
                  <select
                    value={sharedOptions.one.colour}
                    onChange={(e) => updateShared('one', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                  </select>

                  <select
                    value={sharedOptions.two.colour}
                    onChange={(e) => updateShared('two', 'colour', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>Colour</option>
                    <option>Black</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer area */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[#FF6B82] font-medium">Free Delivery</div>
          <div className="text-gray-700 font-semibold">Total : $18.00 USD</div>
        </div>

        <button
          className="w-full bg-[#FF6B82] hover:bg-[#FF6B82] text-white py-3 rounded-lg shadow-md flex items-center justify-center gap-3"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold">Add to Cart</span>
        </button>

        <p className="text-end text-gray-400 italic mt-4 text-sm">@ Powered by Pumper</p>
      </div>
    </div>
  );
}
