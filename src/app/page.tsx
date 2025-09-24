'use client';
import { useState } from 'react';

interface SourceItem {
  id: number;
  icon: string;
  name: string;
  initialValue: string;
  initialSuffix: string;
  rateValue: string;
  rateSuffix: string;
}

interface OutputItem {
  id: number;
  icon: string;
  name: string;
  initialValue: string;
  initialSuffix: string;
  rateValue: string;
  rateSuffix: string;
}

export default function Home() {
  const [sources, setSources] = useState<SourceItem[]>([]);
  const [outputs, setOutputs] = useState<OutputItem[]>([]);

  const suffixes = ['', 'K', 'M', 'B', 'T', 'AA', 'BB', 'CC'];
  const sampleIcons = ['coin.png', 'click.png', 'building.png', 'upgrade.png', 'timer.png', 'star.png'];

  const addSource = () => {
    const newSource: SourceItem = {
      id: Date.now(),
      icon: sampleIcons[0],
      name: '',
      initialValue: '0',
      initialSuffix: '',
      rateValue: '1',
      rateSuffix: ''
    };
    setSources([...sources, newSource]);
  };

  const addOutput = () => {
    const newOutput: OutputItem = {
      id: Date.now(),
      icon: sampleIcons[0],
      name: '',
      initialValue: '0',
      initialSuffix: '',
      rateValue: '1',
      rateSuffix: ''
    };
    setOutputs([...outputs, newOutput]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-3xl font-bold">Incremental Game Design Tool</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 p-6">
        {/* Settings Frame */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Sources Column */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-red-400">Sources</h3>
              <div className="bg-red-950/20 border border-red-800/30 rounded p-4 min-h-48">
                {/* Sub-column headers */}
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-400 mb-2 border-b border-gray-600 pb-1">
                  <div>Icon</div>
                  <div>Name</div>
                  <div>Initial</div>
                  <div>Rate</div>
                </div>

                {/* Source rows */}
                <div className="space-y-2 mb-4">
                  {sources.map((source) => (
                    <div key={source.id} className="grid grid-cols-4 gap-2 text-xs">
                      {/* Icon selector */}
                      <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs">
                        {sampleIcons.map((icon) => (
                          <option key={icon} value={icon}>📎 {icon.replace('.png', '')}</option>
                        ))}
                      </select>

                      {/* Name input */}
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-xs"
                      />

                      {/* Initial value + suffix */}
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="0"
                          className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-12"
                        />
                        <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-16">
                          {suffixes.map((suffix) => (
                            <option key={suffix} value={suffix}>{suffix || '1'}</option>
                          ))}
                        </select>
                      </div>

                      {/* Rate value + suffix */}
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="1"
                          className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-12"
                        />
                        <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-16">
                          {suffixes.map((suffix) => (
                            <option key={suffix} value={suffix}>{suffix || '1'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add button */}
                <button
                  onClick={addSource}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded transition-colors"
                >
                  + Add Source
                </button>
              </div>
            </div>

            {/* Outputs Column */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">Outputs</h3>
              <div className="bg-green-950/20 border border-green-800/30 rounded p-4 min-h-48">
                {/* Sub-column headers */}
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-400 mb-2 border-b border-gray-600 pb-1">
                  <div>Icon</div>
                  <div>Name</div>
                  <div>Initial</div>
                  <div>Rate</div>
                </div>

                {/* Output rows */}
                <div className="space-y-2 mb-4">
                  {outputs.map((output) => (
                    <div key={output.id} className="grid grid-cols-4 gap-2 text-xs">
                      {/* Icon selector */}
                      <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs">
                        {sampleIcons.map((icon) => (
                          <option key={icon} value={icon}>📎 {icon.replace('.png', '')}</option>
                        ))}
                      </select>

                      {/* Name input */}
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-xs"
                      />

                      {/* Initial value + suffix */}
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="0"
                          className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-12"
                        />
                        <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-16">
                          {suffixes.map((suffix) => (
                            <option key={suffix} value={suffix}>{suffix || '1'}</option>
                          ))}
                        </select>
                      </div>

                      {/* Rate value + suffix */}
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="1"
                          className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-12"
                        />
                        <select className="bg-gray-700 border border-gray-600 rounded px-1 py-1 text-white text-xs w-16">
                          {suffixes.map((suffix) => (
                            <option key={suffix} value={suffix}>{suffix || '1'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add button */}
                <button
                  onClick={addOutput}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-3 rounded transition-colors"
                >
                  + Add Output
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Frame */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="bg-gray-800 border border-gray-600 rounded p-4 h-64 flex items-center justify-center">
            <p className="text-gray-500">Graph will be displayed here</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-400 text-sm">
        <div className="flex flex-col gap-2">
          <div>
            <a
              href="https://github.com/mortbal/igdt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <span className="ml-2 text-gray-400">- This is an open source project. Contributions are welcome!</span>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/morbal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
            <span className="ml-2 text-gray-400">- Hit me up, I might be open to work!</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
