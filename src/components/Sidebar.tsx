import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  hasNew?: boolean;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'news',
    label: 'Новости',
    children: [
      { id: 'news-updates', label: 'Обновления' },
      { id: 'news-events', label: 'События', hasNew: true },
      { id: 'news-maintenance', label: 'Техработы' },
    ]
  },
  {
    id: 'about',
    label: 'Об игре',
    children: [
      { id: 'about-game', label: 'О игре' },
      { id: 'about-world', label: 'Мир игры' },
      { id: 'about-classes', label: 'Классы' },
    ]
  },
  {
    id: 'info',
    label: 'Информация',
    children: [
      { id: 'info-guide', label: 'Руководства' },
      { id: 'info-faq', label: 'FAQ' },
      { id: 'info-rules', label: 'Правила' },
    ]
  },
  {
    id: 'creatures',
    label: 'Существа',
    children: [
      { id: 'creatures-pets', label: 'Питомцы' },
      { id: 'creatures-monsters', label: 'Монстры' },
      { id: 'creatures-bosses', label: 'Боссы' },
    ]
  },
  {
    id: 'gallery',
    label: 'Галерея',
  },
  {
    id: 'videos',
    label: 'Видео',
  },
];

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['about', 'news']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeSection === item.id;

    return (
      <div key={item.id} className={level > 0 ? 'ml-4' : ''}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            } else {
              setActiveSection(item.id);
            }
          }}
          className={`w-full flex items-center justify-between py-2 px-3 rounded transition-colors ${
            isActive 
              ? 'bg-accent/20 text-accent font-bold' 
              : 'text-foreground hover:bg-muted hover:text-accent'
          }`}
        >
          <span className="flex items-center gap-2 text-shadow-dark">
            {level === 0 && hasChildren && (
              <Icon 
                name={isExpanded ? 'ChevronDown' : 'ChevronRight'} 
                size={16} 
              />
            )}
            {level > 0 && <span className="text-accent">•</span>}
            {item.label}
            {item.hasNew && (
              <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded font-bold">
                NEW
              </span>
            )}
          </span>
        </button>
        
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4">
      <nav className="space-y-1">
        {menuItems.map(item => renderMenuItem(item))}
      </nav>
    </aside>
  );
};

export default Sidebar;
