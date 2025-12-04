import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/24a323a8-04ae-4aee-83ae-070dfc266fbf/files/b5ff16e8-ba59-41fa-af26-d5e829861bdb.jpg)'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            
            <div className="lg:col-span-6">
              <MainContent activeSection={activeSection} />
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 space-y-4">
                <h3 className="text-xl font-bold text-accent glow-text mb-4">Магазин</h3>
                
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="border-b border-border pb-3 last:border-0">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded flex items-center justify-center text-2xl">
                        🎁
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">Игровой предмет</p>
                        <p className="text-xs text-muted-foreground line-through">1000 GXP</p>
                        <p className="text-accent font-bold">800 GXP</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-bold py-2 px-4 rounded transition-colors">
                  Перейти в магазин
                </button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-secondary/20 border border-secondary/40 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-secondary mb-2">Поддержка</h4>
                  <p className="text-sm text-muted-foreground">Нужна помощь? Свяжитесь с нами</p>
                </div>
                
                <div className="bg-primary/20 border border-primary/40 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-primary mb-2">Wiki</h4>
                  <p className="text-sm text-muted-foreground">База знаний игры</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;