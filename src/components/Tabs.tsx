import * as React from 'react';

export interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
  activeTab: number;
  onTabChange: (index: number) => void;
  vertical?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, vertical }) => (
  <div className={`tabs${vertical ? ' tabs-vertical' : ''}`}>
    <div className="tab-list">
      {tabs.map((tab, idx) => (
        <button key={tab.label} className={`tab${activeTab === idx ? ' tab-active' : ''}`} onClick={() => onTabChange(idx)}>
          {tab.label}
        </button>
      ))}
    </div>
    <div className="tab-content">{tabs[activeTab]?.content}</div>
  </div>
);
