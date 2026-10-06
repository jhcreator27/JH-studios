import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MenuItem } from '../../types';
import { Check, ArrowUp, ArrowDown } from 'lucide-react';

export const AdminMenu: React.FC = () => {
  const { menuItems, updateMenuItems } = useApp();
  const [items, setItems] = useState<MenuItem[]>(menuItems);

  const handleToggleVisibility = (id: string) => {
    const updated = items.map(i => i.id === id ? { ...i, visible: !i.visible } : i);
    setItems(updated);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIdx];
    newItems[targetIdx] = temp;
    // Update order numbers
    newItems.forEach((item, idx) => { item.order = idx + 1; });
    setItems(newItems);
  };

  const handleSaveMenu = () => {
    updateMenuItems(items);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Menu Principale</h1>
          <p className="text-stone-400 text-sm mt-1">Configura le voci visibili nella barra di navigazione del sito.</p>
        </div>
        <button
          onClick={handleSaveMenu}
          className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Check className="w-4 h-4" />
          <span>Salva Menu</span>
        </button>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden p-6 space-y-4">
        {items.map((item, idx) => (
          <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-stone-950 border border-stone-800">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-stone-500">0{idx + 1}</span>
              <span className="font-semibold text-stone-100 text-sm">{item.label}</span>
              <span className="text-xs text-stone-400 font-mono">({item.path})</span>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-stone-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.visible}
                  onChange={() => handleToggleVisibility(item.id)}
                  className="w-4 h-4 rounded border-stone-800 text-amber-500 focus:ring-amber-400"
                />
                <span>Visibile</span>
              </label>

              <div className="flex items-center gap-1 border-l border-stone-800 pl-3">
                <button
                  onClick={() => handleMove(idx, 'up')}
                  disabled={idx === 0}
                  className="p-1.5 text-stone-400 hover:text-white disabled:opacity-30 rounded-lg hover:bg-stone-900"
                  title="Sposta su"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleMove(idx, 'down')}
                  disabled={idx === items.length - 1}
                  className="p-1.5 text-stone-400 hover:text-white disabled:opacity-30 rounded-lg hover:bg-stone-900"
                  title="Sposta giù"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
