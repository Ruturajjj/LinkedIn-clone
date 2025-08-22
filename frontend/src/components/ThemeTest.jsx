import React from 'react';

const ThemeTest = () => {
  return (
    <div className="min-h-screen p-8 space-y-6 bg-base-100">
      <h1 className="text-4xl font-bold text-neutral">LinkedIn Theme Test</h1>
      
      {/* Color Swatches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-primary text-primary-content p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">Primary</h3>
          <p className="text-sm opacity-90">Should be LinkedIn Blue</p>
          <p className="text-xs font-mono">#0A66C2</p>
        </div>
        
        <div className="bg-secondary text-secondary-content p-6 rounded-lg shadow-lg border border-gray-300">
          <h3 className="font-bold text-lg text-black">Secondary</h3>
          <p className="text-sm opacity-90 text-black">Should be White</p>
          <p className="text-xs font-mono text-black">#FFFFFF</p>
        </div>
        
        <div className="bg-accent text-accent-content p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">Accent</h3>
          <p className="text-sm opacity-90">Should be Green</p>
          <p className="text-xs font-mono">#7FC15E</p>
        </div>
        
        <div className="bg-neutral text-neutral-content p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">Neutral</h3>
          <p className="text-sm opacity-90">Should be Black</p>
          <p className="text-xs font-mono">#000000</p>
        </div>
        
        <div className="bg-base-200 p-6 rounded-lg shadow-lg border">
          <h3 className="font-bold text-lg">Base 200</h3>
          <p className="text-sm opacity-90">Lighter shade</p>
          <p className="text-xs font-mono">Auto-generated</p>
        </div>
        
        <div className="bg-base-300 p-6 rounded-lg shadow-lg border">
          <h3 className="font-bold text-lg">Base 300</h3>
          <p className="text-sm opacity-90">Even lighter</p>
          <p className="text-xs font-mono">Auto-generated</p>
        </div>
      </div>

      {/* Button Tests */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Tests</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-accent">Accent Button</button>
          <button className="btn btn-neutral">Neutral Button</button>
          <button className="btn btn-ghost">Ghost Button</button>
          <button className="btn btn-outline btn-primary">Outline Primary</button>
        </div>
      </div>

      {/* Status Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Status Colors</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <button className="btn btn-info">Info</button>
        </div>
      </div>

      {/* Alert Tests */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Alert Tests</h2>
        <div className="alert alert-info">
          <span>Info alert with info color</span>
        </div>
        <div className="alert alert-success">
          <span>Success alert - should be green</span>
        </div>
        <div className="alert alert-warning">
          <span>Warning alert - should be yellow</span>
        </div>
        <div className="alert alert-error">
          <span>Error alert - should be red</span>
        </div>
      </div>

      {/* Debug Information */}
      <div className="bg-base-200 p-6 rounded-lg border">
        <h3 className="font-bold text-xl mb-4">Debug Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Current Theme:</strong>
            <p className="font-mono bg-base-300 p-2 rounded mt-1">
              {document.documentElement.getAttribute('data-theme') || 'No theme set'}
            </p>
          </div>
          <div>
            <strong>Expected Theme:</strong>
            <p className="font-mono bg-base-300 p-2 rounded mt-1">linkedin</p>
          </div>
          <div>
            <strong>HTML Class:</strong>
            <p className="font-mono bg-base-300 p-2 rounded mt-1">
              {document.documentElement.className || 'No classes'}
            </p>
          </div>
          <div>
            <strong>Body Class:</strong>
            <p className="font-mono bg-base-300 p-2 rounded mt-1">
              {document.body.className || 'No classes'}
            </p>
          </div>
        </div>
      </div>

      {/* Color Values Check */}
      <div className="bg-base-200 p-6 rounded-lg border">
        <h3 className="font-bold text-xl mb-4">Expected vs Actual Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold">Expected LinkedIn Colors:</h4>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Primary: #0A66C2 (LinkedIn Blue)</li>
              <li>Secondary: #FFFFFF (White)</li>
              <li>Accent: #7FC15E (Green)</li>
              <li>Base-100: #badbff (Light Blue)</li>
              <li>Neutral: #000000 (Black)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">What you should see:</h4>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Primary box: LinkedIn blue background</li>
              <li>Secondary box: White background</li>
              <li>Accent box: Green background</li>
              <li>Overall page: Light blue background</li>
              <li>Buttons: LinkedIn blue for primary</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-warning/20 border border-warning p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-2">🔍 What to Check:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Primary box color:</strong> If it's LinkedIn blue (#0A66C2), your theme is working!</li>
          <li><strong>Background color:</strong> Should be light blue (#badbff)</li>
          <li><strong>If colors look wrong:</strong> Your theme isn't applying correctly</li>
          <li><strong>If colors are default DaisyUI:</strong> Theme configuration issue</li>
          <li><strong>Check browser console:</strong> Look for any CSS or JavaScript errors</li>
        </ol>
      </div>
    </div>
  );
};

export default ThemeTest;